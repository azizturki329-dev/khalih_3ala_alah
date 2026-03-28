const form = document.querySelector("form");
const btn = document.querySelector("button");

// Effet de survol
btn.addEventListener("mouseover", () => {
    btn.style.backgroundColor = "lightblue";
});

btn.addEventListener("mouseout", () => {
    btn.style.backgroundColor = "#007bff";
});

// Déterminer la page
const isLogin = document.title.includes("Login");
const isSignup = document.title.includes("Sign Up");

// Validation du formulaire
form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (isSignup) {
        // Récupération des valeurs
        const username = form.querySelector('input[name="username"]').value;
        const email = form.querySelector('input[type="email"]').value;
        const password = form.querySelector('input[name="firstpwd"]').value;
        const confirmPassword = form.querySelector('input[name="pwd"]').value;

        // 1. Vérification des champs vides
        if (username === "" || email === "" || password === "" || confirmPassword === "") {
            alert("Veuillez remplir tous les champs !");
            return;
        }

        // 2. Vérification de la longueur
        if (password.length < 6) {
            alert("Le mot de passe doit contenir au moins 6 caractères !");
            return;
        }

        // 3. Vérification de la correspondance
        if (password !== confirmPassword) {
            alert("Les mots de passe ne sont pas identiques.");
            return;
        }

        // Stocker l'utilisateur
        let users = JSON.parse(localStorage.getItem('users')) || [];
        users.push({username, email, password});
        localStorage.setItem('users', JSON.stringify(users));

        // Si tout est valide
        alert(`Inscription réussie !\nEmail : ${email}`);

        // Rediriger vers la page de connexion
        window.location.href = 'login.html';
    } else if (isLogin) {
        const email = form.querySelector('input[name="email"]').value;
        const password = form.querySelector('input[name="password"]').value;

        if (email === "" || password === "") {
            alert("Veuillez remplir tous les champs !");
            return;
        }

        let users = JSON.parse(localStorage.getItem('users')) || [];
        const user = users.find(u => u.email === email && u.password === password);

        if (user) {
            localStorage.setItem('userName', user.username);
            window.location.href = 'accueil3.html';
        } else {
            alert('Email ou mot de passe incorrect');
        }
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const welcomeArea = document.getElementById('welcomeMessage');
    const authLinks = document.getElementById('auth-links');
    const logoutBtn = document.getElementById('logoutBtn');
    
    // Récupérer le nom depuis LocalStorage
    const storedName = localStorage.getItem('userName');

    if (storedName && welcomeArea) {
        // Afficher le message de bienvenue
        welcomeArea.innerText = "Bienvenue, " + storedName;
        
        // Masquer Connexion/Inscription et afficher Déconnexion
        if (authLinks) authLinks.style.display = 'none';
        if (logoutBtn) logoutBtn.style.display = 'inline-block';
    }

    // Gestion du Logout
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function() {
            localStorage.removeItem('userName');
            window.location.reload();
        });
    }
});
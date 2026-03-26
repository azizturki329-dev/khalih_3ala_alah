const form = document.querySelector("form");
const btn = document.querySelector("button");

// Effet de survol
btn.addEventListener("mouseover", () => {
    btn.style.backgroundColor = "lightblue";
});

btn.addEventListener("mouseout", () => {
    btn.style.backgroundColor = "";
});

// Validation du formulaire
form.addEventListener("submit", (event) => {
    event.preventDefault();

    // Récupération des valeurs
    const email = form.querySelector('input[type="email"]').value;
    const password = form.querySelector('input[name="firstpwd"]').value;
    const confirmPassword = form.querySelector('input[name="pwd"]').value;

    // 1. Vérification des champs vides
    if (email === "" || password === "" || confirmPassword === "") {
        alert("Veuillez remplir tous les champs !");
        return;
    }

    // 2. Vérification de la longueur
    if (password.length < 6) {
        alert("Le mot de passe doit contenir au moins 6 caractères !");
        return;
    }

    // 3. Vérification de la correspondance (Le point bloquant actuel)
    if (password !== confirmPassword) {
        alert("Les mots de passe ne sont pas identiques.");
        return;
    }

    // Si tout est valide
    alert(`Inscription réussie !\nEmail : ${email}`);
    
    // Nettoyage et message de succès
    form.reset();
    const successMsg = document.createElement("p");
    successMsg.textContent = `Succès ! Formulaire envoyé pour l'adresse ${email}.`;
    successMsg.style.color = "green";
    successMsg.style.marginTop = "10px";
    form.appendChild(successMsg);
});
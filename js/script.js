const form = document.querySelector("form");
const btn = document.querySelector("button");

// Animation hover du bouton
btn.addEventListener("mouseover", () => {
    btn.style.backgroundColor = "lightblue";
});
btn.addEventListener("mouseout", () => {
    btn.style.backgroundColor = "";
});

// Gestion du submit
form.addEventListener("submit", (event) => {
    event.preventDefault(); // Empêche l'envoi du formulaire

    const email = form.querySelector('input[type="email"]').value;
    const password = form.querySelector('input[type="password"]').value;

    // Vérifications
    if (email === "" || password === "") {
        alert("Veuillez remplir tous les champs !");
        return;
    }

    if (password.length < 6) {
        alert("Le mot de passe doit contenir au moins 6 caractères !");
        return;
    }

    // Message de bienvenue
    alert(`Bienvenue !\nEmail : ${email}`);

    // Réinitialiser le formulaire
    form.reset();
});

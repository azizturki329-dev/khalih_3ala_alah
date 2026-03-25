const form = document.querySelector("form");
const btn = document.querySelector("button");

// Hover effect sur le bouton
btn.addEventListener("mouseover", () => {
    btn.style.backgroundColor = "lightblue";
});
btn.addEventListener("mouseout", () => {
    btn.style.backgroundColor = "";
});

// Gestion du submit
form.addEventListener("submit", (event) => {
    event.preventDefault();

    const email = form.querySelector('input[type="email"]').value;
    const password = form.querySelector('input[type="password"]').value;

    // Validation des champs
    if (email === "" || password === "") {
        alert("Veuillez remplir tous les champs !");
        return;
    }

    if (password.length < 6) {
        alert("Le mot de passe doit contenir au moins 6 caractères !");
        return;
    }

    // Message d'alerte
    alert(`Bienvenue !\nEmail : ${email}`);

    // Reset du formulaire
    form.reset();

    // Message de succès
    const successMsg = document.createElement("p");
    successMsg.textContent = `Bienvenue ${email} ! Formulaire envoyé avec succès.`;
    successMsg.style.color = "green";
    form.appendChild(successMsg);
});
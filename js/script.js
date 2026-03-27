const form = document.querySelector("form");

if (form) {
    const btn = form.querySelector("button");

    btn.addEventListener("mouseover", () => { btn.style.backgroundColor = "lightblue"; });
    btn.addEventListener("mouseout", () => { btn.style.backgroundColor = "initial"; });

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const email = form.querySelector('input[type="email"]').value;
        const inputMotDePasse = form.querySelector('input[type="password"]');
        const motDePasse = inputMotDePasse ? inputMotDePasse.value : "";
        const inputConfirme = form.querySelector('input[name="pwd"]');
        const confirmeMotDePasse = inputConfirme ? inputConfirme.value : "";

        if (!email || !motDePasse || (inputConfirme && !confirmeMotDePasse)) {
            alert("Veuillez remplir tous les champs !");
            return;
        }

        if (motDePasse.length < 6) {
            alert("Le mot de passe doit contenir au moins 6 caractères !");
            return;
        }

        if (inputConfirme && motDePasse !== confirmeMotDePasse) {
            alert("Les mots de passe ne sont pas identiques.");
            return;
        }

        alert(`Inscription réussie !\nEmail : ${email}`);
        form.reset();
        window.location.href ="accueil3.html"

        if (!form.querySelector(".message-succes")) {
            const messageSucces = document.createElement("p");
            messageSucces.textContent = `Succès ! Formulaire envoyé pour l'adresse ${email}.`;
            messageSucces.style.color = "green";
            messageSucces.style.marginTop = "10px";
            messageSucces.classList.add("message-succes");
            form.appendChild(messageSucces);
        }
    });
}
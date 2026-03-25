
const form = document.querySelector("form");
const btn = document.querySelector("button");  
form.addEventListener("submit", function(event) {
    event.preventDefault(); 
btn.addEventListener("mouseover", function(){
    btn.style.backgroundColor = "lightblue";
});
btn.addEventListener("mouseout", function(){
    btn.style.backgroundColor = "";
});

    const email = form.querySelector('input[type="email"]').value;
    const password = form.querySelector('input[type="password"]').value;


    if (email === "" || password === "") {
        alert("Veuillez remplir tous les champs !");
        return;
    }


    if (password.length < 6) {
        alert("Le mot de passe doit contenir au moins 6 caractères !");
        return;
    }


    alert(`Bienvenue !\nEmail : ${email}`);


    form.reset();
    const btn = document.querySelector("button");
btn.addEventListener("mouseover", function(){
    btn.style.backgroundColor = "lightblue";
});
btn.addEventListener("mouseout", function(){
    btn.style.backgroundColor = "";
});

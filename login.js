function login() {
    var mail = document.getElementById("email").value
    var pass = document.getElementById("senha").value
    if (mail.toLowerCase() === "thiago@basesocial.org" && pass === "base@2022") { alert("login realizado com sucesso") }
    else (alert("erro no login. por favor confira seu e-mail e senha e tente novamente!"))
}
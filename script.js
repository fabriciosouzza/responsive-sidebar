const buttonDashboard = document.querySelector(".dashboard")
const buttonPets = document.querySelector('.pets')
const buttonClientes = document.querySelector('.clientes')
const buttonVets = document.querySelector('.vets')
const buttonAjustes = document.querySelector('.ajustes')

const textoConteudoPrincipal = document.getElementById("section_title")

buttonDashboard.onclick = () => {
    textoConteudoPrincipal.textContent = "Dashboard"
}

buttonPets.onclick = () => {
    textoConteudoPrincipal.textContent = "Pets"
}

buttonClientes.onclick = () => {
    textoConteudoPrincipal.textContent = "Clientes"
}

buttonVets.onclick = () => {
    textoConteudoPrincipal.textContent = "Vets"
}

buttonAjustes.onclick = () => {
    textoConteudoPrincipal.textContent = "Ajustes"
}



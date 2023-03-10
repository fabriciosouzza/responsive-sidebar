const buttonSearch = document.querySelector('.buscar')

const buttonDashboard = document.querySelector(".dashboard")

const buttonPets = document.querySelector('.pets')

const buttonClients = document.querySelector('.clientes')

const buttonVets = document.querySelector('.vets')

const buttonConfig = document.querySelector('.ajustes')



const textMainContent = document.getElementById("section_title")

const optionsButton = document.querySelectorAll('.btn')


buttonSearch.onclick = () => {
    textMainContent.textContent = "Buscar"
    for (let i = 0; i < optionsButton.length; i++) {
        optionsButton[i].style.backgroundColor = "#18C29C"
        optionsButton[i].classList.add("btn")
    }
    buttonSearch.style.backgroundColor = "#8ED7C6"
    buttonSearch.classList.remove("btn");
}

buttonDashboard.onclick = () => {
    textMainContent.textContent = "Dashboard"
    for (let i = 0; i < optionsButton.length; i++) {
        optionsButton[i].style.backgroundColor = "#18C29C"
        optionsButton[i].classList.add("btn")
    }
    buttonDashboard.style.backgroundColor = "#8ED7C6"
    buttonDashboard.classList.remove("btn");
}

buttonPets.onclick = () => {
    textMainContent.textContent = "Pets"
    for (let i = 0; i < optionsButton.length; i++) {
        optionsButton[i].style.backgroundColor = "#18C29C"
        optionsButton[i].classList.add("btn")
    }
    buttonPets.style.backgroundColor = "#8ED7C6"
    buttonPets.classList.remove("btn");
}

buttonClients.onclick = () => {
    textMainContent.textContent = "Clientes"
    for (let i = 0; i < optionsButton.length; i++) {
        optionsButton[i].style.backgroundColor = "#18C29C"
        optionsButton[i].classList.add("btn")
    }
    buttonClients.style.backgroundColor = "#8ED7C6"
    buttonClients.classList.remove("btn");
}

buttonVets.onclick = () => {
    textMainContent.textContent = "Vets"
    for (let i = 0; i < optionsButton.length; i++) {
        optionsButton[i].style.backgroundColor = "#18C29C"
        optionsButton[i].classList.add("btn")
    }
    buttonVets.style.backgroundColor = "#8ED7C6"
    buttonVets.classList.remove("btn");
}

buttonConfig.onclick = () => {
    textMainContent.textContent = "Ajustes"
    for (let i = 0; i < optionsButton.length; i++) {
        optionsButton[i].style.backgroundColor = "#18C29C"
        optionsButton[i].classList.add("btn")
    }
    buttonConfig.style.backgroundColor = "#8ED7C6"
    buttonConfig.classList.remove("btn");
}


const collapseButton = document.querySelector('#collaspeBtn')

collapseButton.onclick = () => {
    
}



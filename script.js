const buttonSearch = document.querySelector('.search')

const buttonDashboard = document.querySelector(".dashboard")

const buttonPets = document.querySelector('.pets')

const buttonClients = document.querySelector('.clients')

const buttonVets = document.querySelector('.vets')

const buttonConfig = document.querySelector('.settings')

const textMainContent = document.getElementById("section_title")

const optionsButton = document.querySelectorAll('.btn')


buttonSearch.onclick = () => {
    textMainContent.textContent = "Search"
    for (let i = 0; i < optionsButton.length; i++) {
        optionsButton[i].style.backgroundColor = "#18C29C"
        optionsButton[i].classList.add("btn")
    }
    if (!submenuToggle.classList.contains("enable")) {
        changeSubMenuOFF()     
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
    if (!submenuToggle.classList.contains("enable")) {
        changeSubMenuOFF()     
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
    changeSubMenuOFF()
    buttonPets.style.backgroundColor = "#8ED7C6"
    buttonPets.classList.remove("btn");
}

buttonClients.onclick = () => {
    textMainContent.textContent = "Clients"
    for (let i = 0; i < optionsButton.length; i++) {
        optionsButton[i].style.backgroundColor = "#18C29C"
        optionsButton[i].classList.add("btn")
    }
    if (!submenuToggle.classList.contains("enable")) {
        changeSubMenuOFF()     
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

    if (!submenuToggle.classList.contains("enable")) {
        changeSubMenuOFF()     
    }
    buttonVets.style.backgroundColor = "#8ED7C6"
    buttonVets.classList.remove("btn");
}

buttonConfig.onclick = () => {
    textMainContent.textContent = "Settings"
    for (let i = 0; i < optionsButton.length; i++) {
        optionsButton[i].style.backgroundColor = "#18C29C"
        optionsButton[i].classList.add("btn")
    }

    if (submenuToggle.classList.contains("enable") && collapseButton.classList.contains("enable")) {
        changeSubMenuON()     
    } else {
        changeSubMenuOFF()
    }

    buttonConfig.style.backgroundColor = "#8ED7C6"
    buttonConfig.classList.remove("btn");
}

//////////////////////////////////////////////////////////////// COLLAPSE //////////////////////////////////////////////////////////////////
const collapseButton = document.querySelector('.collaspeBtn')
const menuText = document.querySelectorAll('.side_text')
const imgLogo = document.querySelector('#logoimg')
const userImg = document.querySelector('#imgout1')
const userInfo = document.querySelector('.user_text')
const sidebarPadding = document.querySelector('.sidebar')
const logoutMargin = document.querySelector('.photo_logout')

imgLogo.onclick = () => {
    textMainContent.textContent = ""
    for (let i = 0; i < optionsButton.length; i++) {
        optionsButton[i].style.backgroundColor = "#18C29C"
        optionsButton[i].classList.add("btn")
    }
}

collapseButton.onclick = () => {
    if (collapseButton.classList.contains("enable")) {
        
        imgLogo.style.display = 'none'
        userImg.style.display = 'none'
        userInfo.style.display = 'none'
        changeSubMenuOFF()
        submenuToggle.style.display = 'none'

        for (let i = 0; i < optionsButton.length; i++) {
            menuText[i].style.display = 'none'
            optionsButton[i].style.paddingRight = '0px'
        }
        
        sidebarPadding.style.paddingRight = '0px'
        logoutMargin.style.marginRight = '0px'
        
        collapseButton.classList.toggle('enable');
    } else {

        imgLogo.style.display = 'block'
        userImg.style.display = 'block'
        userInfo.style.display = 'block'
        submenuToggle.style.display = 'block'

        for (let i = 0; i < optionsButton.length; i++) {
            menuText[i].style.display = 'block'
            optionsButton[i].style.paddingRight = '3px'
        }

        sidebarPadding.style.paddingRight = '14px'
        logoutMargin.style.marginRight = '-14px'
        
        collapseButton.classList.toggle("enable");
    }
}

const submenuToggle = document.querySelector('.arrow_btn')
const submenu = document.querySelector('.sub_menu')


function changeSubMenuON() {
    buttonConfig.style.borderBottomLeftRadius = '0px'
    buttonConfig.style.borderBottomRightRadius = '0px'
    submenuToggle.style.display = 'block'
    submenuToggle.style.transform = 'rotate(90deg)'

    submenu.style.display = 'flex'
    submenuToggle.classList.toggle("enable");  
}


function changeSubMenuOFF() {
    buttonConfig.style.borderBottomLeftRadius = '12px'
    buttonConfig.style.borderBottomRightRadius = '12px'
        
    submenuToggle.style.transform = 'rotate(360deg)'
    submenu.style.display = 'none'
    submenuToggle.classList.toggle("enable");  
}

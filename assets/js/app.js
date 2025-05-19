const Ancho_Sidebar = "250px";
const Clase_Activa = "active";

function toggleSidebar() {
    const sidebar = document.getElementById("mySidebar");
    const barras = document.querySelectorAll(".menu-btn .bar");
    
    const EstaAbierta = sidebar.style.width === Ancho_Sidebar;
    
    sidebar.style.width = EstaAbierta ? "0" : Ancho_Sidebar;
    
    sidebar.setAttribute("aria-hidden", EstaAbierta ? "true" : "false");
    
    if (EstaAbierta) {
        barras.forEach(bar => {
            bar.style.transform = "none";
            bar.style.opacity = "1";
        });
    } else {
        barras[0].style.transform = "rotate(45deg) translate(5px, 5px)";
        barras[1].style.opacity = "0";
        barras[2].style.transform = "rotate(-45deg) translate(5px, -5px)";
    }
}

function ResaltarPaginaActual(currentPage) {
    const menuItems = document.querySelectorAll(".sidebar a");
    
    menuItems.forEach(item => item.classList.remove(Clase_Activa));
    
    if (currentPage === "" || currentPage === "/" || currentPage === "index.html") {
        document.getElementById("inicio").classList.add(Clase_Activa);
    } else {
        menuItems.forEach(item => {
            if (item.getAttribute("href") === currentPage) {
                item.classList.add(Clase_Activa);
            }
        });
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const currentPage = window.location.pathname.split("/").pop();
    
    ResaltarPaginaActual(currentPage);
});

function CrearBurbujas() {
    const bubbleContainer = document.querySelector('.bubble-container');
    const ContadorBurbuja = 10; 

    for (let i = 0; i < ContadorBurbuja; i++) {
        const bubble = document.createElement('div');
        bubble.classList.add('bubble');

        
        const size = Math.random() * 60 + 40; 
        const left = Math.random() * 100; 
        const duration = Math.random() * 10 + 5; 
        const sway = (Math.random() - 0.5) * 2; 

        bubble.style.width = `${size}px`;
        bubble.style.height = `${size}px`;
        bubble.style.left = `${left}%`;
        bubble.style.animationDuration = `${duration}s`;
        bubble.style.setProperty('--sway', sway);
        bubble.style.animationDelay = `${Math.random() * 5}s`;

        bubbleContainer.appendChild(bubble);

        bubble.addEventListener('animationend', () => {
            bubble.remove();
        });
    }
}

CrearBurbujas();

setInterval(createBubbles, 7000);
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
    
    if (currentPage === "" || currentPage === "/" || currentPage === "persona2.html") {
        document.getElementById("persona2").classList.add(Clase_Activa);
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

        function mostrarImagen(img) {
            const visor = document.getElementById('visor');
            const imagenGrande = document.getElementById('imagenGrande');
            imagenGrande.src = img.src;  
            visor.style.display = 'flex'; 
        }

        function cerrarVisor(event) {
            
            if (event.target === document.getElementById('visor')) {
                document.getElementById('visor').style.display = 'none';
            }
        }
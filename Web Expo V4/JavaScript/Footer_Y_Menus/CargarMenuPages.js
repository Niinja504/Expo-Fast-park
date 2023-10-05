document.addEventListener('DOMContentLoaded', function(){
    const ContenedorMenu = document.getElementById("MenuContenedor");
    const MenuHTML = GenerarMenuPages();

    ContenedorMenu.innerHTML = MenuHTML;
})
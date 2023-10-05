document.addEventListener('DOMContentLoaded', function(){
    const ContenedorMenu = document.getElementById("MenuContenedor");
    const MenuHTML = GenerarMenuIndex();

    ContenedorMenu.innerHTML = MenuHTML;
})
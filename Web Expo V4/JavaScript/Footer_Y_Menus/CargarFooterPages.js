document.addEventListener('DOMContentLoaded', function(){
    const ContenedorMenu = document.getElementById("FooterPages");
    const MenuHTML = GenerarFooterPages();

    ContenedorMenu.innerHTML = MenuHTML;
})
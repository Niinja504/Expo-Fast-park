document.addEventListener('DOMContentLoaded', function(){
    const ContenedorMenu = document.getElementById("Footer");
    const MenuHTML = GenerarFooterIndex();

    ContenedorMenu.innerHTML = MenuHTML;
})
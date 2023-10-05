const selectOpcion = document.getElementById("selectorLicencia");

 const PreciolicenciaSencilla = 10;
 const PreciolicenciaPremiun = 35;

const selectorLicencia = document.getElementById('selectorLicencia');
const descripcionLicencia = document.getElementById('descripcion');
const comprarBtn = document.getElementById('comprarBtn');
let Preciolicencia = document.getElementById('precio');




selectorLicencia.addEventListener('change', function(){
    if (selectorLicencia.value === 'sencilla'){
        descripcionLicencia.textContent = 'Licencia Sencilla: Acceso a funciones basicas.';
        Preciolicencia.textContent = ` $${PreciolicenciaSencilla}`;

    }else if (selectorLicencia.value === 'premium'){
        descripcionLicencia.textContent = 'Licencia Premium: Acceso completo a todas las caracteristicas y sopor propietario';
        Preciolicencia.textContent = ` $${PreciolicenciaPremiun}`;

    }else {
        descripcionLicencia.textContent = 'Debes seleccionar un tipo de licencia para observar la descripción';
        Preciolicencia.textContent = `$0`;
    }
});

comprarBtn.addEventListener('click', function(){
    if(selectorLicencia.value === 'sencilla' || selectorLicencia.value === 'premium'){
        Swal.fire({
            icon: 'question',
            title: 'Confirmar Compra',
            text: '¿Estas seguro de comprar la licencia?',
            showCancelButton: true,
            confirmButtontext: 'Si, Comprar',
            CancelButtonText: 'Cancelar',
        }).then((result) => {
            if (result.isConfirmed){
                Swal.fire('¡Licencia comprada exitosamente!', '', 'success');
            }
        });
    }

    else{
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Por favor, elija una opción válida.'
        });
    }
});

//
//btn Descargas
const downloadButton = document.getElementById("downloadManual");
const pdfUrl = "/Descargas/Definición_de_Sistema_PTC.pdf";

function downloadPDF() {
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "/Descargas/Definición_de_Sistema_PTC.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

downloadButton.addEventListener("click", downloadPDF);

//
//boton del EXE
const ButtondownloadInstalador = document.getElementById("downloadInstalador");
const EXEfUrl = "/Descargas/ProtonVPN_v3.0.5.exe";

function downloadInstalador() {
    const link = document.createElement("a");
    link.href = EXEfUrl;
    link.download = "/Descargas/ProtonVPN_v3.0.5.exe";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

ButtondownloadInstalador.addEventListener("click", downloadInstalador);
document.addEventListener("DOMContentLoaded", function () {
    var descargarBoton = document.getElementById("descargarBoton");
    var codigoQR = document.getElementById("codigoQR");

    descargarBoton.addEventListener("click", function (){
        var userAgent = navigator.userAgent.toLowerCase();

        codigoQR.innerHTML = "";

        if(userAgent.match(/android|webos|iphone|ipad|ipod|blackberry|windows phone/i))
        {
            window.location.href = "https://github.com/fegy0/fegy0.github.io/releases/download/1.0v/app-debug.apk";
        } else {
            codigoQR.style.display = "block";
            
            var qr = new QRCode(document.getElementById("codigoQR"), {
                text: "https://github.com/fegy0/fegy0.github.io/releases/download/1.0v/app-debug.apk",
                width: 250,
                height: 250
            })
        }
    });
});

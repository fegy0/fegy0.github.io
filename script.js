document.addEventListener("DOMContentLoaded", function () {
    var descargarBoton = document.getElementById("descargarBoton");
    var codigoQR = document.getElementById("codigoQR");

    descargarBoton.addEventListener("click", function (){
        var userAgent = navigator.userAgent.toLowerCase();

        codigoQR.innerHTML = "";

        if(userAgent.match(/android|webos|iphone|ipad|ipod|blackberry|windows phone/i))
        {
            window.location.href = "APK/app-debug.apk";
        } else {
            codigoQR.style.display = "block";
            
            var qr = new QRCode(document.getElementById("codigoQR"), {
                text: "https://github.com/fegy0/freddydiaz.github.io/blob/141fd7f7a833e85c5d95818b97514615e0d3ed2b/app-debug.apk",
                width: 128,
                height: 128
            })
        }
    });
});
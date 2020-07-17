
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

//funcion que toma la fotografia
function camara() {
    navigator.camera.getPicture(onSuccess, onFail, {
        //calidad de la foto
        quality: 50,
        //tipo de archivo que se va a generar, aca tipo FILE_URI
        destinationType: Camera.DestinationType.FILE_URI
    });
}

//funcion que se ejecuta cuando OK foto
function onSuccess(rutaFoto) {
    //crea un objeto imagen
    var image = document.getElementById('idFoto');
    //en la propiedad src coloca la imagen desde la ruta
    image.src = rutaFoto;
}

//funcion cuando la foto  o se cancela
function onFail(message) {
    alert('Failed because: ' + message);
}
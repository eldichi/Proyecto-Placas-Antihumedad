function cargarmodelos(){
    fetch('modelos.json')
    .then(respuesta => respuesta.json())
    .then(respuesta => console.log(respuesta))
    

}

cargarmodelos(); 
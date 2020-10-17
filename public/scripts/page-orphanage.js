const options ={
    dragging: false,
    touchzoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}

//create map
const map = L.map('mapid', options).setView([-23.5623217,-46.6734782], 15);

//create and add tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
.addTo(map);


//create icon
const icon= L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize:[58, 68],
    iconAnchor:[29, 68],
    popupAnchor:[170, 2],
})


// create and add marker
L
.marker([-23.5623217,-46.6734782], {icon})
.addTo(map)

// Images Gallery

function selectImage(event){
    const button = event.currentTarget

    //remover todas as classes .active
    const buttons = document.querySelectorAll(".images button")
   buttons.forEach(removeActiveClass)

   function removeActiveClass(button){
       button.classList.remove("active")
   }
   
    //selecionar a image clicada
   const image = button.children[0]
   const imageContainer = document.querySelector(".orphanage-details > img")

    //atualizar o container de imagem
    imageContainer.src = image.src

    //adcionar a classe .active para esse botão
    button.classList.add('active')
}






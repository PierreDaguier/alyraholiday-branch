"use strict"
const container = document.getElementById("container")
const form = document.getElementById("form")

const listLinks = new ListLinks(container, defaultList)
listLinks.init()

/*
function boutondropdown() {
const tri = document.getElementById("tri")
tri.innerHTML = 
`<div class="d-flex justify-content-end">
<div class="dropdown">
<button class="btn btn-primary btn-sm></button type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
Trier par</button>
<div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
<a class="dropdown-item" href="#">de A à Z</a>
<a class="dropdown-item" href="#">de Z à A</a>

</div>

</div></div>`}

boutondropdown() */
console.log(listLinks)

// quand l'événement "submit" pour le formulaire est déclanché
form.addEventListener("submit", (event) => {
  /* le code dans la linge ci-dessous previent le formulaire d'envoyer des données, 
  on remplace le comportement par détaut par notre js */
  event.preventDefault()
  // méthode pushEl
  listLinks.pushEl({
    title: form.elements.title.value.trim(),
    url: form.elements.url.value.trim(), // @todo : de la même façon on peut récupérer la valeur d'url depuis le formulaire
    description: form.elements.description.value.trim(), // @todo : et la valeur de description depuis le formulaire,
    category: form.elements.category.value, // @todo : et la valeur de category depuis le formulaire,
  })
  // la ligne ci-dessous fait un reset du formulaire (les champs redeviennent vides)
  form.reset()
})

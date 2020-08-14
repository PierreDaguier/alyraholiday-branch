"use strict"
let filteredEntry = "toutes les veilles"
const container = document.getElementById("container")
const form = document.getElementById("form")

const listLinks = new ListLinks(container, defaultList)
listLinks.init()

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

// affichage par catégorie


function createMyTitleElement(title){
  const titleEl = document.createElement("h3")
  titleEl.textContent = item.title;
  titleEl.classList.add("h6", "mb-0");
  return titleEl;
}

//Creation de la fontion filtre par categorie
function activateFilterByCategory() {

  //On recupère dans l'HTML les id necessaires pour filtrer et afficher
  const selectCa = document.getElementById("filterCategory")
  const ulElements = document.getElementById("ulElements")
  
  
//On trie tous les elements
  uniqueCategory.sort()
  //console.log(uniqueCategory)
 


  for (let category of uniqueCategory) {
      const option = document.createElement("option")
      option.textContent = category
      option.value = category
      selectCa.append(option)
  }
  
  selectCa.addEventListener("change", () => {
      filteredEntry = selectCa.value;
      console.log(filteredEntry)
      ulElements.innerHTML = '';
      const results = defaultList.filter(el => el.category === filteredEntry)
     
        listLinks.init(results)
      
    
    })
  
}

activateFilterByCategory()
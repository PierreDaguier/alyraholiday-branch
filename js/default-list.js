const defaultList = [
  {
    title: `Créer un portfolio`,
    description: `Vous allez créer un portfolio avec HTML/CSS/B5/JS`,
    url: `https://youtu.be/_xkSvufmjEs`,
    category: "portfolio",
  },
  {
    title: `JavaScript 30`,
    description: `Faire les trentes challenges de JavaScript30`,
    url: `https://javascript30.com/`,
    category: "js",
  },
  {
    title: `Cassie`,
    description: `Un porfolio créatif d'une front-end dev`,
    url: `https://cassie.codes/`,
    category: "inspiration",
  }
]

function allCategories(list) {
  /*retourne la list des tags uniques*/
  let listTotal = []
  for (let el of list) {
    if ('category' in el) {
      listTotal = listTotal.concat(el.category)
    }
  }
  const listCategoryUnique = []
  listTotal.forEach((el) => {
    if (!listCategoryUnique.includes(el)) {
      listCategoryUnique.push(el)
    }
  })
  return listCategoryUnique
}
const uniqueCategory = allCategories(defaultList)
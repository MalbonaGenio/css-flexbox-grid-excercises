/* 
    Jeopardy
    
    Write an async function 
        that uses fetch() to fetch 4 categories 
        from https://jservice.io/api/categories
        parameters: count, offset
        
    Display the categories
        in a simplified 4x5 Jeopardy Board 
        using CSS Grid
*/

async function getCategories() {
    let response = await fetch("https://jservice.io/api/categories?count=4&offset=30")
    let data = await response.json()
    return data
}

function getCategoryHTML(category){
  return`<div class="board">${category.title}</div>`
}
getCategories().then(categories => {
  console.log(categories)
  document.body.innerHTML = `<div class="board">
    ${categories.map(getCategoryHTML).join('')}
  </div>`
})

async function getResponse(){
    let response = await fetch('https://mocki.io/v1/a5814d24-4e22-49fc-96d1-0e9ae2952afc')
    let content = await response.json()
    content = content.articles.splice(0, 10)
    let category  = document.querySelector('.category')
    let cards = document.querySelector('.cards')

    let key;
    for (key in content) {
        category.innerHTML += `
        <option value="hello">${content[key].author}</option>`
    }
    for (key in content) {
        cards.innerHTML += `
        <li class = "card">
        <p class = "card-title">${content[key].title}</p>
        <p class = "card-description">${content[key].description}</p>
        <p class = "card-author">${content[key].author}</p><p class = "card-data">${content[key].publishedAt.slice(0, 10)}</p>`
    }
    //console.log(content[0].publishedAt.splice(0,10))
}
getResponse()
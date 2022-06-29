
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
        <h4>${content[key].title}</h4>
        <h4>${content[key].description}</h4>
        <h4>${content[key].author}</h4>`
    }
    //console.log(content[0].description)
}
getResponse()
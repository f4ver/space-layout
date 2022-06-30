async function filterDate() {
    let response = await fetch('https://mocki.io/v1/a5814d24-4e22-49fc-96d1-0e9ae2952afc')
    let content = await response.json()
    content = content.articles.splice(0, 10)
    let cards = document.querySelector('.cards')
    let key;
    let dateStart = document.querySelector('#start-date').value;
    let dateEnd = document.querySelector('#end-date').value;
    dateStart = Date.parse(dateStart);
    dateEnd = Date.parse(dateEnd);
    cards.innerHTML = " "
    for ( let i = dateStart; i<= dateEnd; i = i+24*60*60*1000){
        for (key in content) {
        if (new Date(i).toISOString().slice(0,10) == content[key].publishedAt.slice(0, 10)){
            cards.innerHTML += `
            <li class = "card">
            <p class = "card-title">${content[key].title}</p>
            <p class = "card-description">${content[key].description}</p>
            <p class = "card-author">${content[key].author}</p>
            <p class = "card-data">${content[key].publishedAt.slice(0, 10)}</p>`
            }
        }
    }
}

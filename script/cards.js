
async function getResponse(){
    let response = await fetch('https://mocki.io/v1/a5814d24-4e22-49fc-96d1-0e9ae2952afc')
    let content = await response.json()
    console.log(content.articles.splice(0, 10))
}
getResponse()
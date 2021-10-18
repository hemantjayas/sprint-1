



async function stories() {

    let res = await fetch(`https://newsapi.org/v2/top-headlines?country=in&apiKey=0bd17a27d92b4bad9c41acb5f35b96c0`);

    let data = await res.json();

    let parent  = document.getElementById('parent')
    data.articles.forEach(function (news) {
        console.log(news);
        let div = document.createElement('div')

        let title = document.createElement('h2')
        title.textContent = news.title;
        let author=  document.createElement('p')
        author.textContent = news.author
        let publishedAt=  document.createElement('p')
        publishedAt.textContent =  news.publishedAt
        let content=  document.createElement('p')
        content.textContent = news.content

        div.append(title,author,publishedAt)
        parent.append(div)
        




    });

}
stories()




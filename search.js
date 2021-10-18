var data  =JSON.parse(localStorage.getItem('data'))
console.log(data);


let parent = document.getElementById('parent')
data.articles.forEach(function (news) {
    console.log(news);
    let div = document.createElement('div')
    div.style.cursor = 'pointer'

    let title = document.createElement('h2')
    title.textContent = news.title;
    let author = document.createElement('p')
    author.textContent = news.author
    let publishedAt = document.createElement('p')
    publishedAt.textContent = news.publishedAt

    div.onclick = function () {
        newsPage(news)
    }

  

    div.append(title, author, publishedAt)
    parent.append(div)


});


function newsPage(news) {

    window.location.href = 'news.html'
    localStorage.setItem('n', JSON.stringify(news))
}
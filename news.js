let article = JSON.parse(localStorage.getItem('n'))

let parent = document.getElementById('parent')

let title = document.createElement('h1')
title.textContent = article.title

let author = document.createElement('p')
author.textContent = article.author
let publishedAt = document.createElement('p')
publishedAt.textContent = article.publishedAt

let image = document.createElement('div')

let img = document.createElement('img')
img.src = article.urlToImage
image.append(img)


let source = document.createElement('p')
source.textContent = article.source.name

let content = document.createElement('p')
content.textContent = article.content




parent.append(title,author, publishedAt,image, source, content);


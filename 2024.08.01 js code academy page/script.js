let contentElement = document.querySelector('#content')


let containerElement = document.createElement('div')
containerElement.classList.add('container')
contentElement.append(containerElement)

const pageContentElement = document.createElement('div')
pageContentElement.classList.add('page-content')
containerElement.append(pageContentElement)


let mainElement = document.createElement('main')

pageContentElement.append(mainElement)


let asideElement = document.createElement('aside')
pageContentElement.append(asideElement)
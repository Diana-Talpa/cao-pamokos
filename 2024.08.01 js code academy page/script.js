let contentElement = document.querySelector('#content')


let containerElement = document.createElement('div')
containerElement.classList.add('container')
contentElement.append(containerElement)

const pageContentElement = document.createElement('div')
pageContentElement.classList.add('page-content')
containerElement.append(pageContentElement)


let headerElement = document.createElement('header')

pageContentElement.append(headerElement)


let navElement = document.createElement('nav')

headerElement.append(navElement)


let fixedElement = document.createElement('div')
fixedElement.classList.add('fixed')
navElement.append(fixedElement)

let fixedHeadElement = document.createElement('div')
fixedHeadElement.classList.add('fixed-head')
fixedElement.append(fixedHeadElement)


let logotipasElement = document.createElement('div')
logotipasElement.classList.add('logotipas')
fixedHeadElement.append(logotipasElement)

let logoFotoa = document.createElement('a')
logotipasElement.append(logoFotoa)

let logophoto = document.createElement('img')
logoFotoa.append(logophoto)

let navigacijaElement = document.createElement('div')
navigacijaElement.classList.add('navigacija')
navigacijaElement.textContent = 'Studentams'
fixedHeadElement.append(navigacijaElement)

let navigacija1Element = document.createElement('div')
navigacija1Element.classList.add('navigacija')
navigacija1Element.textContent = 'Karjeros centras'
fixedHeadElement.append(navigacija1Element)

let navigacija2Element = document.createElement('div')
navigacija2Element.classList.add('navigacija')
navigacija2Element.textContent = 'Programos'
fixedHeadElement.append(navigacija2Element)

let navigacija3Element = document.createElement('div')
navigacija3Element.classList.add('navigacija')
navigacija3Element.textContent = 'IT testas'
fixedHeadElement.append(navigacija3Element)

let navigacija4Element = document.createElement('div')
navigacija4Element.classList.add('navigacija')
navigacija4Element.textContent = 'Apie mus'
fixedHeadElement.append(navigacija4Element)

let navigacija5Element = document.createElement('div')
navigacija5Element.classList.add('navigacija')
navigacija5Element.textContent = 'Verslui'
fixedHeadElement.append(navigacija5Element)

let navigacija6Element = document.createElement('div')
navigacija6Element.classList.add('navigacija')
navigacija6Element.textContent = 'Kontaktai'
fixedHeadElement.append(navigacija6Element)

let navigacija7Element = document.createElement('div')
navigacija7Element.classList.add('navigacija')
navigacija7Element.textContent = 'EN'
fixedHeadElement.append(navigacija7Element)

let navigacijaButtonElement = document.createElement('button')
navigacijaButtonElement.classList.add('skambinti')
navigacijaButtonElement.textContent = 'Skambinti'
fixedHeadElement.append(navigacijaButtonElement)








let mainElement = document.createElement('main')
pageContentElement.append(mainElement)





let vidusElement = document.createElement('div')
vidusElement.classList.add('vidus')
mainElement.append(vidusElement)

let sectionElement = document.createElement('section')
vidusElement.append(sectionElement)


let papildomaNavElement = document.createElement('div')
papildomaNavElement.classList.add('papildoma-nav')
sectionElement.append(papildomaNavElement)



let papildomaNav1Element = document.createElement('div')
papildomaNav1Element.classList.add('papildoma')
papildomaNavElement.append(papildomaNav1Element)

let papildomaA = document.createElement('a')
papildomaA.textContent = 'Apie mus'
papildomaNav1Element.append(papildomaA)





let papildomaNav2Element = document.createElement('div')
papildomaNav2Element.classList.add('papildoma')
papildomaNavElement.append(papildomaNav2Element)

let papildomaA1 = document.createElement('a')
papildomaA1.textContent = 'Naujienos'
papildomaNav2Element.append(papildomaA1)





let papildomaNav3Element = document.createElement('div')
papildomaNav3Element.classList.add('papildoma')
papildomaNavElement.append(papildomaNav3Element)

let papildomaA2 = document.createElement('a')
papildomaA2.textContent = 'Karjera'
papildomaNav3Element.append(papildomaA2)







let papildomaNav4Element = document.createElement('div')
papildomaNav4Element.classList.add('papildoma')
papildomaNavElement.append(papildomaNav4Element)

let papildomaA3 = document.createElement('a')
papildomaA3.textContent = 'ES parama'
papildomaNavElement.append(papildomaA3)










let dviPusesElement = document.createElement('div')
dviPusesElement.classList.add('dvi-puses')
vidusElement.append(dviPusesElement)










let leftSideElement = document.createElement('div')
leftSideElement.classList.add('selft-side')
dviPusesElement.append(leftSideElement)


let sectionLeft1Element = document.createElement('section')
leftSideElement.append(sectionLeft1Element)

let leftSection1h1 = document.createElement('h1')
leftSection1h1.textContent = 'Naujienos'
sectionLeft1Element.append(leftSection1h1)

let leftSideSectionNews = document.createElement('div')
leftSideSectionNews.classList.add('naujienos')
sectionLeft1Element.append(leftSideSectionNews)




let newsBox1 = document.createElement('div')
newsBox1.classList.add('box-1')
leftSideSectionNews.append(newsBox1)

let newsBox1a = document.createElement('a')
newsBox1.append(newsBox1a)

let newsBox1img = document.createElement('img')
newsBox1img.classList.add('photo1')
newsBox1a.append(newsBox1img)

let newsBox1aprasymas = document.createElement('div')
newsBox1aprasymas.classList.add('aprasymas')
newsBox1.append(newsBox1aprasymas)

let newsBox1aprasymasp1 = document.createElement('p')
newsBox1aprasymasp1.textContent = 'Karjera'
newsBox1aprasymasp1.classList.add('blue')
newsBox1aprasymas.append(newsBox1aprasymasp1)

let newsBox1aprasymash2 = document.createElement('h2')
newsBox1aprasymash2.textContent = "Kaip junior'rui isnaudoti „LinkedIn“ savo naudai?"
newsBox1aprasymas.append(newsBox1aprasymash2)


let newsBox1aprasymasp2 = document.createElement('p')
newsBox1aprasymasp2.textContent = '2024-05-28'
newsBox1aprasymas.append(newsBox1aprasymasp2)








let newsBox2 = document.createElement('div')
newsBox2.classList.add('box-2')
leftSideSectionNews.append(newsBox2)

let newsBox2a = document.createElement('a')
newsBox2.append(newsBox2a)

let newsBox2img = document.createElement('img')
newsBox2img.classList.add('photo1')
newsBox2a.append(newsBox2img)

let newsBox2aprasymas = document.createElement('div')
newsBox2aprasymas.classList.add('aprasymas')
newsBox2.append(newsBox2aprasymas)


let newsBox2aprasymasp1 = document.createElement('p')
newsBox2aprasymasp1.textContent = 'Sekmes istorijos'
newsBox2aprasymasp1.classList.add('blue')
newsBox2aprasymas.append(newsBox2aprasymasp1)

let newsBox2aprasymash2 = document.createElement('h2')
newsBox2aprasymash2.textContent = "Sėkmės istorija - įsidarbinimas į Asteri"
newsBox2aprasymas.append(newsBox2aprasymash2)


let newsBox2aprasymasp2 = document.createElement('p')
newsBox2aprasymasp2.textContent = '2024-05-23'
newsBox2aprasymas.append(newsBox2aprasymasp2)









let newsBox3 = document.createElement('div')
newsBox3.classList.add('box-3')
newsBox3.classList.add('boxflex')
leftSideSectionNews.append(newsBox3)

let newsBox3a = document.createElement('a')
newsBox3.append(newsBox3a)


let newsBox3img = document.createElement('img')
newsBox3img.classList.add('small-image')
newsBox3a.append(newsBox3img)


let newsBox3aprasymas = document.createElement('div')
newsBox3aprasymas.classList.add('mall-aprasymas')
newsBox3.append(newsBox3aprasymas)


let newsBox3aprasymasp1 = document.createElement('p')
newsBox3aprasymasp1.textContent = 'Sekmes istorijos'
newsBox3aprasymasp1.classList.add('blue')
newsBox3aprasymas.append(newsBox3aprasymasp1)

let newsBox3aprasymasp2 = document.createElement('p')
newsBox3aprasymasp2.classList.add('small-black-font')
newsBox3aprasymasp2.textContent = 'Sėkmės istorija - įsidarbinimas į Bentlay Systems'
newsBox3aprasymas.append(newsBox3aprasymasp2)


let newsBox3aprasymasp3 = document.createElement('p')
newsBox3aprasymasp3.textContent = '2024-04-25'
newsBox3aprasymas.append(newsBox3aprasymasp3)






let newsBox4 = document.createElement('div')
newsBox4.classList.add('box-4')
newsBox4.classList.add('boxflex')
leftSideSectionNews.append(newsBox4)

let newsBox4a = document.createElement('a')
newsBox4.append(newsBox4a)


let newsBox4img = document.createElement('img')
newsBox4img.classList.add('small-image')
newsBox4a.append(newsBox4img)


let newsBox4aprasymas = document.createElement('div')
newsBox4aprasymas.classList.add('mall-aprasymas')
newsBox4.append(newsBox4aprasymas)

let newsBox4aprasymasp1 = document.createElement('p')
newsBox4aprasymasp1.textContent = 'Sekmes istorijos'
newsBox4aprasymasp1.classList.add('blue')
newsBox4aprasymas.append(newsBox4aprasymasp1)

let newsBox4aprasymasp2 = document.createElement('p')
newsBox4aprasymasp2.classList.add('small-black-font')
newsBox4aprasymasp2.textContent = 'Sėkmės istorija - įsidarbinimas į Fresh media'
newsBox4aprasymas.append(newsBox4aprasymasp2)


let newsBox4aprasymasp3 = document.createElement('p')
newsBox4aprasymasp3.textContent = '2024-04-25'
newsBox4aprasymas.append(newsBox4aprasymasp3)







let newsBox5 = document.createElement('div')
newsBox5.classList.add('box-5')
newsBox5.classList.add('boxflex')
leftSideSectionNews.append(newsBox5)

let newsBox5a = document.createElement('a')
newsBox5.append(newsBox5a)

let newsBox5img = document.createElement('img')
newsBox5img.classList.add('small-image')
newsBox5a.append(newsBox5img)


let newsBox5aprasymas = document.createElement('div')
newsBox5aprasymas.classList.add('mall-aprasymas')
newsBox5.append(newsBox5aprasymas)

let newsBox5aprasymasp1 = document.createElement('p')
newsBox5aprasymasp1.textContent = 'Sekmes istorijos'
newsBox5aprasymasp1.classList.add('blue')
newsBox5aprasymas.append(newsBox5aprasymasp1)

let newsBox5aprasymasp2 = document.createElement('p')
newsBox5aprasymasp2.classList.add('small-black-font')
newsBox5aprasymasp2.textContent = 'Sėkmės istorija - įsidarbinimas į Visma Tech'
newsBox5aprasymas.append(newsBox5aprasymasp2)


let newsBox5aprasymasp3 = document.createElement('p')
newsBox5aprasymasp3.textContent = '2024-04-25'
newsBox5aprasymas.append(newsBox5aprasymasp3)










let newsBox6 = document.createElement('div')
newsBox6.classList.add('box-6')
newsBox6.classList.add('boxflex')
leftSideSectionNews.append(newsBox6)

let newsBox6a = document.createElement('a')
newsBox6.append(newsBox6a)

let newsBox6img = document.createElement('img')
newsBox6img.classList.add('small-image')
newsBox6a.append(newsBox6img)



let newsBox6aprasymas = document.createElement('div')
newsBox6aprasymas.classList.add('mall-aprasymas')
newsBox6.append(newsBox6aprasymas)

let newsBox6aprasymasp1 = document.createElement('p')
newsBox6aprasymasp1.textContent = 'Sekmes istorijos'
newsBox6aprasymasp1.classList.add('blue')
newsBox6aprasymas.append(newsBox6aprasymasp1)

let newsBox6aprasymasp2 = document.createElement('p')
newsBox6aprasymasp2.classList.add('small-black-font')
newsBox6aprasymasp2.textContent = " Už verslo partnerystes  CodeAcademy programavimo akademijoje bus atsakingas IT ekspertas Marius Pareščius"
newsBox6aprasymas.append(newsBox6aprasymasp2)


let newsBox6aprasymasp3 = document.createElement('p')
newsBox6aprasymasp3.textContent = '2024-04-25'
newsBox6aprasymas.append(newsBox6aprasymasp3)












let sectionLeft2Element = document.createElement('section')
leftSideElement.append(sectionLeft2Element)


let leftSideSectionVideos = document.createElement('div')
leftSideSectionVideos.classList.add('visos-nauj')
sectionLeft2Element.append(leftSideSectionVideos)


let leftSideSectionVideosa = document.createElement('a')
leftSideSectionVideos.append(leftSideSectionVideosa)


let leftSideSectionVideosimg = document.createElement('img')
leftSideSectionVideosimg.classList.add('strele')
leftSideSectionVideos.append(leftSideSectionVideosimg)


let leftSideSectionVideosimga = document.createElement('a')
leftSideSectionVideos.append(leftSideSectionVideosimga)



let leftSideSectionVideosh1 = document.createElement('h1')
leftSideSectionVideosh1.textContent = 'Vaizdo irasai'
sectionLeft2Element.append(leftSideSectionVideosh1)










let leftSideSectionVideos1 = document.createElement('div')
leftSideSectionVideos1.classList.add('video')
sectionLeft2Element.append(leftSideSectionVideos1)



let leftSideSectionVideosvid1 = document.createElement('div')
leftSideSectionVideosvid1.classList.add('vid1')
leftSideSectionVideos1.append(leftSideSectionVideosvid1)

let leftSideSectionVideosvid1a = document.createElement('a')
leftSideSectionVideos1.append(leftSideSectionVideosvid1a)


let eftSideSectionVideosvid1p = document.createElement('p')
eftSideSectionVideosvid1p.textContent = '#6 Studentes istorija: sekme slypi disciplinoje'
leftSideSectionVideosvid1.append(eftSideSectionVideosvid1p)








let leftSideSectionVideosvid2 = document.createElement('div')
leftSideSectionVideosvid2.classList.add('vid2')
leftSideSectionVideos1.append(leftSideSectionVideosvid2)

let leftSideSectionVideosvid2a = document.createElement('a')
leftSideSectionVideosvid2.append(leftSideSectionVideosvid2a)



let eftSideSectionVideosvid2p = document.createElement('p')
eftSideSectionVideosvid2p.textContent = '#4 Ctrl+Alt+Defend: Kibernetinis saugumas siandien'
leftSideSectionVideosvid2.append(eftSideSectionVideosvid2p)

let leftSideSectionVideosvid3 = document.createElement('div')
leftSideSectionVideosvid3.classList.add('vid3')
leftSideSectionVideos1.append(leftSideSectionVideosvid3)


let leftSideSectionVideosvid3a = document.createElement('a')
leftSideSectionVideosvid3.append(leftSideSectionVideosvid3a)



let eftSideSectionVideosvid3p = document.createElement('p')
eftSideSectionVideosvid3p.textContent = 'Susipažink su mūsų įdarbinimo partneriais - Danske Bank!'
leftSideSectionVideosvid3.append(eftSideSectionVideosvid3p)










let leftSideSectionVideos2 = document.createElement('div')
leftSideSectionVideos2.classList.add('visos-nauj')
sectionLeft2Element.append(leftSideSectionVideos2)



let leftSideSectionVideos2a = document.createElement('a')
leftSideSectionVideos2.append(leftSideSectionVideos2a)


let leftSideSectionVideos2img = document.createElement('img')
leftSideSectionVideos2img.classList.add('strele')
leftSideSectionVideos2.append(leftSideSectionVideos2img)





















let rightSideElement = document.createElement('div')
rightSideElement.classList.add('right-side')
dviPusesElement.append(rightSideElement)



let footerElement = document.createElement('footer')
pageContentElement.append(footerElement)

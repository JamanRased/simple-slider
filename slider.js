const images = [
    'img/img-1 (1).jpg',
    'img/img-1 (2).jpg',
    'img/img-1 (3).jpg',
    'img/img-1 (4).jpg',
    'img/img-1 (5).jpg',
    'img/img-1 (6).jpg',
];

let imgeIndex = 0;
const imgElement = document.getElementById('slider-img');

setInterval(() =>{
    if(imgeIndex>images.length){
        imgeIndex = 0;
    }
    const imgUrl = images[imgeIndex];
    imgElement.setAttribute('src', imgUrl)
    imgeIndex ++;

}, 1000)
const galleryItems = [
  { preview: 'img/preview-1.jpeg', fullview: 'img/fullview-1.jpeg', alt: "alt text 1" },
  { preview: 'img/preview-2.jpg', fullview: 'img/fullview-2.jpg', alt: "alt text 2" },
  { preview: 'img/preview-3.jpg', fullview: 'img/fullview-3.jpg', alt: "alt text 3" },
  { preview: 'img/preview-4.png', fullview: 'img/fullview-4.png', alt: "alt text 4" },
  { preview: 'img/preview-5.jpeg', fullview: 'img/fullview-5.jpeg', alt: "alt text 5" },
  { preview: 'img/preview-6.jpeg', fullview: 'img/fullview-6.jpeg', alt: "alt text 6" },
];

//создаем блок для увеличенного изображения
const gallery = document.querySelector('.image-gallery');
const fullview = document.createElement('div');
fullview.className = `fullview`;
gallery.append(fullview);
const fullImg = document.createElement('img');
fullImg.src = galleryItems[0].fullview;
fullImg.alt = galleryItems[0].alt;
fullview.append(fullImg);
//создаем блок уменьшенного изображения
const preview = document.createElement('ul');
preview.className = `preview`;
gallery.append(preview);
for (let item of galleryItems) {
    let preItem = document.createElement('li');
    let preImg = document.createElement('img');
    preItem.append(preImg);
    preImg.src = item.preview;
    preImg.dataset.fullview = item.fullview;
    preImg.alt = item.alt;
    preview.append(preItem); 
}
//меняем фото при клике
preview.addEventListener('click',function(event){
    const img = event.target;
    if (event.target != event.currentTarget) {
        fullImg.src = img.dataset.fullview;
        fullImg.alt = img.dataset.alt;
        const ul = event.currentTarget;
        const imgList = ul.childNodes;
        for (let element of imgList) {
            if (element.children[0].className == 'active') {
                element.children[0].classList.remove('active');
            }
        }
        img.className = 'active';
    }
})




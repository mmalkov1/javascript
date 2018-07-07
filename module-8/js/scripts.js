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
const previewContainer = document.createElement('div');
previewContainer.className = `preview-container`;
gallery.append(previewContainer);
const preview = document.createElement('ul');
preview.className = `preview`;
previewContainer.append(preview);
nav();
function nav() {
	const navLeft = document.createElement('div');
	navLeft.className = `nav-left`;
	previewContainer.append(navLeft);
	const navRight = document.createElement('div');
	navRight.className = `nav-right`;
	previewContainer.append(navRight);
	let pos = 0;
	navLeft.addEventListener('click', function () {
		let li = document.querySelectorAll('li');
    let totalLi = li.length;
    pos = pos - 200;
    for (let item of li) {
			item.style = `transform: translateX(${pos}px); transition: transform .2s;`;
		}
	})
	navRight.addEventListener('click', function () {
		let li = document.querySelectorAll('li');
    let totalLi = li.length;
    pos = pos + 200;
    for (let item of li) {
			item.style = `transform: translateX(${pos}px); transition: transform .2s;`;
		}
	})
}
let i = 1;
for (let item of galleryItems) {
  let preItem = document.createElement('li');
  let preImg = document.createElement('img');
  preItem.append(preImg);
  preImg.src = item.preview;
  preImg.dataset.fullview = item.fullview;
  preImg.dataset.number = i;
  preImg.alt = item.alt;
  preview.append(preItem); 
  i++;
}
//меняем фото при клике
preview.addEventListener('click',function(event){
  const img = event.target;
  if (event.target != event.currentTarget) {
    fullImg.src = img.dataset.fullview;
    fullImg.alt = img.dataset.alt;
    const ul = event.currentTarget;
    const imgList = ul.childNodes;
    console.log(event.target);
    for (let element of imgList) {
      if (element.children[0].className == 'active') {
        element.children[0].classList.remove('active');
      }
    }
    img.className = 'active';
    let li = document.querySelectorAll('li');
    let totalLi = li.length;
    for (let item of li) {
    	item.style = `transform: translateX(${(img.dataset.number*-200)+500}px); transition: transform .2s;`;
    }        
  }
})




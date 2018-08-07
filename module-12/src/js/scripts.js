window.onload = function () { 
  let bookmarks = [].concat(JSON.parse(localStorage.getItem('bookmarks')));
  if (localStorage.getItem('bookmarks')==null) {
    bookmarks = [];
  } 
  console.log(bookmarks);
  
  if(localStorage.getItem('bookmarks') != '[null]') {
    renderProducts(bookmarks);
  }
  
  function getInfo (opt) {
    document.querySelector('.message').classList.add('show');
    fetch(`https://api.linkpreview.net/?key=5b65625db87a5f5e988012e8de1972afaae235744bd1d&q=https://${opt}`)
    .then((response)=>{
      console.log(response.status);
      if (response.status===200) {
        return response.json();
      } else {
        alert('Такого URL-адреса не существует');
        document.querySelector('.message').classList.remove('show');
        console.log('Неверный запрос!');
      }    
    })
    .then((data)=>{
      const findObj = bookmarks.find((el)=>el.url==data.url);
      if (findObj == undefined) {
        data.title = data.title.substr(0, 50)+'...';
        data.description = data.description.substr(0, 60)+'...';
        bookmarks.unshift(data);
        document.querySelector('.message').classList.remove('show');
        renderProducts(bookmarks);      
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
      } else {
        alert('Данный ресурс уже добавлен в закладки!');
        document.querySelector('.message').classList.remove('show');
      }
      
    })
    .catch((err)=>console.log(err))
  }
  
  function renderProducts (arr) {
    const source = document.querySelector('#entry-template').innerHTML.trim();
    const template = Handlebars.compile(source);
    const markup = arr.reduce((acc, item) => acc + template(item), '');
    const container = document.querySelector('.table');
    container.innerHTML = markup;
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
  }  
  
  
  const btnAdd = document.querySelector('#add_btn');
  btnAdd.addEventListener('click', function(){
    const link = document.querySelector('#link').value;
    if (link.search(/([\w\.]+)\.([a-z]{2,6}\.?)(\/[\w\.]*)*\/?$/)!=-1){
      const result = getInfo(link);
    } else {
      alert ('Введите корректный адрес сайта!');
    }

    
  })
  
  const containerProducts = document.querySelector('#table');
  containerProducts.addEventListener('click', function(e){
    const removeBtn = document.querySelectorAll('.remove');
    const removeBtnArr = Array.from(removeBtn);
    if (removeBtnArr.includes(e.target)) {
      e.preventDefault();
      const link = e.target.dataset.link;
      const indexEl = bookmarks.indexOf(bookmarks.find((el)=>el.url==link));
      bookmarks.splice(indexEl,1);
      renderProducts(bookmarks);    
    }
  })
}



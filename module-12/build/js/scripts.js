'use strict';

window.onload = function () {
  var bookmarks = [].concat(JSON.parse(localStorage.getItem('bookmarks')));
  if (localStorage.getItem('bookmarks') == null) {
    bookmarks = [];
  }
  console.log(bookmarks);

  if (localStorage.getItem('bookmarks') != '[null]') {
    renderProducts(bookmarks);
  }

  function getInfo(opt) {
    document.querySelector('.message').classList.add('show');
    fetch('https://api.linkpreview.net/?key=5b65625db87a5f5e988012e8de1972afaae235744bd1d&q=https://' + opt).then(function (response) {
      console.log(response.status);
      if (response.status === 200) {
        return response.json();
      } else {
        alert('Такого URL-адреса не существует');
        document.querySelector('.message').classList.remove('show');
        console.log('Неверный запрос!');
      }
    }).then(function (data) {
      var findObj = bookmarks.find(function (el) {
        return el.url == data.url;
      });
      if (findObj == undefined) {
        data.title = data.title.substr(0, 50) + '...';
        data.description = data.description.substr(0, 60) + '...';
        bookmarks.unshift(data);
        document.querySelector('.message').classList.remove('show');
        renderProducts(bookmarks);
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
      } else {
        alert('Данный ресурс уже добавлен в закладки!');
        document.querySelector('.message').classList.remove('show');
      }
    }).catch(function (err) {
      return console.log(err);
    });
  }

  function renderProducts(arr) {
    var source = document.querySelector('#entry-template').innerHTML.trim();
    var template = Handlebars.compile(source);
    var markup = arr.reduce(function (acc, item) {
      return acc + template(item);
    }, '');
    var container = document.querySelector('.table');
    container.innerHTML = markup;
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
  }

  var btnAdd = document.querySelector('#add_btn');
  btnAdd.addEventListener('click', function () {
    var link = document.querySelector('#link').value;
    if (link.search(/([\w\.]+)\.([a-z]{2,6}\.?)(\/[\w\.]*)*\/?$/) != -1) {
      var result = getInfo(link);
    } else {
      alert('Введите корректный адрес сайта!');
    }
  });

  var containerProducts = document.querySelector('#table');
  containerProducts.addEventListener('click', function (e) {
    var removeBtn = document.querySelectorAll('.remove');
    var removeBtnArr = Array.from(removeBtn);
    if (removeBtnArr.includes(e.target)) {
      e.preventDefault();
      var link = e.target.dataset.link;
      var indexEl = bookmarks.indexOf(bookmarks.find(function (el) {
        return el.url == link;
      }));
      bookmarks.splice(indexEl, 1);
      renderProducts(bookmarks);
    }
  });
};
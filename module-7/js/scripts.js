const posts = [
  {
    img: "https://placeimg.com/400/150/arch",
    title: "Post title 1",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
    link: 'link-1.com'
  },
  {
    img: "https://placeimg.com/400/150/nature",
    title: "Post title 2",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
    link: 'link-2.com'
  },
  {
    img: "https://placeimg.com/400/150/arch",
    title: "Post title 3",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
    link: 'link-3.com'
  }
];

const body = document.querySelector('body');
//создаем контейнер
const container = document.createElement('div');
body.append(container);
//перебираем массив постов
let createCards = function(posts) {
    for (const item of Array.from(posts)) {
        createPostCard(item);
    }
};
//функция создания карточки одного поста
let createPostCard = function (item) {
    //определяем шаблон для добаления узлов дерева
    let setInfo = (typeInfo, classInfo, textInfo, srcInfo, altInfo, linkInfo) => {
        const element = document.createElement(typeInfo);
        element.classList.add(classInfo);
        element.textContent = textInfo;
        element.src = srcInfo;
        element.alt = altInfo;
        element.href = linkInfo;
        post.append(element);
    }
    //создание блока  post
    const post = document.createElement('div');
    post.classList.add('post');
    container.append(post); //вставляем post в контейнер

    //создание карточки
    setInfo('img', 'post__image', null, item.img, 'post_image');
    setInfo('h2', 'post__title', item.title);
    setInfo('p', 'post__text', item.text);
    setInfo('a', 'button', 'Read more', null, null, item.link);
}

createCards (posts);


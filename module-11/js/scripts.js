const laptops = [
    {
      size: 13,
      color: 'white',
      price: 28000,
      release_date: 2015,
      name: 'Macbook Air White 13"',
      img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
      descr:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
    },
    {
      size: 13,
      color: 'gray',
      price: 32000,
      release_date: 2016,
      name: 'Macbook Air Gray 13"',
      img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
      descr:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
    },
    {
      size: 13,
      color: 'black',
      price: 35000,
      release_date: 2017,
      name: 'Macbook Air Black 13"',
      img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
      descr:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
    },
    {
      size: 15,
      color: 'white',
      price: 45000,
      release_date: 2015,
      name: 'Macbook Air White 15"',
      img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
      descr:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
    },
    {
      size: 15,
      color: 'gray',
      price: 55000,
      release_date: 2016,
      name: 'Macbook Pro Gray 15"',
      img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
      descr:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
    },
    {
      size: 15,
      color: 'black',
      price: 45000,
      release_date: 2017,
      name: 'Macbook Pro Black 15"',
      img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
      descr:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
    },
    {
      size: 17,
      color: 'white',
      price: 65000,
      release_date: 2015,
      name: 'Macbook Air White 17"',
      img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
      descr:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
    },
    {
      size: 17,
      color: 'gray',
      price: 75000,
      release_date: 2016,
      name: 'Macbook Pro Gray 17"',
      img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
      descr:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
    },
    {
      size: 17,
      color: 'black',
      price: 80000,
      release_date: 2017,
      name: 'Macbook Pro Black 17"',
      img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
      descr:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
    },
  ];
  
    function renderProducts (arr) {
      const source = document.querySelector('#entry-template').innerHTML.trim();
      const template = Handlebars.compile(source);
      const markup = arr.reduce((acc, item) => acc + template(item), '');
      const container = document.querySelector('.products');
      container.innerHTML = markup;
    }
    
    renderProducts(laptops);
    

    const filterBtn = document.querySelector("#filter");
    filterBtn.addEventListener('click', function (e){
        e.preventDefault();
        const filter = {};
        
        function getKeys (attribute) {
            const element = document.querySelectorAll(`[name=${attribute}]`);
            const Arr = Array.from(element);
            const attrArr = [];
            for (let item of Arr) {
                if (item.checked) {
                    attrArr.push(item.value);
                }
            }
            return attrArr;
        }
        filter.size = getKeys('size');
        filter.color = getKeys('color');
        filter.release_date = getKeys('release_date');
        console.log(filter);
      
        const result = [];
        for (let colFilter of filter.color) {
          let resultArr = laptops.filter((el) => el.color == colFilter);
          result.push(resultArr)
        }
        for (let sizeFilter of filter.size) {
          let resultArrSize = laptops.filter((el) => el.size == sizeFilter);
          result.push(resultArrSize);
        }
        for (let dateFilter of filter.release_date) {
          let resultArrDate = laptops.filter((el) => el.release_date == dateFilter);
          result.push(resultArrDate);
        }
        console.log(result);
        
        const reduseArr = result.reduce((acc, item) => acc.concat(item));
        const uniqueArr = Array.from(new Set(reduseArr));
        renderProducts(uniqueArr);
    })

    const resetBtn = document.querySelector("#reset");
    resetBtn.addEventListener('click', function (e){
      e.preventDefault();
      renderProducts(laptops);
    })
  
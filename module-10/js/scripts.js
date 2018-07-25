
let body = document.querySelector('tbody');

//функция для отправки запроса на сервер
function requestAPI (link, options, callback) {
	if (callback) {
		fetch(link)
			.then((response)=>response.json())
			.then((data)=>{
						callback(data['data'])
					})
			.catch((err)=>console.log(err))	
	} else {
		fetch(link, options)
			.then((response)=>response.json())
			.catch((err)=>console.log(err))	
	}			
}

requestAPI('https://test-users-api.herokuapp.com/users/',null,getAllUsers);

//отображение пользователя по id
let searchBtn = document.querySelector('.form__search-btn');
searchBtn.addEventListener('click', function(e) {
	if (e.target.previousElementSibling.value) {
		requestAPI(`https://test-users-api.herokuapp.com/users/${e.target.previousElementSibling.value}`,null,getUserById)
	} else {
		requestAPI('https://test-users-api.herokuapp.com/users/',null,getAllUsers);
	}	

});

//вЫзов модалки на добавление
document.querySelector('.form__add-btn').addEventListener('click', function() {
	document.querySelector('#name').value = null;
	document.querySelector('#age').value = null;
	document.querySelector('.submit').setAttribute('id', 'save');
})

//добавление пользователя

document.querySelector('#save').addEventListener('click', addUser);

//удаление пользователя
body.addEventListener('click', function (e) {
	let delBtn = document.querySelectorAll('.delete-btn');
	let arrBtn = Array.from(delBtn);
	if (arrBtn.includes(e.target)) {
		let options = {
			method: "DELETE"
		}
		requestAPI(`https://test-users-api.herokuapp.com/users/${e.target.getAttribute('id')}`,options,null);
		// e.target.getAttribute('id')
		setTimeout(function () {
			requestAPI('https://test-users-api.herokuapp.com/users/',null,getAllUsers)
		}, 100);
	}
	
})

//вызов модалки для редактирования пользователя
body.addEventListener('click', function (e) {
	let editBtn = document.querySelectorAll('.edit-btn');
	let arrEdit = Array.from(editBtn);
	if (arrEdit.includes(e.target)) {
		let userId = e.target.getAttribute('id'); 
		fetch(`https://test-users-api.herokuapp.com/users/`)
			.then((response)=>response.json())
			.then((res)=>{
				let user = res["data"].find((el) => el.id == userId);				
				document.querySelector('#name').value = user.name;
				document.querySelector('#age').value = user.age;
				document.querySelector('.submit').setAttribute('id', 'edit');
				document.querySelector('.submit').dataset.id = user.id;
				editUsers();
			})
			.catch((err)=>console.log(err));

	}
	
})	
//отправка формы на бэкенд
function editUsers () {
	document.querySelector('#edit').removeEventListener('click', addUser);
	document.querySelector('#edit').addEventListener('click', function () {
		let name = document.querySelector('#name').value;
		let age = document.querySelector('#age').value;
		let id = document.querySelector('#edit').dataset.id;
		fetch(`https://test-users-api.herokuapp.com/users/${id}`, {
	        method: "PUT",
	        body: JSON.stringify({ name: `${name}`, age: `${age}` }),
	        headers: {
	            Accept: 'application/json',
	            'Content-Type': 'application/json',
	        }
	    });
		setTimeout(function () {
			requestAPI('https://test-users-api.herokuapp.com/users/',null,getAllUsers)
		}, 100);		
	})	
}


//функция добавления пользователя
function addUser () {
	let nameUser = document.querySelector('#name').value;
	let ageUser = document.querySelector('#age').value;
	let options = {
		method: 'POST',
		body: JSON.stringify({name : nameUser, age : ageUser}),
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		}
	}
	let info = document.querySelector('.info');
	info.classList.add('show');
	let modal1 = document.querySelector('.modal');
	requestAPI('https://test-users-api.herokuapp.com/users/',options,null);	
	setTimeout(function () {
		requestAPI('https://test-users-api.herokuapp.com/users/',null,getAllUsers)
	}, 1000);
}



//функция отображения пользователя по Id
function getUserById(data) {
	let row = '';
	let table = document.querySelector('tbody');
	
	row += `<tr>
				<td>${data.id}</td>
				<td>${data.name}</td>
				<td>${data.age}</td>
				<td><button class="btn btn-danger delete-btn" id="${data.id}">Удалить</button>
					<button class="btn btn-success edit-btn" id="${data.id}" data-toggle="modal" data-target="#exampleModal">Редактировать</button>
				</td>
	        </tr>`;
	table.innerHTML = row;
}
//функция отображения всех пользователей
function getAllUsers (arr) {
	let page = '';
	let pagination = document.querySelector('.pagination');
	let totalPage = Math.floor(arr.length/25);

	for (let i = 1; i <= totalPage; i++) {
		page += `<div class="pagination__page-number alert alert-primary">${i}</div>`;
	}
	pagination.innerHTML = page;
	let table = document.querySelector('tbody');
	let row = '';
	for (let item = 0; item < 25; item++) {
		row += `<tr>
					<td>${arr[item].id}</td>
					<td>${arr[item].name}</td>
					<td>${arr[item].age}</td>
					<td><button class="btn btn-danger delete-btn" id="${arr[item].id}">Удалить</button>
						<button class="btn btn-success edit-btn" id="${arr[item].id}" data-toggle="modal" data-target="#exampleModal">Редактировать</button>
					</td>
		        </tr>`;
	}
	table.innerHTML = row;

	pagination.addEventListener('click', function (e) {
		if (e.target != e.currentTarget) {
			let currentPage = e.target.textContent;
			let lastElement = currentPage*25+25;
			if (lastElement > arr.length) {
				lastElement = arr.length;
			} 
			let row = '';
			for (let item = currentPage*25; item < lastElement; item++) {
				row += `<tr>
							<td>${arr[item].id}</td>
							<td>${arr[item].name}</td>
							<td>${arr[item].age}</td>
							<td><button class="btn btn-danger delete-btn" id="${arr[item].id}">Удалить</button>
								<button class="btn btn-success edit-btn" id="${arr[item].id}" data-toggle="modal" data-target="#exampleModal">Редактировать</button>
							</td>
				        </tr>`;
			}
			table.innerHTML = row;
		}
	})
}



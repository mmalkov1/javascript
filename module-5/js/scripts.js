const initialUsers = [
  { id: "-s19a6hqce", login: "mangozedog@mail.com", password: "qwe123zv", isActive: true },
  { id: "-qkpzenjxe", login: "polysweet@skynet.ze", password: "123zxc78", isActive: true },
  { id: "-e51cpd4di", login: "ajax2k@change.ua", password: "ert234qw", isActive: false }
];

const initialPosts = {
  "-s19a6hqce": [
    { id: "-5sgljaskg", text: "post #1", likes: 3 },
    { id: "-199hb6igr", text: "post #2", likes: 5 },
    { id: "-hy0eyw5qo", text: "post #3", likes: 13 }
  ],
  "-qkpzenjxe": [
    { id: "-5tu69g5rf", text: "post #1", likes: 8 },
    { id: "-bje766393", text: "post #2", likes: 15 }
  ],
  "-e51cpd4di": [
    { id: "-9y6nkmlj4", text: "post #1", likes: 18 },
    { id: "-i03pbhy3s", text: "post #2", likes: 45 }
  ],
};
let loginInput = document.getElementById('login'); 
let passwordInput = document.getElementById('password');
let searchLogin = document.getElementById('find_id');
let searchStatus = document.getElementById('id');

const getId = () => "-" + Math.random().toString(36).substr(2, 9);

function SocialBook (users = [], posts = {}) {
	this.getAllUsers = users;
	this.getUserByLogin = function (login) {
		const resultLogin = users.find(user => user.login === login);
		let element = document.getElementById('user_info');
		element.innerHTML = null;

		if (resultLogin) {
			element.innerHTML += 'Результат поиска по логину: <br>';
			for (item in resultLogin) {
				element.innerHTML += `  ${item} : ${resultLogin[item]} <br>`;	
			}		
			return resultLogin;
		} else {
			element.innerHTML = 'Пользователь с таким логином не найден!';
		}		
	}
	this.getUserStatus = function (userId) {
		let res = '';
		let element = document.getElementById('user_info');
		const resultId = users.find(user => user.id === userId);
		if (resultId) {			
			resultId.isActive === true ? res = 'active' : res = 'inactive';
			element.innerHTML = `Статус пользователя ${res}`;
		} else {
			element.innerHTML = `Пользователь с id ${userId} не найден`;
		}
		
		
		return res;
	}
	this.addUser = function (user = {}) {
		let element = document.getElementById('user_info');
		if (loginInput.value && passwordInput) {
			user.id = getId();
			user.isActive = false;
			users.push(user);		
			element.innerHTML = null;
			for (el of users) {

				element.innerHTML += `user <br>`;
				for (item in el) {
					element.innerHTML += `  ${item} : ${el[item]} <br>`;
				}
				element.innerHTML += `<br>`			
			}
			return users;
		} else {
			element.innerHTML = `Пустое поле! Повторите ввод имени и/или пароля`;
		}
				
	}
	this.removeUserById = function (userId) {
		const filterUsers = users.filter(user => user.id !== userId);
		users = filterUsers;
		return users;
	}
	this.getUsersCount = users.length;

}

let a = new SocialBook(initialUsers, initialPosts);

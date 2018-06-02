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

const testUser = {login: 'Serg', password: '123456'};

const getId = () => "-" + Math.random().toString(36).substr(2, 9);

function SocialBook (users = [], posts = {}) {
	this.getAllUsers = users;
	this.getUserByLogin = function (login) {
		const resultLogin = users.find(user => user.login === login);
		return resultLogin;
	}
	this.getUserStatus = function (userId) {
		let res = '';
		const resultId = users.find(user => user.id === userId);
		resultId.isActive === true ? res = 'active' : res = 'inactive';
		return res;
	}
	this.addUser = function (user = {}) {
		user.id = getId();
		user.isActive = false;
		users.push(user);
		return users;
	}
	this.removeUserById = function (userId) {
		const filterUsers = users.filter(user => user.id !== userId);
		users = filterUsers;
		return users;
	}
	this.getUsersCount = users.length;

}

let a = new SocialBook(initialUsers, initialPosts);
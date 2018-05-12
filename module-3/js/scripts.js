const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];
let login = prompt("Введите свой логин:");

let result = addLogin(logins,login);
alert(result);

function addLogin(logins, login) {
	if (Array.isArray(logins) && typeof(login) == "string") {
		if (checkLoginValidity (login)) {
			if (checkIfLoginExists (logins, login)) {
				return 'Такой логин уже используется!'; 
			} else {
				logins.push(login);
				console.log(logins);
				return 'Ваш логин успешно добавлен!';
			}
		} else {
			return "Ошибка! Логин должен быть от 4 до 16 символов";
		}
	} else {
		return "Неправильный формат ввода пароля";
	}

}

function checkLoginValidity (login) {
	if (login.length >= 4 && login.length <= 16) {
		return true;
	} else {
		return false;
	}
}

function checkIfLoginExists (logins, login) {
	if (logins.includes(login)) {
		return true;
	} else {
		return false;
	}
}


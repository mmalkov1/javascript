const passwords = ['qwerty', '111qwe', '123123', 'r4nd0mp4zzw0rd'];
let userInput,
	countAttempt = 3;



while (countAttempt > 0) {
	userInput = prompt('Введите свой пароль:');
	if (userInput !== null) {
		if (passwords.includes(userInput)) {
			alert('Добро пожаловать!');
			break;
		} else {
			countAttempt--;
			if (countAttempt > 0) {
				alert (`Неверный пароль, у вас осталось ${countAttempt} попыток`);
			} else {
				alert ('У вас закончились попытки, аккаунт заблокирован!');
			}
		}
	} else {
		break;
	}
	
}
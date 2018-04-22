
let sharm = 15;
let hurgada = 25;
let taba = 6;
let userSeats = +prompt ("Введите количество мест, которое Вы хотите забронировать: ");

if (userSeats > 0) {
	userSeats = Math.ceil(userSeats);
} else {
	userSeats = userSeats + NaN;
}
switch (isNaN(userSeats)) {
	case true: 
		alert ("Ошибка ввода");
		break;
	case false: 
		if (userSeats <= taba) {
			let userChoise = confirm ("Есть место в группе Таба. Согласны ли Вы быть в данной группе?");
			if (userChoise === true) {
				alert ("Приятного путешествия в группе Таба");
				taba = taba - userSeats;
			} else if (userSeats <= sharm) {
				userChoise = confirm ("Есть место в группе Шарм. Согласны ли Вы быть в данной группе?");
				if (userChoise === true) {
					alert ("Приятного путешествия в группе Шарм");
					sharm = sharm - userSeats;
				} else if (userSeats <= hurgada) {
					userChoise = confirm ("Есть место в группе Хурагада. Согласны ли Вы быть в данной группе?");
					if (userChoise === true) {
						alert ("Приятного путешествия в группе Хургада");
						hurgada = hurgada - userSeats;
					} else {
						alert ("Извините, мест нет.");
					} 
				}
			} 	
		} else if (userSeats <= sharm) {
			let userChoise = confirm ("Есть место в группе Шарм. Согласны ли Вы быть в данной группе?");
			if (userChoise === true) {
				alert ("Приятного путешествия в группе Шарм");
				sharm = sharm - userSeats;
			} else if (userSeats <= hurgada) {
				userChoise = confirm ("Есть место в группе Хурагада. Согласны ли Вы быть в данной группе?");
				if (userChoise === true) {
					alert ("Приятного путешествия в группе Хургада");
					hurgada = hurgada - userSeats;
				} else {
					alert ("Извините, мест нет.");
				} 
			}
		} else if (userSeats <= 25) {
			let userChoise = confirm ("Есть место в группе Хургада. Согласны ли Вы быть в данной группе?");
			if (userChoise === true) {
				alert ("Приятного путешествия в группе Хургада");
				hurgada = hurgada - userSeats;
			} else {
				alert ("Извините, мест нет.");
			} 
		} else {
			alert ("Извините, мест нет.");
		}
}		
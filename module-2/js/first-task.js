let userInput = '';
const numbers = [];
let total = 0;

do {
	userInput = prompt('Введите число для суммирования');
	if (userInput !== null) {
		if (+userInput && userInput.length !== 0) {
			numbers.push(+userInput);	
		} else {
			alert ('Вы не ввели число. Пожалуйста, повторите ввод!');
			continue;
		}
		
	} else {
		break;
	}
} while (userInput !== null);

for (item of numbers) {
	total += item;
}
alert(`Общая сумма чисел равна ${total}`);

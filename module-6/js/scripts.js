class Hamburger {
	constructor (size, stuffing) {
		this._size = size;
		this._stuffing = stuffing; 
		this._toppings = [];
		this._total = '';
	}

	addTopping(topping) {
		if (!this._toppings.includes(topping)) {
			this._toppings.push(topping);
		}
		
	}

	removeTopping(topping) {
		this._toppings = this._toppings.filter(item => item !== topping);
	}

	getToppings () {
		return this._toppings;
	}

	get toppings () {
		return this._toppings;
	}

	getSize () {
		return this._size;
	}

	get size () {
		return this._size;
	}

	get stuffing () {
		return this._stuffing;
	}

	calculatePrice () {
		let sizePrice = Hamburger.SIZES[this._size].price;
		let stuffingPrice = Hamburger.STUFFINGS[this._stuffing].price;
		let toppingsPrice = this._toppings.reduce((sum, value) => sum + Hamburger.TOPPINGS[value].price, 0);
		let totalPrice = sizePrice + stuffingPrice + toppingsPrice;
		return totalPrice; 
	}

	get price () {
		return this.calculatePrice();
	}

	calculateCalories() {
		let sizeCalories = Hamburger.SIZES[this._size].calories;
		let stuffingCalories = Hamburger.STUFFINGS[this._stuffing].calories;
		let toppingsCalories = this._toppings.reduce((sum, value) => sum + Hamburger.TOPPINGS[value].calories, 0);
		let totalCalories = sizeCalories + stuffingCalories + toppingsCalories;
		return totalCalories; 
	}

	get calories () {
		return this.calculateCalories();
	}
}

Hamburger.SIZE_SMALL = 'SIZE_SMALL';
Hamburger.SIZE_LARGE = 'SIZE_LARGE';

Hamburger.SIZES = {
	[Hamburger.SIZE_SMALL]: {
		price: 30,
		calories: 50,
	},
	[Hamburger.SIZE_LARGE]: {
		price: 50,
		calories: 100,
	},
};

Hamburger.STUFFING_CHEESE = 'STUFFING_CHEESE';
Hamburger.STUFFING_SALAD = 'STUFFING_SALAD';
Hamburger.STUFFING_MEAT = 'STUFFING_MEAT';

Hamburger.STUFFINGS = {
	[Hamburger.STUFFING_CHEESE]: {
		price: 15,
		calories: 20,
	},
	[Hamburger.STUFFING_SALAD]: {
		price: 20,
		calories: 5,
	},
	[Hamburger.STUFFING_MEAT]: {
		price: 35,
		calories: 15,
	},
};

Hamburger.TOPPING_SPICE = 'TOPPING_SPICE';
Hamburger.TOPPING_SAUCE = 'TOPPING_SAUCE';

Hamburger.TOPPINGS = {
	[Hamburger.TOPPING_SPICE]: {
		price: 10,
		calories: 10,
	},
	[Hamburger.TOPPING_SAUCE]: {
		price: 15,
		calories: 5,
	},
};

const hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);
// Добавка из приправы
hamburger.addTopping(Hamburger.TOPPING_SPICE);

// Спросим сколько там калорий
console.log("Calories: ", hamburger.calculateCalories());

// Сколько стоит?
console.log("Price: ", hamburger.calculatePrice());

// Я тут передумал и решил добавить еще соус
hamburger.addTopping(Hamburger.TOPPING_SAUCE);

// А сколько теперь стоит? 
console.log("Price with sauce: ", hamburger.calculatePrice());

// Проверить, большой ли гамбургер? 
console.log("Is hamburger large: ", hamburger.getSize() === Hamburger.SIZE_LARGE); // -> false

// Убрать добавку
hamburger.removeTopping(Hamburger.TOPPING_SPICE);
						     
// Смотрим сколько добавок
console.log("Hamburger has %d toppings", hamburger.getToppings().length); // 1
const products = {
  bread: 10,
  milk: 15,
  apples: 20,
  chicken: 50,
  pork: 80,
  cheese: 60,
  tea: 20,
  candy: 25
};

const order = {
  bread: 2,
  milk: 2,
  apples: 1,
  cheese: 1
};


function Cashier (name, products) {
  this.name = name;
  this.products = products;
  let totalPrice = 0;
  let customerMoney = 0;
  let changeAmount = 0;
  this.countTotalPrice = function(order) {
  	for (product in order) {
  		totalPrice = totalPrice + products[product]*order[product];
  	}
  	console.log(totalPrice);
  };

	this.getCustomerMoney = function () {
   	if (customerMoney < totalPrice) {
      customerMoney = +prompt(`Сумма ваших покупок: ${totalPrice}, введите сумму денег:`);
      if(customerMoney === null) {
          return null;
      }
    };				
	};
	this.countChange = function () {
    return customerMoney - totalPrice;
	};
	this.reset = function () {
      totalPrice = 0;
      customerMoney = 0;
      changeAmount = 0;
  };
  this.serve = function (order) {
      this.countTotalPrice(order);
      this.getCustomerMoney();
      this.countChange();
      if (customerMoney >= totalPrice) {
          console.log(`Спасибо за покупку, ваша сдача: ${this.countChange()}`);
      } else {
          console.log(`Очень жаль, что-то пошло не так, приходите еще`);
      }
      this.reset();
  }
}


let a = new Cashier ('Test', products);
console.log(a.serve(order));
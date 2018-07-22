
class Timer {
	constructor (container) {
		this.createTimer(container);
	}

	createTimer (container) {
		createDOM (container);
		let timerBox = document.querySelector(`${container} .js-time`);	
		let startButton = document.querySelector(`${container} .js-start`);
		let resetButton = document.querySelector(`${container} .js-reset`);
		resetButton.setAttribute("disabled","disabled");
		let lapButton = document.querySelector(`${container} .js-take-lap`);
		let laps = document.querySelector(`${container} .js-laps`);
		let status = false;
		let timerId;
		let pauseTime;
		let timer;
		let minutes;
		let seconds;
		let milliseconds;
		let startTime;

		startButton.addEventListener('click', timerStartStop);
		resetButton.addEventListener('click', timerReset);
		lapButton.addEventListener('click', newLap);

		function createDOM (container) {

			let newContainer = document.querySelector(container);
			let elements = `<div class="stopwatch">
								    <p class="time js-time">00:00.0</p>
								    <button class="btn btn-primary js-start">Start</button>
								    <button class="btn btn-info js-take-lap">Lap</button>
								    <button class="btn btn-danger js-reset">Reset</button>
								  </div>
								  <ul class="laps js-laps"></ul>`;
			newContainer.innerHTML += elements;
		}
		function timerReset () {
			clearInterval(timerId);
			timerBox.textContent = '00:00.0';
			pauseTime = 0;
			laps.innerHTML = ''; 
			status = false;
			startButton.textContent = 'Start';
			resetButton.setAttribute("disabled","disabled");
		}

		function newLap () {
			let lap = `<li>Время круга: ${minutes}:${seconds}.${milliseconds}</li>`;
			laps.innerHTML += lap;
		}

		function timerStartStop () {	
			startTime = new Date().getTime();
			if (status) {
				clearInterval(timerId);
				startButton.textContent = 'Continue';
				pauseTime = timer.getTime();
				startButton.classList.remove('btn-primary');
				startButton.classList.add('btn-warning');
			} else {
				startButton.classList.add('btn-primary');
				startButton.classList.remove('btn-warning');
				startButton.textContent = 'Pause';
				timerId = setInterval(function() {
					let currentTime = new Date;
					if (pauseTime > 0) {
						timer = new Date (currentTime - startTime + pauseTime);
					} else {
						timer = new Date (currentTime - startTime);
					}			
					minutes < 10 ? minutes = `0${timer.getMinutes()}` : minutes = timer.getMinutes();
					seconds < 10 ? seconds = `0${timer.getSeconds()}` : seconds = timer.getSeconds();
					milliseconds = Math.ceil((timer.getMilliseconds())/10);
					let timerText = `${minutes}:${seconds}.${milliseconds}`;
					timerBox.textContent = timerText;
				}, 100);
			}
			
			if (status) {status=false} else {status=true}
			resetButton.removeAttribute("disabled");
		}		
	}	
}
let containerToTimer;
let newTimer;
let count = 1;
let buttonAdd = document.querySelector('.btn-add');
let body = document.querySelector('body');
buttonAdd.addEventListener('click', function () {
	var div = document.createElement('div');
	div.className = `timer timer-${count}`;
	body.appendChild(div);
	newTimer = new Timer (`.timer-${count}`);
	count ++;
});





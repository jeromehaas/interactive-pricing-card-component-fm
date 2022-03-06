class Pricing {

	constructor() {
		this.elements = {
			input: document.querySelector('.card__slider input')
		}
		this.init();
	}

	init() {
		this.updateStyle();
		this.elements.input.addEventListener('input', () => this.updateStyle());
		this.elements.input.addEventListener('load', () => this.updateStyle());
	}

	updateStyle () {
		const value = (this.elements.input.value-this.elements.input.min)/(this.elements.input.max-this.elements.input.min)*100  	// this.style.background = 'linear-gradient(to right, #82CFD0 0%, #82CFD0 ' + value + '%, #fff ' + value + '%, white 100%)'
		this.elements.input.style.background = `linear-gradient(to right, #A4F3EB 0%, #A4F3EB ${value}%, #ECF0FB ${value}%, #ECF0FB 100%)`;
	}

}

new Pricing();
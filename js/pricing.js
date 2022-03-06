class Pricing {

	constructor() {
		this.elements = {
			slider: document.querySelector('.card__slider input'),
			switch: document.querySelector('.card__billing input'),
			invoiceInterval: document.querySelector('.card__price span:nth-child(2)'),
			pageviews: document.querySelector('.card__pageviews p'),
			total: document.querySelector('.card__price span:nth-child(1)')
		};
		this.offer = {
			invoiceInterval: 'monthly',
			pageviews: '100K Pageviews',
			total: '$16.00'
		}
		// this.packages = {
		// 	['10K']: { monthly: 8, yearly: 72 },
		// 	['50K']: { monthly: 12, yearly: 108 },
		// 	['100K']: { monthly: 16, yearly: 144 },
		// 	['500K']: { monthly: 24, yearly: 216 },
		// 	['1M']: { monthly: 36, yearly: 324 }
		// }
		this.packages = [
			{ pageviews: '10K Pageviews', monthly: '$8.00', yearly: '$72.00' },
			{ pageviews: '50K Pageviews', monthly: '$12.00', yearly: '$108.00' },
			{ pageviews: '100K Pageviews', monthly: '$16.00', yearly: '$144.00' },
			{ pageviews: '500K Pageviews', monthly: '$24.00', yearly: '$216.00' },
			{ pageviews: '1M Pageviews', monthly: '$36.00', yearly: '$324.00' }
		];
		this.init();
	}
	
	init() {
		this.updateSliderStyle();
		this.elements.slider.addEventListener('input', () => {
			this.updateSliderStyle()
			this.updatePageviews();
			this.updateTotal();
		});
		this.elements.switch.addEventListener('input', () => {
			this.updateInvoiveInterval();
			this.updateTotal();
		});
		this.elements.slider.addEventListener('load', () => this.updateSliderStyle());
	}
	
	updateInvoiveInterval() {
		this.offer.invoiceInterval =  this.elements.switch.checked ? 'yearly' : 'monthly';
		this.elements.invoiceInterval.innerText = this.offer.invoiceInterval === 'monthly' ? '/ month' : '/ year';
	}

	updatePageviews() {
		this.elements.pageviews.innerText = this.packages[this.elements.slider.value].pageviews;
	}

	updateTotal() {
		this.elements.total.innerText = this.packages[this.elements.slider.value][this.offer.invoiceInterval];
	}

	updateSliderStyle () {
		const value = (this.elements.slider.value-this.elements.slider.min)/(this.elements.slider.max-this.elements.slider.min)*100  	// this.style.background = 'linear-gradient(to right, #82CFD0 0%, #82CFD0 ' + value + '%, #fff ' + value + '%, white 100%)'
		this.elements.slider.style.background = `linear-gradient(to right, #A4F3EB 0%, #A4F3EB ${value}%, #ECF0FB ${value}%, #ECF0FB 100%)`;
	}

}

new Pricing();
import CarouselSlider from './carouselSlider';

const formulaSlider = () => {
// -
  let itemPopOne = document.querySelectorAll('.formula-item__icon-inner-text')[0]
  let itemPopTwo = document.querySelectorAll('.formula-item__icon-inner-text')[1]
  let itemPopThree = document.querySelectorAll('.formula-item__icon-inner-text')[2]
  let itemPopFour = document.querySelectorAll('.formula-item__icon-inner-text')[3]
  let itemPopFive = document.querySelectorAll('.formula-item__icon-inner-text')[4]
  let itemPopSix = document.querySelectorAll('.formula-item__icon-inner-text')[5]

  let popupTextOne = document.querySelectorAll('.formula-item-popup')[0]
  let popupTextTwo = document.querySelectorAll('.formula-item-popup')[1]
  let popupTextThree = document.querySelectorAll('.formula-item-popup')[2]
  let popupTextFour = document.querySelectorAll('.formula-item-popup')[3]
  let popupTextFive = document.querySelectorAll('.formula-item-popup')[4]
  let popupTextSix = document.querySelectorAll('.formula-item-popup')[5]

  itemPopOne.addEventListener("mouseover",function() {
    popupTextOne.style.visibility='visible'
  })
  itemPopOne.addEventListener("mouseout",function() {
    popupTextOne.style.visibility='hidden'
  })

  itemPopTwo.addEventListener("mouseover",function() {
    popupTextTwo.style.visibility='visible'
  })
  itemPopTwo.addEventListener("mouseout",function() {
    popupTextTwo.style.visibility='hidden'
  })

  itemPopThree.addEventListener("mouseover",function() {
    popupTextThree.style.visibility='visible'
  })
  itemPopThree.addEventListener("mouseout",function() {
    popupTextThree.style.visibility='hidden'
  })

  itemPopFour.addEventListener("mouseover",function() {
    popupTextFour.style.visibility='visible'
  })
  itemPopFour.addEventListener("mouseout",function() {
    popupTextFour.style.visibility='hidden'
  })

  itemPopFive.addEventListener("mouseover",function() {
    popupTextFive.style.visibility='visible'
  })
  itemPopFive.addEventListener("mouseout",function() {
    popupTextFive.style.visibility='hidden'
  })

  itemPopSix.addEventListener("mouseover",function() {
    popupTextSix.style.visibility='visible'
  })
  itemPopSix.addEventListener("mouseout",function() {
    popupTextSix.style.visibility='hidden'
  })
// -
  const slider = new CarouselSlider({
    main: '.formula-slider-wrap',
    wrap: '.formula-slider',
    prev: '#formula-arrow_left',
    next: '#formula-arrow_right',
    stylesId: 'js-formula-slider-styles',
    slidesToShow: 1,
    styleClasses: {
      main: 'js-formula-main-slider',
      wrap: 'js-formula-wrap-slider',
      item: 'js-formula-slider__item',
    },
    styles: `
		.js-formula-slider__item {
			justify-content: flex-start !important;
		}
		`,
  });

  slider.slides[0].classList.toggle('active-item');

  slider.prevSlider = function() {
    if (this.options.position > 0) {
      this.slides[this.options.position].classList.toggle('active-item');
      --this.options.position;
      this.wrap.style.transform = `translateX(-${this.options.position * this.options.widthSlide}%)`;
      this.next.style.visibility = '';
      if (this.options.position === 0) this.prev.style.visibility = 'hidden';
      this.slides[this.options.position].classList.toggle('active-item');
    }
  };

  slider.nextSlider = function() {
    if (this.options.position < this.options.maxPosition) {
      this.slides[this.options.position].classList.toggle('active-item');
      ++this.options.position;
      this.wrap.style.transform = `translateX(-${this.options.position * this.options.widthSlide}%)`;
      this.prev.style.visibility = '';
      if (this.options.position === this.options.maxPosition) this.next.style.visibility = 'hidden';
      this.slides[this.options.position].classList.toggle('active-item');

    }
  };

  slider.init();
};

export default formulaSlider;
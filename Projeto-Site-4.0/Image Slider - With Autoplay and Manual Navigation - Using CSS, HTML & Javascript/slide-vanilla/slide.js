const carouselSlide = document.querySelector('.carousel-slider');
const carouselImages = document.querySelectorAll('.carousel-slider img');

const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

let counter = 1;

const size = carouselImages[0].clientWidth;

nextBtn.addEventListener('click', () =>{
    if (counter >= carouselImages.length - 1){
        return;
    };
    carouselSlide.style.transition = "transform 0.8s ease-in-out";
    counter++;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

prevBtn.addEventListener('click', () =>{
    if(counter <= 0) {
        return;
    };
    carouselSlide.style.transition = "transform 0.8s ease-in-out";
    counter--;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

carouselSlide.addEventListener('transitionend', () => {
    console.log('Entrou no transitionend  ' + carouselImages[counter].id);

    if(carouselImages[counter].id === 'lastClone'){
        console.log('Entrou no if do lastClone')
        carouselSlide.style.transition = "none";
        counter = carouselImages.length - 2;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    };
    if(carouselImages[counter].id === 'firstClone'){
        console.log('Entrou no if do firstClone')
        carouselSlide.style.transition = "none";
        counter = carouselImages.length - counter;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    };
});
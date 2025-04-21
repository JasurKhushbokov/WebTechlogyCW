document.querySelector('.header__menubtn').addEventListener('click', function(e) {
    document.querySelector('.header__menu-mobile').classList.add('active')
});

document.querySelector('.header__menubtn-closelink').addEventListener('click', function(e) {
    document.querySelector('.header__menu-mobile').classList.remove('active')
})

$(document).ready(function(){
    $('.main-section__inner-slider').owlCarousel({
        loop: true,
        nav: true,
        navText: ["<i class='fas fa-chevron-left'></i>", "<i class='fas fa-chevron-right'></i>"],
        responsive:{
            0:{
                items: 1
            }
        }
    })
  });

$(document).ready(function(){
     $('.our-menu__slider').owlCarousel({
        loop: true,
        nav: true,
        margin: 75,
        stagepadding: 72,
        autoplay: true,
        autoplayTimeout: 1000,
        autoplayHoverPause: true,
        navText: ["<i class='fas fa-arrow-left'></i>", "<i class='fas fa-arrow-right'></i>"],
        responsive:{
            0:{
                items: 5
            }
        }
    })
  });

var slidercatalogArrows = document.querySelectorAll('.main-section__slidercataloguearrow');
console.log(slidercatalogArrows);
for(var i = 0; i < slidercatalogArrows.length; i++){
    slidercatalogArrows[i].addEventListener('click', function (e){
        e.preventDefault();
        this.querySelector('img').classList.toggle('open');
        this.parentElement.parentElement.querySelector('.main-section__slidercataloguecontent').classList.toggle('active');
    })
}

var foodorder = document.querySelectorAll('.bestsellers__col');

for (var i = 0; i < foodorder.length; i++){
    var btns = foodorder[i].querySelectorAll('button');
    for(var j = 0; j < btns.length; j++){
        btns[j].addEventListener('click', function(e){
            e.preventDefault();
            var productCount = parseInt(this.parentElement.querySelector('.bestsellers__col-count').textContent);
            switch(this.name){
                case 'plus': productCount++;
                    this.parentElement.querySelector('.bestsellers__col-count').textContent = productCount;
                    break;
                case 'minus': productCount--;
                    this.parentElement.querySelector('.bestsellers__col-count').textContent = productCount;
                    break;
            }
            if(productCount < 1){
                this.parentElement.querySelector('.bestsellers__col-count').textContent = 1;
            }
        })
    }
}

var backfaceActionBtn = document.querySelectorAll('.bestsellers__col-backface-action');

for (var i = 0; i < backfaceActionBtn.length; i++){
    backfaceActionBtn[i].addEventListener('click', function(e) {
        e.preventDefault();
        this.parentElement.parentElement.querySelector('.bestsellers__col-backface-text').classList.toggle('active');
        this.parentElement.parentElement.querySelector('.open').classList.toggle('active');
    })
}
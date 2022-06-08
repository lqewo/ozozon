import * as flsFunction from "./modules/functions.js";


flsFunction.isWebp();

 import Swiper, { Navigation, Pagination } from 'swiper';

  const swiper = new Swiper();


    $(function() {
        $('select').styler();

        $('.header__burger').on('click', function (e) {
          e.preventDefault()
          $('.header__menu, .header__burger, .header__menu-item' ).toggleClass('active');

          $('body').toggleClass('lock');

          })

          $('.wash__tab-item').on('click', function (e){
            e.preventDefault();
            $('.wash__tab-item').removeClass('active');
            $('.wash__img').removeClass('wash__img--active');
            $($(this).attr('href')).addClass('wash__img--active');
            $(this).addClass('active');
          })
    });
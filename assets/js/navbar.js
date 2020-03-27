$(window).on('scroll', function(){
    if ($(window).scrollTop()) {
        $('nav').addClass('menu');
        $('nav').removeClass('fondo__transparente');
    }

    else {
        $('nav').removeClass('menu');
        $('nav').addClass('fondo__transparente');
    }
})


// Codigo css animacion al volver al top

// .fondo__transparente {
//     -webkit-animation: fondo__transparente 0.5s;
//     -moz-animation: fondo__transparente 0.5s;
//     -ms-animation: fondo__transparente 0.5s;
//     -o-animation: fondo__transparente 0.5s;
//     animation: fondo__transparente 0.5s;
//   }

//   .fondo__negro {
//     background-color: #00667f;
//     transition: all 0.5s;
//   }

// @keyframes fondo__transparente {
//     from { 
//         background-color: rgba($color: $color-principal, $alpha: 1);
//     }

//     to {
//         background-color: rgba($color: $color-principal, $alpha: 0);
//     }
// }

// @media (min-width: 500px) {

//     .navbar .nav-item {
//         font-size: 1rem;
//     }
// }


// @media (min-width: 992px) {

//     .menu a {
//         font-size: 1.3rem;
//         padding: 0 20px;
//         background-color: rgba($color: red, $alpha: 0);
//     }

//     .menu a:nth-child(even) {
//         border-right: solid 1px white;
//         border-left: solid 1px white;
//     }

// }
//buttom
const   btnMenu = document.querySelector('#menu'),
menuContent = document.querySelector('.menu-content');

btnMenu.addEventListener('click', () =>{
menuContent.classList.toggle('menu-active');
});

//Burger Responsive
const menuBurger = document.getElementById('menu-burger');
menuBurger.addEventListener('click', function () {
  const menuList = document.getElementById('menu-list');
  menuList.classList.toggle('active');
});

//Formulario
$(document).ready(function(){

    $('#contact').submit(function(e){
        e.preventDefault();


        var usuario = {
            "firts-name" : $('input[name="firt_name"]').val(),
            "last-name" : $('input[name="last_name"]').val(),
            "email" : $('input[name="email"]').val(),
            "phone" : $('input[name="phone"]').val(),
        };
        console.log(usuario);
        $.post($(this).attr("action"),usuario, function(responsive){
            console.log(responsive);
        });
        
        return false;
    });
});

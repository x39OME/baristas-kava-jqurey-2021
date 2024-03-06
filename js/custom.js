/* global $, alert, console */

$(function(){
    
    'use strict';



    $('.container .social .fa-angle-left ').click(function(){

        $('.container .social div ').toggleClass('media').toggleClass('media-show').fadeIn(1000),
        $('.container .social span i ').toggleClass('fa-angle-right').toggleClass('fa-angle-left').fadeIn(500)

    });

    $('.container .social .fa-angle-right').click(function(){

        $('.container .social .media-show div').toggleClass('media-show').toggleClass('media').fadeIn(500),
        $('.container .social span i ').toggleClass('fa-angle-left').toggleClass('fa-angle-right').fadeIn(500)


    });



    // Scroll To Top Button
    
    $(window).scroll(function(){
        $('.block').each(function(){

            if ($(window).scrollTop() > $(this).offset().top) {
            }
        });
        var scrollToTop = $('.scroll-to-top')

        if ($(window).scrollTop() >= 650) {

            if (scrollToTop.is(':hidden')) {
                scrollToTop.fadeIn(500);
            }

            } else {
                scrollToTop.fadeOut(500);
            }
    });
    // Clock On Scroll To Top Go Up

    $('.scroll-to-top').click(function(event){

        event.preventDefault();

        $('html, body').animate({

            scrollTop: 0
        }, 1000);
    });
        
    // Trigger Nice Scroll Plugin
    // https://nicescroll.areaaperta.com/demo/
    // https://www.areaaperta.com/
    
    $('html').niceScroll({
        
        cursorcolor: '#000',
        cursorwidth: 10,
        cursorborderradius: 0,
        cursorborder: '2px solid #000'
        
    });
    
    // Change Header Height
    
    $('.header').height($(window).height());
    
    
    // Scroll To Featrues 
    
    $('.header .arrow i').click(function () {
        
        $('html, body').animate({
            
            scrollTop: $('.featrues').offset().top

        }, 1000);
    });
    
    $('.hire').click(function(){
        
        $('html, body').animate({
            
            scrollTop: $('.our-team').offset().top

        }, 1000);
    });
    
    $('.coffee').click(function(){
        
        $('html, body').animate({
            
            scrollTop: $('.our-shop').offset().top

        }, 1000); 
    });
    
    
    
    
    
    // Show Hidden Prod From Our shop
    
    $('.show-more').click(function (){
        
        $('.our-shop .hidden').fadeIn(1000);
    })
    
    // Check Testimonials
    
    var leftArrow = $('.testim .fa-chevron-left'),
        
        rightArrow = $('.testim .fa-chevron-right');
    
    function checkClients() {
        
        if ($('.client:first').hasClass('active')) {
            
            leftArrow.fadeOut();
            
        } else {
            
            leftArrow.fadeIn();
        }
        
        if ($('.client:last').hasClass('active')) {
            
            rightArrow.fadeOut();
            
        } else {
            
            rightArrow.fadeIn();
        }        
    }
    
    checkClients();
    
    $('.testim i').click(function () {
        
        if ($(this).hasClass('fa-chevron-right')) {
            
            $('.testim .active').fadeOut(100, function () {
               
                $(this).removeClass('active').next('.client').addClass('active').fadeIn();
                
                checkClients();
            });
            
        } else {
            
            $('.testim .active').fadeOut(100, function () {
               
                $(this).removeClass('active').prev('.client').addClass('active').fadeIn();
                
                checkClients(); 
            });
        }  
    });

    
});






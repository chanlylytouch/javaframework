$(document).ready(function(){
    $('#username, #password, #email').on('keyup',function(){
        var user = $('#username').val();
        var pass = $('#password').val();
        var email = $('#email').val();
        
        var email = $('#email').val();
        $('.card').html(user);
        $('.card1').html(pass);
        $('.card2').html(email);
       
    })
    $('#gender').on('click', function(){
        var gender = $('#gender').val();
        $('.card3').html(gender);
    })
})

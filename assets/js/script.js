//Navlink correccion por fixed top
$('.nav-link, a').click(function(event) {
    event.preventDefault();
    
    window.scrollTo(0, $($(this).attr('href'))[0].offsetTop - 65);

    console.log($($(this).attr('href'))[0].offsetTop - 100)
});



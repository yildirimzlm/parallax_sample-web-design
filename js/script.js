$(document) .ready(function(){
  $('.down').click(function(e){
    var linkHref=$(this).attr('href');
    $('html, body').animate({
      scrollTop: $(linkHref).offset().top
    }, 1000);
    switch (linkHref){
        case "#band1":
            $(".down").removeClass("active");
            $("#design").addClass("active");
            break;
        case "#img2":
            $(".down").removeClass("active");
            $("#vizyon").addClass("active");
            break;
        case "#band2":
            $(".down").removeClass("active");
            $("#tasarim").addClass("active");
            break;
        case "#img3":
            $(".down").removeClass("active");
            $("#hakkimizda").addClass("active");
            break;
        case "#band3":
            $(".down").removeClass("active");
            $("#iletisim").addClass("active");
            break;
        default :
            $(".down").removeClass("active");
            $("#anasayfa").addClass("active");
            break;

    }
  });

    $(window).scroll(function () {
        if ($(this).scrollTop() > 240) {
            $('.header').addClass('header-top');
        } else {
            $('.header').removeClass("header-top");
        }
    })

});



function c(o){
    console.log(o);
}

$(function(){
    $('.nav ul li a').bind('click', function(){
        $('.information').hide();
        $('.about').show();
        var id = $(this).attr('id');
        $('.content').children().hide();
        $('.' + id).show();
        $('.nav ul li').removeClass();
        $(this).parent('li').addClass('active');
        return false;
    });

    $('.list').find('li').on('click', function(){
        var id = $(this).attr('id');
        var info = $('.information');
        $('.about').hide();
        info.find('.' + id).show();

    });

    //$('.list ul li').on('click', function(){
    //    var id = $(this).attr('id');
    //    var info = $('.information');
    //    $('.about').hide();
    //    info.show();
    //    info.children().hide();
    //    $('.' + id + 'Info').show();
    //});
    //
    //$('.list ul li ul li').on('click', function(){
    //    var cl = $(this).attr('class');
    //
    //    $('.main').find('div:not(.list)').hide();
    //    $('.' + cl).show();
    //})

});



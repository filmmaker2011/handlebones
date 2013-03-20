var oSlider7 = $('#slider7');

oSlider7.tinycarousel({ interval: true });

//The tinycarousel_move method you can use to make a anchor to a certain slide.
$('#gotoslide4').click(function(){
    oSlider7.tinycarousel_move(4);
    return false;
});

//The tinycarousel_start method starts the interval.
$('#startslider').click(function(){
    oSlider7.tinycarousel_start();
    return false;
});

//The tinycarousel_stop method stops the interval.
$('#stopslider').click(function(){
    oSlider7.tinycarousel_stop();
    return false;
});
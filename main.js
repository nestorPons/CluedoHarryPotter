
$('.sel').click(function(el){
    el.stopPropagation()
    el.preventDefault()
    if($(this).hasClass('colorA')){
        $(this).removeClass('colorA')
        $(this).addClass('colorB')
    } else if ($(this).hasClass('colorB')) {
        $(this).removeClass('colorB')
        $(this).addClass('colorC')
    } else if ($(this).hasClass('colorC')) {
        $(this).removeClass('colorC')    
    } else {
        $(this).addClass('colorA')
    }
})

$('#limpiar').click(function(){
    $('.sel').removeClass('colorA colorB colorC')
})


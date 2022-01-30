
$('.sel').click(function(el){
    el.stopPropagation()
    el.preventDefault()
    let color = ''
    if($(this).hasClass('colorA')){
        $(this).removeClass('colorA')
        color='colorB'
    } else if ($(this).hasClass('colorB')) {
        $(this).removeClass('colorB')
        color='colorC'
    } else if ($(this).hasClass('colorC')) {
        $(this).removeClass('colorC')    
    } else {
        color='colorA'
    }
    $(this).addClass(color)
    localStorage.setItem($(this).attr('id'), color)
})

$('#limpiar').click(function(){
    $('.sel').removeClass('colorA colorB colorC')
    $('.suspect').prop('checked', false)
    $('.object').prop('checked', false)
    $('.location').prop('checked', false)
    localStorage.clear()
})

$('.suspect').click(function(){
    localStorage.setItem('suspect',$(this).attr('id'))
})
$('.object').click(function(){
    localStorage.setItem('object',$(this).attr('id'))
})
$('.location').click(function(){
    localStorage.setItem('location',$(this).attr('id'))
})
// inicio 
$('.sel').each(function(index){
    color = localStorage.getItem($(this).attr('id'))
    $(this).addClass(color)
})

$('#'+ localStorage.getItem('suspect')).prop('checked',true)
$('#'+ localStorage.getItem('object')).prop('checked',true)
$('#'+ localStorage.getItem('location')).prop('checked',true)

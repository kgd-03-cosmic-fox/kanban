function test(){
    console.log('clickclick')
}

$('#organization').click(event=>{
    
    event.preventDefault()

    if($('#organization').val() == "0"){

        $('.items').show()
        $('#organization').val('1')
    
    }else{
    
        $('.items').hide()
        $('#organization').val('0')
    
    }

})
   
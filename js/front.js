$(function () {
    $(".main").onepage_scroll({
        sectionContainer: "section", 
        easing: "ease", 
        animationTime: 1000,
        pagination: true, // You can either show or hide the pagination. Toggle true for show, false for hide.
        updateURL: false, // Toggle this true if you want the URL to be updated automatically when the user scroll to each page.
        beforeMove: function (index) {
        }, // This option accepts a callback function. The function will be called before the page moves.
        afterMove: function (index) {
              	if(index==2){
              		$('.lined-compact').each(function(index,item){
              			$('.lined'+index).find('.percent').addClass('animations'+index)	
//                       console.log()
              		})  
              	}else{
              		$('.lined-compact').each(function(index,item){
              			$('.lined'+index).find('.percent').removeClass('animations'+index)	
//                       console.log()
              		})  
              	}
        }, // This option accepts a callback function. The function will be called after the page moves.
        loop: false, // You can have the page loop back to the top/bottom when the user navigates at up/down on the first/last page.
        keyboard: true, // You can activate the keyboard controls
        responsiveFallback: 1000, 
        direction: "vertical"            
    });
     let wid=$('.slide-item')[0]
    $('.circle').find('a').each(function(index,item){
    	$(item).on('click',function(){
    		wid=$('.slide-item')[$(item).index()]
    		console.log($(this).index())
    		$('.sldie-show').stop().animate({
    			left:-($(wid).width()+20)*($(this).index())
    		},1000)
    		$(this).addClass('on')
    		$(this).siblings().removeClass('on')
    	})
    })
    
    //wx
     $('')
     var $pop=$('#show')
    console.log( $('#wx').attr('data-wx'))
    $('#wx').click(function(){
       $pop.css('display','block')
       $('.wx').css({
       	'display':'block',
       	'margin':'auto'
       })
       $('.wx').attr('src', $('#wx').attr('data-wx'))
    })
    $('#qq').click(function(){
       $pop.css('display','block')
       $('.title').text($('#qq').attr('id')+"：")
       $('.content').text($('#qq').attr('data-qq'))
    })
    $('#phone').click(function(){
       $pop.css('display','block')
       $('.title').text($('#phone').attr('id')+"：")
       $('.content').text($('#phone').attr('data-phone'))
    })
    $pop.on('click',function(){
    	$pop.css('display','none')
    	  $('.wx').css('display','none')
    	$('.wx').attr('src')
    	  $('.title').text('')
       $('.content').text('')
    })
    $('#next').click(function(){
    	
    })
});

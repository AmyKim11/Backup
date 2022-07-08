$(window).scroll(function(){
    
    if( $(this).scrollTop() > 10){
      $("#top_btn").addClass("on");
    }
    else{
      $("#top_btn").removeClass("on");
    }
    
  });
    
$("#top_btn").click(function(){
  window.scrollTo({top : 0, behavior: 'smooth'}); 
});
$(function(){
  // $('.menu__burgerBar').click(function(){
  //   $('.menu__burgerBar').toggleClass('active');
  //   $('.menu').toggleClass('hidden');
  //   $('body').toggleClass('hidden');
  // });

  $('.menu__burgerBar').click(function(e){
    $('.menu__burgerBar').toggleClass('active');
    if($(this).hasClass('active')){
      $('body').addClass('hidden');
      $('.dimmed').addClass('active');
      $('.menu').removeClass('hidden');
    }else{
      $('body').removeClass('hidden');
      $('.menu').addClass('hidden');
      $('.dimmed').removeClass('active');
    };
  }); 
  $('.dimmed').click(function(e){
      $('body').removeClass('hidden');
          $('.menu').addClass('hidden');
          $('.menu__burgerBar').removeClass('active');
          $('.dimmed').removeClass('active');

      });
  
  
  $('.gnb__mainMenu-list').click(function(){
    $('.gnb__sub-menu').slideUp();
    if ($(this).children('.gnb__sub-menu').is(':hidden')){
       $(this).children('.gnb__sub-menu').slideDown();
       $(this).addClass('active');
       $(this).siblings('.gnb__mainMenu-list').removeClass('active');
    } else{
       $(this).children('.gnb__sub-menu').slideUp();
       $(this).removeClass('active');
    }
 });


  $(document).ready(function() {
    $(".checkAll").click(function() {
      if($(".checkAll").is(":checked")) 
      $(".checkBox").prop("checked", true);
      else $(".checkBox").prop("checked", false);
    });
    
    $(".checkBox").click(function() {
      let total = $(".checkBox").length;
      let checked = $(".checkBox:checked").length;
      
      if(total != checked) $(".checkAll").prop("checked", false);
      else $(".checkAll").prop("checked", true); 
    });
  });

    // const checkAll = document.querySelector('.checkAll')
  // const checkBox = document.querySelectorAll('.checkBox')

  // checkAll.onclick = function(){
  //   if(checkAll.checked == false){
  //     for(let i = 0; i < checkBox.length; i++){
  //       checkBox[i].checked = false; 
  //     }
  //   }else{
  //     for(let i = 0; i < checkBox.length; i++){
  //       checkBox[i].checked = true; 
  //     }
  //   }
  //   };


  //   for(let i = 0; i < checkBox.length; i++){
  //     checkBox[i].onclick = function(){
  //       if(this.checked == false){
  //         checkAll.checked = false;
  //       }else{
  //         checkAll.checked = true;
  //       }
  //     }
  //   }

});
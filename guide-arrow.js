var target = $(".guide-arrow");

$(window).scroll(function(){
  if($(window).scrollTop() > 300){
    $(target).addClass("hidden");
  }
  if($(window).scrollTop() < 300){
    $(target).removeClass("hidden");
  }
});

// handle scroll on click
target.find("a").click(function(e){
  e.preventDefault();
  var anchor = $(this).attr("href");
  scrollTo(anchor);
});

// scroller
function scrollTo(x){
  $("html,body").animate({scrollTop: $(x).offset().top},'slow');
}
// 
$(function() {
      $('#content').keyup(function (e){
          var content = $(this).val();
          var initial = "초기값 입니다."
		  console.log("initial :" +initial);
          console.log("content :" +content);

          if(content == initial){
          	$('.wrap').attr('style', "width:100%");
          	$('.butn').hide();
          }else if(content == ""){
          	$('.wrap').attr('style', "width:100%");
          	$('.butn').hide();
          }else if(content != initial){
          	$('.wrap').attr('style', "width:89%");
          	$('.butn').show();
          }
		// $(this).height(((content.split('\n').length + 1) * 1.5) + 'em');
          $('#counter').html(500 - content.length);
      });

      $('#content').keyup();
});
// 
$(function() {
      $('#content2').keyup(function (e){
          var content = $(this).val();
			$(this).height(((content.split('\n').length + 1) * 1.5) + 'em');
          $('#counter2').html(500 - content.length);
      });
      $('#content2').keyup();
});

$('#content2').prop('disabled',true);
// 
$(function() {
      $('#content3').keyup(function (e){
          var content = $(this).val();
			$(this).height(((content.split('\n').length + 1) * 1.5) + 'em');
          $('#counter3').html(500 - content.length);
      });
      $('#content3').keyup();
});

var agent = navigator.userAgent.toLowerCase();

if (agent.indexOf("chrome") != -1) {
$('#content3').prop('readonly', true);
// alert("크롬 브라우저입니다.");
}else if (agent.indexOf("safari") != -1) {
// alert("사파리 브라우저입니다.");
$('#content3').prop('readonly', true);
}else if (agent.indexOf("firefox") != -1) {
// alert("파이어폭스 브라우저입니다.");
$('#content3').prop('readonly', true);
}else if ((navigator.appName == 'Netscape' && navigator.userAgent.search('Trident') != -1) || (agent.indexOf("msie") != -1) ){
// alert("인터넷익스플로러 브라우저입니다.");
$('#content3').attr("readonly",true);
}





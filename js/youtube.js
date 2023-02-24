 // 2. This code loads the IFrame Player API code asynchronously.
 var tag = document.createElement('script');

 tag.src = "https://www.youtube.com/iframe_api";
 var firstScriptTag = document.getElementsByTagName('script')[0];
 firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

 // 3. This function creates an <iframe> (and YouTube player)
 //    after the API code downloads.
 function onYouTubeIframeAPIReady() {
  //<div id="player"><div>
   new YT.Player('player', {
     height: '360',
     width: '640',
     videoId: 'An6LvWQuj_8', //최초 재생할 유튜브 영상 ID
     playerVars:{ //영상을 재생하기 위한 변수
      autoplay: true,  //자동 재생 유뮤
      loop: true, //반복 재생 유무
      playlist: 'An6LvWQuj_8' //반복 재생할 유튜브 영상 ID 목록
    },
    events:{
      onReady: function(event){ //객체데이터 안에 함수가 있으니까 "메소드"
        event.target.mute() //영상이 준비(onReady)가 되면 음소거
      }
    }
   });
 }
 //videoId를 넣을때 https://www.youtube.com/watch?v=An6LvWQuj_8
 //주소를 다 넣지말고 뒤에 있는 An6LvWQuj_8 만 넣어줘야됨
 //소스 코드 복사를 해오면 제어가 안됨 XXX
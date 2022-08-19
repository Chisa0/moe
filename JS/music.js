let previous = document.querySelector('#pre');
let play = document.querySelector('#play');
let next = document.querySelector('#next');
let title = document.querySelector('#title');
let recent_volume= document.querySelector('#volume');
let volume_show = document.querySelector('#volume_show');
let slider = document.querySelector('#duration_slider');
let show_duration = document.querySelector('#show_duration');
let track_image = document.querySelector('#track_image');
let auto_play = document.querySelector('#auto');
let present = document.querySelector('#present');
let total = document.querySelector('#total');
let artist = document.querySelector('#artist');
let timer;
let autoplay = 0;
let index_no = 0;
let Playing_song = false;
//create a audio Element
let track = document.createElement('audio');
//All songs list

var root = "/root/music/CDS/";

let All_song = [
   {
     name: "M♭",
     path: "../music/CDs/[EAC][141203] キャラクターイメージソング「M♭」／加藤恵(CV.安野希世乃) (flac+jpg)/M♭.flac",
     img: "../music/CDs/[EAC][141203] キャラクターイメージソング「M♭」／加藤恵(CV.安野希世乃) (flac+jpg)/Cover.jpg",
     singer: "加藤恵"
   },
   {
     name: "Blooming_Lily",
     path: "../music/CDs/[EAC][141203] キャラクターイメージソング「Blooming Lily」／澤村・スペンサー・英梨々(CV.大西沙織) (flac+jpg)/Blooming Lily.flac",
     img: "../music/1/Cover.jpg",
     singer: "Lily"
   },
   {
     name: "饒舌スキャンダラス",
     path: "../music/CDs/[EAC][141203] キャラクターイメージソング「饒舌スキャンダラス」／霞ヶ丘詩羽(CV.茅野愛衣) (flac+jpg)/饒舌スキャンダラス.flac",
     img: "../music/CDs/[EAC][141203] キャラクターイメージソング「饒舌スキャンダラス」／霞ヶ丘詩羽(CV.茅野愛衣) (flac+jpg)/Cover.jpg",
     singer: "霞ヶ丘詩羽"
   },
   {
     name: "冴えない彼女の育てかた",
     path: "../music/CDs/[EAC][150128] EDテーマ「カラフル。」／沢井美空 (flac+jpg)/「冴えない彼女の育てかた」エンディングテーマ『カラフル。』.flac",
     img: "../music/CDs/[EAC][150128] EDテーマ「カラフル。」／沢井美空 (flac+jpg)/Cover1.jpg",
     singer: "沢井美空"
   },
   {
     name: "冴えない彼女の育て>かた",
     path: "../music/CDs/[EAC][150128] OPテーマ「君色シグナル」／春奈るな [初回限定盤] (flac+jpg)/「冴えない彼女の育てかた」オープニングテーマ『君色シグナル』.flac",
     img: "../music/CDs/[EAC][150128] OPテーマ「君色シグナル」／春奈るな [初回限定盤] (flac+jpg)/Cover1.jpg",
     singer: "春奈るな"
   }	   
];
// All functions
// function load the track
function load_track(index_no){
  clearInterval(timer);
  reset_slider();
  track.src = All_song[index_no].path;
  title.innerHTML = All_song[index_no].name;  
  track_image.src = All_song[index_no].img;
    artist.innerHTML = All_song[index_no].singer;
    track.load();
  timer = setInterval(range_slider ,1000);
  total.innerHTML = All_song.length;
  present.innerHTML = index_no + 1;
}
load_track(index_no);
//mute sound function
function mute_sound(){
  track.volume = 0;
  volume.value = 0;
  volume_show.innerHTML = 0;
}
// checking.. the song is playing or not
 function justplay(){
   if(Playing_song==false){
     playsong();
   }else{
     pausesong();
   }
 }
// reset song slider
 function reset_slider(){
   slider.value = 0;
 }
// play song
function playsong(){
  track.play();
  Playing_song = true;
  play.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
}
//pause song
function pausesong(){
  track.pause();
  Playing_song = false;
  play.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
}
// next song
function next_song(){
  if(index_no < All_song.length - 1){
    index_no += 1;
    load_track(index_no);
    playsong();
  }else{
    index_no = 0;
    load_track(index_no);
    playsong();
  }
}
// previous song
function previous_song(){
  if(index_no > 0){
    index_no -= 1;
    load_track(index_no);
    playsong();
  }else{
    index_no = All_song.length;
    load_track(index_no);
    playsong();
  }
}
// change volume
function volume_change(){
  volume_show.innerHTML = recent_volume.value;
  track.volume = recent_volume.value / 100;
}
// change slider position 
function change_duration(){
  slider_position = track.duration * (slider.value / 100);
  track.currentTime = slider_position;
}
// autoplay function
function autoplay_switch(){
  if (autoplay==1){
       autoplay = 0;
       auto_play.style.background = "rgba(255,255,255,0.2)";
  }else{
       autoplay = 1;
       auto_play.style.background = "#FF8A65";
  }
}
function range_slider(){
  let position = 0;
        
        // update slider position
    if(!isNaN(track.duration)){
       position = track.currentTime * (100 / track.duration);
       slider.value =  position;
        }
       
       // function will run when the song is over
       if(track.ended){
          play.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
           if(autoplay==1){
           index_no += 1;
           load_track(index_no);
           playsong();
           }
      }
     }


var isIt=document.querySelector('.isItIn');
var tpInstCnt=document.querySelector('.tpInstCnt');
sectn= document.getElementById('sctn');

var timeIsUp;
lrgImg.onHoverGallImg();
lrgImg.launchLrgImg();

console.log('-----------');
console.log($('#sctn').height());
var sctnHght = $('#sctn').height(); 
console.log($(window).height()); 
console.log($('header').height()); 
console.log('-----------');

var divsIds =[one,two,three,four,five,six,seven,eight,nine,ten,eleven];
//////sctn smooth scroll on nav click////
//don't click document looking
/// REWORK DISTANCEs CALCULATION
// $(document).on('click', 'a[href^="#"]', function (event) {
//     event.preventDefault();
   
//     $('#sctn').animate({
//         scrollTop: $($.attr(this, 'href')).offset().top //$($.attr(this, 'href')) scroll to $('#sctn')offsetTop  
//       //scrollTop: $($.attr(this, 'href')).offset().top
//     }, 500); //time in seconds is distance in pixels divided by 
   
//    console.log('--AFTER SCROLL--');
//    console.log( $($.attr(this, 'href')).html() );  
//    console.log( $($.attr(this, 'href')).offset().top ); 
// });

//////top insta icon disapearing when bottom insta icon in view/////
function isInView(elem){

   if( ($(window).height()+ $('header').height()) > $(elem).offset().top ){ 
     $('.topInsta').animate({ opacity:'0'},300);  setTimeout(function(){$('.topInsta').remove(); },400);
   }else if($('.topInsta').length==0){ instaTopIcon(); }
};

var scrollTimeIsUp;

$('#sctn').scroll(function(){   

clearTimeout(scrollTimeIsUp);  
     scrollTimeIsUp = setTimeout(function(){
      isInView($('.isItIn'));
      progBarColors();
 },500); 
 
});

///////NOT in use//////
// function isScrolledIntoView(elem){

// console.log(elem);     
//     var docViewTop = $('#sctn').scrollTop();
//     var docViewBottom = docViewTop + $('#sctn').height();

// console.log(docViewBottom);

//     var elemTop = $(elem).offset().top;
//     var elemBottom = elemTop + $(elem).height();
   
//    console.log(((elemBottom <= docViewBottom) && (elemTop >= docViewTop)));
   
//     return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
// };
/////////////////////////

//////INSTAGRAM ICONs//////////////////
var svgInsta="<svg xmlns='http://www.w3.org/2000/svg' class='scaling-svg'  viewBox='0 0 32 32'><path d='M16,6.16216c3.20414,0,3.58366.01222,4.849.06995a6.64012,6.64012,0,0,1,2.22824.4132,3.97394,3.97394,0,0,1,2.27743,2.27743,6.64009,6.64009,0,0,1,.4132,2.22822c.05773,1.26538.06995,1.6449.06995,4.849s-.01222,3.58366-.06995,4.849a6.64012,6.64012,0,0,1-.4132,2.22824,3.97394,3.97394,0,0,1-2.27743,2.27743,6.64012,6.64012,0,0,1-2.22824.4132c-1.26518.05773-1.64466.06995-4.849.06995s-3.58384-.01222-4.849-.06995a6.64012,6.64012,0,0,1-2.22824-.4132,3.97394,3.97394,0,0,1-2.27743-2.27743,6.64009,6.64009,0,0,1-.4132-2.22822c-.05773-1.26538-.06995-1.6449-.06995-4.849s.01222-3.58366.06995-4.849a6.64012,6.64012,0,0,1,.4132-2.22824A3.97394,3.97394,0,0,1,8.92274,6.64531a6.64009,6.64009,0,0,1,2.22822-.4132c1.26538-.05773,1.6449-.06995,4.849-.06995M16,4c-3.259,0-3.66766.0138-4.94758.0722A8.80773,8.80773,0,0,0,8.13953,4.63,6.136,6.136,0,0,0,4.63,8.13953a8.80773,8.80773,0,0,0-.55779,2.91289C4.0138,12.33234,4,12.741,4,16s.0138,3.66766.0722,4.94758A8.80773,8.80773,0,0,0,4.63,23.86047,6.136,6.136,0,0,0,8.13953,27.37a8.80773,8.80773,0,0,0,2.91289.55779C12.33234,27.98621,12.741,28,16,28s3.66766-.01379,4.94758-.0722A8.80773,8.80773,0,0,0,23.86047,27.37,6.136,6.136,0,0,0,27.37,23.86047a8.80773,8.80773,0,0,0,.55779-2.91289C27.9862,19.66766,28,19.259,28,16s-.0138-3.66766-.0722-4.94758A8.80773,8.80773,0,0,0,27.37,8.13953,6.136,6.136,0,0,0,23.86047,4.63a8.80773,8.80773,0,0,0-2.91289-.55779C19.66766,4.0138,19.259,4,16,4Zm0,5.83784A6.16216,6.16216,0,1,0,22.16216,16,6.16216,6.16216,0,0,0,16,9.83784ZM16,20a4,4,0,1,1,4-4A4,4,0,0,1,16,20ZM22.40563,8.15437a1.44,1.44,0,1,0,1.44,1.44A1.44,1.44,0,0,0,22.40563,8.15437Z' fill='rgb(83,94,198)'/></svg>";

function instaTopIcon(){
  
  if($('.topInsta').length==0){
    console.log('NO INSTATOP YET');
instaTop=document.createElement('div'); 
instaTop.setAttribute('class','topInsta');
instaTop.style.opacity=0;
instaTop.setAttribute('title','retrouvez moi aussi sur instagram'); //target=\"_blank\"
instaTop.innerHTML=svgInsta;
tpInstCnt.appendChild(instaTop);
instaTop.addEventListener('click', function(){ window.open('https://www.instagram.com/steph_anth_mn/','_blank'); });
$(instaTop).animate({opacity:1},500);
   };
};

function instaBottomIcon(){
instaBot=document.querySelector('.botInsta');
instaBot.setAttribute('title','have a look on instagram'); //target=\"_blank\"
instaBot.innerHTML=svgInsta;
instaBot.addEventListener('click', function(){ window.open('https://www.instagram.com/steph_anth_mn/','_blank'); });
 };
///////////////////////////////////////////////
///// fits top progress bar to window and container/////
 var allDots = document.getElementsByClassName('choiceDot');


function progBarFit(){
dotsContainer=document.querySelector('.lnkCntInnLeft');
var dotsContrWdth=dotsContainer.offsetWidth;
console.log(dotsContrWdth);
var hwMny = dotsContainer.childElementCount;
 console.log(hwMny); 


//allDots = dotsContainer.children;
console.log(allDots);
rightWidth=dotsContrWdth/hwMny;

for (let i = 0; i < hwMny; i++) {
  allDots[i].style.width= rightWidth +'px';
}

};

 hh=divsIds.indexOf(divsIds[6]);
   console.log(hh);
////////////////////////////////////
//////elements coloured according to scroll

function progBarColors(){
var progArray=[];

var windSrll=sectn.scrollTop;
console.log(windSrll);

console.log('### allDots ###');
console.log(allDots[6]);
for (let n = 0; n<allDots.length; n++) {
 allDots[n].style.background='transparent';
}
allDots[0].style.background='rgb(132,134,197)';


 for (let j = 0; j < divsIds.length; j++) {
  //console.log(divsIds[j].id);
  //console.log(divsIds[j].offsetTop);
  //divsIds[j].style.background='green';

  //console.log(sectnTop);
if(windSrll>divsIds[j].offsetTop){
 
progArray.push(divsIds[j].id);
console.log(progArray);
console.log(progArray.length);
 
for (let k = 0; k<progArray.length; k++) {
 allDots[k].style.background='rgb(232,234,247)';
}
if(progArray.length<11){ 
  allDots[progArray.length].style.background='rgb(132,134,197)'; 
}

}
   

};

};

/////////////////////
/// trying a progress bar from W3sChOOL
function progBarTry(){ 

}
/////////////////////////////////////
//// fits page elements to window dimensions on page load or resize////
function fitToWindow(){

var wndwWdth=window.innerWidth;
var wndwHght=window.innerHeight;
var hdr=document.getElementsByTagName('header');
var sctn=document.getElementsByTagName('section');

//alert(wndwWdth+' ---- '+wndwHght);
$('.mnCnt').animate({
	width: wndwWdth+'px',
    height: wndwHght+'px'
	//this.style.width=wndwWdth+'px';
    //this.style.height=wndwHght+'px';
},500,function(){ 

    if($('.lrgImgHide').length!==0){$('.lrgImgHide').animate({
                                            width: wndwWdth+'px',
                                            height: wndwHght+'px'
                                                           },1000 );}
	$(this).animate({
	                  top:2+'px',
	                  left:2+'px',
	// width: wndwWdth-6+'px',
    // height: wndwHght-6+'px'
                    },500,function(){
                
     var hdrHgt=$(hdr).height();
     $(sctn).animate({height: wndwHght-hdrHgt-5+'px'},500);
          
setTimeout(function(){
    if($('.lrgImg').length!==0){
           console.log($('.lrgImg img'));
                    var jkg=$('.forthGallCont').width();  
                    var lrgHg=$('.lrgImg').height();
                    var lrgWd=$('.lrgImg').width();
                    var offStTp=$('.lrgImg').offset().top;
                    var offStLft=$('.lrgImg').offset().left;

    $('.backGallCont').animate({'left':offStLft+'px','top':offStTp+'px'},500); 
    $('.forthGallCont').animate({'left':(offStLft+lrgWd)-jkg+'px','top':offStTp+'px'},500); 
    $('.lrgImgClsBtn').animate({'left':offStLft+'px','top':offStTp+'px','width':lrgWd+'px','height':lrgHg+'px'},500); 
                             
    if(lrgHg>lrgWd){$('.lrgImg img').animate({height:'90%',top:'5%',width:'auto'},400);}else{$('.lrgImg img').animate({height:'auto',left:'5%',width:'90%'},400);};

                              };
},600)
        }) 
});

};

///////on LOAD and on RESIZE//////

$(window).on('load',function(){

fitToWindow(); progBarFit(); progBarColors();
    setTimeout(function(){instaTopIcon();instaBottomIcon(); },1200);
   //alert('HAS LOADED');
});

$(window).on('resize', function(){
   //$(sctn).css({'background':'orange'});
   $('.choiceDot').css({'width':'12px'});
clearTimeout(timeIsUp);	 
     timeIsUp = setTimeout(function(){
  //console.log('Resizing is done');   
       fitToWindow();
    },500); 
setTimeout(function(){progBarFit();},1000);
 });

//////////////////////////////

console.log('test : works fine');



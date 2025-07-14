// simply here are manually set the amounts of pics in each gall
// IS RE-WRITE OF NUMBER_OF_PICS ARRAY LINE :73
//countPadsImg:[39,39,133,25,14,53,12,52], REPLACED BY nmbrOfPics

lrgImg={

mnCnt:null,
nmbrOfPics:[0,3,3,3,3,3,3,3,3,7],
sourc : null,
lrgImgCont:null,
licEght:null,
licWdth:null,
licTp:null,
licLft:null,
backCont:null,
forthCont:null,

onHoverGallImg: function(e){
    anImg=document.getElementsByTagName('img');
    console.log(anImg);
  
  $(anImg).on('click',function(){

   lrgImg.sourc=$(this).attr('src'); 
   console.log(lrgImg.sourc);  
  lrgImg.constructLrgImg();

 });

    // anImg.addEventListener('click',
    //    function(){ alert('IMAGE WAS CLICKED'); });
},

launchLrgImg : function(e){   

console.log('LARGE IMAGe IS LAUNCHED');

 },

constructLrgImg : function(e){    
var wndwWdth=window.innerWidth;
var wndwHght=window.innerHeight;
lrgImg.mnCnt = document.querySelector('.mnCnt');
   // eTrg=e.target.id;
   // chunk = eTrg.split("_");

//     mnCnt = document.getElementById('mnCnt');
     lrgImgHide=document.createElement('div');
     lrgImgHide.setAttribute('class','lrgImgHide');

     
     lrgImg.lrgImgCont=document.createElement('div');
     lrgImg.lrgImgCont.setAttribute('class','lrgImg');

     lrgImgImg = document.createElement('img');
     lrgImgImg.setAttribute('class','noFade');
     //lrgImgImg.setAttribute('src','galls/gall_'+myGall.nmb+'/img_'+chunk[1]+'.jpg');
     //lrgImgImg.setAttribute('src','new_galls/gall_'+myGall.nmb+'/img_'+chunk[1]+'.jpg');
     lrgImgImg.setAttribute('src',lrgImg.sourc);
     //lrgImgImg.addEventListener();


    lrgImg.mnCnt.appendChild(lrgImgHide);
    lrgImg.lrgImgCont.appendChild(lrgImgImg);
    lrgImgHide.appendChild(lrgImg.lrgImgCont);
    lrgImgHide.style.width=wndwWdth+'px';
    lrgImgHide.style.height=wndwHght+'px';
     //stphnmArt.interact.dstryCls('.gallry');
// if( $('.gallTopBar').length!==0){$('.gallTopBar').animate({'top':-70+'px'},500,function(){ $(this).remove();}); }
//      $('.topCont').animate({'height':stphnmArt.wndwHght+'px'},500);
//      stphnmArt.construct.constructCls('NA','#slideCont',stphnmArt.interact.clsLrgImg);
    
     setTimeout(function(){
       
       lrgImg.constructCls();
       lrgImg.constructArrows();
      
       
      //lrgImgClsBtn.style.width=wndwWdth+'px';
      //lrgImgClsBtn.style.height=wndwHght+'px';
     },700);
      //stphnmArt.interact.isResize();
     setTimeout(function(){$("#slideCont").css({'overflow-y':'hidden','top':0});},1000);    
  },

lrgImgContMeasures(){
   lrgImg.licEght=lrgImg.lrgImgCont.offsetHeight;
   lrgImg.licWdth=lrgImg.lrgImgCont.offsetWidth; 
   lrgImg.licTp=lrgImg.lrgImgCont.offsetTop;
   lrgImg.licLft=lrgImg.lrgImgCont.offsetLeft; 
   console.log(lrgImg.licWdth);
   console.log(lrgImg.licEght);
},

constructCls(){
  lrgImg.lrgImgContMeasures();

  lrgImgClsBtn=document.createElement('div');
  lrgImgClsBtn.setAttribute('class','lrgImgClsBtn');
  lrgImgClsBtn.addEventListener('click',lrgImg.clsLrgImg);

setTimeout(function(){  
    lrgImgClsBtn.style.top=lrgImg.licTp+'px';
    lrgImgClsBtn.style.left=lrgImg.licLft+'px';
    lrgImgClsBtn.style.width=lrgImg.licWdth+'px';
    lrgImgClsBtn.style.height=lrgImg.licEght+'px';
    lrgImg.mnCnt.appendChild(lrgImgClsBtn);
    if(lrgImg.licEght>lrgImg.licWdth){
      $('.lrgImg img').animate({height:'91%',top:'4.5%',width:'auto',opacity:1},400,function(){ $('.lrgImg img').animate({height:'90%',top:'5%',width:'auto'},300);  });
    }else{
      $('.lrgImg img').animate({height:'auto',top:'4.5%',width:'91%',opacity:1},400,function(){ $('.lrgImg img').animate({height:'auto',left:'5%',width:'90%'},300); });
        };
          },300); 
  //NOT USED HERE WAS IN /ART
},
openGallery: function(gallNum){  
     if(fourSquaresCont.style.display = "block"){theHeader.style.display = "none";
                                                 fourSquaresCont.style.display = "none";
                                                 constructGalleryPanel(gallNum);
                                                 }; 
}, 
/*
//count the amount of images in targeted directory
//COULD BE DONE IN PHP (from stackoverflow/question/12801370)
///////////////////
$directory = "/path/to/dir/";
$filecount = 0;
$files = glob($directory . "*");
if ($files){
 $filecount = count($files);
}
echo "There are". $filecount."files in ".$directory;
return $filecount;
*/

// simply here are manually set the amounts of pics in each gall
// IS RE-WRITE OF NUMBER_OF_PICS ARRAY LINE :73
//countPadsImg:[39,39,133,25,14,53,12,52], REPLACED BY nmbrOfPics
idx:1,

//slides image in carroussel

//slides image in carroussel
 slideGall: function(prm){  //not too smooth
    //use animate
  $( ".imgGallCont" ).effect({ effect:"slide",
                               direction:prm, 
                               easing: "swing",
                               duration:400 });
},

//allows display of gallery clicked image in large image container
imgDisplay :function(gallNum,idx){
  console.log(idx);
  ext='jpg';
   //if(idx<10){idx='0'+idx;};
   //if(gallNum==3&&idx==39){ext='gif';};
  lrgImgImg.src = "gall_"+gallNum+"/img_"+idx+"."+ext; //"new_galls/gall_"+gallNum+"/img_"+idx+"."+ext; 
   idx=null;   
},

//isolates gallery number in url string to adapt in carrousel
whatGall:function(e){
  console.log(e.target.id);
  // 'galls/gall_6/img_46.jpg' and pass it in back/forthGall for imgDisplay() 
   theImg = $('.lrgImg').find('img');
   console.log(theImg[0].src);
   gallString=theImg[0].src.split('gall_');
   console.log(gallString);
   gallNmb=gallString[1].split('/');
   console.log(gallNmb);
   return gallNmb[0];
   /////
},

//isolates image number in url string to count from in carrousel
whatImg:function(e){
  console.log(e.target.id);
  // 'galls/gall_6/img_46.jpg' and pass it in back/forthGall for imgDisplay() 
  theImg = $('.lrgImg').find('img');
   console.log(theImg[0].src);
   imgString=theImg[0].src.split('img_');
   console.log(imgString);
   imgNumb=imgString[1].split('.jpg');
   console.log(imgNumb[0]);
   return imgNumb[0];
   /////
},


constructArrows :function(){
  //builds arrows for galeries
//containers
lrgImg.backCont = document.createElement('div');
lrgImg.backCont.setAttribute('class','backGallCont');
//backCont.style.left="3%";
lrgImg.mnCnt.appendChild(lrgImg.backCont);
lrgImg.forthCont = document.createElement('div');
lrgImg.forthCont.setAttribute('class','forthGallCont');
//forthCont.style.right="63%";
lrgImg.mnCnt.appendChild(lrgImg.forthCont);
//arrows
  back = document.createElement('div');
  //back.id='bckBtn_'+myGall.nmb;
  back.setAttribute('class','backGall');
  back.innerHTML='<';
  lrgImg.backCont.appendChild(back);
  forth = document.createElement('div');
  //forth.id='forwrdBtn_'+myGall.nmb;
  forth.setAttribute('class','forthGall');
  forth.innerHTML='>';
  lrgImg.forthCont.appendChild(forth);

  back.addEventListener('click', lrgImg.backGall); 
  forth.addEventListener('click', lrgImg.forthGall);

 if( $(lrgImg.lrgImgCont).length!==0){ 
  lrgImgHgt=lrgImg.lrgImgCont.clientHeight;
  lrgImgWdt=lrgImg.lrgImgCont.clientWidth;
  lrgImgLft=lrgImg.lrgImgCont.offsetLeft;
   

  //a 1% margin
  lrgImgWdtMrgn=lrgImgWdt/100;  
  bckCntWdt=lrgImg.backCont.clientWidth;
  frthCntWdt=lrgImg.forthCont.clientWidth;
  console.log(lrgImgHgt+'--'+lrgImgWdt);
  console.log('LARGE IMG offsetLeft > '+lrgImgLft);
  console.log('LARGE IMG MARGIN > '+lrgImgWdtMrgn);

        setTimeout(function(){ 
jkg=$('.forthGallCont').width();  
lrgHg=$('.lrgImg').height();
lrgWd=$('.lrgImg').width();
offStLft=$('.lrgImg').offset().left;
offStTp=$('.lrgImg').offset().top;
       $('.backGallCont').animate({'left':offStLft+'px','top':offStTp+'px'}); 
       $('.forthGallCont').animate({'left':(offStLft+lrgWd)-jkg+'px','top':offStTp+'px'}); 
//$(stphnmArt.forthCont).animate({'left':lrgImgWdt-lrgImgWdtMrgn+'px'},500);
//$(stphnmArt.backCont).animate({'left':lrgImgLft+'px'},500);
},100);
}; 
 },
//to previous image in carrousel
backGall: function(e){  
   nowImg=lrgImg.whatImg(e);
   nowGall=lrgImg.whatGall(e);
   //gllNmbPls=myGall.nmb-1;
   //console.log('myGall.nmb-1 : '+gllNmbPls);
   var nbrPads =lrgImg.nmbrOfPics[nowGall];
   console.log('NBR_PADS BACK_GALL : '+nbrPads); 
   //var nbrPads = this.countPadsImg[gllNmbPls];
   if(this.idx == 1 ){  this.idx = nbrPads ; 
                        /*slideGall("right");*/lrgImg.imgDisplay(nowGall,this.idx);
                  }else{ 
                        this.idx = nowImg; 
                        this.idx--;
                        /*slideGall("right");*/lrgImg.imgDisplay(nowGall,this.idx);};
},

//to next image in carrousel
forthGall: function(e){
   nowImg=lrgImg.whatImg(e);
   nowGall=lrgImg.whatGall(e);
   //gllNmbPls=myGall.nmb-1; 
  var nbrPads =lrgImg.nmbrOfPics[nowGall];
   //var nbrPads = this.countPadsImg[gllNmbPls];
   console.log('NBR_PADS FORTH_GALL : '+nbrPads); 
   if(this.idx >= nbrPads  ){ this.idx = 1; 
                              /*slideGall("left");*/lrgImg.imgDisplay(nowGall,this.idx);
                       }else{
                              this.idx = nowImg; 
                              this.idx++;
                              /*slideGall("left");*/lrgImg.imgDisplay(nowGall,this.idx);};
 },


 seeClsMssg:function(){
  setTimeout(function(){
     console.log('click picture to close gallery');
  },2000);

 },
 //closes large image back to galleries
clsLrgImg : function(){ $(".lrgImgHide").remove();
                        $(".lrgImgClsBtn").remove();
                        $(".backGallCont").remove();
                        $(".forthGallCont").remove(); 
                      },

nothing : function(){  }

                                }
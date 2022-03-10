function myfun(){

var n=Math.random()*100;
var score=Math.floor(n)+1;
if(score>75){
 document.getElementById("love").innerHTML="Your Love Score is "+score+"%. You are Made for Eachother";
}
else{
  document.getElementById("love").innerHTML="Your Love Score is "+score+"%."+" Both of you should adjust things";
}

}

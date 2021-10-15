function myfunction(){
  var a=parseInt(document.getElementById('bookOne').value);
  var b=parseInt(document.getElementById('bookTwo').value);
  var c=parseInt(document.getElementById('bookThree').value);
  var d=parseInt(document.getElementById('bookFour').value);
  var e=parseInt(document.getElementById('bookFive').value);
  if (a>100 || b>100 || c>100 || d>100 || e>100) {
      alert("Please Enter The Correct Value");
      
  }
  else {
    var obtain=a+b+c+d+e;
    document.getElementById("obtain").innerHTML=obtain;
    var perr=obtain/500*100;
    document.getElementById("perr").innerHTML=perr;
    if (a>40 && b>40 && c>40 && d>40 && e>40) {
      document.getElementById("remarks").innerHTML="<span style='color:#292'>Pass</span>"; 
    }
    else{
      document.getElementById("remarks").innerHTML="<span style='color:red'>Fail</span>";
    }
    if (perr>=80){
      document.getElementById("grade").innerHTML="A1 Grade";
    }
    else if(perr>=70){
      document.getElementById("grade").innerHTML="A Grade";
    }
    else if(perr>=60){
      document.getElementById("grade").innerHTML="B Grade";
    }
    else if(perr>=50){
      document.getElementById("grade").innerHTML="C Grade";
    }
    else if(perr>=40){
      document.getElementById("grade").innerHTML="D Grade";
    }
    else{
      document.getElementById("grade").innerHTML="F Grade";
    }
  }
  
}
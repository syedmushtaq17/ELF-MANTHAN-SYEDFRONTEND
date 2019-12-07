var count=1;
    var colorarray=["green","yellow","cyan","red","pink","blue"];
// array of colors 

 // taking modulos of count when count>6 then count % 6 gives number within 6
    function myFunction() {
      document.body.style.backgroundColor = colorarray[count%6];
     count++;
    }
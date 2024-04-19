const dobi = document.getElementById('dob');
const cal = document.getElementById('cal');
const res= document.getElementById('result');

cal.addEventListener("click",function(){
    const dob = new Date(dobi.value);// creates new date
    const agein = Date.now()-dob.getTime(); // difference bet millisec
    const agedata = new Date (agein);//creates new date with diff millisec
    const age = Math.abs(agedata.getUTCFullYear()-1970);//final calculation
    res.innerHTML = "your age is: " +age ; //display res store
});


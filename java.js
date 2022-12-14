let string = "";
let buttons = document.querySelectorAll(".btn");
Array.from(buttons).forEach((button)=>{
  button.addEventListener('click', (e)=>{
    if(e.target.innerHTML == "="){
        string =eval(string);
        document.querySelector('input').value =string ;
    }else if(e.target.innerHTML == "C"){
        string ="";
        document.querySelector('input').value =string ;

    }else if(e.target.innerHTML == "M+" || e.target.innerHTML == "M-" ){
    string ="stawp u r too cute for this command";
        document.querySelector('input').value =string ;
    }else{
console.log(e.target);
string =string + e.target.innerHTML;
document.querySelector('input').value =string ;}

  })

  
})
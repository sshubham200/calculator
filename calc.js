var op1="";
var op2="";
var operator=null;
var first=true;
var buttons=document.getElementsByClassName("buttons");
var display=document.getElementById('display');
for(var i=0;i<buttons.length;i++){
    buttons[i].addEventListener('click',function(){
        let value=this.getAttribute('data-value');
        display.innerText += value;
        if(first)
        op1+=value;
        else
            op2+=value;
    });
}

var operation=document.getElementsByClassName("operator");
for(var i=0;i<operation.length;i++){
    operation[i].addEventListener('click',function(){
        let value=this.getAttribute('data-value');
        display.innerText+= value;
        first=false;
        operator=value;
    });
}

    // for(var i=0;i<buttons.length;i++){
    //     buttons[i].addEventListener('click',function(){
    //         var value=this.getAttribute('data-value');
    //         display.innerText += value;
    //         if(!first)
    //         op2+=value;
    //         console.log(value);
    //     });
    // }
var result=document.getElementsByClassName("result");
result[0].addEventListener('click',function(){
    let value=this.getAttribute('data-value');
    display.innerText+=value;
    // var total1 = ;
    console.log("op2==>",op2);
    var total=eval( op1 +" "+ operator + " " +op2);
    //var total1=eval('temp');
    op1=total;
    op2="";
    first=true;
    display.innerText+= total;
});
var clear=document.getElementsByClassName("clear");
clear[0].addEventListener('click',function(){
    display.innerText="";
    op1="";
    op2="";
});

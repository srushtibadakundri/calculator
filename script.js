let result=document.getelementByID("inputtext");
let calculate=(number)=>{
    result.value+number;
}
let Result=()=>
{
    try{
        Result.value=eval(result.value)
}
catch(err){
    alert("enter the valid input");
}
}
function clr(){
result.value="";
}
function del(){
    result.value=result.value.slice(0,-1);

}

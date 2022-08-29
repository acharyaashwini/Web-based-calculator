function see(x)
{
document.getElementById("r").value+=x;
}
function clr()
{
    document.getElementById("r").value="";
}
function calculate()
{
   let a=document.getElementById("r").value;
   let b=eval(a);
   document.getElementById("r").value=b;
}
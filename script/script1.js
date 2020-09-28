var i=0;
function toggleBar(){
    var x=document.getElementById('sidebar-1');
    if(i%2==0){
        x.style.top="0";
        i++;
    }
    else{
        x.style.top="-1000px";
        i++;
    }
    console.log(i);
}
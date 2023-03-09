function hide(){
    var show = document.getElementById('show');
    var hide = document.getElementsByClassName('more')

    show.style.display = "none";

    for(i=0 ; i < hide.length ; i++){
        hide[i].style.display = "inline-block"
    }
}
function show(){
    var show = document.getElementById('show');
    var hide = document.getElementsByClassName('more');
    
    for(i=0 ; i < hide.length ; i++){
        hide[i].style.display = "none"
    }
    show.style.display = "inline-block";

   
}
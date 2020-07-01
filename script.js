const items = document.getElementsByClassName('icon');
const bar = document.getElementsByClassName('sidebar');

    items[0].addEventListener('click', function(){
        //alert("hi");
        bar[0].classList.toggle('is-active'); 
    });




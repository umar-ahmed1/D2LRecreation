//grab the mytools nav items
tools = document.querySelector('#tools');
function displayTools(e){
    e.preventDefault();
    if(!this.classList.contains('active')){
        this.classList.add('active');
    } else{
        this.classList.remove('active');
    }
    
}

tools.addEventListener('click',displayTools);
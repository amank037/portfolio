const sections = document.querySelectorAll('Section');
const navList = document.querySelectorAll('.navItem');
let active = 0;
console.log(sections, navList);
navList.forEach((el,index) => {
    el.addEventListener('click', ()=>{
        sections[active].classList.remove('active');
        navList[active].classList.remove('active');
        active = index;
        sections[active].classList.add('active');
        navList[active].classList.add('active');
        console.log(sections, navList);
    })    
});    
    

const projectInput = document.querySelectorAll('.project-input');  
projectInput.forEach(function(radio) {
    radio.addEventListener('click', function () {
        if (this.classList.contains('checked')) {
          this.checked = false;
          this.classList.remove('checked');
        } else {
          this.classList.add('checked');
        }
    });
});

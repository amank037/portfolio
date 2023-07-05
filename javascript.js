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
    

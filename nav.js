const apperels = document.querySelector('#navbarDropdownMenuLink');
const denims = document.querySelector('#denims');
const casuals = document.querySelector('#casuals');
const formals = document.querySelector('#formals');
const traditionals = document.querySelector('#traditionals');
const indo = document.querySelector('#indo');
const acc = document.querySelector('#acc');

const toApperels = function () {
        window.location = 'apperels.html';
}   

apperels.addEventListener('click', toApperels);


denims.addEventListener('click', ()=>{
        window.open('./apperelpages/denims.html',"_self");
})

casuals.addEventListener('click', ()=>{
        window.open('./apperelpages/casuals.html',"_self");
})

formals.addEventListener('click', ()=>{
        window.open('./apperelpages/formals.html',"_self");
})

traditionals.addEventListener('click', ()=>{
        window.open('./apperelpages/traditionals.html',"_self");
})

indo.addEventListener('click', ()=>{
        window.open('./apperelpages/indo.html',"_self");
})

acc.addEventListener('click', ()=>{
        window.open('./apperelpages/accessories.html',"_self");
})

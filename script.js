let hrs = document.getElementById("hrs");
let min = document.getElementById("min");
let sec = document.getElementById("sec");

setInterval(() => {
    let curentTime =new Date();
    hrs.innerHTML = (curentTime.getHours()<10?"0":"")+ curentTime.getHours(); 
    sec.innerHTML = (curentTime.getMinutes()<10?"0":"")+curentTime.getMinutes();  
    sec.innerHTML = (curentTime.getSeconds()<10?"0":"")+curentTime.getSeconds();  
}, 1000);
const modeToggle = document.getElementById('mode-toggle');
        modeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            modeToggle.textContent = document.body.classList.contains('dark-mode') ? 'Light Mode' : 'Dark Mode';
        });


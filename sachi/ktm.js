document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('#discover');
    const elements1= document.querySelectorAll('.parts');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
           
            if (entry.isIntersecting) {
                entry.target.classList.add('scroll-animation');
            } else {
                entry.target.classList.remove('scroll-animation');
            }
        });
    }, { threshold: 0.1 });
  
    elements.forEach((element) => {
        observer.observe(element);
       elements1.forEach((elements1)=>{
        observer.observe(elements1);
       }) 
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.wobble');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
           
            if (entry.isIntersecting) {
                entry.target.classList.add('wobble');
            } else {
                entry.target.classList.remove('wobble');
            }
        });
    }, { threshold: 0.1 });
  
    elements.forEach((element) => {
        observer.observe(element);
       
    });
});

document.getElementById('Join').addEventListener('click', () => {
    window.open('https://orange-blood.ktm.com/', '_blank');
});

document.getElementById('book').addEventListener('click', () => {
    window.open('https://www.ktmindia.com/enquire-now', '_blank');
    });
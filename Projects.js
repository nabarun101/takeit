const navSlide=()=>{
    const burger=document.querySelector('.burger');
    const nav=document.querySelector('.nav-links');
    const navLinks=document.querySelectorAll('.nav-links li');

    burger.addEventListener('click',()=>{
    // Toggle navs
        nav.classList.toggle('nav-active');

        if(nav.style.animation){
            nav.style.animation='';
        }else{
            nav.style.animation=`navcolor 0.5s ease forwards `;
        }

    // Animate Links
    
        navLinks.forEach((link,index)=>{
            if(link.style.animation){
             link.style.animation=''
            }else{
             link.style.animation=`navLinkFade 0.5s ease forwards ${index/7 + 0.5}s`;
            }
         })
     // burger animation 
         burger.classList.toggle('toggle');
    });

    window.addEventListener('resize',()=>{
        if(window.innerWidth>960){
            nav.style.animation='';
        }
    })
    
}

navSlide();



// Scroll on click of contact us

const here=document.getElementById('clingy');
const tohere=document.getElementById('scroll');

here.addEventListener('click',function(e){
    e.preventDefault();
    tohere.scrollIntoView({behavior:"smooth"});
})





// reveal elements on scroll
const allSections=document.querySelectorAll('.section');
const revealSection =function(entries,observer){
    const [entry]=entries;

    if(!entry.isIntersecting) return;
    entry.target.classList.remove('section--hidden');

    observer.unobserve(entry.target);

};
const sectionObserver=new IntersectionObserver(revealSection,{
    root:null,
    threshold:0.15,
});

allSections.forEach(function(section){
    sectionObserver.observe(section);
    section.classList.add('section--hidden');
});
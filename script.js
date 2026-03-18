
const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-btn');
const sidebar = document.getElementById('sidebar');


if (menuBtn && sidebar) {
    menuBtn.addEventListener('click', () => {
        sidebar.classList.add('active');
       
        document.body.style.overflow = 'hidden';
    });
}


if (closeBtn && sidebar) {
    closeBtn.addEventListener('click', () => {
        sidebar.classList.remove('active');
        
        document.body.style.overflow = '';
    });
}


window.addEventListener('scroll', () => {
    const progressBars = document.querySelectorAll('.progress');
    
    
    function isInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    
    progressBars.forEach(bar => {
        if (isInViewport(bar.closest('.progress-bar')) && !bar.dataset.loaded) {
            
        }
    });
});
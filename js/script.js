/* ========================  P R E L O A D E R  ======================= */

if (document.readyState == 'loading') {
    let width = 0
    for (let i = 0; i < 101; i++) {
        width = width + 1
    }
    document.querySelector('#preloader .progress .progress-bar').style.width = width + '%';
    document.addEventListener('DOMContentLoaded', () => {
        document.getElementById('preloader').classList.add('loaded');
    });
}





function closeMenu() {
    
    document.querySelector('.navbar-collapse').classList.remove('show');

}




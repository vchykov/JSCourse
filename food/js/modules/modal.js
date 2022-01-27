export  function openModal(modalTimerId, selectorModal) {
    const modalWindow = document.querySelector(selectorModal);
    console.log(selectorModal, '  ',  modalWindow);
    
    modalWindow.classList.add('show');
    modalWindow.classList.remove('hide');
    document.body.style.overflow = 'hidden';
    clearInterval(modalTimerId);
}

export function closeModal(selectorModal) {
    const modalWindow = document.querySelector(selectorModal);

    modalWindow.classList.add('hide');
    modalWindow.classList.remove('show');
    document.body.style.overflow = '';
}

function modal(modalTimerId, selectorModal) {

    const modalWindow = document.querySelector(selectorModal),
          modalShowBtns = document.querySelectorAll('[data-modal]');

    modalShowBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            openModal(modalTimerId, selectorModal);
        });
    });

    modalWindow.addEventListener('click', (e) => {
        if (e.target === modalWindow || e.target.getAttribute('data-close') == '') {
            closeModal(selectorModal);
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.code === "Escape" && modalWindow.classList.contains('show')) {
            closeModal(selectorModal);
        }
    });

    function showModalByScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >=
            document.documentElement.scrollHeight - 1) {
            openModal(modalTimerId, selectorModal);
            window.removeEventListener('scroll', showModalByScroll);
        }
    }

    window.addEventListener('scroll', showModalByScroll);
}

export default modal;
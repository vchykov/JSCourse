window.addEventListener('DOMContentLoaded', () => {
    // Tabs
    const tabsContent = document.querySelectorAll('.tabcontent'),
        tabs = document.querySelectorAll('.tabheader__item'),
        tabsParent = document.querySelector('.tabheader__items');

    function hideTabsContent() {
        tabsContent.forEach((tab, i) => {
            tab.classList.remove('show', 'fade');
            tab.classList.add('hide');
        });

        tabs.forEach(tab => {
            tab.classList.remove('tabheader__item_active');
        })
    }

    function showTabContent(i = 0) {
        tabsContent[i].classList.remove('hide');
        tabsContent[i].classList.add('show', 'fade');
        tabs[i].classList.add('tabheader__item_active');
    }

    hideTabsContent();
    showTabContent();

    tabsParent.addEventListener('click', (event) => {
        const target = event.target;
        if (target && target.classList.contains('tabheader__item')) {
            tabs.forEach((item, i) => {
                if (item == target) {
                    hideTabsContent();
                    showTabContent(i);
                }
            });
        }
    });

    // Timer
    const deadline = '2022-01-09T00:00:00';

    function getTimeRemaining(endTime) {
        const total = Date.parse(endTime) - Date.now(),
            days = Math.floor(total / (1000 * 60 * 60 * 24)),
            hours = Math.floor((total / (1000 * 60 * 60)) % 24),
            minutes = Math.floor((total / (1000 * 60)) % 60),
            seconds = Math.floor((total / 1000) % 60);

        return {
            total,
            days,
            hours,
            minutes,
            seconds,
        };
    }

    function addZero(num) {
        if (num <= 9 && num >= 0) {
            return `0${num}`;
        } else {
            return num;
        }
    }

    function setTimer(selector, endTime) {
        const timer = document.querySelector(selector),
              days = timer.querySelector('#days'),
              hours = timer.querySelector('#hours'),
              minutes = timer.querySelector('#minutes'),
              seconds = timer.querySelector('#seconds');
              timeInterval = setInterval(updateClock, 1000);

        updateClock();

        function updateClock() {
            const  t = getTimeRemaining(endTime);

            days.innerHTML = addZero(t.days);
            hours.innerHTML = addZero(t.hours);
            minutes.innerHTML = addZero(t.minutes);
            seconds.innerHTML = addZero(t.seconds);

            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
        }
    }

    setTimer('.timer', deadline);

    // Modal

    const modalWindow = document.querySelector('.modal'),
        modalShowBtns = document.querySelectorAll('[data-modal]'),
        modalHideBtn = document.querySelector('[data-close]');

        modalShowBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                modalWindow.classList.add('show');
                modalWindow.classList.remove('hide');
                document.body.style.overflow = 'hidden';
            });
        });

        function closeModalWindow() {
            modalWindow.classList.add('hide');
            modalWindow.classList.remove('show');
            document.body.style.overflow = '';
        }

        modalHideBtn.addEventListener('click', closeModalWindow);

        modalWindow.addEventListener('click', (e) => {
            if (e.target === modalWindow) {
                closeModalWindow();
            }
        });

        document.addEventListener('keydown', (e) => {
            if (e.code === "Escape" && modalWindow.classList.contains('show')) {
                closeModalWindow();
            }
        });
});
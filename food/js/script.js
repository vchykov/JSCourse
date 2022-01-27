import tabs from './modules/tabs';
import timer from './modules/timer';
import cards from './modules/cards';
import forms from './modules/forms';
import modal from './modules/modal';
import slider from './modules/slider';
import calc from './modules/calc';
import {openModal} from './modules/modal';

window.addEventListener('DOMContentLoaded', () => {
    const selectorModal = '.modal',
        modalTimerId = setTimeout(() => {
            openModal(modalTimerId, selectorModal);
        }, 50000);

    tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
    modal(modalTimerId, selectorModal, '[data-modal]');
    timer('2022-01-28', '.timer'); 
    cards();
    calc();
    forms(modalTimerId, selectorModal);
    slider({
        container: '.offer__slider',
        slide: '.offer__slide',
        nextArrow: '.offer__slider-next',
        prevArrow: '.offer__slider-prev',
        totalCounter: '#total',
        currentCounter: '#current',
        wrapper: '.offer__slider-wrapper',
        field: '.offer__slider-inner'
    }); 
});

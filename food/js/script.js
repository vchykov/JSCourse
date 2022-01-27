import tabs from './modules/tabs';
import timer from './modules/timer';
import cards from './modules/cards';
import forms from './modules/forms';
import modal from './modules/modal';
import slider from './modules/slider';
import calc from './modules/calc';
import {openModal} from './modules/modal';

window.addEventListener('DOMContentLoaded', () => {
    const deadline = '2022-01-28',
        selectorModal = '.modal',
        modalTimerId = setTimeout(() => {
            openModal(modalTimerId, selectorModal);
        }, 50000);

    tabs(),
    timer(deadline), 
    cards(), 
    forms(modalTimerId, selectorModal), 
    modal(modalTimerId, selectorModal),
    slider(), 
    calc();
});

window.addEventListener('DOMContentLoaded', () => {
    const tabs = require('./modules/tabs'),
          timer = require('./modules/timer'),
          cards = require('./modules/cards'),
          forms = require('./modules/forms'),
          slider = require('./modules/slider'),
          calc = require('./modules/calc');

    tabs(), timer(), cards(), forms(), slider(), calc();

});
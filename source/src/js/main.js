// Styles
import '../scss/main.scss';

// Import asset images
import './images';

// Import javascript
import $ from 'jquery';
import siteMenu from './partials/siteMenu';
// import debounce from './helpers/debounce';

import cssVars from 'css-vars-ponyfill';

$(document).ready(function () {
    siteMenu($);

    //slickSettings($);
    //videoFilters($);
});

document.addEventListener("DOMContentLoaded", function () {
    cssVars({});

    window.addEventListener('resize', function () {
        document.documentElement.style.setProperty('--vh', window.innerHeight * 0.01 + 'px');
    });
});
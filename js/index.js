import { initDropdown } from "./dropdown.js";
import { initProgressBarAndSwiper } from "./slider.js";
import {toggleClassOnClick} from './toggleSvg.js'
import { toggleMenu } from "./burger.js";

initDropdown()
initProgressBarAndSwiper()
toggleClassOnClick('.dishes__cart-heart', 'heart-active');
toggleClassOnClick('.rest__cart-book', 'book-active');
toggleClassOnClick('.dishes__cart-plus', 'book-active');
toggleMenu();






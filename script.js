'use strict';

const links = document.querySelectorAll('.nav-list-item');
const cards = document.querySelectorAll('.card');

for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', () => {
        if (links[i].classList.contains('active')) {
            console.log('Remove active from ' + links[i]);
            links[i].classList.remove('active');
            cards[i].classList.remove('card-show');
        } else {
            console.log('Add active to ' + links[i]);
            links[i].classList.add('active');
            cards[i].classList.add('card-show');
        }
    });
}

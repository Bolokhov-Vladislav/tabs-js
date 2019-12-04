document.addEventListener('DOMContentLoaded', function() {
    'use strict';

    let tab = document.querySelectorAll('.tab'),
        wrappTabs = document.querySelector('.wrapp'),
        tabContent = document.querySelectorAll('.tabcontent');
    
    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++){
            tabContent[i].classList.add('hide');
            tab[i].classList.remove('active');
        }
    }
    hideTabContent(1);
    
    function showTabContent(b) {
        if (tabContent[b].classList.contains('hide')){
            tabContent[b].classList.remove('hide');
            tab[b].classList.add('active');
        }
    }

    wrappTabs.addEventListener('click', (e) => {
        if (e.target.classList.contains('tab')){
            for (let i = 0; i < tab.length; i++) {
                if(e.target == tab[i]) {
                    tab[i].classList.add('active');
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    });

});
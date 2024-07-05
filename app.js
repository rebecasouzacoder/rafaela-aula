'use strict';

document.addEventListener('DOMContentLoaded', function() {
    const switcher = document.querySelector('.btn');

    switcher.addEventListener('click', function() {
        document.body.classList.toggle('dark-theme');

        // Após mudar a classe, atualizar o texto do botão
        var className = document.body.className;
        if (className == "light-theme") {
            this.textContent = "Dark";
        } else {
            this.textContent = "Light";
        }

        console.log('current class name: ' + className);
    });
});

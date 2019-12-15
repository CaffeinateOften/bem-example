customElements.define('arrow-button',
    class extends HTMLElement {
        constructor(){
            super();
            const shadow = this.attachShadow({mode: 'closed'});
            const button = document.createElement('button');
            button.setAttribute('class', 'btn btn--arrow');
            button.setAttribute('tabindex', 0);
            button.setAttribute('value', 'SIGN IN');
            button.setAttribute('type', 'submit');
            const img = document.createElement('img');
            img.setAttribute('src', 'img/right-arrow-black.svg');
            img.setAttribute('class', 'btn__img')
            button.appendChild(img);
            const linkElem = document.createElement('link');
            linkElem.setAttribute('rel', 'stylesheet');
            linkElem.setAttribute('href', 'components/arrow-button/index.css');
            shadow.appendChild(linkElem);
            shadow.appendChild(button);
        }
    }
)

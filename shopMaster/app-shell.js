
import './browseView.js';
export class AppShell extends HTMLElement {
    
    constructor(){
        super();
        let  template = document.createElement('template');
        template.innerHTML = `      
        
            
            <browser-view></browser-view>
        `;
        let shadowRoot = this.attachShadow({mode:'open'});
        shadowRoot.appendChild(template.content.cloneNode(true));
    }
    connectedCallback(){
        //super();
       
    }
   
}

customElements.define('app-shell', AppShell);


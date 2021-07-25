import {ProductList} from './productList.js';

export class BrowserView extends HTMLElement{
    constructor(){
        super();
        this.template = document.createElement('template');
        this.template.innerHTML = `
        <style>
            ul {
                list-style-type: none;
                margin: 20;
                padding: 10;
                overflow: hidden;
                background-color : white
                color: black;
            }
            
            li {
                float: left;
               
            }

            .home{
                float: center;
                margin: auto;
            }
            
            
            li a {
                display: block;
                background-color : white
                color: black;
                text-align: center;
                padding: 14px 16px;
                text-decoration: none;
            }
            
            
        </style>
        <div><a class="home" href="#Home">Home</a></div>
        <ul>
            <li><a href="#mens_outerwear">Mens Outerwear</a></li>
            <li><a href="#ladies_outerwear">Ladies Outerwear</a></li>
            <li><a href="#mens_tshirts">Mens T-Shirts</a></li>
            <li><a href="#ladies_tshirts">Ladies T-Shirts</a></li>
           
        </ul>
        <p class='productList'></p>
        `

        let shadowRoot = this.attachShadow({mode:'open'});
        shadowRoot.appendChild(this.template.content.cloneNode(true));

    }

    connectedCallback(){
        var links=this.shadowRoot.querySelectorAll("a");
        var productListArea=this.shadowRoot.querySelector(".productList");
            
        links.forEach(link=>{
            link.addEventListener('click',(event)=>{
                //debugger;
                let linkText = link.text;
                if(productListArea.childNodes && productListArea.childNodes[0])
                    productListArea.removeChild(productListArea.childNodes[0]);
                let productList = new ProductList(linkText);
                
                productListArea.appendChild(productList);
         
            })        
        })
    }

}

customElements.define('browser-view', BrowserView);
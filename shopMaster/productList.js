import { ProductView } from './productView.js';
import { mens_tshirts } from './data/mens_tshirts.js';
import { ladies_outerwear } from './data/ladies_outerwear.js';
import { ladies_tshirts } from './data/ladies_tshirts.js';
import { mens_outerwear } from './data/mens_outerwear.js';

export class ProductList extends HTMLElement{

    template = null;
    tabname ;

    constructor(tabname){
        super();
        this.tabname = tabname;
        this.template = document.createElement('template');
        this.template.innerHTML = `
        <style>
            .product_list {
                font-family: 'Arial' ,sans-serif;
                background: white;
                width : 1200px;
                display : grid;
                grid-template-columns: 1fr 1fr 1fr;
                grid-gap : 20px;
                margin: 50px;
            }
        </style>
        <img></img>
        <div class="tabname"></div>
        <p class = 'product_list'>
            
        <p>
        `

        let shadowRoot = this.attachShadow({mode:'open'});
        shadowRoot.appendChild(this.template.content.cloneNode(true));
    }

    connectedCallback(){
        var listPath=this.shadowRoot.querySelector(".product_list");
        var tabcontainer=this.shadowRoot.querySelector(".tabname");
       // debugger;
        tabcontainer.innerHTML=`${this.tabname}`;
        //console.log(mens_tshirts);

        let productView, list;
       // debugger
        if(this.tabname == 'Mens T-Shirts'){
            list = mens_tshirts;
        }else if(this.tabname == 'Ladies T-Shirts'){
            list = ladies_tshirts;
        }else if(this.tabname == 'Ladies Outerwear'){
            list = ladies_outerwear;
        }else{
            list = mens_outerwear;
        }
        for(let item in list){
            productView = new ProductView(list[item]);
            listPath.appendChild(productView);
        }
    }
}

customElements.define('product-list', ProductList);
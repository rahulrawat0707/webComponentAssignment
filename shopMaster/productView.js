    export class ProductView extends HTMLElement{
    constructor(data){
        super();
        let  template = document.createElement('template');
        console.log(data.name);
        template.innerHTML = `
        <style>
            .product-card {
                font-family: 'Arial' ,sans-serif;
                background: white;
                width : 200px;
                height : 250px;
                display : grid;
                grid-template-rows: 10fr 2fr;
                grid-gap : 2px;
                margin-bottom: 25px;
               
            }
            .product-card .product-label {
                margin: auto;
            }
            .product-card img {
                width : 100%;
            }
            
        </style>
        <div class = 'product-card'>
            <div><img src= ${data.image}></img></div>
            <div class = "product-label">
                <div>${data.title}</div>
                <div>$${data.price}</div>
            </div>
        </div>
        `;

        let shadowRoot = this.attachShadow({mode:'open'});
        shadowRoot.appendChild(template.content.cloneNode(true));
    }


}

customElements.define('product-view', ProductView);
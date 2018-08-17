import Component from '../../../core/Ignis.component.class.js';

class ProdutoComponent extends Component {
    constructor (config) {
         super(config)
    }

    controller () {
        // const $ = document.querySelector.bind(document);
        // const h1 = $('.title');
        // h1.addEventListener('click', () => alert())
    }


    render () {
        this.getTemplate( template => { 
            const reg = new RegExp('{{title}}');            

            const app = document.querySelector('.content');

            let tempHTML = document.createElement('div');
                tempHTML.innerHTML = template;

            let templateHtml = tempHTML.firstChild;

            const productTmp = templateHtml.querySelector('.product');      
            let productsTmp = '';  
          

            this.model.forEach( data => {
                const productCopy = productTmp.outerHTML.replace(reg, data.title)
                productsTmp += productCopy;
            })

            templateHtml.querySelector('.grid').innerHTML = productsTmp;

            app.insertAdjacentHTML('beforeend', templateHtml.outerHTML)
            
            
            
            this.controller()
        })
        
    }

    init () {   
         this.render()
    }
}

var data = []

export default new ProdutoComponent({
    template:'/produto/produto.template.html',
    model: [
        {title:'Um título qualquer 1'},
        {title:'Um título qualquer 2'},
        {title:'Um título qualquer 3'},
        {title:'Um título qualquer 4'},
        {title:'Um título qualquer 5'},
        {title:'Um título qualquer 6'},
        {title:'Um título qualquer 7'},
        {title:'Um título qualquer 8'}
    ],
    params: []
})
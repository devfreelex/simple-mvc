import Component from '../../../core/Ignis.component.class.js';

class SummaryBlogComponent extends Component {
    constructor (config) {
         super(config)
    }

    controller () {
        // const $ = document.querySelector.bind(document);
        // const h1 = $('.title');
        // h1.addEventListener('click', () => alert())
    }


    render () {
        // this.getTemplate( template => { 
        //     const app = document.querySelector('#app');

        //     const reg = new RegExp('{{titulo}}');
        //     template = template.replace(reg, this.model.title)

            
        //     const content = document.querySelector('.content')
        //     const elementTemp = document.createElement('div');

        //     elementTemp.innerHTML = template;
        //     const templateHtml = elementTemp.firstChild;

        //     content.insertAdjacentHTML('beforeend', template)
            
            
            
        //     this.controller()
        // })
        
    }

    init () {   
         this.render()
    }
}

var data = []

export default new SummaryBlogComponent({
    template:'/summary-blog/summary.blog.template.html',
    model: {title: 'um título qualquer'},
    params: []
})
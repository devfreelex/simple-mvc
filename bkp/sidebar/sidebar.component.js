import Component from '../../../core/Ignis.component.class.js';

class SidebarComponent extends Component {
    constructor (config) {
         super(config)
    }

    controller () {
        // const $ = document.querySelector.bind(document);
        // const h1 = $('.title');
        // h1.addEventListener('click', () => alert())
    }

    logarModel () {
        console.log('logar model: ', this.model)
    }

    init () {   
        //  this.render()
    }
}

var data = []

export default new SidebarComponent({
    template:'/sidebar/sidebar.template.html',
    model: {title: 'um título qualquer'},
    params: []
})
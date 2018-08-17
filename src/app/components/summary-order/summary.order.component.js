import Component from '../../../core/Ignis.component.class.js';
import orderTemplate from './summary.order.template.js';
import orderModel from './summary.order.model.js';



const SummaryOrderComponent =  new Component({
    name:'order-component',
    template: orderTemplate,
    model: orderModel,
    params: []
})

export default SummaryOrderComponent



/*
class SummaryOrderComponent extends Component {
    constructor (config) {
         super(config)
    }

    controller () {
        
    }


    render () {

        

        const template = document.querySelector('order-component');
        template.innerHTML = orderTemplate(this.model)        
        this.controller()
        
    }

    init () {   
         this.render()
    }
}

var data = []
*/ 
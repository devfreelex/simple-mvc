import $ from '../../utils/DOM.js';
import Component from '../../../core/Ignis.component.class.js';
import orderTemplate from './summary.order.template.js';
import orderModel from './summary.order.model.js';



const SummaryOrderComponent =  new Component({
    name: 'order-component',
    template: orderTemplate,
    model: orderModel,
    routed: true,
    controller: () => {
        $('order-component').addEventListener('click', event => {
            console.log(event.target)
        })
    }
})

export default SummaryOrderComponent
import  $  from '../../utils/DOM.js';
import Component from '../../../core/Ignis.component.class.js';
import orderTemplate from './summary.order.template.js';
import orderModel from './summary.order.model.js';

import Emitter from '../../../core/emmit.js';



const SummaryOrderComponent =  new Component({
    name: 'order-component',
    template: orderTemplate,
    model: orderModel,
    routed: true,
    controller: (context) => {
        
        const orderComponent = $(context.name);
        
        const options = {
            data: {teste: 'Um teste de eventos'}            
        }
        const addSupport = new Emitter('addSupport', orderComponent, options);

        orderComponent.addEventListener('click', event => {
            addSupport.emit()
        })
    }
})

export default SummaryOrderComponent
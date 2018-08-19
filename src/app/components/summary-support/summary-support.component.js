import supportTemplate from './summary-support.template.js'
import Component from '../../../core/Ignis.component.class.js'
import supportModel from './summary-support.model.js'
import $ from '../../utils/DOM.js'

const SummarySupportCompnent = new Component({
    name:'support-component',
    template: supportTemplate,
    model:supportModel,
    routed:true,
    controller:(context) => {
        
        const component = $('body');
        const { tickets } = context.model;


        component.addEventListener('addSupport', event => {            
            
            console.log(event.detail)

            tickets.map( ticket => {
                ticket.description += 1;
            })

            console.log(context.model.title = 'xxx')
        })


    }
})

export default SummarySupportCompnent
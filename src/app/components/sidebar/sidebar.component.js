import Component from '../../../core/Ignis.component.class.js';
import sidebarTemplate from './sidebar.template.js';

const SidebarComponent = new Component({
    name:'sidebar-component',
    template:sidebarTemplate,
    model:[],
    params:[],
    controller: () => {}
})


console.log(SidebarComponent)
export default SidebarComponent
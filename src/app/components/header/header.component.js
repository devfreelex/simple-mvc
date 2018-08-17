import headerTemplate from './header.template.js';
import Component from '../../../core/Ignis.component.class.js';

const HeaderComponent = new Component({
    name:'header-component',
    template:headerTemplate,
    model:[],
    params:[],
    controller: () => {}
})

export default HeaderComponent
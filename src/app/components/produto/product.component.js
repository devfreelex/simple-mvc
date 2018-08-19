import productTemplate from './product.template.js';
import Component from '../../../core/Ignis.component.class.js';
import productModel from './product.model.js';



const ProductComponent = new Component({
    name:'product-compnent',
    template: productTemplate,
    model:productModel,
    routed:true,
    controller: () => {}
})

export default ProductComponent
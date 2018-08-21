export default class Component {
    constructor (config) { 
        this.name = config.name;
        this.template = config.template;
        this.model = this.proxify(config.model, this, this.rerender);
        this.params = config.params;
        this.controller = config.controller;
        this.routed = config.routed || false;
        this.routerElement = '';
    }


    render (element = '') { 

        if (!this.routed) {
            const template = document.querySelector(this.name);
            template.innerHTML = this.template(this.model)        
            return;
        }

        if (element != '') {
            this.routerElement = element;
            const container = document.querySelector(element);
            const template = document.createElement(this.name);
            template.innerHTML = this.template(this.model);

            container.insertAdjacentHTML('beforeend', template.outerHTML.trim())
        }

        setTimeout( () => this.controller(this), 300)

    }

    rerender (context) {
        const component = document.querySelector(context.name);
        const template = document.createElement(context.name);
        template.innerHTML = context.template(context.model);

        component.innerHTML = template.outerHTML;

    }

    proxify (model, context, callback) {
        
        const self = this;

        const handler = {
            get (target, name) { 
                if(name in target) {
                    return target[name]
                } 
                console.error(`key doesnot exist: <<${name}>>`);
            },

            set (target, prop, val) {

                target[prop] = val;
                
                callback(context);
                return true
            }
        }

        const proxy = new Proxy(model, handler);
        return proxy;
    }

}
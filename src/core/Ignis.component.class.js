export default class Component {
    constructor (config) { 
        this.name = config.name;
        this.template = config.template;
        this.model = config.model;
        this.params = config.params;
        this.controller = config.controller;
        this.routed = config.routed || false
    }


    render (element = '') { 

        if (!this.routed) {
            const template = document.querySelector(this.name);
            template.innerHTML = this.template(this.model)        
            this.controller();
            return;
        }

        if (element != '') {
            const container = document.querySelector(element);
            const template = document.createElement(this.name);
            template.innerHTML = this.template(this.model);
            container.innerHTML = template;
            this.controller();
        }



    }

}
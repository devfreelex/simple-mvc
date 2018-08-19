export default class Ignis {
    constructor () {
        this.modules = {};
        this.routeElem = '';
    }
    
    init() {
        this.hashChange()
    }



    router () { 
        this.modules.forEach(module => { 

            const hash = window.location.hash.replace('#/', '');            
            const moduleName = hash.split('/').slice(0, 1).toString();
            const reg = new RegExp(`${moduleName}`);

            if (reg.test(module.path)) {
                this.selectModule(moduleName, module.config)
            }
        });
    }

    selectModule(module, views) { 

        views.forEach(view => {
            const hash = window.location.hash.replace('#/', '');
            const reg = new RegExp(view.path);

            if(reg.test(hash)) {
                this.initComponents(view.components)
            }
        })

    }

    initComponents (components) {

       if (this.routeElem) {
            const routerElement = document.querySelector(this.routeElem)
            routerElement.innerHTML = ''
       }
    
       components.forEach(component => {       
           component.render(this.routeElem)
       })

    }
    
    hashChange() {
        window.addEventListener('hashchange', () => this.router(), false);
        window.addEventListener('DOMContentLoaded', () => this.router(), false);
    }
    
    configModules (settings) {
        this.modules = settings;
    }

    configRouter (config) {
        this.routeElem = config.element
    }
}
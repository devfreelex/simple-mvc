export default class Ignis {
    constructor () {
        this.modules = {};
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

        // document.querySelector('#app').innerHTML = ''

       components.forEach(component => {           
           component.init()
       })
    }
    
    hashChange() {
        window.addEventListener('hashchange', () => this.router(), false);
        window.addEventListener('DOMContentLoaded', () => this.router(), false);
    }
    
    configModules (settings) {
        this.modules = settings;
    }
}
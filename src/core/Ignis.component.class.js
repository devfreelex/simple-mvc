export default class Component {
    constructor (config) { console.log(config.model)
        this.name = config.name;
        this.template = config.template;
        this.model = config.model;
        this.params = config.params;
    }

    controller () {
        
    }

    render () { 
        const template = document.querySelector(this.componentName);
        template.innerHTML = orderTemplate(this.model)        
        this.controller()
    }

    // render () {
    //     this.getTemplate( template => { 
    //         const reg = new RegExp('{{titulo}}');
    //         template = template.replace(reg, this.model.title)

    //         const app = document.querySelector('#app');
    //         const elementTemp = document.createElement('div');

    //         elementTemp.innerHTML = template;
    //         const templateHtml = elementTemp.firstChild;

    //         app.insertAdjacentHTML('beforeend', template)
            
            
            
    //         this.controller()
    //     })
        
    // }

    getTemplate (callback) {  

        const protocol = window.location.protocol;
        const host = window.location.host;
        const templatePath = `/src/app/components`;
        const templateUrl = this.template;
        const url = `${protocol}//${host}${templatePath}${templateUrl}`;

        fetch(url, {
            method: 'GET',
            headers: {
                "Content-Type": "text/plain",
            }
        })
        .then(function (response) {
            if (response.status !== 200) {
                console.error('Não foi possível carregar o template.', templateUrl, response.status)
                return; 
            }

            return response.text()

        })
        .then(function(text){
            callback(text)
        })
        .catch( err => console.log(err))
    }
    
    init() {
        this.controller(this.template, model, params)
    }

}
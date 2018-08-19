import $ from "../app/utils/DOM.js";

export default class Emitter {

    constructor (name, element, options){
        this.name = name;
        this.element = element;
        this.options = options;

        this.event = this.makeEvent() || null;
    }

    emit () {
        this.element.dispatchEvent(this.event)        
    }

    makeEvent () {

        const config = {
                detail: this.options.data,
                bubbles:true,
                cancelable:true            
        }

        return new CustomEvent(this.name, config);

    }

   
}
import {LitElement,html} from 'lit-element';
class CounterElement extends LitElement { 

    constructor(){
        super();
        this.counter = 0;
    }
    static get properties(){
        return{
            counter:{type:Number}
        }
    }
    render(){
        return html`<div>
                        <div><h2>${this.counter}</h2></div>
                        <div>  
                            <button @click=${this._incrementar}>+</button>
                            <button @click=${this._decrementar}>-</button>
                        </div>
                    </div>`;
    }
    _incrementar(){
        this.counter+=1;
    }
    _decrementar(){
        this.counter-=1;
    }
}
customElements.define('my-counter',CounterElement);
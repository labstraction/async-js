class SuperDiv extends HTMLElement{

    constructor(){
        super();
        this.content = 'ciao ciao'
    }

    connectedCallback(){
        this.render();
    }

    render() {
        console.log(this.content)
        this.innerHTML = '';
        this.appendChild(document.createTextNode(this.content));
    }

}


customElements.define('super-div', SuperDiv);
class HelloWorld extends HTMLElement{
    constructor(){
        super(),
        this.innerHTML = '<p>Hello World !</p>';
        
        if (this.className == 'toto') {
            this.innerHTML = '<p>Bonjur le monde!</p>';
        }
    }
}
customElements.define('hello-world',HelloWorld);
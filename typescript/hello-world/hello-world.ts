class HelloWorld {
    static hello( name?: string ) {
        return (name == undefined) ? 'Hello, World!' : `Hello, ${name}!`;
    }
}

export default HelloWorld
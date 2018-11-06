class Stack {
    constructor () {
        this.arr = []
    }

    push (item) {
        this.arr.push(item);
    }

    pop () {
        return this.arr.pop();
    }

    getLength () {
        return this.arr.length;
    }

    getElement () {
        let length = this.arr.length;
        return this.arr[length-1];
    }
}  

module.exports = Stack;
import { node } from "./Node.js";

class linkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    insert(value) {
        const newNode = new node(value);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
        this.size++;
    }

    delete(value) {
        if (!this.head) return;

        if (this.head.value === value) {
            this.head = this.head.next;
            this.size--;
            return;
        }

        let current = this.head;
        while (current.next && current.next.value !== value) {
            current = current.next;
        }

        if (current.next) {
            current.next = current.next.next;
            this.size--;
        }
    }

    search(value) {
        let current = this.head;
        while (current) {
            if (current.value === value) {
                return true;
            }
            current = current.next;
        }
        return false;
    }

    getSize() {
        return this.size;
    }



append(value) {
        const newNode = new node(value);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

prepend(value) {
        const newNode = new node(value);
        newNode.next = this.head;
        this.head = newNode;
    }   

size() {        
    
    let count = 0;
    let current = this.head;
        while (current) {
            count++;
            current = current.next;
        }
        return count;
    }

head() {
        if (!this.head) return null;
        return this.head.value;
    }

tail() {
        if (!this.head) return null;
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        return current.value;
    }

at(index) {
        if (index < 0) return null;
        let current = this.head;
        let count = 0;
        while (current) {
            if (count === index) {
                return current.value;
            }
            count++;
            current = current.next;
        }
        return null;
    }

pop() {
        if (!this.head) return null;
        if (!this.head.next) {
            const value = this.head.value;
            this.head = null;
            return value;
        }
        let current = this.head;
        while (current.next && current.next.next) {
            current = current.next;
        }
        const value = current.next.value;
        current.next = null;
        return value;
    }

contains(value) {
        let current = this.head;
        while (current) {
            if (current.value === value) {
                return true;
            }
            current = current.next;
        }
        return false;
    }

findIndex(value) { 
        let current = this.head;
        let index = 0;
        while (current) {
            if (current.value === value) {
                return index;
            }
            index++;
            current = current.next;
        }
        return -1;
    }

toString() {
        if (!this.head) return "null";
        let current = this.head;
        let result = "";
        while (current) {
            result += `( ${current.value} ) -> `;
            current = current.next;
        }
        result += "null"; 
        return result;
    }
insertAt(value, index) {
        if (index < 0) return;
        const newNode = new node(value);
        if (index === 0) {
            newNode.next = this.head;
            this.head = newNode;
            return;
        }
        let current = this.head;
        let count = 0;
        while (current && count < index - 1) {
            current = current.next;
            count++;
        }
        if (!current) return; 
        newNode.next = current.next;
        current.next = newNode;
    }

removeAt(index) {
        if (index < 0 || !this.head) return null;
        if (index === 0) {
            const value = this.head.value;
            this.head = this.head.next;
            return value;
        }
        let current = this.head;
        let count = 0;
        while (current.next && count < index - 1) {
            current = current.next;
            count++;
        }
        if (!current.next) return null; 
        const value = current.next.value;
        current.next = current.next.next;
        return value;
    }

}
export { linkedList };





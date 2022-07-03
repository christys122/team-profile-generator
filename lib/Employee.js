function Employee(name) {
    this.name = name;
    
    if (this.name === 'Nick') {
        this.value = 'Manager'
    } else {
        this.value = 'Engineer';
    }
}
 module.exports = Employee;
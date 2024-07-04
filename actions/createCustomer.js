const prompt = require('prompt-sync')();
const Customer = require('../model/customer');

module.exports = async function createCustomer() {
    try {
        const name = prompt('Enter customer name: ');
        const age = prompt('Enter customer age: ');
        const newCustomer = new Customer({ name, age });
        await newCustomer.save();
        console.log('Customer created successfully');
    } catch (err) {
        console.error('Error creating customer:', error.message);
    }
}


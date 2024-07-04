const Customer = require('./model/Customer');

module.exports = async function viewCustomers() {
    try {
        const customers = await Customer.find();
        console.log('Customer List:');
        customers.forEach(customer => console.log(`ID; ${customer._id}, Name: ${customer.name}, Age: ${customer.age}`))
    } catch (error) {
        console.error('Error viewing customers:', error.message);
    }
}

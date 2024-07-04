require('dotenv').config();
const mongoose = require('mongoose');

const Customer = require('./model/customer');

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log('Error connecting to MongoDB;', err));

module.exports = mongoose;

const prompt = require('prompt-sync')();

const createCustomer = require('./actions/createCustomer');
const viewCustomers = require('./actions/viewCustomer');


async function mainMenu() {
    console.log('Welcome!'); 
    let exit = false;
    while (!exit) {
        console.log('\nWhat would you like to do?');
        console.log(' 1. Create a customer');
        console.log(' 2. View all customers');
        console.log(' 3. Quit');

        const choice = prompt('Number of action to run: ');
        switch (choice) {
            case '1':
                await createCustomer();
                break;
            case '2': 
                await viewCustomers();
                break;
            case '3': 
                exit = true;
                console.log('Goodbye!');
                break;
            default: 
                console.log('Incorrect choice. Please choose a number between 1 & 3.');           
        }
    }
}

mainMenu();
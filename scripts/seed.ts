const { Sequelize } = require('sequelize');
const Ticket = require('../backend/src/models/ticketModel');

async function seed() {
  await Ticket.bulkCreate([
    { customerName: 'Jane Doe', email: 'jane.doe@example.com', createdAt: new Date(), status: 'open', notes: '' },
    { customerName: 'John Smith', email: 'john.smith@example.com', createdAt: new Date(), status: 'pending', notes: '' },
  ]);
  console.log('Mock data seeded!');
}

seed();
import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import ticketRoutes from './routes/ticket.routes';
import sequelize from './db';

dotenv.config();

const app = express();
const port = process.env.APP_PORT || 8000;

// Middleware
app.use(express.json());

// Replace with your frontend port
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true, 
}));

// Routes
app.use('/api', ticketRoutes);

// Default route to check server status
app.get('/', (req: Request, res: Response) => {
  res.send('Ticket Management API is running');
});

app.listen(port, async () => {
  try {
    await sequelize.sync({ alter: true });  // 'alter' automatically adjusts the DB schema
    console.log(`Server running on port ${port}`);
  } catch (error) {
    console.error('Error syncing database:', error);
    process.exit(1);  // Exit the process if database sync fails
  }
});

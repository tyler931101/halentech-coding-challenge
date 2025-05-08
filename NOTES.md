cd backend && npm install
cd ../frontend && npm installcreatedb ticketing

DATABASE_URL=postgresql://postgres:password@localhost:5432/ticketing
npm install pg dot nev

CREATE TABLE tickets (
  id SERIAL PRIMARY KEY,
  customerName VARCHAR(255),
  email VARCHAR(255),
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  status VARCHAR(20) CHECK (status IN ('open', 'pending', 'done')),
  notes TEXT
);

psql -U postgres -d ticketing -f schema.sql

cd ../backend && npm run dev
cd ../frontend && npm run start

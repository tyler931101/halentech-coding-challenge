# 🧪 Full-Stack Coding Assessment

Welcome, and thanks for your interest in joining **Halen Technologies** 🎉

This take-home assessment is designed to give you the flexibility to showcase your skills across the **frontend, backend, and tooling** — in a real-world, midsize organization context. We’re more interested in your thought process and code quality than a "perfect" solution.

⚠️ Please note **excessive use of AI will disqualify an assessment from review.** ⚠️

---

## 📘 The Scenario

You're a new engineer at **Halen Technologies**, and your team manages internal tools for customer onboarding.

They've asked you to build a feature to help support agents track and manage onboarding tickets. The tool will help them review, update, and search tickets in a lightweight dashboard.

---

## 📋 Your Task

You are free to use any language or framework.

### 1. Backend

Build an API with the following endpoints:

- `GET /tickets` — List all tickets
- `GET /tickets/:id` — Retrieve a specific ticket
- `PATCH /tickets/:id` — Update ticket `status` and `notes`

Each **ticket** should include:

| Field         | Type     |
|---------------|----------|
| `id`          | string or int |
| `customerName`| string   |
| `email`       | string   |
| `createdAt`   | ISO string |
| `status`      | "open" \| "pending" \| "done" |
| `notes`       | string   |

### 2. Frontend

Create a simple UI that allows:

- Viewing a list of tickets
- Viewing and editing ticket details (status + notes)
- (Optional) Searching or filtering by name/email/status

You may use any frontend stack (React, Vue, Svelte, plain HTML, etc).

### 3. Tooling

- Provide a script that seeds the backend with some mock ticket data (can be `.sh`, `.js`, `.ts`, etc).
- Optionally, include Docker or other tooling to simplify setup.

---

## ✅ What We’re Looking For

| Area         | What We Value                           |
|--------------|------------------------------------------|
| **Clarity**   | Easy-to-read code and structure         |
| **Maintainability** | Logical organization, no overengineering |
| **User Experience** | Clean UI, reasonable UX            |
| **Testing**   | Tests where appropriate (unit/integration) |
| **Tooling**   | Ease of setup and developer experience  |

Bonus points for:
- Type safety or schema validation
- Clean commit history
- Responsive UI or accessibility
- CI setup

---

## 🧪 Seed Data (Example)

Here’s a sample ticket you can use for reference:

```json
{
  "id": 1,
  "customerName": "Jane Doe",
  "email": "jane.doe@example.com",
  "createdAt": "2024-01-15T12:00:00Z",
  "status": "open",
  "notes": ""
}
```

## 🚀 Setup Instructions

You can use the stack you're most comfortable with. Here's a general flow if you're using Node.js:

```bash
# Clone this repo
git clone https://github.com/yourusername/coding-assessment.git

# Install backend & frontend dependencies
cd backend && npm install
cd ../frontend && npm install

# Seed mock data
cd ../scripts && node seed.js

# Start backend
cd ../backend && npm run dev

# Start frontend
cd ../frontend && npm run dev
```

## 🧪 Testing
Add any test commands here (e.g., npm test, yarn test, etc). Include clear instructions in a TESTING.md file if needed.

## ⌛ Time Expectations
We expect this to take around 2–4 hours, depending on how much polish or extra functionality you want to add.

Don’t worry about production-hardening everything—just show us how you think and build.

## 📮 Submission
Please send us a link to your GitHub repo (public or private with access) or a ZIP of your project. Include a short writeup at the top of your README or in a separate `NOTES.md`:

1. How to run the app
2. Your technical choices
3. Anything you'd do with more time
# halentech-coding-challenge

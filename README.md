
# N8N Clone

A powerful, open-source workflow automation tool built with modern web technologies. This project is a clone of [n8n](https://n8n.io/), designed to provide a visual node-based editor for automating tasks and integrating various services.

![Project Status](https://img.shields.io/badge/status-development-orange)
![License](https://img.shields.io/badge/license-MIT-blue)

## 🚀 Tech Stack

This project leverages a robust modern stack to ensure performance, scalability, and type safety:

- **Framework:** [Next.js 14+](https://nextjs.org/) (App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Database ORM:** [Prisma](https://www.prisma.io/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **UI Components:** [Shadcn/ui](https://ui.shadcn.com/)
- **Error Tracking:** [Sentry](https://sentry.io/)
- **Linting:** ESLint

## ✨ Features

- **Visual Workflow Editor:** Drag-and-drop interface to connect nodes and build automations.
- **Node-based Architecture:** Modular components for triggers, actions, and logic.
- **Database Integration:** Persistent storage for workflow execution data and user configurations using Prisma.
- **Real-time Monitoring:** Integration with Sentry for error tracking and performance monitoring.
- **Responsive Design:** Fully responsive UI built with Tailwind CSS.

## 🛠️ Getting Started

Follow these steps to set up the project locally on your machine.

### Prerequisites

- Node.js (v18 or higher)
- npm, yarn, or pnpm
- A database (PostgreSQL or MySQL recommended, matching your `schema.prisma` configuration)

### Installation

1. **Clone the repository**
   ```bash
   git clone [https://github.com/nguyenlebinhan/N8N-Clone.git](https://github.com/nguyenlebinhan/N8N-Clone.git)
   cd N8N-Clone
````

2.  **Install dependencies**

    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Environment Setup**
    Create a `.env` file in the root directory. You can copy the structure from an example file if provided, or add the following core variables:

    ```env
    # Database Connection
    DATABASE_URL="postgresql://user:password@localhost:5432/n8n_clone?schema=public"

    # Sentry (Optional for local dev)
    SENTRY_AUTH_TOKEN=your_sentry_token
    ```

4.  **Database Migration**
    Push the Prisma schema to your database:

    ```bash
    npx prisma generate
    npx prisma db push
    ```

5.  **Run the Development Server**

    ```bash
    npm run dev
    ```

    Open [http://localhost:3000](https://www.google.com/search?q=http://localhost:3000) with your browser to see the application.

## 📂 Project Structure

```text
├── prisma/               # Database schema and migrations
├── public/               # Static assets
├── src/
│   ├── app/              # Next.js App Router pages and layouts
│   ├── components/       # Reusable UI components
│   ├── lib/              # Utility functions and libraries
│   └── types/            # TypeScript type definitions
├── components.json       # Shadcn UI configuration
├── next.config.ts        # Next.js configuration
├── sentry.*.config.ts    # Sentry configuration files
└── package.json          # Project dependencies and scripts
```



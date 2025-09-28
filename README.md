# Full-Stack To-Do Application

A full-stack to-do list application built with Next.js, Prisma, and MongoDB. This project provides a robust foundation for managing tasks with complete CRUD functionality, user authentication, and a modern, responsive user interface.

## Table of Contents

- [Features](#features)
- [Technology Stack](#technology-stack)
- [Installation Instructions](#installation-instructions)
- [Usage Guidelines](#usage-guidelines)
- [Contribution Guidelines](#contribution-guidelines)
- [License Information](#license-information)

## Features

- **Full CRUD Operations:** Create, Read, Update, and Delete to-do items.
- **User Authentication:** Secure user sign-up and sign-in functionality provided by Clerk.
- **Server Actions:** API-less architecture using Next.js Server Actions for data mutations.
- **Responsive UI:** A modern and responsive user interface built with Tailwind CSS and shadcn/ui.
- **Theming:** Light and dark mode support.
- **Database Seeding:** Includes a script to seed the database with mock data for development.

## Technology Stack

- **Framework:** [Next.js](https://nextjs.org/) (v15)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **ORM:** [Prisma](https://www.prisma.io/)
- **Database:** [MongoDB](https://www.mongodb.com/)
- **Authentication:** [Clerk](https://clerk.com/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/), [shadcn/ui](https://ui.shadcn.com/)
- **Form Management:** [React Hook Form](https://react-hook-form.com/)
- **Schema Validation:** [Zod](https://zod.dev/)
- **Linting:** [ESLint](https://eslint.org/)

## Installation Instructions

1.  **Clone the repository:**

    ```bash
    git clone <https://github.com/Elsheshtawey1/fullstact-todo.git>
    cd fullstack-todo
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

4.  **Initialize the database:**

    Run the following commands to generate the Prisma client, push the database schema, and seed the database with initial data:

    ```bash
    npx prisma generate
    npx prisma db push
    ```

## Usage Guidelines

To start the development server, run the following command:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

### Available Scripts

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the application for production.
- `npm run start`: Starts a production server.
- `npm run lint`: Lints the codebase.
- `npm run seed`: Seeds the database with initial data.

## Contribution Guidelines

We welcome contributions to improve this project. Please follow these guidelines:

1.  **Fork the repository.**
2.  **Create a new branch:** `git checkout -b feature/your-feature-name`
3.  **Make your changes** and commit them with a descriptive message.
4.  **Push to the branch:** `git push origin feature/your-feature-name`
5.  **Create a pull request** with a clear title and description of your changes.

## contact
* Maintainer: Mohamed Elsheshtawey
* demo-vercel: [https://fullstact-todo.vercel.app/]
* LINKEDIN: [https://www.linkedin.com/in/mohamed-elsheshtawey/]



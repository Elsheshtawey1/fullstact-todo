"use server";

import AddTodoForm from "@/components/AddTodoForm";

export default async function Home() {
  return (
    <main className="container py-10">
      <AddTodoForm />
    </main>
  );
}

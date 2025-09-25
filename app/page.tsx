"use server";

import { getTodosAction } from "@/actions/todo.actions";
import AddTodoForm from "@/components/AddTodoForm";
import TodoTable from "@/components/TodoTable";
export default async function Home() {
  const todo =await getTodosAction();
  console.log(todo);
  return (
    <main className="container py-10">
      <AddTodoForm />

      <TodoTable todos={todo} />
    </main>
  );
}

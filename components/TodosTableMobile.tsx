import { Badge } from "@/components/ui/badge";
import { Todo } from "@/interface";
import { TodoTableAction } from "./TodoTableAction";

export function TodosTableMobile({ todos }: { todos: Todo[] }) {
  return (
    <div className="flex flex-col space-y-5 sm:hidden">
      {todos.map((todo) => (
        <div key={todo.id} className="border rounded-xl p-4 shadow flex flex-col space-y-2">
          <div className="flex justify-between">
            <span className="font-semibold py-1.5">ID</span>
            <span>{todo.id}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold py-1.5">Title</span>
            <span>{todo.title}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold py-1.5">Status</span>
            <Badge variant={todo.completed ? "default" : "destructive"}>{todo.completed ? "Completed" : "Uncompleted"}</Badge>
          </div>
          <div className="flex justify-end space-x-5 mt-3">
            <TodoTableAction todo={todo} />
          </div>
        </div>
      ))}
      {!todos.length && <p className="text-center font-semibold">YOU DON T HAVE ANY TODO YET!</p>}
    </div>
  );
}

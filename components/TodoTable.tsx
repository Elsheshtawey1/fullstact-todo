import { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Todo } from "@/interface";
import { TodoTableAction } from "./TodoTableAction";

export default function TodosTable({ todos }: { todos: Todo[] }) {
  return (
    <div className="flex justify-center mt-10 px-2 sm:px-4">
      <div className="w-full">
        {/* --- Mobile View: stacked cards --- */}
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

        {/* --- Desktop / Tablet View: classic table --- */}
        <div className="hidden sm:block overflow-x-auto rounded-xl border shadow-md p-3">
          
          <Table className="w-full min-w-[600px]">
            <TableCaption className="mb-4 text-lg font-semibold">Your Todo List</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Title</TableHead>
                <TableHead className="text-center">Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {todos.map((todo) => (
                <TableRow key={todo.id}>
                  <TableCell className="font-medium">{todo.id}</TableCell>
                  <TableCell>{todo.title}</TableCell>
                  <TableCell className="text-center">
                    <Badge variant={todo.completed ? "default" : "destructive"}>{todo.completed ? "Completed" : "Uncompleted"}</Badge>
                  </TableCell>
                  <TableCell className="flex justify-end space-x-2">
                    <TodoTableAction todo={todo} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TableCell colSpan={3} className="font-semibold">
                  Total
                </TableCell>
                <TableCell className="text-right font-semibold">{!todos.length ? "YOU DON'T HAVE ANY TODO YET!" : todos.length}</TableCell>
              </TableRow>
            </TableFooter>
          </Table>
        </div>
      </div>
    </div>
  );
}

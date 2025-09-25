import { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

import { Todo } from "@/interface";
import { TodoTableAction } from "./TodoTableAction";

export default function TodosTable({ todos }: { todos: Todo[] }) {
  return (
    <div className="flex justify-center mt-10 px-4">
      <div className="w-full  rounded-xl border bg-white dark:bg-gray-900 shadow-md p-4">
        <Table>
          <TableCaption className="mb-4 text-lg font-semibold">Your Todo List</TableCaption>

          {/* Table Header */}
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px] text-center">ID</TableHead>
              <TableHead className="pl-6">Title</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>

          {/* Table Body */}
          <TableBody>
            {todos.map((todo) => (
              <TableRow key={todo.id}>
                <TableCell className="font-medium text-center">{todo.id}</TableCell>
                <TableCell className="pl-6">{todo.title}</TableCell>
                <TableCell>
                  <Badge variant={todo.completed ? "default" : "destructive"}>{todo.completed ? "Completed" : "Uncompleted"}</Badge>
                </TableCell>
                <TableCell className="flex justify-end gap-2">
                  <TodoTableAction todo={todo} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>

          {/* Table Footer */}
          <TableFooter>
            <TableRow>
              <TableCell colSpan={3} className="font-semibold">
                Total
              </TableCell>
              <TableCell className="text-right font-semibold">{todos.length}</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    </div>
  );
}

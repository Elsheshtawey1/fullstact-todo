"use client";

import { useState } from "react";
import { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Todo } from "@/interface";
import { TodoTableAction } from "./TodoTableAction";
import { TodosTableMobile } from "./TodosTableMobile";
import { Skeleton } from "./ui/skeleton";

export default function TodosTable({ todos }: { todos: Todo[] }) {
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(false); 
  const filteredTodos = todos.filter((todo) => todo.title.toLowerCase().includes(search.toLowerCase()));
  const skeletonRows = Array.from({ length: 5 });

  return (
    <div className="flex justify-center px-2 sm:px-4">
      <div className="w-full">
        {/* Search Input */}
        <div className="mb-4 flex justify-center sm:justify-start">
          {isLoading ? (
            <Skeleton className="h-10 w-full max-w-sm rounded-md" />
          ) : (
            <Input placeholder="Search todos..." value={search} onChange={(e) => setSearch(e.target.value)} className="max-w-sm" />
          )}
        </div>

        {/* --- Mobile View --- */}
        <TodosTableMobile todos={filteredTodos} />

        {/* --- Desktop / Tablet View --- */}
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
              {isLoading ? (
                skeletonRows.map((_, idx) => (
                  <TableRow key={idx}>
                    <TableCell colSpan={4}>
                      <Skeleton className="h-6 w-full rounded-md" />
                    </TableCell>
                  </TableRow>
                ))
              ) : filteredTodos.length ? (
                filteredTodos.map((todo) => (
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
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={4} className="text-center">
                    No results.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TableCell colSpan={3} className="font-semibold">
                  Total
                </TableCell>
                <TableCell className="text-right font-semibold">{filteredTodos.length > 0 ? filteredTodos.length : "YOU DON'T HAVE ANY TODO YET!"}</TableCell>
              </TableRow>
            </TableFooter>
          </Table>
        </div>
      </div>
    </div>
  );
}

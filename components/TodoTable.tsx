"use client";
import { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "./ui/button";
import { Pin, Trash } from "lucide-react";
import { Todo } from "@/interface";
import { Badge } from "./ui/badge";
import { deleteTodosAction } from "@/actions/todo.actions";
import { useState } from "react";


export default function TodosTable({todos}:{todos:Todo[]}) {
  
const [loading,setLoading] =useState(false)

  return (
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>id</TableHead>
          <TableHead>title</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="text-right">action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {todos.map((todo) => (
          <TableRow key={todo.id}>
            <TableCell className="font-medium">{todo.id}</TableCell>
            <TableCell>{todo.title }</TableCell>
            <TableCell> <Badge variant="secondary">{todo.completed?'Completed':'uncompleted' }</Badge> </TableCell>
            <TableCell className="flex items-center gap-2 justify-end space-x-2">
              <Button size={"icon"} >
                <Pin size={16} />
              </Button>
              <Button size={"icon"} variant={"destructive"} onClick={async () => {
                setLoading(true)
                await deleteTodosAction(todo.id)
                setLoading(false)
              }
              } >
                {loading ? 'deleting' : <Trash size={16} />}
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">{todos.length}</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}

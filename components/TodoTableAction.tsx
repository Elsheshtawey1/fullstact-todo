"use client";
import { Trash } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import { deleteTodosAction } from "@/actions/todo.actions";
import EditTodoForm from "./EditTodoForm";
import { Todo } from "@/interface";
import Spinner from "./Spinner";
import { AlertDialogDemo } from "./AlertDialog";

export const TodoTableAction = ({ todo }: { todo: Todo }) => {
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(false);

  return (
    <>
      <EditTodoForm todo={todo} />
      <Button size="icon" variant="destructive" onClick={() => setAlert(true)}>
        {loading ? <Spinner /> : <Trash size={16} />}
      </Button>
      <AlertDialogDemo
        open={alert}
        onConfirm={async () => {
          setLoading(true);
          if (!todo.id) return;
          await deleteTodosAction(todo.id);
          setLoading(false);
          setAlert(false);
        }}
        onCancel={() => setAlert(false)}
      />
    </>
  );
};

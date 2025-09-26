"use client";
import {  Trash } from 'lucide-react';
import { Button } from './ui/button';
import { useState } from "react";
import { deleteTodosAction } from '@/actions/todo.actions';
import EditTodoForm from './EditTodoForm';
import { Todo } from '@/interface';
import Spinner from './Spinner';

export const TodoTableAction = ({todo}:{todo:Todo}) => {
  const [loading, setLoading] = useState(false);
  return (
    <>
      <EditTodoForm todo={todo} />
      <Button
        size={"icon"}
        variant={"destructive"}
        onClick={async () => {
          setLoading(true);
          await deleteTodosAction(todo?.id as string);
          setLoading(false);
        }}
      >
        {loading ? <Spinner /> : <Trash size={16} />}
      </Button>
    </>
  );
}

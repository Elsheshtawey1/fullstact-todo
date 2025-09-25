"use client";
import { Pin, Trash } from 'lucide-react';
import { Button } from './ui/button';
import { useState } from "react";
import { deleteTodosAction } from '@/actions/todo.actions';

export const TodoTableAction = ({id}:{id:string}) => {
  const [loading, setLoading] = useState(false);
  return (
    <>
      <Button size={"icon"}>
        <Pin size={16} />
      </Button>
      <Button
        size={"icon"}
        variant={"destructive"}
        onClick={async () => {
          setLoading(true);
          await deleteTodosAction(id);
          setLoading(false);
        }}
      >
        {loading ? "deleting" : <Trash size={16} />}
      </Button>
    </>
  );
}

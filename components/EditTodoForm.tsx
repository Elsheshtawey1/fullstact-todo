"use client";

import { Pin} from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

import { TodoFormValues, todoSchema } from "@/schema";
import { useEffect, useState } from "react";
import { Todo } from "@/interface";
import { updateTodosAction } from "@/actions/todo.actions";

export default  function EditTodoForm({todo}:{todo:Todo}) {
  const [open, setOpen] = useState(false);

  const form = useForm<TodoFormValues>({
    resolver: zodResolver(todoSchema),
    defaultValues: {
      title: todo.title,
      body: todo.body ?? '',
      completed: todo.completed,
    },
  });

  function onSubmit(data: TodoFormValues) {

    updateTodosAction({ id: todo.id , title: data.title, body: data.body as string, completed: data.completed });

    form.reset();
    setOpen(false);
  }
useEffect(() => {
  if (open) {
    form.reset({
      title: todo.title,
      body: todo.body ?? "",
      completed: todo.completed,
    });
  }
}, [open, todo, form]);


  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size={"icon"}>
          <Pin size={16} />
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Update Todo</DialogTitle>
          <DialogDescription>Update the details of your task..</DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4">
            {/* Title Input */}
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input placeholder="Add new todo title" {...field} />
                  </FormControl>
                  <FormDescription>This will be your todo title.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Description Input */}
            <FormField
              control={form.control}
              name="body"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Add new todo description" {...field} />
                  </FormControl>
                  <FormDescription>This will be your todo description.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Completed Checkbox */}
            <FormField
              control={form.control}
              name="completed"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center space-x-3 space-y-0">
                  <FormControl>
                    <Checkbox checked={field.value} onCheckedChange={(checked) => field.onChange(!!checked)} ref={field.ref} />
                  </FormControl>
                  <FormLabel className="!mt-0">Completed</FormLabel>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Footer Actions */}
            <DialogFooter className="mt-4">
              <DialogClose asChild>
                <Button variant="outline">Cancel</Button>
              </DialogClose>
              <Button type="submit">Save Changes</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

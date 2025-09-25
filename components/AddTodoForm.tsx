"use client";

import { Plus } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

import { TodoFormValues, todoSchema } from "@/schema";
import { createTodosAction } from "@/actions/todo.actions";

export default function AddTodoForm() {
  const form = useForm<TodoFormValues>({
    resolver: zodResolver(todoSchema),
    defaultValues: {
      title: "",
      body: "",
      completed: false,
    },
  });

  function onSubmit(values: TodoFormValues) {
    createTodosAction(values);
    form.reset();
    console.log(values);
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-blue-500 text-white hover:bg-blue-600">
          <Plus className="mr-2 h-4 w-4" />
          Add Todo
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>New Todo</DialogTitle>
          <DialogDescription>Add a new task to your todo list.</DialogDescription>
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
                    <Checkbox checked={field.value} onCheckedChange={(checked) => field.onChange(checked === true)} ref={field.ref} />
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

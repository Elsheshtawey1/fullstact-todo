"use server";
import { PrismaClient } from "@prisma/client";
import { revalidatePath } from 'next/cache'

const prisma = new PrismaClient();

export const getTodosAction = async () => {
  return await prisma.todo.findMany();
  // error handling
};
export const createTodosAction = async ({ title, body, completed }: { title: string; body?: string | undefined; completed: boolean }) => {
  await prisma.todo.create({
    data: {
      title,
      body,
      completed,
    },
  });
  revalidatePath("/");
};
export const deleteTodosAction = async (id: string) => {
  await prisma.todo.delete({
    where: {
      id,
    },
  });
  revalidatePath("/");
  
};

export const updateTodosAction = async () => {
};

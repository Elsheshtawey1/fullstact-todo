"use server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getTodosAction = async () => {
  return await prisma.todo.findMany();
  // error handling
  
};
export const createTodosAction = async ({ title, body }: { title: string, body?: string | undefined }) => {
  await prisma.todo.create({
    data: {
      title,
      body,
    },
  })
};
export const updateTodosAction = async () => {};
export const deleteTodosAction = async () => {};

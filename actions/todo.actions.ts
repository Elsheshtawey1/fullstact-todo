"use server";
import { Todo } from "@/interface";
import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";

const prisma = new PrismaClient();

export const getUserTodosAction = async ({ userId }: { userId: string|null }) => {
  return await prisma.todo.findMany({
    where: {
      user_id: userId as string,
    },

    
    orderBy: {
      createdAt: "desc",
    },
  });
  // error handling
};
export const createTodosAction = async ({ title, body, completed , userId }: { title: string; body?: string | undefined; completed: boolean; userId: string  }) => {
  await prisma.todo.create({
    data: {
      title,
      body,
      completed,
      user_id: userId as string 
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

export const updateTodosAction = async ({ id, title, body, completed }: Todo) => {
  await prisma.todo.update({
    where: {
      id,
    },
    data: {
      title,
      body,
      completed,
    },
  });
  revalidatePath("/");
};

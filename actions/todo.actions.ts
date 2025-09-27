"use server";
import { Todo } from "@/interface";
import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";

const prisma = new PrismaClient();

export const getUserTodosAction = async ({ userId }: { userId: string|null }) => {
  try {
    return await prisma.todo.findMany({
    where: {
      user_id: userId as string,
    },

    
    orderBy: {
      createdAt: "desc",
    },
  });
  } catch (err) {
    throw new Error("Error getting todos" + err);
}
};
export const createTodosAction = async ({ title, body, completed , userId }: { title: string; body?: string | undefined; completed: boolean; userId: string  }) => {
  try {
    await prisma.todo.create({
      data: {
        title,
        body,
        completed,
        user_id: userId as string
      },
    });
    revalidatePath("/");
  } catch (err) {
    throw new Error("Error creating todo" + err);
}
};
export const deleteTodosAction = async (id: string) => {
  try {
    await prisma.todo.delete({
    where: {
      id,
    },
  });
  revalidatePath("/");
  } catch (err) {
    throw new Error("Error deleting todo" + err);
}
};

export const updateTodosAction = async ({ id, title, body, completed }: Todo) => {
  try {
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
  } catch (err) {
    throw new Error("Error updating todo" + err);
  }
};

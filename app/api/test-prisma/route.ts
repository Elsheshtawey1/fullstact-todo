import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const todos = await prisma.todo.findMany();
    return new Response(JSON.stringify(todos), { status: 200 });
  } catch (err) {
    console.error("Prisma Error:", err);
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
}

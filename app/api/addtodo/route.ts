import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { userId } = auth();

    if (!userId) return new NextResponse("Unauthorized", { status: 401 });

    const { title, description, tag, } = await req.json();

    const todo = await db.todo.create({
      data: {
        userId,
        title,
        description,
        tag,
      },
    });
    return NextResponse.json(todo);
  } catch (error) {
    console.log("[TODO_CREATION]", error);
  }
}

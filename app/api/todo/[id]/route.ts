import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function PATCH(
  req: Request,
  { params }: { params: { id: string } }
) {
  const { values } = await req.json();

  const { userId } = auth();

  if (!userId) return new NextResponse("Unauthorized", { status: 401 });

  const todo = await db.todo.update({
    where: {
      userId,
      id: params.id,
    },
    data: {
      ...values,
    },
  });

  if (!todo) return new NextResponse("Not found", { status: 404 });

  return NextResponse.json(todo);
}

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  const { userId } = auth();

  if (!userId) return new NextResponse("Unauthorized", { status: 401 });

  const todo = await db.todo.delete({
    where: {
      userId,
      id: params.id,
    },
  });

  if (!todo) return new NextResponse("Not found", { status: 404 });

  return new NextResponse("Todo Deleted Successfully", { status: 200 });
}

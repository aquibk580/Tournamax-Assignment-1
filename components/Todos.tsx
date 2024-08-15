import { Todo } from "./Todo";
import { db } from "@/lib/db";
import { Button } from "./ui/button";
import Link from "next/link";

interface TodosProps {
  userId: string;
}

export const TodosPage = async ({ userId }: TodosProps) => {
  const Todos = await db.todo.findMany({
    where: {
      userId,
    },
    orderBy:{
      createdAt:"desc"
    }
  });

  return (
    <>
      {Todos.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 md:grid-cols-2 gap-5 sm:px-4 px-3 md:px-0 my-16">
          {Todos.map((todo) => (
            <Todo
              key={todo.id}
              id={todo.id}
              title={todo.title}
              description={todo.description}
              tag={todo.tag}
            />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center space-y-4 mt-16">
          <h1 className="text-2xl  md:text-4xl text-white font-bold">
            No Tasks yet
          </h1>
          <Link href="/addtodo">
            <Button>Add Task</Button>
          </Link>
        </div>
      )}
    </>
  );
};

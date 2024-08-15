import EditTodoForm from "@/components/EditTodoForm";
import TodoForm from "@/components/TodoForm";
import { db } from "@/lib/db";
import { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata:Metadata = {
  title:"TaskMaster - Edit Task"
}

const Edit = async ({ params }: { params: { id: string } }) => {
  const todo = await db.todo.findUnique({
    where: {
      id: params.id,
    },
  });
  
  if(!todo) return redirect("/");

  return (
    <div className="p-6 flex items-center gap-2 justify-center md:mt-16">
      <div
        className="border p-7 text-black border-slate-400 shadow-2xl rounded-md text-2xl font-semibold"
        style={{ backgroundImage: `url("/bubblesBg.avif")`, objectFit: "contain" }}
      >
        <EditTodoForm
          id={params.id}
          title={todo.title}
          description={todo.description}
          tag={todo.tag}
        />
      </div>
    </div>
  );
};

export default Edit;

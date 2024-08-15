import TodoForm from "@/components/TodoForm";
import { TodosPage } from "@/components/Todos";
import { auth } from "@clerk/nextjs/server";
import { Metadata } from "next";

export const metadata:Metadata = {
  title:"TaskMaster - Home",
  description:"Taskmasters Tasks",
}

export default function Home() {
  const { userId } = auth();
  return (
    <div className="flex items-center justify-center gap-2 text-sm md:text-lg">
      <TodosPage userId={userId!}/>
    </div>
  );
}

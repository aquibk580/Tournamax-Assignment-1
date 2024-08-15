import TodoForm from "@/components/TodoForm";
import { Card, CardContent } from "@/components/ui/card";
import { Metadata } from "next";


export const metadata:Metadata = {
  title: "TaskMaaster - Add Task"
}

const AddTodo = () => {
  return (
    <div className="p-6 flex items-center gap-2 justify-center md:mt-12">
      <div className="border p-6 text-black border-slate-400 shadow-2xl rounded-md text-2xl font-semibold" style={{backgroundImage:`url("/bubblesBg.avif")`, backgroundSize:"cover",objectFit:"contain"}}>
        <TodoForm/>
      </div>
    </div>
  );
};

export default AddTodo;

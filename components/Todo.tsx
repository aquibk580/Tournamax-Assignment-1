"use client"

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { Pencil,Trash } from "lucide-react";
import toast from "react-hot-toast";
import axios from "axios";
import { useRouter } from "next/navigation";

interface TodoProps {
  id:string
  title: string;
  description: string;
  tag: string;
}



export const Todo = ({ id, title, description, tag }: TodoProps) => {
  const router = useRouter();
  const onEdit = async(id:string) =>{
   router.push(`/edit/${id}`);
 }

 const onDelete = async(id:string) =>{
   try {
    await axios.delete(`/api/todo/${id}`);
    router.refresh();
    toast.success("Todo Deleted");
   } catch (error) {
    toast.error("Something Went Wrong");
   }
 }
  return (
    <Card className="w-full shadow-2xl" style={{backgroundImage:`url("/bubblesBg.avif")`, objectFit:"contain"}}>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="leading-7 pr-3 text-lg md:text-2xl font-bold md:w-full w-[160px]">{title}</CardTitle>
        <div className="flex flex-row gap-x-2 items-center space-y-0 gap-y-0 mt-0">
          <Button
            variant="black"
            onClick={() => onEdit(id)}
            className="border-slate-400 px-2 md:px-4"
          >
            <Pencil size={22} className="pr-2" />
            Edit
          </Button>
          <Button
          onClick={() => onDelete(id)} 
           variant="black" className="border-slate-400 px-2 md:px-4">
            <Trash size={22} className="pr-2"/>
            Delete</Button>
        </div>
      </CardHeader>
      <CardContent className="text-gray-900 font-bold text-[15px] md:text-lg">{description}</CardContent>
      <CardFooter className="flex justify-between text-[16px] md:text-lg font-bold">{tag}</CardFooter>
    </Card>
  );
};

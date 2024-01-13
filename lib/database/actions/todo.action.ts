"use server"

import {connectToDatabase} from "@/lib/database/mongoose";
import Todo from "@/lib/database/models/todo.model";

export async function TodoAction(todoname: string, tododescription: string) {
    try {
        await connectToDatabase();
        await Todo.create({todoname, tododescription})
        console.log("Task created succesfully")

    } catch (error) {
        console.log(error);
        throw error;
    }
}
"use client"
import React from 'react';
import * as z from "zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { zodResolver } from "@hookform/resolvers/zod"
import {TodoAction} from "@/lib/database/actions/todo.action";




const formSchema = z.object({
    todoname: z.string().min(2).max(50),
    tododescription: z.string().min(10.).max(1000)

})




const Todo = () => {





    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
           todoname: "",
            tododescription: "",
        },
    })

    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        TodoAction(values.todoname, values.tododescription);
        console.log(values)
    }





    return (
        <div>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <FormField
                        control={form.control}
                        name="todoname"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Task name</FormLabel>
                                <FormControl>
                                    <Input placeholder="enter tasks" {...field} />
                                </FormControl>
                                <FormDescription>
                                    This is your task name
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="tododescription"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Description</FormLabel>
                                <FormControl>
                                    <Input placeholder="enter task description" {...field} />
                                </FormControl>
                                <FormDescription>
                                    This is your task description
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit">Submit</Button>
                </form>
            </Form>

        </div>
    );
};

export default Todo;
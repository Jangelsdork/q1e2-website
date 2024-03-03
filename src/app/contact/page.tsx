/* eslint-disable import/extensions */
/* eslint-disable import/prefer-default-export */

"use client"

import { zodResolver } from "@hookform/resolvers/zod"

import { useForm } from "react-hook-form"
import { z } from "zod"
import { Textarea } from "@/components/ui/textarea"


import { Button } from "../../components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../components/ui/form"
import { Input } from "../../components/ui/input"


import { average } from "../fonts";

 
const formSchema = z.object({
  name: z
    .string()
    .min(2, {
      message: "Name must be at least 2 characters.",
    })
    .max(100, {
      message: "Name must be less than 100 characters",
    }),
  email: z
    .string()
    .email({
      message: "Please enter a valid email address.",
    })
    .max(100, {
      message: "email must be less than 100 characters",
    }),
  message: z
    .string()
    .min(2, {
      message: "Name must be at least 2 characters.",
    })
    .max(500, {
      message: "Name too long - max 500 characters",
    }),
});

export type FormInput = z.infer<typeof formSchema>
 
export default function ProfileForm() {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          name: "",
          email: "",
          message: "",
        },
      })
     
      // 2. Define a submit handler.
      async function onSubmit(values: z.infer<typeof formSchema>) {
  
        try{
            const res: Response = await fetch ("/api/send-email",
            {
              method: "POST",
              mode: "cors",
              body: JSON.stringify(values),
              headers: {
                "content-type": "application/json"
              },
            })
            const data = await res.json();
            if(data){
              console.log(data)
            }
          }
          catch (error){
            console.log(error)
          }
          
        }

  return (
    <div className={`${average.className} mt-[25vh] min-h-[55vh] w-full flex justify-center p-10 text-white bg-red-500`}>
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Joshy Bean" {...field} />
              </FormControl>
              
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="jbean@gmail.com" {...field} />
              </FormControl>
              
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea placeholder="your message..." {...field} />
              </FormControl>
              
              <FormMessage />
            </FormItem>
          )}
        />
        
        <Button variant="outline" type="submit">Submit</Button>
      </form>
    </Form>
    </div>
  )
}
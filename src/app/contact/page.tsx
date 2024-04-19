/* eslint-disable import/extensions */
/* eslint-disable import/prefer-default-export */

"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react"


import { AiOutlineLoading } from "react-icons/ai";


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

    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [hasLoaded, setHasLoaded] = useState<boolean>(false)
    const [displayError, setDisplayError] = useState<boolean>(false)

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
        setIsLoading(true)
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
              if(data.error){
                setDisplayError(true)
                setHasLoaded(true)
              }
              else if(!data.error){
                setHasLoaded(true)
                setIsLoading(false)
              }
            }
          }
          catch (error){
            setIsLoading(false)
            console.log(error)
            setDisplayError(true)
          }
          
        }



  return (
    <div className={`${average.className} mt-[25vh] min-h-[55vh]  w-full flex justify-center p-10 text-white bg-red-500`}>
    <Form {...form} >
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 min-w-[60vw]">
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
        {/* disable button if submission successfull  */}
        
        {!hasLoaded?<Button variant="outline" type="submit" className="w-100%">Submit</Button>:<Button variant="outline" type="submit" disabled className="w-100%">Submit</Button>}
        
        {isLoading?<AiOutlineLoading className="animate-spin" />:<div />}
        {hasLoaded?<div>Thanks, we{"'"}ve received your message.</div>:<div />}
        {displayError?<div>Sorry, there{"'"}s been an issue sending your message. You can try again or reach out at info@q1e2.nl</div>:<div />}


      </form>
    </Form>
    </div>
  )
}
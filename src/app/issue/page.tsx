"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
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
import { Textarea } from "@/components/ui/textarea" 
import { Calendar } from "@/components/ui/calendar" 


// Form Validation Schema

const formSchema = z.object({
  recipientName: z.string().min(2, {
    message: "Recipient's name must be at least 2 characters.",
  }),
  certificateTitle: z.string().min(2, {
    message: "Certificate title must be at least 2 characters.",
  }),
  issueDate: z.string().min(1, {
    message: "Please select the issue date.",
  }),
  additionalDetails: z.string().optional(),
})

export default function IssueForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      recipientName: "",
      certificateTitle: "",
      issueDate: "",
      additionalDetails: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("Certificate Details Submitted:", values)
    // Later: send data to blockchain/DB for decentralized verification
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 max-w-4xl p-16 flex flex-col items-start justify-center">
        
        {/* Recipient Name */}
        <FormField
          control={form.control}
          name="recipientName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Recipient's Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter recipient's full name" {...field} />
              </FormControl>
              <FormDescription>
                Name of the person to whom the certificate is issued.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Certificate Title */}
        <FormField
          control={form.control}
          name="certificateTitle"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Certificate Title</FormLabel>
              <FormControl>
                <Input placeholder="Ex: Full Stack Web Development" {...field} />
              </FormControl>
              <FormDescription>
                Course, degree, or award title.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Issue Date */}
        <FormField
          control={form.control}
          name="issueDate"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Issue Date</FormLabel>
              <FormControl>
                <Input
                  type="date"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                Date when the certificate is officially issued.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Additional Details */}
        <FormField
          control={form.control}
          name="additionalDetails"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Additional Details (Optional)</FormLabel>
              <FormControl>
                <Textarea placeholder="Enter grade, institution name, remarks..." {...field} />
              </FormControl>
              <FormDescription>
                Any extra info about the certificate.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Submit Button */}
        <Button type="submit" className="w-full">
          Issue Certificate
        </Button>
      </form>
    </Form>
  )
}

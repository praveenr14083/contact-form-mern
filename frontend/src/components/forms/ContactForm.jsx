"use client";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { submitContact } from "@/api/contact";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const mutation = useMutation({
    mutationFn: submitContact,
    onSuccess: () => {
      alert("Form submitted successfully!");
      reset();
    },
    onError: () => {
      alert("Error submitting form!");
    },
  });

  const onSubmit = (data) => mutation.mutate(data);

  return (
    <Card className="w-full max-w-md shadow-xl rounded-2xl">
      <CardHeader>
        <CardTitle className="text-center text-2xl font-semibold">
          Contact Us
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              {...register("name", { required: "Name is required" })}
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
          </div>

          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email address",
                },
              })}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>

          <div>
            <Label htmlFor="phone">Phone</Label>
            <Input
              id="phone"
              {...register("phone", {
                required: "Phone is required",
                minLength: {
                  value: 10,
                  message: "Phone must be at least 10 digits",
                },
              })}
            />
            {errors.phone && (
              <p className="text-red-500 text-sm">{errors.phone.message}</p>
            )}
          </div>

          <div>
            <Label htmlFor="subject">Subject</Label>
            <Input
              id="subject"
              {...register("subject", { required: "Subject is required" })}
            />
            {errors.subject && (
              <p className="text-red-500 text-sm">{errors.subject.message}</p>
            )}
          </div>

          <div>
            <Label htmlFor="message">Message</Label>
            <textarea
              id="message"
              rows={4}
              className="border rounded-md w-full p-2"
              {...register("message", { required: "Message is required" })}
            />
            {errors.message && (
              <p className="text-red-500 text-sm">{errors.message.message}</p>
            )}
          </div>

          <Button type="submit" className="w-full">
            Submit
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}

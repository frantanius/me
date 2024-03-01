'use client';

import { useEffect } from 'react';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import useStore from '@/app/contact/store';
import { Button } from '@/app/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/app/ui/form';
import { Input } from '@/app/ui/input';
import { Textarea } from '@/app/ui/textarea';
import { useToast } from '@/app/ui/toast/use-toast';

const formSchema = z.object({
  name: z.string().min(2, {
    message: 'Name must be at least 2 characters.',
  }),
  email: z.coerce
    .string()
    .email({
      message: 'Invalid email address',
    })
    .min(5),
  message: z.string().min(10, {
    message: 'Messages must be at least 10 characters.',
  }),
});

export default function ContactForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  const formData = form.watch();
  const setFormData = useStore((state) => state.setFormData);
  const { toast } = useToast();

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    try {
      const res = await fetch('/api/email', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const result = await res.json();

      if (res.ok) {
        toast({ description: result.message });
        form.reset();
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setFormData(formData);
  }, [formData, setFormData]);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>_name:</FormLabel>
              <FormControl>
                <Input {...field} />
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
              <FormLabel>_email:</FormLabel>
              <FormControl>
                <Input {...field} />
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
              <FormLabel>_message:</FormLabel>
              <FormControl>
                <Textarea {...field} rows={5} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">submit-message</Button>
      </form>
    </Form>
  );
}

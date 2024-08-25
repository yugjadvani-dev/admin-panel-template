import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { createFileRoute } from '@tanstack/react-router'
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";

export const Route = createFileRoute('/admin-login')({
    component: AdminLogin
})

const formSchema = z.object({
    email: z.string().email("Invalid email address"),
    password: z.string()
        .min(8, "Password must be at least 8 characters long")
        .max(20, "Password must be at most 20 characters long")
        .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
        .regex(/[a-z]/, "Password must contain at least one lowercase letter")
        .regex(/[0-9]/, "Password must contain at least one number")
        .regex(/[@$!%*?&#]/, "Password must contain at least one special character"),
});

function AdminLogin() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password:""
        },
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values);
    }

    return (
        <div className="flex min-h-[100dvh] items-center justify-center bg-gray-100 dark:bg-neutral-800 from-primary to-primary/90 px-4 py-12 sm:px-6 lg:px-8">
            <div className="mx-auto w-full max-w-md rounded-lg bg-primary-foreground p-6 shadow-lg">
                <div className="space-y-4 text-center">
                    <h1 className="text-3xl font-bold tracking-tight text-neutral-800 dark:text-neutral-200">Admin Panel</h1>
                    <p className="text-muted-foreground">Enter your credentials to access the admin dashboard.</p>
                </div>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="mt-6 space-y-8">
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Email" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Password</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Password" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button type="submit" className='w-full'>Submit</Button>
                    </form>
                </Form>
            </div>
        </div>
    );
}
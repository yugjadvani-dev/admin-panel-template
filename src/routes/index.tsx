import { Sidebar, SidebarBody, SidebarLink } from '@/components/ui/sidebar';
import { cn } from '@/lib/utils';
import { IconArrowLeft, IconBrandTabler, IconSettings, IconUserBolt } from '@tabler/icons-react';
import { createFileRoute, Link } from '@tanstack/react-router';
import { useState } from 'react';
import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";

export const Route = createFileRoute('/')({
    component: HomeComponent,
});

function HomeComponent() {
    const links = [
        {
            label: "Dashboard",
            href: "/",
            icon: (
                <IconBrandTabler className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
            ),
        },
        {
            label: "Profile",
            href: "/",
            icon: (
                <IconUserBolt className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
            ),
        },
        {
            label: "Settings",
            href: "/",
            icon: (
                <IconSettings className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
            ),
        },
        {
            label: "Logout",
            href: "/admin-login",
            icon: (
                <IconArrowLeft className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
            ),
        },
    ];
    const [open, setOpen] = useState(false);

    return (
        <div
            className={cn(
                "rounded-md flex flex-col md:flex-row bg-gray-100 dark:bg-neutral-800 w-full flex-1 max-w-full mx-auto border border-neutral-200 dark:border-neutral-700 overflow-hidden",
                "min-h-screen" // for your use case, use `h-screen` instead of `h-[60vh]`
            )}
        >
            <Sidebar open={open} setOpen={setOpen}>
                <SidebarBody className="justify-between gap-10">
                    <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
                        {open ? <Logo /> : <LogoIcon />}
                        <div className="mt-8 flex flex-col gap-2">
                            {links.map((link, idx) => (
                                <SidebarLink key={idx} link={link} />
                            ))}
                        </div>
                    </div>
                    <div>
                        <SidebarLink
                            link={{
                                label: "Yug Jadvani",
                                href: "/",
                                icon: (
                                    <img
                                        src="https://avatars.githubusercontent.com/u/110123287?v=4"
                                        className="h-7 w-7 flex-shrink-0 rounded-full"
                                        width={50}
                                        height={50}
                                        alt="Avatar"
                                    />
                                ),
                            }}
                        />
                    </div>
                </SidebarBody>
            </Sidebar>
            <Dashboard />
        </div>
    );
}

export const Logo = () => {
    return (
        <Link
            href="#"
            className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
        >
            <div className="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
            <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="font-medium text-black dark:text-white whitespace-pre"
            >
                Admin Template
            </motion.span>
        </Link>
    );
};
export const LogoIcon = () => {
    return (
        <Link
            to="/"
            className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
        >
            <div className="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
        </Link>
    );
};

// Dummy dashboard component with content
const Dashboard = () => {
    return (
        <div className="flex flex-1">
            <div className="p-2 sm:py-4 md:p-10 rounded-tl-2xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 flex flex-col gap-2 flex-1 w-full h-full">
                    <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                            <Card x-chunk="dashboard-01-chunk-0">
                                <CardHeader>
                                    <CardTitle>Total Users</CardTitle>
                                    <CardDescription>All registered users</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="text-4xl font-bold">2,456</div>
                                </CardContent>
                                <CardFooter>
                                    <div className="flex items-center gap-2 text-muted-foreground">
                                        <TrendingUpIcon className="h-4 w-4" />
                                        <span>+5.2% from last month</span>
                                    </div>
                                </CardFooter>
                            </Card>
                            <Card x-chunk="dashboard-01-chunk-1">
                                <CardHeader>
                                    <CardTitle>Total Products</CardTitle>
                                    <CardDescription>All available products</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="text-4xl font-bold">1,234</div>
                                </CardContent>
                                <CardFooter>
                                    <div className="flex items-center gap-2 text-muted-foreground">
                                        <TrendingUpIcon className="h-4 w-4" />
                                        <span>+3.1% from last month</span>
                                    </div>
                                </CardFooter>
                            </Card>
                            <Card x-chunk="dashboard-01-chunk-2">
                                <CardHeader>
                                    <CardTitle>Total Orders</CardTitle>
                                    <CardDescription>All placed orders</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="text-4xl font-bold">3,456</div>
                                </CardContent>
                                <CardFooter>
                                    <div className="flex items-center gap-2 text-muted-foreground">
                                        <TrendingUpIcon className="h-4 w-4" />
                                        <span>+8.4% from last month</span>
                                    </div>
                                </CardFooter>
                            </Card>
                            <Card x-chunk="dashboard-01-chunk-3">
                                <CardHeader>
                                    <CardTitle>Total Revenue</CardTitle>
                                    <CardDescription>All generated revenue</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="text-4xl font-bold">$125,456</div>
                                </CardContent>
                                <CardFooter>
                                    <div className="flex items-center gap-2 text-muted-foreground">
                                        <TrendingUpIcon className="h-4 w-4" />
                                        <span>+12.2% from last month</span>
                                    </div>
                                </CardFooter>
                            </Card>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <Card x-chunk="dashboard-01-chunk-4">
                                <CardHeader>
                                    <CardTitle>Sales Overview</CardTitle>
                                    <CardDescription>Monthly sales performance</CardDescription>
                                </CardHeader>
                                <CardContent></CardContent>
                            </Card>
                            <Card x-chunk="dashboard-01-chunk-5">
                                <CardHeader>
                                    <CardTitle>Top Selling Products</CardTitle>
                                    <CardDescription>Best performing products</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <Table>
                                        <TableHeader>
                                            <TableRow>
                                                <TableHead>Product</TableHead>
                                                <TableHead>Sales</TableHead>
                                                <TableHead>Revenue</TableHead>
                                            </TableRow>
                                        </TableHeader>
                                        <TableBody>
                                            <TableRow>
                                                <TableCell>
                                                    <div className="font-medium">Acme Headphones</div>
                                                    <div className="text-sm text-muted-foreground">High-quality audio</div>
                                                </TableCell>
                                                <TableCell>1,234</TableCell>
                                                <TableCell>$45,678</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell>
                                                    <div className="font-medium">Acme Smartwatch</div>
                                                    <div className="text-sm text-muted-foreground">Fitness tracking</div>
                                                </TableCell>
                                                <TableCell>987</TableCell>
                                                <TableCell>$32,456</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell>
                                                    <div className="font-medium">Acme Laptop</div>
                                                    <div className="text-sm text-muted-foreground">High-performance computing</div>
                                                </TableCell>
                                                <TableCell>654</TableCell>
                                                <TableCell>$78,912</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell>
                                                    <div className="font-medium">Acme Tablet</div>
                                                    <div className="text-sm text-muted-foreground">Portable productivity</div>
                                                </TableCell>
                                                <TableCell>321</TableCell>
                                                <TableCell>$15,234</TableCell>
                                            </TableRow>
                                        </TableBody>
                                    </Table>
                                </CardContent>
                            </Card>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <Card x-chunk="dashboard-01-chunk-6">
                                <CardHeader>
                                    <CardTitle>New Users</CardTitle>
                                    <CardDescription>Recently registered users</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <Table>
                                        <TableHeader>
                                            <TableRow>
                                                <TableHead>Name</TableHead>
                                                <TableHead>Email</TableHead>
                                                <TableHead>Joined</TableHead>
                                            </TableRow>
                                        </TableHeader>
                                        <TableBody>
                                            <TableRow>
                                                <TableCell>
                                                    <div className="font-medium">John Doe</div>
                                                </TableCell>
                                                <TableCell>john@example.com</TableCell>
                                                <TableCell>2023-04-15</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell>
                                                    <div className="font-medium">Jane Smith</div>
                                                </TableCell>
                                                <TableCell>jane@example.com</TableCell>
                                                <TableCell>2023-04-12</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell>
                                                    <div className="font-medium">Bob Johnson</div>
                                                </TableCell>
                                                <TableCell>bob@example.com</TableCell>
                                                <TableCell>2023-04-10</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell />
                                            </TableRow>
                                        </TableBody>
                                    </Table>
                                </CardContent>
                            </Card>
                        </div>
                    </main>
            </div>
        </div>
    );
};

function TrendingUpIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
            <polyline points="16 7 22 7 22 13" />
        </svg>
    );
}
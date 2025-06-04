import { Github } from "lucide-react";
import Link from "next/link";
import { ThemeToggle } from "^/components/ThemeToggle";

export default function Home() {
    return (
        <>
            <ThemeToggle />
            <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-zinc-50 to-zinc-100 p-6 dark:from-zinc-900 dark:to-zinc-800">
                <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
                    {/* Logo */}
                    <div className="mb-8 rounded-full bg-white p-6 shadow-md dark:bg-zinc-800">
                        <div className="flex size-24 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-4xl font-bold text-white">
                            tN
                        </div>
                    </div>

                    {/* Title */}
                    <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-white md:text-5xl">
                        template-next
                    </h1>

                    {/* Subtitle */}
                    <p className="mb-8 text-xl font-medium text-zinc-700 dark:text-zinc-300 md:text-2xl">
                        by{" "}
                        <span className="text-blue-600 dark:text-blue-400">
                            oBusk
                        </span>
                    </p>

                    {/* Description */}
                    <div className="prose dark:prose-invert mb-10 max-w-2xl">
                        <p className="mb-4 text-lg">
                            An opinionated boilerplate for creating Next.js
                            applications with a focus on developer experience
                            and code quality.
                        </p>

                        <h2 className="mb-3 mt-6 text-xl font-bold">
                            Features
                        </h2>
                        <ul className="list-inside list-disc space-y-2 text-left">
                            <li>Built with Next.js 15.3</li>
                            <li>Styled with Tailwind CSS 3</li>
                            <li>
                                Strict typing and linting using{" "}
                                <a
                                    href="https://github.com/oBusk/eslint-config-next"
                                    className="text-blue-600 hover:underline dark:text-blue-400"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    @obusk/eslint-config-next
                                </a>
                            </li>
                            <li>Ready for your next project</li>
                        </ul>
                    </div>

                    {/* Buttons */}
                    <div className="flex w-full max-w-md flex-col gap-4 sm:flex-row">
                        <Link
                            href="https://github.com/oBusk/template-next"
                            className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-zinc-800 px-6 py-3 font-medium text-white transition-colors hover:bg-zinc-700 dark:bg-zinc-700 dark:hover:bg-zinc-600"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Github className="size-5" />
                            View on GitHub
                        </Link>

                        <Link
                            href="https://github.com/new?template_name=template-next&template_owner=oBusk"
                            className="flex flex-1 items-center justify-center rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition-colors hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Use Template
                        </Link>
                    </div>
                </div>
            </main>
        </>
    );
}

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function NewForumPage() {
    const router = useRouter();
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [category, setCategory] = useState("strategy");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        // TODO: Implement thread creation logic
        router.push("/social/forums");
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold mb-8 tracking-wider">Create New Thread</h1>

            <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
                <div className="space-y-6">
                    <div>
                        <label htmlFor="category" className="block text-sm font-medium mb-2">
                            Category
                        </label>
                        <select
                            id="category"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            className="w-full p-3 rounded-lg bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700"
                        >
                            <option value="strategy">Strategy & Tactics</option>
                            <option value="tournaments">Tournaments & Events</option>
                            <option value="general">General Discussion</option>
                            <option value="feedback">Feedback & Suggestions</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="title" className="block text-sm font-medium mb-2">
                            Title
                        </label>
                        <input
                            type="text"
                            id="title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="w-full p-3 rounded-lg bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700"
                            placeholder="Enter thread title"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="content" className="block text-sm font-medium mb-2">
                            Content
                        </label>
                        <textarea
                            id="content"
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            className="w-full p-3 rounded-lg bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 min-h-[200px]"
                            placeholder="Write your thread content here..."
                            required
                        />
                    </div>

                    <div className="flex justify-end space-x-4">
                        <button
                            type="button"
                            onClick={() => router.back()}
                            className="px-6 py-2 rounded-lg border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-6 py-2 bg-accent hover:bg-accent/90 text-white rounded-lg"
                        >
                            Create Thread
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}
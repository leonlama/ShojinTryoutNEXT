import React from 'react';

export default function NewThreadPage() {
    return (
        <div className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
            <div className="max-w-7xl mx-auto">
                <div className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                    <div className="bg-gray-200 dark:bg-gray-700 border-b border-gray-300 dark:border-gray-600 p-4">
                        <h1 className="text-4xl font-bold tracking-wider text-gray-900 dark:text-gray-100">Create New Thread</h1>
                    </div>

                    <div className="p-6">
                        <form className="max-w-3xl mx-auto space-y-6">
                            <div>
                                <label htmlFor="category" className="block text-sm font-medium text-gray-900 dark:text-gray-100 mb-2">
                                    Category
                                </label>
                                <select 
                                    id="category"
                                    className="w-full px-4 py-2 rounded-lg bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-accent focus:border-transparent text-gray-900 dark:text-gray-100"
                                >
                                    <option value="strategy">Strategy & Tactics</option>
                                    <option value="tournaments">Tournaments & Events</option>
                                    <option value="general">General Discussion</option>
                                    <option value="feedback">Feedback & Suggestions</option>
                                </select>
                            </div>

                            <div>
                                <label htmlFor="title" className="block text-sm font-medium text-gray-900 dark:text-gray-100 mb-2">
                                    Title
                                </label>
                                <input 
                                    type="text"
                                    id="title"
                                    placeholder="Enter thread title..."
                                    className="w-full px-4 py-2 rounded-lg bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-accent focus:border-transparent text-gray-900 dark:text-gray-100"
                                />
                            </div>

                            <div>
                                <label htmlFor="content" className="block text-sm font-medium text-gray-900 dark:text-gray-100 mb-2">
                                    Content
                                </label>
                                <textarea
                                    id="content"
                                    rows={10}
                                    placeholder="Write your post content here..."
                                    className="w-full px-4 py-2 rounded-lg bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-accent focus:border-transparent text-gray-900 dark:text-gray-100"
                                ></textarea>
                            </div>

                            <div className="flex justify-end space-x-4">
                                <button 
                                    type="button"
                                    className="px-6 py-2 rounded-lg border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800"
                                >
                                    Cancel
                                </button>
                                <button 
                                    type="submit"
                                    className="px-6 py-2 rounded-lg bg-accent hover:bg-accent/90 text-white font-semibold"
                                >
                                    Create Thread
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
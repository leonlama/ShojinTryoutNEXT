export default function PrivacyPage() {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-3xl w-full p-8 transform transition-all relative overflow-y-auto max-h-[90vh]">
                <a 
                    href="/"
                    className="absolute top-4 left-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors"
                    aria-label="Close"
                >
                    <span className="text-xl">&times;</span>
                </a>
                
                <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">Privacy Policy</h1>
                
                <div className="space-y-6 text-gray-600 dark:text-gray-300">
                    <section>
                        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">1. Information We Collect</h2>
                        <p>We collect information you provide directly to us, including:</p>
                        <ul className="list-disc pl-6 mt-2">
                            <li>Account information (username, email)</li>
                            <li>Game history and statistics</li>
                            <li>Communications with other users</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">2. How We Use Your Information</h2>
                        <p>We use the collected information to:</p>
                        <ul className="list-disc pl-6 mt-2">
                            <li>Provide and improve our services</li>
                            <li>Match you with appropriate opponents</li>
                            <li>Track game statistics and rankings</li>
                            <li>Communicate with you about updates and features</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">3. Data Security</h2>
                        <p>We implement appropriate security measures to protect your personal information. However, no method of transmission over the Internet is 100% secure.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">4. Data Sharing</h2>
                        <p>We do not sell your personal information. We may share your information only:</p>
                        <ul className="list-disc pl-6 mt-2">
                            <li>With your consent</li>
                            <li>To comply with legal obligations</li>
                            <li>To protect our rights and prevent abuse</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">5. Your Rights</h2>
                        <p>You have the right to:</p>
                        <ul className="list-disc pl-6 mt-2">
                            <li>Access your personal data</li>
                            <li>Request data correction or deletion</li>
                            <li>Opt out of marketing communications</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">6. Cookies</h2>
                        <p>We use cookies to enhance your experience and analyze site usage. You can control cookie settings through your browser.</p>
                    </section>

                    <div className="text-sm text-gray-500 dark:text-gray-400 mt-8">
                        <p>Last updated: December 2024</p>
                        <p>Contact us at privacy@shojinchess.com for privacy-related inquiries.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
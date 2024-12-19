export default function TermsPage() {
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
                
                <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">Terms of Service</h1>
                
                <div className="space-y-6 text-gray-600 dark:text-gray-300">
                    <section>
                        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">1. Acceptance of Terms</h2>
                        <p>By accessing and using Shojin Chess, you agree to be bound by these Terms of Service and all applicable laws and regulations.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">2. User Accounts</h2>
                        <p>You are responsible for maintaining the confidentiality of your account and password. You agree to accept responsibility for all activities that occur under your account.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">3. Fair Play</h2>
                        <p>Users must play fairly and not use any automated systems or chess engines during games. Violation of fair play rules may result in account suspension or termination.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">4. Content</h2>
                        <p>Users are responsible for all content they post on Shojin Chess. Inappropriate, offensive, or illegal content is strictly prohibited.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">5. Modifications</h2>
                        <p>We reserve the right to modify these terms at any time. Continued use of the platform after changes constitutes acceptance of the modified terms.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">6. Termination</h2>
                        <p>We reserve the right to terminate or suspend access to our service immediately, without prior notice, for any reason whatsoever.</p>
                    </section>

                    <div className="text-sm text-gray-500 dark:text-gray-400 mt-8">
                        <p>Last updated: December 2024</p>
                        <p>Contact us at support@shojinchess.com for any questions regarding these terms.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
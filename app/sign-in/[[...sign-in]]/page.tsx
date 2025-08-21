import { SignIn } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'

export default function Page() {
    return (
        <main className="min-h-screen bg-gradient-to-br from-background via-slate-900 to-violet-950 flex items-center justify-center p-4 relative overflow-hidde w-full">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl animate-ping"></div>
            </div>

            {/* Grid pattern overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.1)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] w-full h-full"></div>

            <div className="relative z-10 w-full max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 items-center">
                {/* Left side - Branding and content */}
                <div className="text-center lg:text-left space-y-8 px-6">
                    {/* Logo and brand */}
                    <div className="space-y-4">
                        <Link href="/" className="inline-flex items-center space-x-3 group">
                            <div className="relative">
                                <Image 
                                    src="/images/logo.svg" 
                                    alt="Ilmora Logo" 
                                    width={60} 
                                    height={60}
                                    className="transition-transform group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-purple-600/20 rounded-full blur-xl group-hover:blur-2xl transition-all"></div>
                            </div>
                            <span className="text-3xl font-bold bg-gradient-to-r from-purple-400 via-violet-400 to-indigo-400 bg-clip-text text-transparent">
                                Ilmora
                            </span>
                        </Link>
                        <div className="h-1 w-20 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full"></div>
                    </div>

                    {/* Hero content */}
                    <div className="space-y-6">
                        <div className="space-y-4">
                            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                                <span className="text-white">Welcome to the</span>
                                <br />
                                <span className="bg-gradient-to-r from-purple-400 via-violet-400 to-indigo-400 bg-clip-text text-transparent">
                                    Future of Learning
                                </span>
                            </h1>
                            <p className="text-xl text-gray-300 max-w-md mx-auto lg:mx-0 leading-relaxed">
                                Transform your learning experience with AI-powered companions that adapt to your style and pace.
                            </p>
                        </div>

                        {/* Features list */}
                        <div className="space-y-4">
                            {[
                                { icon: "🤖", text: "AI-Powered Learning Companions" },
                                { icon: "🎯", text: "Personalized Learning Paths" },
                                { icon: "🗣️", text: "Real-Time Voice Conversations" },
                                { icon: "📊", text: "Track Your Progress" }
                            ].map((feature, index) => (
                                <div 
                                    key={index}
                                    className="flex items-center space-x-3 text-gray-300 animate-fade-in"
                                    style={{ animationDelay: `${index * 200}ms` }}
                                >
                                    <span className="text-2xl">{feature.icon}</span>
                                    <span className="text-lg">{feature.text}</span>
                                </div>
                            ))}
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-700/50">
                            <div className="text-center">
                                <div className="text-2xl font-bold text-purple-400">1000+</div>
                                <div className="text-sm text-gray-400">Active Learners</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-violet-400">50+</div>
                                <div className="text-sm text-gray-400">Subjects</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-indigo-400">95%</div>
                                <div className="text-sm text-gray-400">Success Rate</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right side - Sign in form */}
                <div className="flex justify-center lg:justify-end">
                    <div className="relative">
                        {/* Glowing border effect */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 rounded-2xl blur-xl opacity-60 animate-pulse"></div>
                        
                        {/* Form container */}
                        <div className="relative bg-gray-900/90 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-8 shadow-2xl">
                            {/* Welcome text above form */}
                            <div className="text-center space-y-2 mb-6">
                                <h2 className="text-2xl font-bold text-white">Welcome Back</h2>
                                <p className="text-gray-400">Sign in to continue your learning journey</p>
                            </div>

                            {/* Clerk SignIn component */}
                            <div className="[&_.cl-card]:bg-transparent [&_.cl-card]:shadow-none [&_.cl-card]:border-0">
                                <SignIn 
                                    appearance={{
                                        elements: {
                                            formButtonPrimary: 'bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white border-0 rounded-lg px-6 py-3 font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25',
                                            card: 'bg-transparent shadow-none border-0',
                                            headerTitle: 'text-white text-xl font-bold',
                                            headerSubtitle: 'text-gray-400',
                                            socialButtonsBlockButton: 'border-gray-600 text-white hover:bg-gray-800 transition-colors rounded-lg',
                                            socialButtonsBlockButtonText: 'text-white font-medium',
                                            formFieldInput: 'bg-gray-800/50 border-gray-600 text-white placeholder-gray-400 focus:border-purple-500 focus:ring-purple-500/20 rounded-lg',
                                            formFieldLabel: 'text-gray-300',
                                            dividerLine: 'bg-gray-600',
                                            dividerText: 'text-gray-400',
                                            footerActionLink: 'text-purple-400 hover:text-purple-300',
                                            identityPreviewText: 'text-gray-300',
                                            identityPreviewEditButtonIcon: 'text-gray-400',
                                            formResendCodeLink: 'text-purple-400 hover:text-purple-300',
                                            otpCodeFieldInput: 'bg-gray-800/50 border-gray-600 text-white focus:border-purple-500 rounded-lg',
                                            alertText: 'text-red-400',
                                            formFieldWarningText: 'text-amber-400',
                                            formFieldSuccessText: 'text-green-400'
                                        }
                                    }}
                                />
                            </div>

                            {/* Additional info */}
                            <div className="mt-6 pt-6 border-t border-gray-700/50 text-center">
                                <p className="text-sm text-gray-400">
                                    New to Ilmora?{' '}
                                    <Link href="/sign-up" className="text-purple-400 hover:text-purple-300 font-medium transition-colors">
                                        Create an account
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Floating elements */}
            <div className="absolute top-20 left-10 w-3 h-3 bg-purple-500 rounded-full animate-bounce"></div>
            <div className="absolute top-40 right-20 w-2 h-2 bg-indigo-500 rounded-full animate-bounce delay-300"></div>
            <div className="absolute bottom-20 left-20 w-4 h-4 bg-violet-500 rounded-full animate-bounce delay-700"></div>
            <div className="absolute bottom-40 right-10 w-2 h-2 bg-purple-400 rounded-full animate-bounce delay-1000"></div>
        </main>
    )
}
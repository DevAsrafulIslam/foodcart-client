import useAuth from '../../../hooks/useAuth'

const UserHome = () => {
    const { user } = useAuth()

    return (
        <section className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-900 to-blue-900 flex items-start pt-24 justify-center">
            <div className="relative w-full max-w-4xl mx-auto px-6">
                {/* Subtle glow behind card */}
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-3xl blur opacity-30" />

                <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-10 shadow-2xl border border-white/20">
                    <div className="flex items-center gap-4">
                        {/* Avatar ring */}
                        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 p-1">
                            <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
                                <span className="text-white text-3xl font-bold">
                                    {user?.displayName ? user.displayName.charAt(0).toUpperCase() : 'B'}
                                </span>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
                                Hi, Welcome{' '}
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-400">
                                    {user?.displayName || 'Black'}
                                </span>
                            </h2>
                            <p className="mt-2 text-white/70">Your personalized dashboard awaits.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default UserHome
import { useState } from "react"
import logo2 from "../assets/images/logo2.png"

const NIGERIAN_STATES = [
    "Abuja", "Anambra", "Delta", "Enugu", "Lagos", "Ogun", "Rivers"
]

export default function Waitlist() {
    // const [showPassword, setShowPassword] = useState(false)
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        school: "",
        destination: ""
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        console.log(formData)
        // handle submission
    }

    return (
        <section className="min-h-screen flex items-center justify-center bg-gray-100 px-4 py-20">
            <div className="bg-primary rounded-2xl p-8 md:p-10 w-full max-w-lg">

                <img src={logo2} alt="logo" className="rounded-full w-32 py-2" />
                {/* <h2 className="text-2xl font-bold text-orange-500">Axis Connect</h2> */}
                {/* Header */}
                <h1 className="text-2xl md:text-3xl font-bold italic text-white mb-1">
                    Ready for your next trip?
                </h1>
                <p className="text-sm text-[#7a90b0] mb-8">
                    Be the first to know when Axis Connect launches in your area.
                </p>

                {/* Form */}
                <div className="flex flex-col gap-4">

                    {/* First & Last Name */}
                    <div className="grid grid-cols-2 gap-4">
                        <div className="flex flex-col gap-1.5">
                            <label className="text-[11px] uppercase tracking-wider font-medium text-[#7a90b0]">
                                First name
                            </label>
                            <input
                                type="text"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                placeholder="e.g. Amaka"
                                className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-[#3d5270] outline-none focus:border-orange-500/50 focus:bg-white/8 transition-all"
                            />
                        </div>
                        <div className="flex flex-col gap-1.5">
                            <label className="text-[11px] uppercase tracking-wider font-medium text-[#7a90b0]">
                                Last name
                            </label>
                            <input
                                type="text"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                placeholder="e.g. Okafor"
                                className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-[#3d5270] outline-none focus:border-orange-500/50 focus:bg-white/8 transition-all"
                            />
                        </div>
                    </div>

                    {/* Email */}
                    <div className="flex flex-col gap-1.5">
                        <label className="text-[11px] uppercase tracking-wider font-medium text-[#7a90b0]">
                            Email address
                        </label>
                        <div className="relative">
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="you@example.com"
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 pr-10 text-sm text-white placeholder:text-[#3d5270] outline-none focus:border-orange-500/50 transition-all"
                            />
                            <svg className="absolute right-3 top-1/2 -translate-y-1/2 text-[#3d5270]" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                            </svg>
                        </div>
                    </div>

                    {/* Phone */}
                    <div className="flex flex-col gap-1.5">
                        <label className="text-[11px] uppercase tracking-wider font-medium text-[#7a90b0]">
                            Phone number
                        </label>
                        <div className="relative">
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="+234 000 000 0000"
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 pr-10 text-sm text-white placeholder:text-[#3d5270] outline-none focus:border-orange-500/50 transition-all"
                            />
                            <svg className="absolute right-3 top-1/2 -translate-y-1/2 text-[#3d5270]" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 6.75Z" />
                            </svg>
                        </div>
                    </div>

                    {/* School */}
                    <div className="flex flex-col gap-1.5">
                        <label className="text-[11px] uppercase tracking-wider font-medium text-[#7a90b0]">
                            School / institution
                        </label>
                        <input
                            type="text"
                            name="school"
                            value={formData.school}
                            onChange={handleChange}
                            placeholder="e.g. University of Lagos"
                            className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-[#3d5270] outline-none focus:border-orange-500/50 transition-all"
                        />
                    </div>

                    {/* Travel Destination */}
                    <div className="flex flex-col gap-1.5">
                        <label className="text-[11px] uppercase tracking-wider font-medium text-[#7a90b0]">
                            Travel destination
                        </label>
                        <div className="relative">
                            <select
                                name="destination"
                                value={formData.destination}
                                onChange={handleChange}
                                className="w-full appearance-none bg-white/5 border border-white/10 rounded-xl px-4 py-3 pr-10 text-sm text-white outline-none focus:border-orange-500/50 transition-all cursor-pointer"
                            >
                                <option value="" disabled className="bg-[#0d1b3e]">Select a state</option>
                                {NIGERIAN_STATES.map((state) => (
                                    <option key={state} value={state} className="bg-[#0d1b3e]">{state}</option>
                                ))}
                            </select>
                            <svg className="absolute right-3 top-1/2 -translate-y-1/2 text-[#3d5270] pointer-events-none" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                            </svg>
                        </div>
                    </div>

                    {/* Submit */}
                    <button
                        onClick={handleSubmit}
                        className="w-full mt-2 bg-orange-500 hover:opacity-90 active:scale-[0.99] transition-all text-white font-semibold text-base py-3.5 rounded-xl flex items-center justify-center gap-2"
                    >
                        Join the waitlist
                    </button>

                    {/* Footer */}
                    <div className="flex items-center justify-center gap-1.5 mt-1">
                        <svg className="text-[#3d5270]" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                        </svg>
                        <p className="text-[11px] text-[#3d5270]">Your information is private and will never be shared.</p>
                    </div>

                </div>
            </div>
        </section>
    )
}
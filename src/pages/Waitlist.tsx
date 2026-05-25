import { useState } from "react"
import { motion } from "framer-motion"
import logo2 from "../assets/images/logo2.png"

const NIGERIAN_STATES = ["Abuja", "Enugu", "Lagos"]
const TRANSPORT_TYPES = ["Bus", "Sienna"]

// const fieldVariant = {
//     hidden: { opacity: 0, y: 16 },
//     visible: (i: number) => ({
//         opacity: 1,
//         y: 0,
//         transition: { duration: 0.35, ease: "easeOut", delay: 0.3 + i * 0.07 }
//     })
// }

export default function Waitlist() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        school: "",
        destination: "",
        transportCompany: "",
        transportType: ""
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        console.log(formData)
    }

    return (
        <section className="min-h-screen flex items-center justify-center bg-gray-100 px-4 py-20">
            <motion.div
                className="bg-primary rounded-2xl p-8 md:p-10 w-full max-w-lg"
                initial={{ opacity: 0, y: 40, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
            >
                <motion.img
                    src={logo2}
                    alt="logo"
                    className="rounded-full w-32 py-2"
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
                />

                <motion.h1
                    className="text-2xl md:text-3xl font-bold italic text-white mb-1"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, ease: "easeOut", delay: 0.15 }}
                >
                    Ready for your next trip?
                </motion.h1>

                <motion.p
                    className="text-sm text-[#7a90b0] mb-8"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, ease: "easeOut", delay: 0.2 }}
                >
                    Be the first to know when Axis Connect launches in your area.
                </motion.p>

                {/* Form */}
                <div className="flex flex-col gap-4">

                    {/* First & Last Name */}
                    <motion.div
                        className="grid grid-cols-2 gap-4"
                        custom={0}
                        
                        initial="hidden"
                        animate="visible"
                    >
                        <div className="flex flex-col gap-1.5">
                            <label className="text-[11px] uppercase tracking-wider font-medium text-[#7a90b0]">First name</label>
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
                            <label className="text-[11px] uppercase tracking-wider font-medium text-[#7a90b0]">Last name</label>
                            <input
                                type="text"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                placeholder="e.g. Okafor"
                                className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-[#3d5270] outline-none focus:border-orange-500/50 focus:bg-white/8 transition-all"
                            />
                        </div>
                    </motion.div>

                    {/* Email */}
                    <motion.div className="flex flex-col gap-1.5" custom={1}  initial="hidden" animate="visible">
                        <label className="text-[11px] uppercase tracking-wider font-medium text-[#7a90b0]">Email address</label>
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
                    </motion.div>

                    {/* Phone */}
                    <motion.div className="flex flex-col gap-1.5" custom={2}  initial="hidden" animate="visible">
                        <label className="text-[11px] uppercase tracking-wider font-medium text-[#7a90b0]">Phone number</label>
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
                    </motion.div>

                    {/* School */}
                    <motion.div className="flex flex-col gap-1.5" custom={3}  initial="hidden" animate="visible">
                        <label className="text-[11px] uppercase tracking-wider font-medium text-[#7a90b0]">School / institution</label>
                        <input
                            type="text"
                            name="school"
                            value={formData.school}
                            onChange={handleChange}
                            placeholder="e.g. University of Lagos"
                            className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-[#3d5270] outline-none focus:border-orange-500/50 transition-all"
                        />
                    </motion.div>

                    {/* Travel Destination */}
                    <motion.div className="flex flex-col gap-1.5" custom={4}  initial="hidden" animate="visible">
                        <label className="text-[11px] uppercase tracking-wider font-medium text-[#7a90b0]">Travel destination</label>
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
                    </motion.div>

                    {/* Transport Company */}
                    <motion.div className="flex flex-col gap-1.5" custom={5}  initial="hidden" animate="visible">
                        <label className="text-[11px] uppercase tracking-wider font-medium text-[#7a90b0]">Transport Company you use (if any)</label>
                        <input
                            type="text"
                            name="transportCompany"
                            value={formData.transportCompany}
                            onChange={handleChange}
                            placeholder="e.g. Libra Motors"
                            className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-[#3d5270] outline-none focus:border-orange-500/50 transition-all"
                        />
                    </motion.div>

                    {/* Transport Type */}
                    <motion.div className="flex flex-col gap-1.5" custom={6}  initial="hidden" animate="visible">
                        <label className="text-[11px] uppercase tracking-wider font-medium text-[#7a90b0]">Preferred Transport Type</label>
                        <div className="relative">
                            <select
                                name="transportType"
                                value={formData.transportType}
                                onChange={handleChange}
                                className="w-full appearance-none bg-white/5 border border-white/10 rounded-xl px-4 py-3 pr-10 text-sm text-white outline-none focus:border-orange-500/50 transition-all cursor-pointer"
                            >
                                <option value="" disabled className="bg-[#0d1b3e]">Select a vehicle</option>
                                {TRANSPORT_TYPES.map((type) => (
                                    <option key={type} value={type} className="bg-[#0d1b3e]">{type}</option>
                                ))}
                            </select>
                            <svg className="absolute right-3 top-1/2 -translate-y-1/2 text-[#3d5270] pointer-events-none" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                            </svg>
                        </div>
                    </motion.div>

                    {/* Submit */}
                    <motion.button
                        onClick={handleSubmit}
                        className="w-full mt-2 bg-orange-500 text-white font-semibold text-base py-3.5 rounded-xl flex items-center justify-center gap-2"
                        custom={7}
                        
                        initial="hidden"
                        animate="visible"
                        whileHover={{ opacity: 0.92, scale: 1.01 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        Join the waitlist
                    </motion.button>

                    {/* Privacy note */}
                    <motion.div
                        className="flex items-center justify-center gap-1.5 mt-1"
                        custom={8}
                        
                        initial="hidden"
                        animate="visible"
                    >
                        <svg className="text-[#3d5270]" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                        </svg>
                        <p className="text-[11px] text-[#3d5270]">Your information is private and will never be shared.</p>
                    </motion.div>

                </div>
            </motion.div>
        </section>
    )
}
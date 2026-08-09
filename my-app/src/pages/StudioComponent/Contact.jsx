import { useState } from 'react'

function Contact() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" })

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        alert(`Thanks ${formData.name}, we'll get back to you at ${formData.email}!`)
        setFormData({ name: "", email: "", message: "" })
    }

    return (
        <div className="w-full max-w-3xl mx-auto px-4 sm:px-6 pt-24 sm:pt-28 pb-16">
            
            <h1 className="montserrat-bold text-3xl sm:text-4xl text-[#484848]">Contact Us</h1>
            <p className="montserrat-cason text-sm sm:text-base text-gray-500 mt-2">
                Have a question or want to book something special? Send us a message.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-5">
                
                <div className="flex flex-col gap-1.5">
                    <label className="montserrat-bold text-sm text-[#484848]">Name</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="border border-gray-300 rounded-xl px-4 py-2.5 montserrat-cason text-sm focus:outline-none focus:border-[#75146A]"
                        placeholder="Your name"
                    />
                </div>

                <div className="flex flex-col gap-1.5">
                    <label className="montserrat-bold text-sm text-[#484848]">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="border border-gray-300 rounded-xl px-4 py-2.5 montserrat-cason text-sm focus:outline-none focus:border-[#75146A]"
                        placeholder="you@example.com"
                    />
                </div>

                <div className="flex flex-col gap-1.5">
                    <label className="montserrat-bold text-sm text-[#484848]">Message</label>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="border border-gray-300 rounded-xl px-4 py-2.5 montserrat-cason text-sm resize-none focus:outline-none focus:border-[#75146A]"
                        placeholder="How can we help?"
                    />
                </div>

                <button
                    type="submit"
                    className="montserrat-bold bg-[#75146A] text-white rounded-full px-6 py-3 hover:bg-[#5c1054] transition-colors duration-200 w-full sm:w-fit"
                >
                    Send Message
                </button>
            </form>

            <div className="mt-10 pt-6 border-t border-gray-200 flex flex-col sm:flex-row gap-4 sm:gap-10 text-sm text-gray-500 montserrat-cason">
                <div className="flex items-center gap-2">
                    <i className="ri-phone-line text-[#75146A]"></i>
                    +66 0902955224
                </div>
                <div className="flex items-center gap-2">
                    <i className="ri-mail-line text-[#75146A]"></i>
                    2No2Time@gmail.com
                </div>
                <div className="flex items-center gap-2">
                    <i className="ri-map-pin-line text-[#75146A]"></i>
                    Somewhere in Nevada
                </div>
            </div>
        </div>
    )
}

export default Contact
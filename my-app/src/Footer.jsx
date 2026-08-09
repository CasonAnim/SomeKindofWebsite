function Footer() {
    const companyLinks = ["About Us", "Legal Information", "Contact Us", "Blogs"]
    const helpLinks = ["Find a Property", "How To Host?", "Why Us?", "FAQs", "Rental Guides"]

    return (
        <footer className="w-full bg-[#f4f4f4] px-6 sm:px-10 lg:px-16 pt-10 sm:pt-14 pb-6">
            <div className="flex flex-col lg:flex-row justify-between gap-10 lg:gap-8">
                
                {/* Brand */}
                <div className="flex flex-col gap-3 max-w-sm">
                    <h2 className="montserrat-bold text-2xl sm:text-3xl text-[#484848]">
                        SAKURAN_SEN
                    </h2>
                    <p className="montserrat-cason text-sm sm:text-base text-gray-500">
                        A majestic hotel with a good design
                    </p>
                    <a 
                        href="https://github.com/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="mt-2 flex items-center gap-2 w-fit bg-gray-200 hover:bg-gray-300 transition-colors duration-200 rounded-lg px-4 py-2 montserrat-bold text-sm text-[#484848]"
                    >
                        <i className="ri-github-fill text-lg"></i>
                        GitHub
                    </a>
                </div>

                {/* Link columns */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-12">
                    <div className="flex flex-col gap-3">
                        <h3 className="montserrat-bold text-sm text-[#484848] tracking-wide">COMPANY</h3>
                        {companyLinks.map((link, i) => (
                            <a key={i} href="#" className="montserrat-cason text-sm text-gray-500 hover:text-[#484848] transition-colors duration-200">
                                {link}
                            </a>
                        ))}
                    </div>

                    <div className="flex flex-col gap-3">
                        <h3 className="montserrat-bold text-sm text-[#484848] tracking-wide">HELP CENTER</h3>
                        {helpLinks.map((link, i) => (
                            <a key={i} href="#" className="montserrat-cason text-sm text-gray-500 hover:text-[#484848] transition-colors duration-200">
                                {link}
                            </a>
                        ))}
                    </div>

                    <div className="col-span-2 sm:col-span-1 flex flex-col gap-3">
                        <h3 className="montserrat-bold text-sm text-[#484848] tracking-wide">CONTACT INFO</h3>
                        <p className="montserrat-cason text-sm text-gray-500">Phone: +66 0902955224</p>
                        <p className="montserrat-cason text-sm text-gray-500">Email: 2No2Time@gmail.com</p>
                        <p className="montserrat-cason text-sm text-gray-500">Location: Somewhere In Nevada</p>
                        <a href="#" className="mt-1 w-fit">
                            <i className="ri-facebook-circle-fill text-2xl text-[#484848] hover:text-blue-600 transition-colors duration-200"></i>
                        </a>
                    </div>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="mt-10 sm:mt-14 pt-4 border-t border-gray-300 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs sm:text-sm text-gray-500 montserrat-cason">
                <p>© 2026 2No2Time | All rights reserved</p>
                <p>Created by <span className="montserrat-bold text-[#484848]">2No2Time</span></p>
            </div>
        </footer>
    )
}

export default Footer
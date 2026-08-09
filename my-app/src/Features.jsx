import { useState } from 'react'
import Footer from './Footer'

const featureDetails = {
    curated: {
        title: "Curated Experiences",
        badge: "Handpicked",
        bgClass: "bg-pink-50 text-pink-600",
        badgeClass: "bg-pink-100/80 text-pink-700",
        icon: "ri-compass-3-line",
        desc: "Handpicked boutique resorts and exclusive local tours for an unforgettable travel journey.",
        highlights: [
            { emoji: "🏨", title: "Boutique Resorts", desc: "Carefully vetted small-scale luxury properties with genuine character." },
            { emoji: "🗺️", title: "Local Tours", desc: "Curated experiences led by local guides who know the hidden spots." },
        ]
    },
    pricing: {
        title: "Transparent Pricing",
        badge: "No Hidden Fees",
        bgClass: "bg-emerald-50 text-emerald-600",
        badgeClass: "bg-emerald-100/80 text-emerald-700",
        icon: "ri-price-tag-3-line",
        desc: "Direct partner rates with no hidden booking fees. Best value guaranteed for hotels and packages.",
        highlights: [
            { emoji: "💰", title: "Direct Partner Rates", desc: "No middleman markups — you get the same price partners offer us." },
            { emoji: "✅", title: "Price Match Guarantee", desc: "Find it cheaper elsewhere? We'll match it, no questions asked." },
        ]
    },
    guides: {
        title: "Traveler Guides",
        badge: "Weekly Updates",
        bgClass: "bg-indigo-50 text-indigo-600",
        badgeClass: "bg-indigo-100/80 text-indigo-700",
        icon: "ri-book-open-line",
        desc: "Insider travel tips, resort reviews, and weekly destination itineraries to help you plan with ease.",
        highlights: [
            { emoji: "📖", title: "Complete Travel Intelligence", desc: "From luxury eco-resorts to hidden street food gems." },
            { emoji: "🗺️", title: "5-Day Island Routes", desc: "Day-by-day itineraries covering beaches, dining, and transfers." },
        ]
    },
    safe: {
        title: "Verified & Safe Travel",
        badge: "24/7 Support",
        bgClass: "bg-amber-50 text-amber-600",
        badgeClass: "bg-amber-100/80 text-amber-700",
        icon: "ri-shield-check-line",
        desc: "Every partner hotel, private driver, and tour guide undergoes stringent quality and safety background checks.",
        highlights: [
            { emoji: "🏨", title: "Audited Accommodations", desc: "Hygienic, certified, and vetted hotel stays with real reviews." },
            { emoji: "🚑", title: "24/7 On-Trip Assistance", desc: "Dedicated concierge available via live chat or phone." },
        ]
    },
}

const featureCards = [
    { key: "curated", icon: "ri-compass-3-line", color: "pink", title: "Curated Experiences", desc: "Handpicked boutique resorts and exclusive local tours for an unforgettable travel journey.", cta: "Explore Tours & Stays" },
    { key: "pricing", icon: "ri-price-tag-3-line", color: "emerald", title: "Transparent Pricing", desc: "Direct partner rates with no hidden booking fees. Best value guaranteed for hotels and packages.", cta: "Check Best Deals" },
    { key: "guides", icon: "ri-book-open-line", color: "indigo", title: "Traveler Guides", desc: "Insider travel tips, resort reviews, and weekly destination itineraries to help you plan with ease.", cta: "Read Travel Guides" },
    { key: "safe", icon: "ri-shield-check-line", color: "amber", title: "Verified & Safe", desc: "Verified hotel stays and trusted operators backed by 24/7 dedicated travel concierge support.", cta: "Learn About Safety" },
]

const colorClasses = {
    pink: { bg: "bg-pink-50", text: "text-pink-600", hoverBg: "group-hover:bg-pink-600", hoverText: "group-hover:text-pink-600" },
    emerald: { bg: "bg-emerald-50", text: "text-emerald-600", hoverBg: "group-hover:bg-emerald-600", hoverText: "group-hover:text-emerald-600" },
    indigo: { bg: "bg-indigo-50", text: "text-indigo-600", hoverBg: "group-hover:bg-indigo-600", hoverText: "group-hover:text-indigo-600" },
    amber: { bg: "bg-amber-50", text: "text-amber-600", hoverBg: "group-hover:bg-amber-600", hoverText: "group-hover:text-amber-600" },
}

function FeatureModal({ activeKey, onClose }) {
    if (!activeKey) return null
    const data = featureDetails[activeKey]

    return (
        <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/50 backdrop-blur-sm"
            onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
        >
            <div className="bg-white rounded-[32px] max-w-2xl w-full max-h-[88vh] flex flex-col shadow-2xl overflow-hidden">
                
                <div className="p-6 sm:p-8 pb-4 flex items-start justify-between border-b border-slate-100/80">
                    <div className="flex items-center gap-4">
                        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 ${data.bgClass}`}>
                            <i className={`${data.icon} text-2xl`}></i>
                        </div>
                        <div className="flex flex-col items-start gap-1">
                            <span className={`inline-block px-3 py-1 rounded-full text-[11px] font-bold tracking-wide uppercase ${data.badgeClass}`}>
                                {data.badge}
                            </span>
                            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">{data.title}</h3>
                        </div>
                    </div>
                    <button onClick={onClose} className="text-slate-400 hover:text-slate-600 w-8 h-8 flex items-center justify-center rounded-full hover:bg-slate-100 transition-colors shrink-0">
                        <i className="ri-close-line text-xl"></i>
                    </button>
                </div>

                <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-slate-600 leading-relaxed max-h-[60vh]">
                    <p className="text-base sm:text-lg text-slate-700 font-medium">{data.desc}</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {data.highlights.map((h, i) => (
                            <div key={i} className="p-4 bg-slate-50/80 rounded-2xl border border-slate-100">
                                <div className="font-bold text-slate-800 text-sm mb-1">{h.emoji} {h.title}</div>
                                <p className="text-xs text-slate-500 leading-normal">{h.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="px-6 py-4 sm:px-8 sm:py-5 bg-slate-50/60 border-t border-slate-100 flex items-center justify-between shrink-0">
                    <span className="text-xs sm:text-sm text-slate-400 font-medium">24/7 Concierge Support Available</span>
                    <button onClick={onClose} className="px-7 py-2.5 bg-slate-200/80 hover:bg-slate-300/80 text-slate-700 rounded-2xl text-sm font-semibold transition-all duration-200 active:scale-95">
                        Close
                    </button>
                </div>
            </div>
        </div>
    )
}

function Features() {
    const [activeModal, setActiveModal] = useState(null)

    return (
        <section id="features" className="pt-25 py-12 relative overflow-hidden">
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-pink-100/50 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-emerald-100/40 rounded-full blur-3xl pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="inline-block py-1 px-3 rounded-full bg-pink-100 text-pink-700 font-semibold text-xs tracking-wider uppercase mb-3">
                        Why Choose Us
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                        Designed for Your Ultimate Escape
                    </h2>
                    <p className="mt-4 text-lg text-slate-600 leading-relaxed">
                        Discover seamless travel planning, exclusive boutique hotels, and curated local tours tailored to your dream vacation.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {featureCards.map((card) => {
                        const c = colorClasses[card.color]
                        return (
                            <div
                                key={card.key}
                                onClick={() => setActiveModal(card.key)}
                                className="cursor-pointer group bg-white/80 backdrop-blur-md rounded-3xl p-8 border border-white/60 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
                            >
                                <div>
                                    <div className={`w-14 h-14 rounded-2xl ${c.bg} ${c.text} flex items-center justify-center mb-6 group-hover:scale-110 ${c.hoverBg} group-hover:text-white transition-all duration-300 shadow-sm`}>
                                        <i className={`${card.icon} text-2xl`}></i>
                                    </div>
                                    <h3 className={`text-xl font-bold text-slate-800 mb-3 ${c.hoverText} transition-colors`}>
                                        {card.title}
                                    </h3>
                                    <p className="text-slate-600 text-sm leading-relaxed">{card.desc}</p>
                                </div>
                                <div className={`mt-6 pt-4 border-t border-slate-100 flex items-center text-xs font-semibold ${c.text} group-hover:translate-x-1 transition-transform`}>
                                    <span>{card.cta}</span>
                                    <i className="ri-arrow-right-s-line ml-1"></i>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

            <FeatureModal activeKey={activeModal} onClose={() => setActiveModal(null)} />   
                <div className='mt-15'/>
            <Footer/>
        </section>
    )
}

export default Features
import mem_1 from './assets/Members/mem_1.png'
import mem_2 from './assets/Members/mem_5.png'
import mem_3 from './assets/Members/mem_4.png'
import mem_4 from './assets/Members/mem_2.png'
import mem_5 from './assets/Members/mem_3.png'
import icon from './assets/Icon.ico'
import Footer from './Footer'

function Member() {
    const members = [
        { name: "ธีรภัทร ทองคำ", role: "Lead Developer", desc: "6840012484", github: "https://casonanim.github.io/ForREsume/" , src: mem_1},
        { name: "คชาทัช พฤฒิพงศภัค", role: "UI / UX Designer", desc: "6840011208", github: "https://pluemgamer.github.io/kachatus-resume-new/", src: mem_2 },
        { name: "รุจิภาส บุญหนุน", role: "Developer", desc: "6840012450", github: "https://tlm1000zaza-tech.github.io/Resume/",src: mem_3 },
        { name: "ไชยวัฒน์ สัญใจ", role: "QA Tester", desc: "6840012522", github: "https://chaiyawat-win.github.io/resume-Chaiyawat/",src: mem_4 },
        { name: "ภานุวัฒน์ บุดดาเพ็ง", role: "QA Tester", desc: "6840077110", github: "https://buddapengtonkla-wq.github.io/My-resume/",src: mem_5 },
    ]

    return (
        <div className="max-w-7xl pt-20 mx-auto px-4 sm:px-6 lg:px-8 py-12 flex-grow w-full">
            <div className='w-full flex justify-center mt-3.5'>
                <img src={icon}></img>
            </div>
            <section className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                <span className="inline-block py-1 px-3 rounded-full bg-slate-200 text-slate-700 font-semibold text-xs tracking-wider uppercase">
                    About 2no2Time
                </span>
                <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                    Meet Our Team
                </h1>
                <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                    We are a team of web development and UX/UI design experts dedicated to crafting premium travel and service platforms that deliver exceptional user experiences.
                </p>
            </section>

            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {members.map((member, i) => (
                    <div key={i} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-all text-center flex flex-col justify-between items-center">
                        <div className="space-y-4 w-full">
                            <img 
                                src={member.src}
                                alt={member.name} 
                                className="w-28 h-28 rounded-full object-cover mx-auto ring-4 ring-slate-100 shadow-sm"
                            />
                            <div>
                                <h3 className="text-xl font-bold text-slate-900">{member.name}</h3>
                                <p className="text-xs font-semibold text-pink-600 uppercase tracking-wider mt-1">{member.role}</p>
                            </div>
                            <p className="text-slate-500 text-xs leading-relaxed">{member.desc}</p>
                        </div>
                        <a 
                            href={member.github} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="mt-6 w-full py-2.5 px-4 bg-slate-900 hover:bg-pink-600 text-white rounded-xl text-xs font-bold transition-colors inline-flex items-center justify-center gap-2"
                        >
                            <span>View GitHub Resume</span>
                            <i className="ri-external-link-line"></i>
                        </a>
                    </div>
                ))}
            </section>
            <div className='my-5'/>
            <Footer/>
        </div>
    )
}

export default Member
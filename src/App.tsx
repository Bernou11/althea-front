import { useRef, useState } from "react";
import "./App.css";

export default function App() {
    const formRef = useRef<HTMLFormElement>(null);
    const [error, setError] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const form = formRef.current;
        if (!form) return;

        const email = (form.elements.namedItem("contact-form-email") as HTMLInputElement).value.trim();
        const phone = (form.elements.namedItem("contact-form-phone") as HTMLInputElement).value.trim();
        const name = (form.elements.namedItem("contact-form-name") as HTMLInputElement).value.trim();
        const message = (form.elements.namedItem("contact-form-message") as HTMLInputElement).value.trim();

        if (!email && !phone) {
            setError("Merci de remplir au moins l'email ou le numéro de téléphone.");
        } else if (!name || !message) {
            setError("Veuillez remplir tous les champs obligatoires.");
        } else {
            setError("");
            form.submit();
            alert("Submited")
        }
    };

    const phoneRef = useRef(null);

    return (
        <div className="bg-white dark:bg-[#0F1017] text-gray-900 dark:text-gray-100 min-h-screen w-full font-sans">
            {/* HEADER */}
            <header className="flex flex-col md:flex-row w-full min-h-screen pt-8 md:pt-0 relative overflow-x-hidden">
                {/* Left Side */}
                <div className="flex flex-col flex-1 p-4 md:p-12 z-10 min-h-screen md:min-h-0">
                    {/* Top content, stays at the top */}
                    <a href="/" className="mb-8 block">
                        <img src="/logo.svg" className="h-28 md:h-20 select-none" alt="logo" />
                    </a>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-comfortaa leading-tight mb-7">
                        Une aile, un espoir,<br />un nouveau départ.
                    </h1>
                    <p className="text-lg sm:text-xl md:text-lg mb-10 leading-snug max-w-lg text-gray-700 dark:text-gray-200">
                        Avec ALTHEA, vous n’êtes plus seul.e dans ce parcours.<br />
                        Nous sommes là pour vous accompagner, pas à pas, vers un mieux-être.
                    </p>

                    {/* Bottom block: Button + Spacer + Avatars at real bottom */}
                    <div className="flex flex-col flex-1 justify-end">
                        <a href="/" className="block">
                            <button className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-semibold rounded-2xl px-10 py-4 text-lg sm:text-xl shadow hover:bg-gray-700 dark:hover:bg-gray-100 transition w-full md:w-auto">
                                Télécharger l'application
                            </button>
                        </a>
                        {/* The spacer */}
                        <div className="flex-1" />
                        {/* Avatars row at the bottom */}
                        <div className="flex items-center mb-0 mt-8">
                            <img src="/img_med_1.svg" className="w-14 h-14 md:w-12 md:h-12 rounded-full border-2 border-white shadow-md -ml-0" alt="med1" />
                            <img src="/img_med_2.svg" className="w-14 h-14 md:w-12 md:h-12 rounded-full border-2 border-white shadow-md -ml-4" alt="med2" />
                            <img src="/img_med_3.svg" className="w-14 h-14 md:w-12 md:h-12 rounded-full border-2 border-white shadow-md -ml-4" alt="med3" />
                            <p className="ml-7 text-sm sm:text-base md:text-sm text-gray-500 dark:text-gray-200 font-semibold whitespace-nowrap">
                                Approuvé par les médecins
                            </p>
                        </div>
                    </div>
                </div>

                {/* Right Side */}
                <div className="relative hidden md:block">
                    <div className="absolute top-0 right-0 w-[800px] h-[1000px] rounded-full bg-blue-400 border-2 opacity-50 blur-[40px] pointer-events-none" />
                    <img src="/landingpage_cover_phone.svg" alt="phone" className="w-[800px] h-[1200px] z-10 relative" />
                </div>
            </header>


            {/* ABOUT SECTION */}
            <section className="w-full min-h-[75vh] bg-[#FEF3D2] flex flex-col items-center py-12 relative">
                {/* Title Row with logo */}
                <div className="flex flex-col md:flex-row items-center justify-center w-full mb-8">
                    <h1 className="text-2xl md:text-4xl font-bold font-comfortaa pr-4 text-center md:text-left dark:text-black">Qui sommes-nous&nbsp;?</h1>
                    <img className="ml-2 h-12 hidden md:block" src="/flower_butterfly.svg" alt="logo" />
                </div>
                {/* Content */}
                <div className="flex flex-col md:flex-row w-full max-w-6xl mx-auto px-2 gap-8">
                    <div className="w-full md:w-1/2 flex justify-center">
                        <img src="/stat.svg" className="w-full max-w-xs md:max-w-sm" alt="Statistiques" />
                    </div>
                    <div className="w-full md:w-1/2 flex flex-col justify-center">
                        <p className="text-base md:text-lg text-gray-800 dark:text-gray-800 max-w-lg text-center md:text-left mb-2">
                            Nous croyons en une approche holistique du bien-être, où la technologie devient un véritable allié au service de la santé mentale. Notre mission est d’offrir un espace de soutien et d’écoute, de briser l’isolement et d’aider chacun à avancer vers un équilibre alimentaire et émotionnel durable.
                            Avec ALTHEA, vous n’êtes plus seul dans ce parcours. Nous sommes là pour vous accompagner, pas à pas, vers un mieux-être.
                            Nous croyons en une approche holistique du bien-être, où la technologie devient un véritable allié au service de la santé mentale. Notre mission est d’offrir un espace de soutien et d’écoute, de briser l’isolement et d’aider chacun à avancer vers un équilibre alimentaire et émotionnel durable.
                            Avec ALTHEA, vous n’êtes plus seul dans ce parcours. Nous sommes là pour vous accompagner, pas à pas, vers un mieux-être.
                        </p>
                    </div>
                </div>
            </section>

            {/* FEATURES SECTION */}
            <section className="w-full py-16 bg-white dark:bg-[#0F1017] flex flex-col items-center relative">
                {/* Title and logo, centered and aligned */}
                <div className="flex items-center mb-12">
                    <h1 className="font-comfortaa font-bold text-[34px] sm:text-[64px] leading-tight text-center md:text-left">
                        Fonctionnalités
                    </h1>
                    <img className="ml-6 h-16 min-h-[48px] hidden md:block dark:hidden" src="/pen_butterfly.svg" alt="logo" />
                    <img className="ml-6 h-16 min-h-[48px] sm:hidden md:hidden" src="/pen_butterfly_dark.svg" alt="logo" />
                </div>
                {/* Cards Grid (2x2) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-20 px-4 max-w-7xl w-full">
                    {/* Top Left Card */}
                    <div className="flex bg-[#8A9BFF] rounded-2xl h-[350px]">
                        <div className="flex flex-col justify-center flex-1 pl-8 pr-2 py-4">
                            <h2 className="font-comfortaa font-bold text-[26px] text-white mb-3">Qui sommes-nous ?</h2>
                            <p className="font-comfortaa font-light text-white text-base leading-relaxed">
                                Nous croyons en une<br />
                                approche holistique du<br />
                                bien-être, où la technologie<br />
                                devient un véritable allié au<br />
                                service de la santé mentale.<br />
                                Notre mission est d’offrir un<br />
                                espace de soutien et<br />
                                d’écoute, de briser<br />
                                l’isolement et d’aider vers un<br />
                                mieux-être.
                            </p>
                        </div>
                        <div className="flex flex-col justify-center items-center h-full pr-6">
                            <img src="/phone.svg" className="h-44 sm:h-56 hidden md:block" alt="phone preview" />
                        </div>
                    </div>
                    {/* Top Right Card */}
                    <div className="flex bg-[#F38D68] rounded-2xl h-[350px]">
                        <div className="flex flex-col justify-center flex-1 pl-8 pr-2 py-4">
                            <h2 className="font-comfortaa font-bold text-[26px] text-white mb-3">La mission</h2>
                            <p className="font-comfortaa font-light text-white text-base leading-relaxed">
                                Un espace de soutien et d’écoute, de briser l’isolement et d’aider vers un mieux-être, tout en respectant votre rythme et vos besoins.
                            </p>
                        </div>
                        <div className="flex flex-col justify-center items-center h-full pr-6">
                            <img src="/phone.svg" className="h-44 sm:h-56 hidden md:block" alt="phone preview" />
                        </div>
                    </div>
                    {/* Bottom Left Card */}
                    <div className="flex bg-[#8A9BFF] rounded-2xl h-[350px]">
                        <div className="flex flex-col justify-center flex-1 pl-8 pr-2 py-4">
                            <h2 className="font-comfortaa font-bold text-[26px] text-white mb-3">Un accompagnement humain</h2>
                            <p className="font-comfortaa font-light text-white text-base leading-relaxed">
                                Toute une équipe dédiée à votre suivi et pour répondre à vos questions. Le bien-être commence par l’humain.
                            </p>
                        </div>
                        <div className="flex flex-col justify-center items-center h-full pr-6">
                            <img src="/phone.svg" className="h-44 sm:h-56 hidden md:block" alt="phone preview" />
                        </div>
                    </div>
                    {/* Bottom Right Card */}
                    <div className="flex bg-[#F38D68] rounded-2xl h-[350px]">
                        <div className="flex flex-col justify-center flex-1 pl-8 pr-2 py-4">
                            <h2 className="font-comfortaa font-bold text-[26px] text-white mb-3">Une technologie à votre service</h2>
                            <p className="font-comfortaa font-light text-white text-base leading-relaxed">
                                Une application pensée pour vous guider pas à pas vers votre mieux-être, grâce à des outils simples et bienveillants.
                            </p>
                        </div>
                        <div className="flex flex-col justify-center items-center h-full pr-6">
                            <img src="/phone.svg" className="h-44 sm:h-56 hidden md:block" alt="phone preview" />
                        </div>
                    </div>
                </div>
            </section>

            {/* CONTACT SECTION */}
            <section className="bg-[#FEF3D2] dark:bg-[#FEF3D2] py-16 px-2 flex flex-col items-center relative">
                {/* Title with logo */}
                <div className="flex flex-col md:flex-row items-center justify-center w-full mb-8">
                    <h2 className="text-3xl md:text-4xl font-bold font-comfortaa pr-4 text-center md:text-left dark:text-black">
                        Contactez-nous
                    </h2>
                    <img className="ml-2 h-10 hidden md:block" src="/butterfly.svg" alt="logo" />
                </div>
                {/* Form */}
                <div className="w-full max-w-5xl mx-auto bg-white dark:bg-gray-800 shadow rounded-2xl p-4 sm:p-6 md:p-8 flex flex-col md:flex-row items-center md:items-stretch gap-8 md:gap-0">
                    {/* LEFT - Message */}
                    <div className="md:w-1/3 flex items-center justify-center md:justify-end mb-6 md:mb-0 md:mr-5">
                        <p className="text-xl sm:text-2xl font-comfortaa font-semibold text-center md:text-left text-gray-900 dark:text-gray-100">
                            Envoyez nous un<br />
                            message.<br />
                            Nous répondrons avec<br />
                            plaisir !
                        </p>
                    </div>
                    {/* RIGHT - Form */}
                    <form
                        ref={formRef}
                        className="w-full md:w-2/3 flex flex-col gap-4"
                        onSubmit={handleSubmit}
                    >
                        <div className="flex flex-col md:flex-row gap-4">
                            <input
                                type="text"
                                name="contact-form-name"
                                placeholder="Nom et Prénom*"
                                className="h-12 px-4 rounded border border-gray-300 dark:border-gray-700 focus:border-blue-400 focus:outline-none w-full"
                                required
                            />
                        </div>
                        <div className="flex flex-col md:flex-row gap-4">
                            <input
                                type="email"
                                name="contact-form-email"
                                placeholder="Email"
                                pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                                className="h-12 px-4 rounded border border-gray-300 dark:border-gray-700 focus:border-blue-400 focus:outline-none w-full"
                            />
                            <input
                                type="tel"
                                name="contact-form-phone"
                                placeholder="Numéro de téléphone"
                                id="contact-form-tel"
                                className="h-12 px-4 rounded border border-gray-300 dark:border-gray-700 focus:border-blue-400 focus:outline-none w-full"
                                pattern="^0[67]\d{8}$"
                                ref={phoneRef}
                                onInput={e => {
                                    const input = e.target as HTMLInputElement;
                                    if (input.validity.patternMismatch) {
                                        input.setCustomValidity("Le numéro de téléphone doit correspondre à un numéro français valide sans espace (10 chiffres commençant par 06 ou 07)");
                                    } else {
                                        input.setCustomValidity("");
                                    }
                                }}
                            />
                        </div>
                        <textarea
                            name="contact-form-message"
                            placeholder="Votre message*"
                            className="h-32 px-4 py-3 rounded border border-gray-300 dark:border-gray-700 focus:border-blue-400 focus:outline-none w-full resize-none"
                            required
                        />
                        {error && (
                            <span className="text-red-600 dark:text-red-400 font-medium mt-2 block">{error}</span>
                        )}
                        <button
                            type="submit"
                            className="mt-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-semibold rounded-2xl px-8 py-3 shadow hover:bg-gray-700 dark:hover:bg-gray-100 transition"
                        >
                            Envoyer
                        </button>
                    </form>
                </div>

            </section>

            {/* FOOTER */}
            <footer className="w-full bg-gray-100 dark:bg-[#0F1017] py-8 px-4 flex flex-col items-center">
                <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl mb-8 gap-6">
                    {/* Logo and slogan */}
                    <div className="flex flex-col md:flex-row items-center gap-4">
                        <img src="/logo.svg" className="h-12" alt="logo"/>
                        <span className="text-base md:text-xl font-semibold text-gray-700 dark:text-gray-300 text-center md:text-left">
                            L’application qui vous aide à retrouver le bien-être, pas à pas.
                        </span>
                    </div>
                    {/* Networks */}
                    <div className="flex items-center gap-5">
                        <a href="#" title="Facebook"><img src="/logo_fb.svg" className="h-8 invert dark:invert-0" alt="fb"/></a>
                        <a href="#" title="Instagram"><img src="/logo_insta.svg" className="h-8 invert dark:invert-0" alt="ig"/></a>
                        <a href="#" title="Instagram"><img src="/logo_linkedin.svg" className="h-8 invert dark:invert-0" alt="ig"/></a>
                        <a href="#" title="TikTok"><img src="/logo_tiktok.svg" className="h-8 invert dark:invert-0" alt="tt"/></a>
                        <a href="#" title="YouTube"><img src="/logo_yt.svg" className="h-8 invert dark:invert-0" alt="yt"/></a>
                    </div>
                </div>
                <div className="w-full max-w-6xl border-t border-gray-300 dark:border-gray-700 pt-4 flex flex-col md:flex-row items-center justify-between gap-4">
                    <span className="text-xs text-gray-500 dark:text-gray-400">&copy; 2024 Althea. Tous droits réservés.</span>
                    <div className="flex space-x-6 text-xs">
                        <a href="#" className="text-gray-500 dark:text-gray-400 hover:underline">Confidentialité</a>
                        <a href="#" className="text-gray-500 dark:text-gray-400 hover:underline">Conditions d’utilisation</a>
                    </div>
                </div>
            </footer>
        </div>
    );
}

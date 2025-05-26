import {useEffect, useRef, useState} from "react";
import "./App.css";
import axios from "axios";
import * as React from "react";

interface FeatureCardType {
    title: string;
    text: string;
    bg: string;
    img: string;
}

type FeatureCardProps = FeatureCardType;

type FeatureCarouselProps = {
    features: FeatureCardType[];
};

type AvantagesCardProps = {
    text: string;
    bg: string;
};

// type ContactFormData = {
//     email: string;
//     phone: string;
//     nom: string;
//     prenom: string;
//     message: string;
// };

export default function App() {
    const formRef = useRef<HTMLFormElement>(null);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const api_base = import.meta.env.VITE_API_URL;

    const featureCards : FeatureCardType[] = [
        {
            title: "Journal intime",
            text: "Besoin de vous exprimer ? Notez ce que vous ressentez dans un journal privé en toute liberté !",
            bg: "from-[#8A9BFF] to-[#8A9BFF]",
            img: "/image1.svg",
        },
        {
            title: "Contenu multimédia",
            text: "Besoin de réponses ou juste d’écoute ? Explorez des ressources autour des TCA : vécus, éclairages et conseils.",
            bg: "from-[#FDDF88] to-[#FDDF88]",
            img: "/image2.svg",
        },
        {
            title: "Boîte à exercices",
            text: "Votre boîte à outils bien-être. Respiration, détente, recentrage : ces outils sont là pour vous aider au quotidien.",
            bg: "from-[#FBBF13] to-[#FBBF13]",
            img: "/image3.svg",
        },
        {
            title: "Abonnement Premium",
            text: "Pour profiter pleinement des fonctionnalités de l’application, optez pour la version premium ! ",
            bg: "from-[#F38D68] to-[#F38D68]",
            img: "/image4.svg",
        },
    ];


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = formRef.current;
        if (!form) return;

        const email = (form.elements.namedItem("contact-form-email") as HTMLInputElement).value.trim();
        const phone = (form.elements.namedItem("contact-form-phone") as HTMLInputElement).value.trim();
        const nom = (form.elements.namedItem("contact-form-name") as HTMLInputElement).value.trim();
        const prenom = (form.elements.namedItem("contact-form-firstname") as HTMLInputElement).value.trim();
        const message = (form.elements.namedItem("contact-form-message") as HTMLInputElement).value.trim();

        if (!email || !nom || !message || !prenom) {
            setError("Veuillez remplir tous les champs obligatoires.");
        } else {
            setError("");
            await axios.post(`${api_base}/api/messages`, { nom, prenom, email, phone, message });
            setSuccess("Votre message a bien été envoyé! Nous vous répondrons dans les plus brefs délais");
            form.reset();
        }
    };

    const FeatureCard: React.FC<FeatureCardProps> = ({ title, text, bg, img }) => (
        <div
            className={`flex flex-col justify-between bg-gradient-to-br ${bg} rounded-2xl shadow-md p-4 sm:p-7 w-full h-full box-border`}
            style={{ minWidth: "0" }}
        >
            <h2 className="text-center font-comfortaa font-bold text-lg sm:text-2xl mb-2 text-black drop-shadow break-words">
                {title}
            </h2>
            <p className="text-center font-comfortaa text-black text-base mb-4 break-words">
                {text}
            </p>
            <img src={img} className="h-20 sm:h-40 self-center opacity-90 drop-shadow-lg max-w-full" alt="" />
        </div>
    );

    const FeatureCarousel: React.FC<FeatureCarouselProps> = ({ features }) => {
        const [current, setCurrent] = useState<number>(0);
        const total = features.length;
        const timeoutRef = useRef<NodeJS.Timeout | null>(null);

        useEffect(() => {
            timeoutRef.current = setTimeout(() => {
                setCurrent((prev) => (prev + 1) % total);
            }, 3500);
            return () => {
                if (timeoutRef.current) clearTimeout(timeoutRef.current);
            };
        }, [current, total]);

        const goTo = (idx: number) => setCurrent(idx);

        return (
            <div className="flex flex-col items-center mx-auto w-full max-w-xs sm:max-w-[400px] md:max-w-lg">
                <div className="relative w-full h-[250px] sm:w-[400px] sm:h-[350px] overflow-hidden">
                    <FeatureCard {...features[current]} />
                </div>
                <div className="flex justify-center mt-5 gap-4">
                    {features.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => goTo(idx)}
                            className={`w-3 h-3 rounded-full transition border ${current === idx ? "bg-black" : "bg-gray-300"} border-black`}
                        ></button>
                    ))}
                </div>
            </div>
        );
    };

    const AvantagesCard: React.FC<AvantagesCardProps> = ({ text, bg }) => (
        <div className={`flex flex-col items-start justify-between bg-gradient-to-br ${bg} rounded-2xl shadow-md p-7 h-[190px] w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto overflow-hidden`}>
            <h2 className="font-comfortaa text-[24px] text-center sm:text-2xl mb-2 text-black drop-shadow break-words am:text-[20px]">
                {text}
            </h2>
        </div>
    );

    const phoneRef = useRef(null);

    return (
        <div className="min-h-screen w-full font-sans bg-gradient-to-b from-white via-[#f6f9fc] to-[#E8EDFF] dark:from-[#0F1017] dark:via-[#1A1B25] dark:to-[#24263b] transition-all duration-500 overflow-hidden">
            {/* HEADER */}
            <header className="flex flex-col-reverse md:flex-row w-full min-h-screen h-screen pt-0 relative px-3">
                {/* Left Side */}
                <div className="flex flex-col flex-1 px-0 md:px-16 py-8 z-10 justify-center">
                    <a href="/" className="mb-10 block">
                        <img src="/logo.svg" className="h-32 max-h-32 select-none" alt="logo" />
                    </a>
                    <div>
                        <h1 className="text-3xl sm:text-5xl md:text-[64px] leading-tight font-bold font-comfortaa mb-5 transition-all text-shadow-sm">
                            <span className="block">Une aile, un espoir,</span>
                            <span className="dark: block md:mt-3">un nouveau départ.</span>
                        </h1>
                        <p className="text-base sm:text-lg md:text-2xl mb-8 max-w-2xl leading-relaxed text-gray-800 dark:text-gray-200">
                            Avec ALTHEA, vous n’êtes plus seul.e dans ce parcours. <br />
                            Nous sommes là pour vous accompagner, pas à pas, vers un mieux-être.
                        </p>
                        <a href="#features" className="flex justify-center md:justify-start">
                            <button className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-semibold rounded-2xl px-10 py-4 text-lg sm:text-xl shadow hover:bg-gray-700 dark:hover:bg-gray-100 transition w-full md:w-auto mml: mt-[-20px]">
                                Découvrir
                            </button>
                        </a>
                    </div>
                </div>
                {/* Right Side (images, with absolute positioning) */}
                <div className="hidden md:flex relative flex-1 overflow-hidden min-h-[400px]">
                    {/* Ellipse BG */}
                    <img
                        src="/ellipse.svg"
                        alt=""
                        className="hidden absolute right-0 left-64 top-[-10%] w-[90%] max-w-[700px] h-[1100px] z-0 pointer-events-none transition-all duration-300 xl:block"
                    />
                    {/* Phone image */}
                    <img
                        src="/landingpage_cover_phone.svg"
                        alt="phone"
                        className="hidden absolute right-[-5px] top-[40px] w-[420px] md:w-[800px] xl:w-[700px] max-w-none h-auto z-10 drop-shadow-xl pointer-events-none transition-all duration-300 xl:block"
                    />
                </div>
            </header>

            {/* ABOUT SECTION */}
            <section className="w-full bg-[#FEF3D2] dark:bg-[#FEF3D2] py-14 px-3 flex flex-col items-center transition">
                <div className="flex items-center justify-center mb-8">
                    <h1 className="text-2xl md:text-4xl font-bold font-comfortaa text-center dark:text-black">Qui sommes-nous&nbsp;?</h1>
                    <img className="ml-3 h-10 md:h-12" src="/flower_butterfly.svg" alt="logo" />
                </div>
                <div className="flex items-center justify-center flex-col mb-8 bg-[#FEE8AA] border-b-4 border-yellow-300 rounded-2xl p-6 shadow-bottom">
                    <span className="italic text-[20px] text-center"> “ Chez ALTHEA, chaque parcours est unique, où écoute, soutien et personnalisation se rencontrent.</span>
                    <span className="italic text-[20px] text-center">Découvrez l’accompagnement bienveillant et adapté aux troubles du</span>
                    <span className="italic text-[20px] text-center"> comportement alimentaire : humain, accessible et transformant.“ </span>
                </div>
                <div className="flex flex-col md:flex-row items-center gap-10 lg:gap-24 max-w-7xl mx-auto mt-4">
                    <img src="/equipe.svg" className="w-64 sm:w-80 md:w-96 mx-auto mb-6 md:mb-0" alt="Statistiques" />
                    <p className="text-[20px] text-gray-800 font-comfortaa text-base sm:text-lg md:text-xl max-w-2xl text-center md:text-left leading-relaxed">
                        Althéa est née d’un <span className="font-bold">constat</span> : les <span className="font-bold">
                        troubles du comportement alimentaire (TCA)</span> sont des <span className="font-bold">défis complexes </span>
                        qui touchent <span className="font-bold">de nombreuses personnes</span>, souvent en <span className="font-bold">silence</span>,
                        et l’accès à un <span className="font-bold">accompagnement adapté</span> peut s’avérer <span className="font-bold">difficile</span>.
                        Face à ce <span className="font-bold">besoin</span>, nous avons imaginé une solution
                        <span className="font-bold">accessible, bienveillante et innovante</span> pour aider ceux qui en
                        <span className="font-bold"> souffrent</span>.

                        Notre <span className="font-bold">application</span> a été développée en
                        <span className="font-bold"> collaboration</span> avec des <span className="font-bold">experts </span>
                        en <span className="font-bold">santé mentale</span>, en <span className="font-bold">nutrition </span>
                        et en <span className="font-bold">thérapie comportementale</span> afin d’offrir un
                        <span className="font-bold"> accompagnement complet</span> et <span className="font-bold">personnalisé</span>.
                        Althéa met à disposition des <span className="font-bold">outils interactifs</span>, des
                        <span className="font-bold"> conseils adaptés</span> et des <span className="font-bold">ressources éducatives</span> pour
                        permettre aux utilisateurs de mieux <span className="font-bold">comprendre</span> leur relation
                        avec l’alimentation et de <span className="font-bold">progresser</span> à leur rythme, en
                        <span className="font-bold"> toute sécurité</span>.
                    </p>
                </div>
            </section>

            {/* FEATURES SECTION */}
            <section id="features" className="w-full py-16 bg-white dark:bg-[#0F1017] px-3">
                <div className="flex items-center justify-center mb-10">
                    <h1 className="text-2xl md:text-4xl font-bold font-comfortaa text-center pr-2">Fonctionnalités</h1>
                    <img className="ml-4 h-10" src="/pen_butterfly.svg" alt="logo" />
                </div>
                <FeatureCarousel features={featureCards} />
            </section>

            {/* Avantages premium section */}
            <section className="bg-[#FCDFD4] dark:bg-[#FEF3D2] py-16 px-2 flex flex-col">
                <div className="flex items-center mb-8 justify-center">
                    <h1 className="text-2xl md:text-4xl font-bold font-comfortaa text-center pr-2 dark:text-black">Avantages premium</h1>
                    <img className="ml-2 h-10" src="/butterfly.svg" alt="logo" />
                </div>
                <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
                    <AvantagesCard
                        text="Accédez à des contenus exclusifs des professionnels de santé !"
                        bg="from-[#FDDF88] to-[#FDDF88]"
                    />
                    <AvantagesCard
                        text="Découvrez notre liste de fiches de contact et tchattez avec eux !"
                        bg="from-[#C7CFFF] to-[#C7CFFF]"
                    />
                    <AvantagesCard
                        text="Personnalisez votre trousse de secours avec vos propres éléments !"
                        bg="from-[#F7B8A0] to-[#F7B8A0]"
                    />
                </div>
            </section>

            {/* CONTACT SECTION */}
            <section className="bg-[#FEF3D2] dark:bg-[#FCDFD4] py-16 px-3 flex flex-col items-center">
                <div className="flex items-center mb-8">
                    <h2 className="text-3xl md:text-4xl font-bold font-comfortaa text-center dark:text-black">Contactez-nous</h2>
                    <img className="ml-2 h-10" src="/butterfly.svg" alt="logo" />
                </div>
                <div className="w-full max-w-3xl mx-auto bg-white dark:bg-gray-800 shadow-xl rounded-2xl p-5 sm:p-8 flex flex-col sm:flex-row items-center gap-8">
                    <div className="md:w-1/3 flex justify-center mb-5 md:mb-0">
                        <p className="text-xl font-comfortaa font-semibold text-center text-gray-900 dark:text-gray-100">Envoyez-nous un message. Nous répondrons avec plaisir !</p>
                    </div>
                    <form
                        ref={formRef}
                        className="w-full sm:w-2/3 flex flex-col gap-4"
                        onSubmit={handleSubmit}
                    >
                        <div className="flex flex-col sm:flex-row gap-4">
                            <input type="text" name="contact-form-name" placeholder="Nom" className="input h-10 p-4 rounded-xl border border-gray-200" required />
                            <input type="text" name="contact-form-firstname" placeholder="Prénom" className="input h-10 p-4 rounded-xl border border-gray-200" required />
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <input type="email" name="contact-form-email" placeholder="Email" pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$" className="input h-10 p-4 rounded-xl border border-gray-200" required />
                            <input type="tel" name="contact-form-phone" placeholder="Numéro de téléphone" className="input h-10 p-4 rounded-xl border border-gray-200" pattern="^0[67]\d{8}$" ref={phoneRef} />
                        </div>
                        <textarea name="contact-form-message" placeholder="Votre message*" className="h-32 p-4 rounded-xl border border-gray-200" required />
                        {error && <span className="text-red-600 font-medium mt-2 block">{error}</span>}
                        {success && <span className="text-blue-600 font-medium mt-2 block">{success}</span>}
                        <button type="submit" className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-semibold rounded-2xl px-10 py-4 text-lg sm:text-xl shadow hover:bg-gray-700 dark:hover:bg-gray-100 transition w-full md:w-auto">Envoyer</button>
                    </form>
                </div>
            </section>

            {/* FOOTER */}
            <footer className="w-full bg-gray-100 dark:bg-[#0F1017] py-8 px-4 flex flex-col items-center">
                <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl mb-8 gap-6">
                    <div className="flex flex-col md:flex-row items-center gap-3">
                        <img src="/logo.svg" className="h-10 md:h-12" alt="logo"/>
                        <span className="text-base md:text-lg font-semibold text-gray-700 dark:text-gray-200 text-center md:text-left">L’application qui vous aide à retrouver le bien-être, pas à pas.</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <a href="https://www.linkedin.com/in/althéa-contact-602566360/" title="Facebook"><img src="/logo_fb.svg" className="h-8 invert dark:invert-0" alt="fb"/></a>
                        <a href="https://www.instagram.com/althea.contact?igsh=MWo2a3N0dXV4MmRkZw==" title="Instagram"><img src="/logo_insta.svg" className="h-8 invert dark:invert-0" alt="ig"/></a>
                        <a href="https://www.facebook.com/share/164XdiK4fe/?mibextid=wwXIfr" title="Linkedin"><img src="/logo_linkedin.svg" className="h-8 invert dark:invert-0" alt="ig"/></a>
                    </div>
                </div>
                <div className="w-full max-w-6xl border-t border-gray-200 dark:border-gray-700 pt-4 flex flex-col md:flex-row items-center justify-between gap-4">
                    <span className="text-xs text-gray-500 dark:text-gray-400">&copy; 2024 Althea. Tous droits réservés.</span>
                    <div className="flex space-x-5 text-xs">
                        <a href="#" className="text-gray-500 hover:underline">Confidentialité</a>
                        <a href="#" className="text-gray-500 hover:underline">Conditions d’utilisation</a>
                    </div>
                </div>
            </footer>
        </div>
    );
}
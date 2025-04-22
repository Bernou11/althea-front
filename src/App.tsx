import './App.css'
import {useRef, useState} from "react";
import * as React from "react";

function App() {
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
        }
    };

  return (
      <div className="layout">
          <div className="head">
              <div className="left-container">
                  <a href="/" className="logo-link">
                      <img src="/logo.svg" className="logo" alt="logo" />
                  </a>
                  <h1 className="slogan">
                      Une aile, un espoir,<br />un nouveau départ.
                  </h1>
                  <p className="description">
                      Avec ALTHEA, vous n’êtes plus seul.e dans ce parcours.<br />
                      Nous sommes là pour vous accompagner, pas à pas, vers un mieux-être.
                  </p>
                  <a className="download-link" href="/">
                      <button className="download">Télécharger l'application</button>
                  </a>
                  <div className="medecins">
                      <img src="/img_med_1.svg" className="med-img" alt="med1" />
                      <img src="/img_med_2.svg" className="med-img" alt="med2" />
                      <img src="/img_med_3.svg" className="med-img" alt="med3" />
                      <p className="approuve">Approuvé par les médecins</p>
                  </div>
                  <div className="bg-blur-ellipse bg-blur-ellipse-red"></div>
              </div>
              <div className="right-container">
                  <div className="bg-blur-ellipse bg-blur-ellipse-blue"></div>
                  <img src="/couverture%20landingpage%201.svg" alt="phone preview" className="phone-image"/>
              </div>
          </div>
          <div className="about">
            <div className="title-logo curved-underline">
                <h1 className="about-title">Qui sommes-nous ?</h1>
                <img className="about-logo" src="/flower_butterfly.svg" alt="logo" />
            </div>
            <div className="about-content">
              <div className="left-content" >
                  <img src="/stat.svg" className="stat" alt="Image statistiques"/>
              </div>
              <div className="right-content">
                  <p className="about-text">
                      Nous croyons en une approche holistique du bien-être, où la<br />
                      technologie devient un véritable allié au service de la santé<br />
                      mentale. Notre mission est d’offrir un espace de soutien et<br />
                      d’écoute, de briser l’isolement et d’aider chacun à avancer<br />
                      vers un équilibre alimentaire et émotionnel durable.<br />
                      Avec ALTHEA, vous n’êtes plus seul dans ce parcours. Nous<br />
                      sommes là pour vous accompagner, pas à pas, vers un<br />
                      mieux-être.<br /><br />

                      Nous croyons en une approche holistique du bien-être, où la<br />
                      technologie devient un véritable allié au service de la santé<br />
                      mentale. Notre mission est d’offrir un espace de soutien et<br />
                      d’écoute, de briser l’isolement et d’aider chacun à avancer<br />
                      vers un équilibre alimentaire et émotionnel durable.<br />
                      Avec ALTHEA, vous n’êtes plus seul dans ce parcours. Nous<br />
                      sommes là pour vous accompagner, pas à pas, vers un<br />
                      mieux-être.
                  </p>
              </div>
            </div>
          </div>
          <div className="features">
              <div className="title-logo curved-underline">
                  <h1 className="features-title">Fonctionnalités</h1>
                  <img className="features-logo" src="/pen_butterfly.svg" alt="logo" />
              </div>
              <div className="top-container">
                  <div className="top-left-card">
                    <div className="left-card-content-left">
                        <h1 className="left-card-title">
                            Qui sommes-nous ?
                        </h1>
                        <p className="left-card-text">
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
                    <div className="left-card-content-right">
                      <img src="/phone.svg" className="phone-image-fetures" alt="phone preview" />
                    </div>
                  </div>
                  <div className="top-right-card">
                      <div className="right-card-content-left">
                          <h1 className="right-card-title">
                              Qui sommes-nous ?
                          </h1>
                          <p className="right-card-text">
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
                      <div className="right-card-content-right">
                          <img src="/phone.svg" className="phone-image-fetures" alt="phone preview" />
                      </div>
                  </div>
              </div>
              <div className="bottom-container">
                  <div className="bottom-left-card">
                      <div className="left-card-content-left">
                          <h1 className="left-card-title">
                              Qui sommes-nous ?
                          </h1>
                          <p className="left-card-text">
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
                      <div className="left-card-content-right">
                          <img src="/phone.svg" className="phone-image-fetures" alt="phone preview" />
                      </div>
                  </div>
                  <div className="bottom-right-card">
                      <div className="right-card-content-left">
                          <h1 className="right-card-title">
                              Qui sommes-nous ?
                          </h1>
                          <p className="right-card-text">
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
                      <div className="right-card-content-right">
                          <img src="/phone.svg" className="phone-image-fetures" alt="phone preview" />
                      </div>
                  </div>
              </div>
          </div>
          <div className="contact">
              <div className="title-logo curved-underline">
                  <h1 className="contact-title">Prendre contact</h1>
                  <img className="contact-logo" src="/butterfly.svg" alt="logo" />
              </div>
              <div className="contact-content">
                  <div className="contact-left">
                      <p className="contact-text">
                          Envoyez nous un<br />
                          message.<br />
                          Nous répondrons avec<br />
                          plaisir !
                      </p>
                  </div>
                  <div className="contact-right">
                      <form className="contact-form" ref={formRef} onSubmit={handleSubmit}>
                          <input type="text" className="contact-input name" name="contact-form-name" placeholder="Nom" required />
                          <input type="email" className="contact-input email" name="contact-form-email" placeholder="Email" />
                          <input type="tel" className="contact-input phone" name="contact-form-phone" placeholder="Numéro de téléphone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" />
                          <textarea className="contact-input message" name="contact-form-message" placeholder="Message" required />
                          <button type="submit" className="contact-form-button">Envoyer</button>
                          {error && <div className="form-error" style={{ color: 'red' }}>{error}</div>}
                      </form>
                  </div>
              </div>
          </div>
          <footer className="footer">
              <div className="footer-content">
                  <div className="footer-top">
                      <div className="footer-top-logo-and-slogan">
                          <img src="/logo_footer.svg" className="logo-footer" alt="Logo"/>
                          <div className="vertical-line-top"></div>
                          <p className="slogan-footer">
                              Une aile, un espoir, un nouveau<br />
                              départ.
                          </p>
                      </div>
                      <div className="footer-top-networks-icons">
                          <img src="/logo_fb.svg" className="logo-fb" alt="Logo Facebook"/>
                          <img src="/logo_insta.svg" className="logo-insta" alt="Logo Instagram"/>
                          <img src="/logo_tiktok.svg" className="logo-tiktok" alt="Logo Tiktok"/>
                          <img src="/logo_yt.svg" className="logo-yt" alt="Logo Youtube"/>
                      </div>
                  </div>
                  <div className="footer-bottom">
                      <p className="copyrights">
                          Copyright © 2025
                      </p>
                      <div className="vertical-line-bottom"></div>
                      <p className="rights">
                          Tous droits réservés par Althéa
                      </p>
                      <a className="confidentialite" href="/">
                          Politique de confidentialité
                      </a>
                      <a className="utilisation" href="/">
                          Conditions d'utilisation
                      </a>
                  </div>
              </div>
          </footer>
      </div>
  )
}

export default App

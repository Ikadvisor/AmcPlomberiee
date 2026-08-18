/**
 * Style reminder — Atelier Créole Contemporain:
 * an editorial, technically precise and warm local service page. Prioritize clarity,
 * navy/ivory/bricked-red restraint, document-like markers and immediate access to help.
 */
import {
  ArrowRight,
  Bolt,
  CheckCircle2,
  ChevronDown,
  Clock3,
  Droplets,
  Fan,
  Flame,
  Mail,
  MapPin,
  Menu,
  Phone,
  Pipette,
  ShieldCheck,
  SunMedium,
  Wind,
  Wrench,
} from "lucide-react";
import { useState } from "react";

const emergencyPhone = "+594694452785";
const standardPhone = "+594639066655";
const email = "amcplomberie.guyane@gmail.com";

const services = [
  { icon: Pipette, title: "Plomberie", description: "Dépannage, réparation et installation de réseaux pour particuliers et chantiers." },
  { icon: Droplets, title: "Installation sanitaire", description: "Fourniture et pose de WC, lavabos, robinetterie, douche, baignoire et accessoires." },
  { icon: Fan, title: "Climatisation", description: "Installation, entretien et dépannage de systèmes adaptés au climat guyanais." },
  { icon: Bolt, title: "Électricité", description: "Tableaux, circuits courant fort, courant faible, alarme, réseau et domotique." },
  { icon: Wind, title: "Gaines VMC", description: "Pose et raccordement pour une ventilation efficace et conforme." },
  { icon: Flame, title: "Chauffe-eau", description: "Installation, entretien et remplacement de chauffe-eau électriques et solaires." },
  { icon: SunMedium, title: "Solaire", description: "Solutions économes, pose, raccordement et maintenance adaptés à la Guyane." },
  { icon: Wrench, title: "Recherche de fuite", description: "Caméra, écoute et traçage pour un diagnostic précis et non destructif." },
];

const commitments = [
  { icon: ShieldCheck, title: "Artisan qualifié", description: "Plomberie, climatisation et électricité traitées dans le respect des normes." },
  { icon: Clock3, title: "Réactivité réelle", description: "Disponibilité confirmée par téléphone et intervention rapide en Guyane." },
  { icon: CheckCircle2, title: "Devis clair", description: "Une estimation transparente avant toute intervention." },
];

const faq = [
  ["Intervenez-vous en urgence le week-end ?", "Oui. La disponibilité d’urgence est assurée 7j/7. Appelez directement le numéro d’urgence afin de confirmer la prise en charge."],
  ["Quelles communes couvrez-vous ?", "Nous intervenons à Matoury, Cayenne, Rémire-Montjoly, Macouria et Roura. Contactez-nous pour les communes voisines."],
  ["Faites-vous aussi la climatisation et l’électricité ?", "Oui. AMC Plomberie couvre la plomberie, la climatisation, l’électricité, la VMC et les chauffe-eau électriques ou solaires."],
  ["Travaillez-vous aussi sur les chantiers professionnels ?", "Oui. Nous accompagnons les particuliers et les chantiers en neuf, rénovation, second œuvre et coordination avec les autres corps de métier."],
  ["Comment se déroule une recherche de fuite ?", "Nous utilisons des méthodes non destructives pour localiser l’origine du problème, puis présentons un devis avant réparation."],
];

function BrandMark({ inverse = false }: { inverse?: boolean }) {
  return <img className={`brand-mark ${inverse ? "brand-mark--inverse" : ""}`} src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663899607135/VZvfTtYNWVoaSIoY.png" alt="AMC Plomberie" />;
}

function ServiceIcon({ Icon }: { Icon: typeof Pipette }) {
  return <Icon size={23} strokeWidth={1.8} aria-hidden="true" />;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="amc-site">
      <div className="topline">
        <div className="amc-shell topline__content">
          <span>Matoury · Cayenne · Rémire-Montjoly · Macouria · Roura</span>
          <a href={`tel:${emergencyPhone}`}><span className="topline__pulse" />Urgence 7j/7 · 0694 45 27 85</a>
        </div>
      </div>

      <header className="site-header">
        <div className="amc-shell site-header__inner">
          <a className="brand" href="#accueil" aria-label="AMC Plomberie — accueil"><BrandMark /></a>
          <nav className="desktop-nav" aria-label="Navigation principale">
            <a href="#services">Nos services</a>
            <a href="#engagements">Nos engagements</a>
            <a href="#zones">Zone d’intervention</a>
            <a href="#contact">Contact</a>
          </nav>
          <a className="header-call" href={`tel:${emergencyPhone}`}>
            <Phone size={16} aria-hidden="true" />
            <span><small>Besoin d’aide ?</small><strong>0694 45 27 85</strong></span>
          </a>
          <button className="mobile-menu-trigger" type="button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-controls="mobile-menu">
            <Menu size={24} aria-hidden="true" />
            <span className="sr-only">Ouvrir le menu</span>
          </button>
        </div>
        {menuOpen && (
          <div id="mobile-menu" className="mobile-menu">
            <div className="amc-shell">
              <a href="#services" onClick={closeMenu}>Nos services</a>
              <a href="#engagements" onClick={closeMenu}>Nos engagements</a>
              <a href="#zones" onClick={closeMenu}>Zone d’intervention</a>
              <a href="#contact" onClick={closeMenu}>Contact</a>
              <a className="button button--urgent" href={`tel:${emergencyPhone}`} onClick={closeMenu}><Phone size={18} /> Appeler en urgence</a>
            </div>
          </div>
        )}
      </header>

      <main>
        <section id="accueil" className="hero">
          <div className="hero__gridline" aria-hidden="true" />
          <div className="amc-shell hero__layout">
            <div className="hero__copy">
              <p className="eyebrow"><span /> Disponible aujourd’hui en Guyane</p>
              <h1>Plomberie, climatisation,<br /><em>électricité</em><br />en Guyane.</h1>
              <p className="hero__lead">AMC Plomberie intervient à Matoury, Cayenne, Rémire-Montjoly et dans les communes voisines. Dépannage, installation et entretien pour les particuliers comme pour les chantiers.</p>
              <div className="hero__actions">
                <a className="button button--primary" href={`tel:${emergencyPhone}`}><Phone size={18} /> Appeler maintenant · 0694 45 27 85</a>
                <a className="button button--outline" href="#contact">Demander un devis</a>
              </div>
              <div className="hero__facts" aria-label="Points clés">
                <span><CheckCircle2 size={17} /> Urgence 24/7</span>
                <span><CheckCircle2 size={17} /> Local · Matoury</span>
                <span><CheckCircle2 size={17} /> Devis transparent</span>
              </div>
            </div>
            <div className="hero__visual">
              <div className="hero__image-wrap">
                <img src="https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=1200&q=80" alt="Plombier en intervention soignée" />
              </div>
              <div className="hero__card hero__card--service"><span className="card-index">24/7</span><strong>Ligne directe<br />0694 45 27 85</strong></div>
              <div className="hero__card hero__card--location"><MapPin size={19} /><span><small>Basé à</small><strong>Matoury</strong></span></div>
            </div>
          </div>
        </section>

        <section id="services" className="section services-section">
          <div className="amc-shell">
            <div className="section-heading section-heading--split">
              <div><p className="eyebrow"><span /> Nos services</p><h2>Interventions<br /><em>& installations.</em></h2></div>
              <p>Plomberie, climatisation, électricité et équipements techniques : une réponse claire pour chaque besoin, au domicile comme sur chantier.</p>
            </div>
            <div className="services-rail">
              {services.map(({ icon: Icon, title, description }, index) => (
                <article className="service-item" key={title}>
                  <span className="service-item__index">0{index + 1}</span>
                  <div className="service-item__icon"><ServiceIcon Icon={Icon} /></div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                  <a href="#contact" aria-label={`Demander un devis pour ${title}`}>En savoir plus <ArrowRight size={16} /></a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="engagements" className="section commitments-section">
          <div className="amc-shell commitments-layout">
            <div className="commitments-copy">
              <p className="eyebrow eyebrow--light"><span /> Méthode AMC</p>
              <h2>Un artisan,<br /><em>un interlocuteur.</em></h2>
              <p>Nous vous expliquons la situation, la solution proposée et les priorités avant de commencer. C’est plus simple pour vous, plus fiable pour vos installations.</p>
              <a className="text-link text-link--light" href="#contact">Parler de votre besoin <ArrowRight size={17} /></a>
            </div>
            <div className="commitments-list">
              {commitments.map(({ icon: Icon, title, description }, index) => (
                <article key={title} className="commitment">
                  <span className="commitment__number">0{index + 1}</span>
                  <Icon size={29} strokeWidth={1.7} aria-hidden="true" />
                  <div><h3>{title}</h3><p>{description}</p></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="zones" className="section diagnosis-section">
          <div className="amc-shell diagnosis-layout">
            <div className="diagnosis-image diagnosis-image--water"><img src="https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=1200&q=80" alt="Diagnostic précis d’une installation de plomberie" /></div>
            <div className="diagnosis-copy">
              <p className="eyebrow"><span /> Zone d’intervention</p>
              <h2>De Matoury aux communes voisines.</h2>
              <p>AMC Plomberie intervient pour les particuliers comme pour les professionnels à Matoury, Cayenne, Rémire-Montjoly, Macouria et Roura.</p>
              <div className="communes" aria-label="Communes desservies">
                {['Matoury', 'Cayenne', 'Rémire-Montjoly', 'Macouria', 'Roura'].map((town) => <span key={town}><MapPin size={14} /> {town}</span>)}
              </div>
              <a className="button button--outline" href={`tel:${standardPhone}`}><Phone size={18} /> Vérifier ma commune</a>
            </div>
          </div>
        </section>

        <section className="solar-banner solar-banner--plain">
          <div className="solar-banner__image"><img src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1200&q=80" alt="Entretien d’un chauffe-eau solaire en Guyane" /></div>
          <div className="solar-banner__overlay" />
          <div className="amc-shell solar-banner__content">
            <p className="eyebrow eyebrow--light"><span /> Chauffe-eau & climatisation</p>
            <h2>Des équipements adaptés au climat guyanais.</h2>
            <p>Chauffe-eau électriques ou solaires, climatisations et ventilation : nous vous conseillons, installons et entretenons l’équipement adapté à votre usage.</p>
            <a className="button button--ivory" href="#contact">Demander un conseil <ArrowRight size={18} /></a>
          </div>
        </section>

        <section className="section faq-section">
          <div className="amc-shell faq-layout">
            <div className="faq-intro"><p className="eyebrow"><span /> Questions fréquentes</p><h2>Informations utiles.</h2><p>Pour tout cas particulier, appelez-nous : nous vous orientons vers la bonne solution.</p></div>
            <div className="faq-list">
              {faq.map(([question, answer]) => (
                <details key={question} className="faq-item">
                  <summary>{question}<ChevronDown size={20} aria-hidden="true" /></summary>
                  <p>{answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="contact-section">
          <div className="amc-shell contact-panel">
            <div className="contact-panel__seal"><BrandMark inverse /></div>
            <div className="contact-panel__copy"><p className="eyebrow eyebrow--light"><span /> Contact & devis</p><h2>Une panne ou un projet ?<br /><em>Faisons le point.</em></h2><p>Expliquez-nous votre besoin par téléphone ou par e-mail. Nous vous guiderons vers la prochaine étape utile.</p></div>
            <div className="contact-panel__actions">
              <a className="contact-action contact-action--urgent" href={`tel:${emergencyPhone}`}><Phone size={20} /><span><small>Urgence 7j/7</small><strong>0694 45 27 85</strong></span></a>
              <a className="contact-action" href={`tel:${standardPhone}`}><Phone size={20} /><span><small>Standard</small><strong>0639 06 66 55</strong></span></a>
              <a className="contact-action" href={`mailto:${email}`}><Mail size={20} /><span><small>E-mail</small><strong>{email}</strong></span></a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="amc-shell site-footer__top">
          <a className="brand brand--footer" href="#accueil"><BrandMark inverse /></a>
          <p>Plomberie · Climatisation · Électricité<br />1219 Chemin Morthium, 97351 Matoury</p>
          <a className="footer-call" href={`tel:${emergencyPhone}`}><Phone size={17} /> 0694 45 27 85</a>
        </div>
        <div className="amc-shell site-footer__bottom"><span>© {new Date().getFullYear()} AMC Plomberie. Tous droits réservés.</span><a href={`mailto:${email}`}>{email}</a></div>
      </footer>

      <a className="mobile-call" href={`tel:${emergencyPhone}`}><Phone size={18} /> Appeler en urgence</a>
    </div>
  );
}

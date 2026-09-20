import { useEffect, useState } from "react";
import "./App.css";
import heroImage from "./assets/CMO1.jpg";
import tabangImage from "./assets/tabang-katawhan.jpg";
import samsImage from "./assets/project-sams.jpg";
import treeImage from "./assets/tree-planting.jpg";
import dentalImage from "./assets/dental-mission.jpg";
import acdiLogo from "./assets/acdi.png";
import afpcmcLogo from "./assets/afpfcmc.png";
import afpslaiLogo from "./assets/afpslai.png";
import cdoLogo from "./assets/CDO Seal.png";
import nmmcLogo from "./assets/NMMC.png";
import prcLogo from "./assets/prc.png";
import pafcpicLogo from "./assets/pafcpic.jpg";
import unitLogo from "./assets/590abg.png";
import delmonteLogo from './assets/delmonte.jpg'
import gardeniaLogo from './assets/gardenia.png'
import clenroLogo from './assets/CLENRO_logo.jpg'
import delmonteLogo from "./assets/delmonte-transparent.png";
import gardeniaLogo from "./assets/gardenia-transparent.png";

function App() { 
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState(null);

  useEffect(() => {
  if (!selectedProgram) return;

  const handleKeyDown = (event) => {
    if (event.key === "Escape") {
      setSelectedProgram(null);
    }
  };

  document.body.style.overflow = "hidden";

  window.addEventListener("keydown", handleKeyDown);

  return () => {
    document.body.style.overflow = "";
    window.removeEventListener("keydown", handleKeyDown);
  };
}, [selectedProgram]);
  const programDetails = {
  tabang: {
    title: "Tabang Katawhan",
    image: tabangImage,
    category: "Community Outreach",
    description:
      "A recurring community outreach initiative supporting children, senior citizens, vulnerable groups, and partner institutions through meaningful engagement and practical assistance.",
    highlights: [
      "Community outreach and service activities",
      "Support for partner beneficiary institutions",
      "Recurring engagement with vulnerable sectors",
      "Collaboration with government and private partners",
    ],
  },

  sams: {
    title: "Project SAMS",
    image: samsImage,
    category: "Youth Development",
    description:
      "Project SAMS uses Sports, Arts, Music, and Spiritual activities to create positive learning experiences and developmental opportunities for young beneficiaries.",
    highlights: [
      "Sports and fitness activities",
      "Arts and creative engagement",
      "Music learning and participation",
      "Values formation and spiritual activities",
    ],
  },

  environment: {
    title: "Environmental Programs",
    image: treeImage,
    category: "Environmental Stewardship",
    description:
      "Environmental initiatives bring personnel, partner agencies, volunteers, and communities together through tree planting, clean-up drives, and sustainability activities.",
    highlights: [
      "Tree planting activities",
      "Community clean-up drives",
      "Environmental awareness",
      "Partnership with environmental agencies",
    ],
  },

  health: {
    title: "Health & Humanitarian Service",
    image: dentalImage,
    category: "Health & Humanitarian Assistance",
    description:
      "Health and humanitarian activities provide medical, dental, bloodletting, health education, and other forms of assistance through coordinated partnerships.",
    highlights: [
      "Medical and dental outreach",
      "Bloodletting activities",
      "Health education and screening",
      "Humanitarian assistance",
    ],
  },
};
  
  return (
    <div className="app">
      <header className="navbar">
        <div className="brand">
        <div className="brand-logo">
  <img src={unitLogo} alt="590th Air Base Group logo" />
</div>

        <div className="brand-text">
          <span className="brand-title">590th ABG</span>
          <span className="brand-subtitle">Civil-Military Operations</span>
        </div>
      </div>

      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav className={menuOpen ? "nav-links nav-open" : "nav-links"}>
        <a href="#home" onClick={() => setMenuOpen(false)}>
          Home
        </a>

        <a href="#about" onClick={() => setMenuOpen(false)}>
          Who We Are
        </a>

        <a href="#programs" onClick={() => setMenuOpen(false)}>
          What We Do
        </a>

        <a href="#stories" onClick={() => setMenuOpen(false)}>
          Success Stories
        </a>

        <a href="#partners" onClick={() => setMenuOpen(false)}>
          Partners
        </a>

        <a href="#help" onClick={() => setMenuOpen(false)}>
          How You Can Help
        </a>
      </nav>
    </header>

      <main>
        {/* HERO */}
        <section
          className="hero"
          id="home"
        style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="hero-content">
            <p className="hero-label">
              PHILIPPINE AIR FORCE • 590TH AIR BASE GROUP
            </p>

            <h1>
              Serving the Mission.
              <br />
              <span>Serving the Community.</span>
            </h1>

            <p className="hero-description">
              Building stronger communities through meaningful partnerships,
              sustainable programs, and service beyond the boundaries of
              Lumbia Air Base.
            </p>

            <div className="hero-buttons">
              <a href="#programs" className="btn btn-primary">
                Explore Our Programs
              </a>

              <a href="#help" className="btn btn-secondary">
                Partner With Us
              </a>
            </div>
          </div>
        </section>

        {/* WHO WE ARE */}
        <section className="section" id="about">
          <div className="section-container">
            <p className="section-label">WHO WE ARE</p>

            <h2>Service Beyond the Air Base</h2>

            <p className="section-intro">
              The Civil-Military Operations initiatives of the 590th Air Base
              Group strengthen the connection between the Philippine Air Force
              and the communities we serve.
            </p>

            <div className="about-grid">
              <div className="about-card">
                <h3>Our Mission</h3>
                <p>
                  Build meaningful and sustainable partnerships that support
                  community development, public service, and nation-building.
                </p>
              </div>

              <div className="about-card">
                <h3>Our Commitment</h3>
                <p>
                  Serve with professionalism, compassion, accountability, and
                  transparency in every community engagement.
                </p>
              </div>

              <div className="about-card">
                <h3>Our Approach</h3>
                <p>
                  Work alongside government agencies, private organizations,
                  foundations, volunteers, and local communities.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* WHAT WE DO */}
        <section className="section section-light" id="programs">
  <div className="section-container">
    <p className="section-label">WHAT WE DO</p>

    <h2>Programs That Create Meaningful Impact</h2>

    <p className="section-intro">
      Our activities are designed to address real community needs while
      building lasting partnerships.
    </p>

    <div className="program-grid">

      {/* TABANG KATAWHAN */}
      <article className="program-card">
        <div className="program-image">
          <img
            src={tabangImage}
            alt="590th Air Base Group Tabang Katawhan community activity"
          />
        </div>

        <div className="program-content">
          <div className="program-number">01</div>

          <h3>Tabang Katawhan</h3>

          <p>
            Recurring outreach activities supporting children, senior citizens,
            vulnerable groups, and partner institutions.
          </p>

          <button
  className="program-link program-button"
  onClick={() => setSelectedProgram(programDetails.tabang)}
>
  Learn More →
</button>
        </div>
      </article>


      {/* PROJECT SAMS */}
      <article className="program-card">
        <div className="program-image">
          <img
            src={samsImage}
            alt="Project SAMS music and youth development activity"
          />
        </div>

        <div className="program-content">
          <div className="program-number">02</div>

          <h3>Project SAMS</h3>

          <p>
            Sports, Arts, Music, and Spiritual activities designed to inspire,
            educate, and empower young beneficiaries.
          </p>

          <button
  className="program-link program-button"
  onClick={() => setSelectedProgram(programDetails.sams)}
>
  Learn More →
</button>
        </div>
      </article>


      {/* ENVIRONMENTAL PROGRAMS */}
      <article className="program-card">
        <div className="program-image">
          <img
            src={treeImage}
            alt="590th Air Base Group tree planting activity"
          />
        </div>

        <div className="program-content">
          <div className="program-number">03</div>

          <h3>Environmental Programs</h3>

          <p>
            Tree planting, clean-up drives, environmental awareness, and
            community-based sustainability initiatives.
          </p>

          <button
  className="program-link program-button"
  onClick={() => setSelectedProgram(programDetails.environment)}
>
  Learn More →
</button>
        </div>
      </article>


      {/* HEALTH AND HUMANITARIAN */}
      <article className="program-card">
        <div className="program-image program-image-dental">
          <img
            src={dentalImage}
            alt="590th Air Base Group health and dental outreach activity"
          />
        </div>

        <div className="program-content">
          <div className="program-number">04</div>

          <h3>Health & Humanitarian Service</h3>

          <p>
            Medical and dental missions, bloodletting activities, health
            education, and humanitarian assistance conducted together with
            community partners.
          </p>

          <button
  className="program-link program-button"
  onClick={() => setSelectedProgram(programDetails.health)}
>
  Learn More →
</button>
        </div>
      </article>

    </div>
  </div>
</section>

        {/* SUCCESS STORIES */}
        <section className="section section-dark" id="stories">
  <div className="section-container">

    <div className="impact-heading">
      <div>
        <p className="section-label">OUR IMPACT</p>

        <h2>Service Measured by Impact.</h2>

        <p className="section-intro section-intro-light">
          Behind every activity are people, partnerships, and resources
          transformed into meaningful action for the communities we serve.
        </p>
      </div>

      <p className="impact-note">
        Our community initiatives continue to grow through collaboration
        with government agencies, private organizations, foundations,
        volunteers, and local communities.
      </p>
    </div>


    {/* IMPACT FIGURES */}

    <div className="impact-stats">

      <div className="impact-stat">
        <span className="impact-stat-number">4</span>
        <span className="impact-stat-label">
          Core Community Programs
        </span>
      </div>

      <div className="impact-stat">
        <span className="impact-stat-number">4</span>
        <span className="impact-stat-label">
          Partner Beneficiary Institutions
        </span>
      </div>

      <div className="impact-stat">
        <span className="impact-stat-number">250</span>
        <span className="impact-stat-label">
          Saplings for PAF-Wide Tree Planting
        </span>
      </div>

      <div className="impact-stat">
        <span className="impact-stat-number">Ongoing</span>
        <span className="impact-stat-label">
          Community Engagement
        </span>
      </div>

    </div>


    {/* FEATURED SUCCESS STORIES */}

    <div className="stories-header">
      <p className="section-label">STORIES FROM THE FIELD</p>
      <h3>Where Partnership Becomes Action</h3>
    </div>

    <div className="story-grid">

      <article className="story-card">
        <div className="story-image">
          <img
            src={tabangImage}
            alt="Community outreach activity under the 590th Air Base Group Tabang Katawhan program"
          />
        </div>

        <div className="story-content">
          <span className="story-category">
            COMMUNITY OUTREACH
          </span>

          <h3>Tabang Katawhan</h3>

          <p>
            A continuing community engagement initiative connecting
            Philippine Air Force personnel and partners with beneficiary
            institutions through service, outreach, and practical assistance.
          </p>

          <a href="#beneficiaries" className="story-link">
            Meet Our Beneficiaries →
          </a>
        </div>
      </article>


      <article className="story-card">
        <div className="story-image">
          <img
            src={samsImage}
            alt="Young participants taking part in a music activity under Project SAMS"
          />
        </div>

        <div className="story-content">
          <span className="story-category">
            YOUTH DEVELOPMENT
          </span>

          <h3>Project SAMS</h3>

          <p>
            Sports, Arts, Music, and Spiritual activities create opportunities
            for young beneficiaries to learn, participate, express themselves,
            and build meaningful connections.
          </p>

          <a href="#programs" className="story-link">
            Explore the Program →
          </a>
        </div>
      </article>


      <article className="story-card">
        <div className="story-image">
          <img
            src={treeImage}
            alt="PAF personnel and community partners planting a sapling during a tree planting activity"
          />
        </div>

        <div className="story-content">
          <span className="story-category">
            ENVIRONMENT
          </span>

          <h3>Growing a Greener Community</h3>

          <p>
            Environmental initiatives bring PAF personnel, government
            partners, and communities together through tree planting,
            clean-up activities, and environmental stewardship.
          </p>

          <a href="#programs" className="story-link">
            See Environmental Programs →
          </a>
        </div>
      </article>

    </div>

  </div>
</section>

        {/* BENEFICIARIES */}
        <section className="section" id="beneficiaries">
  <div className="section-container">

    <p className="section-label">OUR BENEFICIARIES</p>

    <h2>Communities at the Heart of Our Mission</h2>

    <p className="section-intro">
      Our programs are designed around the needs of partner institutions and
      communities. Through sustained engagement, the 590th Air Base Group works
      to deliver meaningful assistance, strengthen relationships, and create
      opportunities for long-term community development.
    </p>

    <div className="beneficiary-grid">

      <article className="beneficiary-card">
        <div className="beneficiary-tag">CHILDREN & YOUTH</div>

        <h3>Calabrian Children's Foundation</h3>

        <p>
          A partner beneficiary supported through outreach activities,
          youth-centered initiatives, educational engagement, and community
          assistance programs.
        </p>

        <div className="beneficiary-support">
          <span>Focus:</span>
          Youth Development • Outreach • Community Support
        </div>
      </article>

      <article className="beneficiary-card">
        <div className="beneficiary-tag">YOUTH DEVELOPMENT</div>

        <h3>Calabrian Teen Novitiate</h3>

        <p>
          Engagements with the institution focus on character development,
          meaningful interaction, volunteer service, and activities that
          encourage positive growth among young beneficiaries.
        </p>

        <div className="beneficiary-support">
          <span>Focus:</span>
          Youth Engagement • Service • Development
        </div>
      </article>

      <article className="beneficiary-card">
        <div className="beneficiary-tag">SENIOR CITIZENS</div>

        <h3>St. Joseph Golden Homes Foundation</h3>

        <p>
          Community outreach activities provide opportunities to extend care,
          companionship, practical assistance, and support to elderly
          beneficiaries.
        </p>

        <div className="beneficiary-support">
          <span>Focus:</span>
          Elderly Care • Outreach • Facility Support
        </div>
      </article>

      <article className="beneficiary-card">
        <div className="beneficiary-tag">COMMUNITY SUPPORT</div>

        <h3>LEUPAPO Inc.</h3>

        <p>
          Through partnership-based activities, the 590th Air Base Group
          supports beneficiaries through community engagement, developmental
          activities, and collaborative outreach initiatives.
        </p>

        <div className="beneficiary-support">
          <span>Focus:</span>
          Community Engagement • Assistance • Partnership
        </div>
      </article>

    </div>
  </div>
</section>

        {/* PARTNERS */}        
<section className="section section-light" id="partners">
  <div className="section-container">

    <p className="section-label">STRATEGIC PARTNERS</p>

    <h2>Working Together for Greater Impact</h2>

    <p className="section-intro">
      The 590th Air Base Group works alongside government agencies,
      private organizations, institutions, and community partners to expand
      the reach and sustainability of our programs.
    </p>


    {/* PARTNER CATEGORIES */}

    <div className="partner-groups">

      <article className="partner-group-card">
        <div className="partner-group-number">01</div>

        <h3>Government & Institutional Partners</h3>

        <p>
          Collaboration with public agencies and institutions strengthens
          coordination, technical support, access to resources, and
          community-based implementation.
        </p>

        <div className="partner-examples">
          <span>Government Agencies</span>
          <span>Medical Institutions</span>
          <span>Public Institutions</span>
        </div>
      </article>


      <article className="partner-group-card">
        <div className="partner-group-number">02</div>

        <h3>Financial & Organizational Partners</h3>

        <p>
          Partner organizations help provide services, resources, financial
          support, expertise, and assistance that strengthen community
          programs and outreach activities.
        </p>

        <div className="partner-examples">
          <span>Cooperatives</span>
          <span>Financial Institutions</span>
          <span>Service Organizations</span>
        </div>
      </article>


      <article className="partner-group-card">
        <div className="partner-group-number">03</div>

        <h3>Community & Program Partners</h3>

        <p>
          Community organizations, volunteers, beneficiary institutions, and
          program partners help ensure that activities respond to actual needs
          and create meaningful local impact.
        </p>

        <div className="partner-examples">
          <span>Community Organizations</span>
          <span>Beneficiary Institutions</span>
          <span>Volunteers & Advocates</span>
        </div>
      </article>

    </div>


    {/* FEATURED PARTNERS */}

    <div className="partner-logo-section">

      <p className="section-label">FEATURED PARTNERS</p>

      <div className="partner-logo-grid">

        <div className="partner-logo-card">
          <div className="partner-logo-image">
            <img src={acdiLogo} alt="ACDI logo" />
          </div>
          <span>ACDI</span>
        </div>

        <div className="partner-logo-card">
          <div className="partner-logo-image">
            <img src={afpcmcLogo} alt="AFPFCMC logo" />
          </div>
          <span>AFPFCMC</span>
        </div>

        <div className="partner-logo-card">
          <div className="partner-logo-image">
            <img src={afpslaiLogo} alt="AFPSLAI logo" />
          </div>
          <span>AFPSLAI</span>
        </div>

        <div className="partner-logo-card">
  <div className="partner-logo-image">
    <img
      src={cdoLogo}
      alt="City Government of Cagayan de Oro seal"
    />
  </div>
  <span>City Government of Cagayan de Oro</span>
</div>
<div className="partner-logo-card">
  <div className="partner-logo-image">
    <img src={clenroLogo} alt="CLENRO logo" />
  </div>
  <span>CLENRO</span>
</div>

<div className="partner-logo-card">
  <div className="partner-logo-image">
    <img src={delmonteLogo} alt="Del Monte logo" />
  </div>
  <span>Del Monte</span>
</div>

<div className="partner-logo-card">
  <div className="partner-logo-image">
    <img src={gardeniaLogo} alt="Gardenia logo" />
  </div>
  <span>Gardenia</span>
</div>

        <div className="partner-logo-card">
          <div className="partner-logo-image">
            <img
              src={nmmcLogo}
              alt="Northern Mindanao Medical Center logo"
            />
          </div>
          <span>Northern Mindanao Medical Center</span>
        </div>

        <div className="partner-logo-card">
          <div className="partner-logo-image">
            <img
              src={prcLogo}
              alt="Philippine Red Cross logo"
            />
          </div>
          <span>Philippine Red Cross</span>
        </div>

        <div className="partner-logo-card">
          <div className="partner-logo-image">
            <img src={pafcpicLogo} alt="PAFCPIC logo" />
          </div>
          <span>PAFCPIC</span>
        </div>

      </div>
    </div>


    {/* PARTNERSHIP MESSAGE */}

    <div className="partner-message">

      <div>
        <p className="partner-message-label">
          PARTNERSHIP IN ACTION
        </p>

        <h3>
          Every contribution should create a visible and meaningful result.
        </h3>
      </div>

      <p>
        This platform is designed to help partners see how their support
        contributes to real activities, real beneficiaries, and measurable
        community outcomes.
      </p>

    </div>

  </div>
</section>

        {/* HOW YOU CAN HELP */}
        <section className="section help-section" id="help">
  <div className="section-container">

    <p className="section-label">HOW YOU CAN HELP</p>

    <h2>Be Part of the Mission</h2>

    <p className="section-intro">
      Meaningful community service is made stronger through collaboration.
      Individuals, organizations, institutions, and private partners can take
      part in the 590th Air Base Group's programs in several ways.
    </p>


    <div className="help-grid">

      <article className="help-card">
        <div className="help-number">01</div>

        <h3>Support a Program</h3>

        <p>
          Contribute resources, supplies, services, equipment, food,
          educational materials, health-related support, or other requirements
          directly connected to ongoing community programs.
        </p>

        <div className="help-tags">
          <span>In-Kind Support</span>
          <span>Program Resources</span>
          <span>Services</span>
        </div>
      </article>


      <article className="help-card">
        <div className="help-number">02</div>

        <h3>Become a Strategic Partner</h3>

        <p>
          Build a recurring or long-term partnership with the 590th Air Base
          Group through shared programs, sponsorships, expertise, advocacy,
          and coordinated community initiatives.
        </p>

        <div className="help-tags">
          <span>Partnerships</span>
          <span>Sponsorships</span>
          <span>Joint Programs</span>
        </div>
      </article>


      <article className="help-card">
        <div className="help-number">03</div>

        <h3>Volunteer or Collaborate</h3>

        <p>
          Professionals, organizations, civic groups, and volunteers may
          contribute manpower, technical expertise, specialized services,
          mentoring, training, or other forms of assistance.
        </p>

        <div className="help-tags">
          <span>Volunteerism</span>
          <span>Expertise</span>
          <span>Community Service</span>
        </div>
      </article>

    </div>


    <div className="help-cta">

      <div className="help-cta-content">
        <p className="help-cta-label">PARTNER WITH US</p>

        <h3>
          Help us turn resources, expertise, and goodwill into meaningful
          community impact.
        </h3>

        <p>
          For partnership proposals, program support, collaboration, or
          community engagement opportunities, connect with the Civil-Military
          Operations Office of the 590th Air Base Group.
        </p>
      </div>

      <div className="help-contact">

        <p className="help-contact-title">
          590th Air Base Group
        </p>

        <p>
  Civil-Military Operations Office
</p>

<p>
  Lumbia Air Base, Cagayan de Oro City
</p>

<p>
  Email:{" "}
  <a href="mailto:cmo590abg@gmail.com">
    cmo590abg@gmail.com
  </a>
</p>

<p>
  Contact:{" "}
  <a href="tel:+63917884891">
    0917884891
  </a>
</p>

<a
  href="mailto:cmo590abg@gmail.com"
  className="help-contact-button"
>
  Contact the CMO Office
</a>

      </div>

    </div>

  </div>
</section>
      </main>

      <footer>
        <div>
  <strong>590th Air Base Group</strong>
  <p>Civil-Military Operations Office</p>
  <p>Lumbia Air Base, Cagayan de Oro City</p>
</div>

<div>
  <p>Philippine Air Force • Installation Management Command</p>
  <p>Email: cmo590abg@gmail.com</p>
  <p>Contact: 0917884891</p>
  <p>© 2026 590th Air Base Group. All rights reserved.</p>
</div>
      </footer>
      {selectedProgram && (
  <div
  className="program-modal-overlay"
  onClick={() => setSelectedProgram(null)}
  role="presentation"
>
    <div
  className="program-modal"
  onClick={(event) => event.stopPropagation()}
  role="dialog"
  aria-modal="true"
  aria-labelledby="program-modal-title"
>
      <button
        className="program-modal-close"
        onClick={() => setSelectedProgram(null)}
        aria-label="Close program details"
      >
        ×
      </button>

      <div className="program-modal-image">
        <img
          src={selectedProgram.image}
          alt={selectedProgram.title}
        />
      </div>

      <div className="program-modal-content">
        <p className="section-label">
          {selectedProgram.category}
        </p>

        <h2 id="program-modal-title">
  {selectedProgram.title}
</h2>

        <p className="program-modal-description">
          {selectedProgram.description}
        </p>

        <h3>Program Highlights</h3>

        <ul>
          {selectedProgram.highlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <a
          href="#help"
          className="btn btn-primary"
          onClick={() => setSelectedProgram(null)}
        >
          Partner With This Program
        </a>
      </div>
    </div>
  </div>
)}
    </div>
  );
}
export default App;
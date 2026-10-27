import { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";

const asset = (name, ext = "png") => `/illustrations/${name}.${ext}`;
const stops = [
  "/",
  "/why-hire-me/1",
  "/why-hire-me/2",
  "/why-hire-me/3",
  "/projects",
];

export function PortfolioMenu() {
  const [open, setOpen] = useState(false);
  const trigger = useRef(null);
  const close = useRef(null);
  const location = useLocation();
  const dismiss = () => {
    setOpen(false);
    trigger.current?.focus();
  };
  useEffect(() => {
    const keyboard = () => {
      document.documentElement.dataset.inputMethod = "keyboard";
    };
    const pointer = () => {
      document.documentElement.dataset.inputMethod = "pointer";
    };
    document.addEventListener("keydown", keyboard);
    document.addEventListener("pointerdown", pointer);
    return () => {
      document.removeEventListener("keydown", keyboard);
      document.removeEventListener("pointerdown", pointer);
      delete document.documentElement.dataset.inputMethod;
    };
  }, []);
  useEffect(() => {
    if (!open) return;
    const old = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    close.current?.focus();
    const handleKey = (event) => {
      if (event.key === "Escape") dismiss();
      if (event.key === "Tab") {
        const items = [
          ...document.querySelectorAll(
            ".portfolio-menu button, .portfolio-menu a",
          ),
        ];
        const first = items[0],
          last = items.at(-1);
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = old;
      document.removeEventListener("keydown", handleKey);
    };
  }, [open]);
  return (
    <>
      <button
        ref={trigger}
        className="menu-trigger"
        aria-label="Open navigation"
        aria-haspopup="dialog"
        aria-expanded={open}
        onClick={() => setOpen(true)}
      >
        <span />
        <span />
      </button>
      {open && (
        <div
          className="portfolio-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Portfolio navigation"
        >
          <button ref={close} className="menu-close" onClick={dismiss}>
            Close ×
          </button>
          <p>CLINTON OSUNBOR</p>
          <nav>
            {[
              ["/", "Introduction"],
              ["/why-hire-me/1", "Why hire me"],
              ["/projects", "Selected projects"],
            ].map(([to, label]) => (
              <Link
                key={to}
                to={to}
                aria-current={location.pathname === to ? "page" : undefined}
                onClick={dismiss}
              >
                {label}
                <span>↗</span>
              </Link>
            ))}
          </nav>
          <a className="menu-contact" href="mailto:clintonosunbor361@gmail.com">
            Let’s talk ↗
          </a>
        </div>
      )}
    </>
  );
}

function Screen({ children, className = "", index = 0 }) {
  const navigate = useNavigate();
  const touch = useRef(null);
  function endTouch(event) {
    if (!touch.current) return;
    const dx = event.changedTouches[0].clientX - touch.current.x;
    const dy = event.changedTouches[0].clientY - touch.current.y;
    if (Math.abs(dx) > 65 && Math.abs(dx) > Math.abs(dy) * 1.5) {
      const next = index + (dx < 0 ? 1 : -1);
      if (stops[next]) navigate(stops[next]);
    }
    touch.current = null;
  }
  return (
    <main className="illustration-shell">
      <article
        className={`phone-screen ${className}`}
        onTouchStart={(e) => {
          touch.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
        }}
        onTouchEnd={endTouch}
        onKeyDown={(e) => {
          if (e.target !== e.currentTarget) return;
          const next =
            index +
            (e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0);
          if (next !== index && stops[next]) {
            e.preventDefault();
            navigate(stops[next]);
          }
        }}
        tabIndex={0}
        aria-label={
          index === 0 ? "Introduction" : `Reason ${index} to hire Clinton`
        }
      >
        <div className="screen-content" key={index}>
          {children}
        </div>
      </article>
    </main>
  );
}

export function Introduction() {
  return (
    <Screen className="intro-screen">
      <header className="intro-copy">
        <h1>
          Hey there, I am
          <br />
          Clinton Osunbor.
        </h1>
        <p>Here’s why you should hire me for your:</p>
      </header>
      <Link
        to="/why-hire-me/1"
        className="mosaic"
        aria-label="Discover why you should hire Clinton for Product and Operations roles"
      >
        <img
          className="mosaic-portrait"
          src={asset("portrait")}
          alt="Illustrated portrait of Clinton"
          fetchPriority="high"
        />
        <img className="mosaic-dashboard" src={asset("dashboard")} alt="" />
        <span className="word product">Product</span>
        <img className="mosaic-meeting" src={asset("meeting")} alt="" />
        <img className="mosaic-notes" src={asset("notes")} alt="" />
        <span className="word and">and</span>
        <img className="mosaic-flow" src={asset("flow")} alt="" />
        <span className="word operations">Operations</span>
        <img className="mosaic-checklist" src={asset("checklist")} alt="" />
        <img className="mosaic-laptop" src={asset("laptop")} alt="" />
        <span className="word roles">Roles.</span>
        <img className="mosaic-path" src={asset("path")} alt="" />
      </Link>
      <div className="intro-explore">
        <p>
          Swipe left to explore <span aria-hidden="true">←</span>
        </p>
        <nav className="intro-tabs" aria-label="Explore why you should hire me">
          <Link to="/why-hire-me/1">
            <span>01</span> Perspective
          </Link>
          <Link to="/why-hire-me/2">
            <span>02</span> Ownership
          </Link>
          <Link to="/why-hire-me/3">
            <span>03</span> Hands-On
          </Link>
        </nav>
      </div>
    </Screen>
  );
}

const reasons = [
  {
    title: (
      <>
        I Bring a Fresh
        <br />
        Perspective
      </>
    ),
    quote: "“Science advances one funeral at a time.”",
    attribution: "— Max Planck (paraphrased)",
    paragraphs: [
      "I bring an independent perspective, unburdened by industry dogma. I question assumptions, explore alternatives, and look for better ways to solve problems.",
    ],
    image: "perspective",
    alt: "Clinton considers an alternative path through a blue maze toward an open golden doorway.",
  },
  {
    title: (
      <>
        I Take
        <br />
        Ownership
      </>
    ),
    quote: "“To execute excellently, you need to take OWNERSHIP.”",
    attribution: "— Babajide Duroshola",
    paragraphs: [
      "I believe ownership goes beyond being responsible for a task. It means taking responsibility for the outcome.",
      "Throughout my work, I've taken the initiative to identify operational gaps and design solutions.",
    ],
    alt: "Clinton leads a team through a workflow on a presentation board.",
  },
  {
    title: (
      <>
        I am
        <br />
        Hands-On
      </>
    ),
    quote: "“From idea to execution.”",
    paragraphs: [
      "I enjoy being involved in the entire process of solving a problem, from understanding what isn't working to figuring out what needs to change and making it happen.",
      "Over the years, I've worked across business analysis, interface design, automation, and systems implementation.",
    ],
    image: "hands-on",
    alt: "Clinton works at a desk, developing an idea into a working solution.",
  },
];

export function ReasonScreen() {
  const { point } = useParams();
  const number = Number(point);
  const reason = reasons[number - 1];
  if (!reason)
    return (
      <main className="not-found">
        <Link to="/why-hire-me/1">Start with reason one →</Link>
      </main>
    );
  return (
    <Screen className={`reason-screen reason-${number}`} index={number}>
      <header className="reason-heading">
        <span className="reason-number" aria-hidden="true">
          0{number}
        </span>
        <h1>{reason.title}</h1>
      </header>
      {number === 2 ? (
        <div className="ownership-art" role="img" aria-label={reason.alt}>
          {["upper", "middle", "lower"].map((part) => (
            <img key={part} src={asset(`ownership-${part}`)} alt="" />
          ))}
        </div>
      ) : (
        <img
          className="reason-art"
          src={asset(reason.image)}
          alt={reason.alt}
          fetchPriority="high"
        />
      )}
      <section className="reason-content">
        <blockquote>{reason.quote}</blockquote>
        {reason.attribution && (
          <p className="attribution">{reason.attribution}</p>
        )}
        <div className="reason-prose">
          {reason.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </section>
    </Screen>
  );
}

const projects = [
  {
    id: "pois-production-system",
    type: "Operations",
    title: (
      <>
        Production
        <br />
        Management System
      </>
    ),
    text: (
      <>
        Correction requests were entered in two systems.
        <br />I worked on bringing requests, approvals, and
        <br />
        repeat work into one traceable workflow.
      </>
    ),
    image: "production-collage",
    alt: "Editorial collage of clothing production, garment tracking and approvals.",
    color: "coral",
  },
  {
    id: "prodiva",
    type: "Product",
    title: (
      <>
        Prodiva
        <br />
        Event Ticketing
      </>
    ),
    text: (
      <>
        An upcoming event needed a clearer way to
        <br />
        register attendees, collect payments, and
        <br />
        keep track of payment receipts.
      </>
    ),
    image: "prodiva-collage",
    alt: "Editorial collage of event registration, admission tickets and payment confirmations.",
    color: "yellow",
  },
];

export function Projects() {
  return (
    <main className="projects-shell">
      <section className="projects-page" aria-labelledby="projects-title">
        <header className="projects-intro">
          <div>
            <p className="eyebrow">SELECTED PROJECTS</p>
            <h1 id="projects-title">
              Real problems.
              <br />
              Practical solutions.
            </h1>
            <p className="projects-description">
              Here are some of the projects where I’ve helped improve
              operations, simplify workflows, and build better digital
              experiences.
            </p>
          </div>
          <img
            src={asset("projects-intro")}
            alt="Clinton planning a better workflow."
          />
        </header>
        <div className="project-grid">
          {projects.map((project) => (
            <Link
              to={`/case-study/${project.id}`}
              key={project.id}
              className={`project-card ${project.color}`}
            >
              <span className="project-category">{project.type}</span>
              <span className="project-arrow">
                <img
                  src={asset("open-circle", "svg")}
                  width="60"
                  height="60"
                  alt=""
                />
                <img
                  src={asset("arrow", "svg")}
                  width="28"
                  height="28"
                  alt=""
                />
              </span>
              <div className="project-copy">
                <h2>{project.title}</h2>
                <p>{project.text}</p>
              </div>
              <img
                className="project-collage"
                src={asset(project.image)}
                alt={project.alt}
                loading="lazy"
              />
            </Link>
          ))}
        </div>
        <Link className="projects-back" to="/why-hire-me/3">
          ← Why hire me
        </Link>
      </section>
    </main>
  );
}

export function ProdivaStory() {
  return (
    <main className="prodiva-story">
      <Link to="/projects">← Selected projects</Link>
      <p className="eyebrow">PRODIVA / CASE STUDY</p>
      <h1>Making event registration and payment easier.</h1>
      <img
        src={asset("prodiva-collage")}
        alt="Event registration and payments collage"
      />
      <h2>How it started</h2>
      <p>
        Prodiva needed a better way to manage registrations and ticket payments
        for its Independence Day Fiesta. The existing process relied on Google
        Sheets and manual payment reconciliation.
      </p>
      <h2>Working through a constraint</h2>
      <p>
        I built a registration website and tested a Paystack integration. When
        account verification wasn’t completed in time, I adapted the flow to
        support bank transfers, a copy-account-number button, and WhatsApp
        receipt submission.
      </p>
      <h2>What it delivered</h2>
      <p>
        The organisers had a dedicated registration experience and a payment
        pathway that could work without live Paystack activation. Bank-transfer
        payments still required manual verification.
      </p>
      <Link to="/case-study/pois-production-system">
        Explore the Production Management System →
      </Link>
    </main>
  );
}

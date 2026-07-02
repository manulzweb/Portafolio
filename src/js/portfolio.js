/* ════════════════════════════════════════════════
   Portfolio v2 — "Dev OS" · Manuel Vasquez
   Vanilla JS, sin dependencias.
   ════════════════════════════════════════════════ */

const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ── i18n ─────────────────────────────────────── */
const I18N = {
    es: {
        navHome: "Inicio", navAbout: "Sobre mí", navStack: "Stack",
        navProjects: "Proyectos", navServices: "Servicios", navContact: "Contacto",
        heroHello: "// Hola mundo, soy",
        heroDesc: "Construyo soluciones digitales de alto rendimiento: arquitecturas robustas y experiencias de usuario excepcionales, con código limpio y escalable.",
        heroCta: "Ver proyectos", heroCta2: "Hablemos",
        heroHint: '↓ tip: la terminal de la derecha es real, escribe "help"',
        aboutTitle: "Sobre mí",
        aboutP1: "Soy desarrollador Full-Stack con base en Barranquilla, Colombia. Me obsesiona el detalle: desde el diseño de una API hasta la última micro-interacción de la interfaz.",
        aboutP2: "Trabajo con JavaScript en el frontend y Java Spring Boot en el backend, y disfruto convertir problemas complejos en productos simples, rápidos y agradables de usar.",
        statYears: "años programando", statProjects: "proyectos construidos", statCommit: "compromiso por commit",
        stackTitle: "Stack tecnológico",
        stackDesc: "Herramientas que uso para construir soluciones robustas, rápidas y escalables.",
        chipLearning: ".NET — aprendiendo",
        projectsTitle: "Proyectos destacados",
        projectsDesc: "Una selección de trabajo reciente que refleja mi experiencia full-stack.",
        p1Title: "Portafolio personal",
        p1Desc: "Sitio estático de alto rendimiento con web components, i18n sin recarga y animaciones hechas a mano. Sin frameworks, sin dependencias.",
        p2Title: "Aplicación de tareas",
        p2Desc: "Gestor de tareas en React para organizar el día a día de forma eficiente, con estado persistente y UI reactiva.",
        p3Title: "API REST con Spring Boot",
        p3Desc: "API RESTful para gestión de usuarios: backend sólido para aplicaciones web y móviles, con buenas prácticas y capas limpias.",
        servicesTitle: "Servicios",
        s1Title: "Desarrollo Full-Stack", s1Desc: "Aplicaciones completas y escalables, desde la base de datos hasta la UI.",
        s2Title: "Diseño UI/UX", s2Desc: "Interfaces y prototipos atractivos centrados en la experiencia del usuario.",
        s3Title: "Consultoría IT", s3Desc: "Asesoría en arquitectura de sistemas, nube y mejores prácticas modernas.",
        s4Title: "Optimización", s4Desc: "Auditorías de rendimiento y mejora de velocidad en sitios existentes.",
        contactLine1: "¿Tienes una idea?", contactLine2: "Construyámosla.",
        contactDesc: "Estoy disponible para proyectos freelance y oportunidades full-time.",
        copyEmail: "Copiar email",
        footerBuilt: "Diseñado y construido por",
        footerEgg: "psst… prueba ↑↑↓↓←→←→BA",
        footerStack: "hecho con HTML, CSS y JS puros. Cero frameworks.",
        toastCopied: "✓ Email copiado al portapapeles",
        toastParty: "🎉 ¡Modo fiesta activado! Escribe el código otra vez para apagarlo.",
        toastPartyOff: "Modo fiesta desactivado 😌",
        roles: ["Desarrollador Full-Stack", "Diseñador UI/UX", "Constructor de APIs", "Amante del código limpio"],
    },
    en: {
        navHome: "Home", navAbout: "About", navStack: "Stack",
        navProjects: "Projects", navServices: "Services", navContact: "Contact",
        heroHello: "// Hello world, I'm",
        heroDesc: "I build high-performance digital solutions: robust architectures and exceptional user experiences, with clean, scalable code.",
        heroCta: "View projects", heroCta2: "Let's talk",
        heroHint: '↓ tip: the terminal on the right is real, type "help"',
        aboutTitle: "About me",
        aboutP1: "I'm a Full-Stack developer based in Barranquilla, Colombia. I'm obsessed with detail: from API design to the last micro-interaction in the UI.",
        aboutP2: "I work with JavaScript on the frontend and Java Spring Boot on the backend, and I enjoy turning complex problems into simple, fast, delightful products.",
        statYears: "years coding", statProjects: "projects built", statCommit: "commitment per commit",
        stackTitle: "Tech stack",
        stackDesc: "Tools I use to build robust, fast and scalable solutions.",
        chipLearning: ".NET — learning",
        projectsTitle: "Featured projects",
        projectsDesc: "A selection of recent work that reflects my full-stack experience.",
        p1Title: "Personal portfolio",
        p1Desc: "High-performance static site with web components, reload-free i18n and hand-crafted animations. No frameworks, no dependencies.",
        p2Title: "Task app",
        p2Desc: "React task manager to organize your day efficiently, with persistent state and a reactive UI.",
        p3Title: "REST API with Spring Boot",
        p3Desc: "RESTful API for user management: a solid backend for web and mobile apps, with best practices and clean layers.",
        servicesTitle: "Services",
        s1Title: "Full-Stack Development", s1Desc: "Complete, scalable applications from the database to the UI.",
        s2Title: "UI/UX Design", s2Desc: "Attractive interfaces and prototypes focused on user experience.",
        s3Title: "IT Consulting", s3Desc: "Guidance on system architecture, cloud and modern best practices.",
        s4Title: "Optimization", s4Desc: "Performance audits and speed improvements for existing sites.",
        contactLine1: "Got an idea?", contactLine2: "Let's build it.",
        contactDesc: "I'm available for freelance projects and full-time opportunities.",
        copyEmail: "Copy email",
        footerBuilt: "Designed & built by",
        footerEgg: "psst… try ↑↑↓↓←→←→BA",
        footerStack: "made with pure HTML, CSS & JS. Zero frameworks.",
        toastCopied: "✓ Email copied to clipboard",
        toastParty: "🎉 Party mode on! Enter the code again to turn it off.",
        toastPartyOff: "Party mode off 😌",
        roles: ["Full-Stack Developer", "UI/UX Designer", "API Builder", "Clean-code Lover"],
    },
};

let lang = localStorage.getItem("lang") || "es";

function applyLang() {
    const dict = I18N[lang];
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-i18n]").forEach((el) => {
        const key = el.getAttribute("data-i18n");
        if (dict[key]) el.textContent = dict[key];
    });
    document.getElementById("lang-toggle").textContent = lang === "es" ? "EN" : "ES";
}

document.getElementById("lang-toggle").addEventListener("click", () => {
    lang = lang === "es" ? "en" : "es";
    localStorage.setItem("lang", lang);
    applyLang();
});

applyLang();

/* ── Toast ────────────────────────────────────── */
const toastEl = document.getElementById("toast");
let toastTimer;

function toast(msg) {
    toastEl.textContent = msg;
    toastEl.classList.add("toast--show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toastEl.classList.remove("toast--show"), 3200);
}

/* ── Boot screen ──────────────────────────────── */
const boot = document.getElementById("boot");
const bootLog = document.getElementById("boot-log");
const BOOT_LINES = [
    "[ OK ] loading manulzweb.os v2.0 …",
    "[ OK ] mounting /skills …",
    "[ OK ] npm install creativity … done (0 vulnerabilities)",
    "[ OK ] starting portfolio …",
];

async function runBoot() {
    if (reducedMotion || sessionStorage.getItem("booted")) {
        boot.classList.add("boot--done");
        return;
    }
    for (const line of BOOT_LINES) {
        bootLog.textContent += line + "\n";
        await new Promise((r) => setTimeout(r, 220));
    }
    await new Promise((r) => setTimeout(r, 250));
    boot.classList.add("boot--done");
    sessionStorage.setItem("booted", "1");
}

runBoot();

/* ── Typewriter de roles ──────────────────────── */
const typedEl = document.getElementById("typed-role");

async function typeLoop() {
    let i = 0;
    while (true) {
        const roles = I18N[lang].roles;
        const word = roles[i % roles.length];
        for (let c = 1; c <= word.length; c++) {
            typedEl.textContent = word.slice(0, c);
            await new Promise((r) => setTimeout(r, 55));
        }
        await new Promise((r) => setTimeout(r, 1800));
        for (let c = word.length; c >= 0; c--) {
            typedEl.textContent = word.slice(0, c);
            await new Promise((r) => setTimeout(r, 28));
        }
        await new Promise((r) => setTimeout(r, 350));
        i++;
    }
}

if (reducedMotion) {
    typedEl.textContent = I18N[lang].roles[0];
} else {
    typeLoop();
}

/* ── Terminal interactiva ─────────────────────── */
const termBody = document.getElementById("terminal-body");
const termOut = document.getElementById("terminal-output");
const termIn = document.getElementById("terminal-input");
let termBuffer = "";

const TERM_FILES = {
    "stack.txt":
        "frontend  : HTML5/CSS, JavaScript, React, Angular\n" +
        "backend   : Java Spring Boot, Node.js, Python\n" +
        "infra     : AWS, Git & GitHub, SQL/NoSQL",
    "contact.txt":
        "email     : manuelandresvasquezm21@gmail.com\n" +
        "whatsapp  : https://wa.me/573016778673\n" +
        "github    : https://github.com/manulzweb\n" +
        "location  : Barranquilla, Colombia",
};

const TERM_CMDS = {
    help: () =>
        "commands:\n" +
        "  whoami        quién soy\n" +
        "  ls            listar archivos\n" +
        "  cat <file>    leer un archivo\n" +
        "  projects      ir a proyectos\n" +
        "  contact       ir a contacto\n" +
        "  pets          conocer a mis mascotas 🐾\n" +
        "  sudo hire-me  😏\n" +
        "  clear         limpiar pantalla",
    whoami: () => "Manuel Vasquez Mendoza — Full-Stack Developer\nBarranquilla, Colombia 🇨🇴",
    ls: () => Object.keys(TERM_FILES).join("   "),
    projects: () => { location.hash = "#projects"; return "cd ~/projects …"; },
    contact: () => { location.hash = "#contact"; return "cd ~/contact …"; },
    pets: () => { setTimeout(() => (location.href = "mascotas.html"), 600); return "opening pets gallery… 🐕🐈"; },
    clear: () => { termOut.innerHTML = ""; return null; },
    "sudo hire-me": () => "permission granted ✔\nenviando CV… hecho.\n→ escribe 'contact' para cerrar el trato 🤝",
};

function termPrint(text, cls = "t-out") {
    const div = document.createElement("div");
    div.className = cls;
    div.textContent = text;
    termOut.appendChild(div);
    termBody.scrollTop = termBody.scrollHeight;
}

function termEcho(cmd) {
    const div = document.createElement("div");
    div.innerHTML = '<span class="terminal__ps1">➜&nbsp;~&nbsp;</span><span class="t-cmd"></span>';
    div.querySelector(".t-cmd").textContent = cmd;
    termOut.appendChild(div);
}

function termRun(raw) {
    const cmd = raw.trim();
    termEcho(cmd);
    if (!cmd) { termBody.scrollTop = termBody.scrollHeight; return; }
    const lower = cmd.toLowerCase();
    if (lower.startsWith("cat ")) {
        const file = cmd.slice(4).trim();
        termPrint(TERM_FILES[file] ?? `cat: ${file}: No such file`, TERM_FILES[file] ? "t-out" : "t-pink");
    } else if (TERM_CMDS[lower]) {
        const out = TERM_CMDS[lower]();
        if (out !== null) termPrint(out);
    } else {
        termPrint(`command not found: ${cmd} — prueba "help"`, "t-pink");
    }
    termBody.scrollTop = termBody.scrollHeight;
}

termBody.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        termRun(termBuffer);
        termBuffer = "";
    } else if (e.key === "Backspace") {
        termBuffer = termBuffer.slice(0, -1);
    } else if (e.key.length === 1 && !e.ctrlKey && !e.metaKey) {
        termBuffer += e.key;
    } else {
        return;
    }
    e.preventDefault();
    termIn.textContent = termBuffer;
});

termBody.addEventListener("click", () => termBody.focus());

// Secuencia de bienvenida automática
async function termIntro() {
    const seq = [
        { cmd: "whoami", wait: 500 },
        { cmd: "cat stack.txt", wait: 700 },
    ];
    await new Promise((r) => setTimeout(r, reducedMotion ? 0 : 1600));
    for (const step of seq) {
        if (!reducedMotion) {
            for (let c = 1; c <= step.cmd.length; c++) {
                termIn.textContent = step.cmd.slice(0, c);
                await new Promise((r) => setTimeout(r, 45));
            }
            await new Promise((r) => setTimeout(r, 250));
        }
        termIn.textContent = "";
        termRun(step.cmd);
        await new Promise((r) => setTimeout(r, step.wait));
    }
    termPrint('escribe "help" para ver los comandos ✨', "t-violet");
}

termIntro();

/* ── Canvas de partículas ─────────────────────── */
const canvas = document.getElementById("bg-canvas");

if (!reducedMotion) {
    const ctx = canvas.getContext("2d");
    let W, H, particles;
    const mouse = { x: -9999, y: -9999 };
    const COUNT = window.innerWidth < 700 ? 40 : 75;

    function resize() {
        W = canvas.width = window.innerWidth;
        H = canvas.height = window.innerHeight;
    }

    function initParticles() {
        particles = Array.from({ length: COUNT }, () => ({
            x: Math.random() * W,
            y: Math.random() * H,
            vx: (Math.random() - 0.5) * 0.35,
            vy: (Math.random() - 0.5) * 0.35,
            r: Math.random() * 1.6 + 0.6,
        }));
    }

    function draw() {
        ctx.clearRect(0, 0, W, H);
        for (const p of particles) {
            p.x += p.vx;
            p.y += p.vy;
            if (p.x < 0 || p.x > W) p.vx *= -1;
            if (p.y < 0 || p.y > H) p.vy *= -1;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
            ctx.fillStyle = "rgba(120, 160, 255, 0.5)";
            ctx.fill();
        }
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const a = particles[i], b = particles[j];
                const d = Math.hypot(a.x - b.x, a.y - b.y);
                if (d < 130) {
                    ctx.strokeStyle = `rgba(100, 140, 240, ${(1 - d / 130) * 0.16})`;
                    ctx.lineWidth = 1;
                    ctx.beginPath();
                    ctx.moveTo(a.x, a.y);
                    ctx.lineTo(b.x, b.y);
                    ctx.stroke();
                }
            }
            const dm = Math.hypot(particles[i].x - mouse.x, particles[i].y - mouse.y);
            if (dm < 180) {
                ctx.strokeStyle = `rgba(34, 211, 238, ${(1 - dm / 180) * 0.3})`;
                ctx.beginPath();
                ctx.moveTo(particles[i].x, particles[i].y);
                ctx.lineTo(mouse.x, mouse.y);
                ctx.stroke();
            }
        }
        requestAnimationFrame(draw);
    }

    window.addEventListener("resize", () => { resize(); initParticles(); });
    window.addEventListener("mousemove", (e) => { mouse.x = e.clientX; mouse.y = e.clientY; });
    window.addEventListener("mouseout", () => { mouse.x = -9999; mouse.y = -9999; });
    resize();
    initParticles();
    draw();
}

/* ── Cursor personalizado ─────────────────────── */
const dot = document.getElementById("cursor-dot");
const ring = document.getElementById("cursor-ring");

if (window.matchMedia("(hover: hover) and (pointer: fine)").matches && !reducedMotion) {
    let rx = 0, ry = 0, tx = 0, ty = 0;
    window.addEventListener("mousemove", (e) => {
        tx = e.clientX; ty = e.clientY;
        dot.style.transform = `translate(${tx}px, ${ty}px) translate(-50%, -50%)`;
    });
    (function ringLoop() {
        rx += (tx - rx) * 0.16;
        ry += (ty - ry) * 0.16;
        ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`;
        requestAnimationFrame(ringLoop);
    })();
    document.querySelectorAll("a, button, .chip, .terminal").forEach((el) => {
        el.addEventListener("mouseenter", () => ring.classList.add("cursor-ring--active"));
        el.addEventListener("mouseleave", () => ring.classList.remove("cursor-ring--active"));
    });
}

/* ── Botones magnéticos ───────────────────────── */
if (!reducedMotion) {
    document.querySelectorAll(".magnetic").forEach((el) => {
        el.addEventListener("mousemove", (e) => {
            const r = el.getBoundingClientRect();
            const x = e.clientX - r.left - r.width / 2;
            const y = e.clientY - r.top - r.height / 2;
            el.style.transform = `translate(${x * 0.18}px, ${y * 0.18}px)`;
        });
        el.addEventListener("mouseleave", () => { el.style.transform = ""; });
    });
}

/* ── Tilt 3D en tarjetas ──────────────────────── */
if (!reducedMotion && window.matchMedia("(hover: hover)").matches) {
    document.querySelectorAll(".tilt").forEach((el) => {
        el.addEventListener("mousemove", (e) => {
            const r = el.getBoundingClientRect();
            const px = (e.clientX - r.left) / r.width - 0.5;
            const py = (e.clientY - r.top) / r.height - 0.5;
            el.style.transform = `perspective(900px) rotateY(${px * 7}deg) rotateX(${-py * 7}deg)`;
        });
        el.addEventListener("mouseleave", () => { el.style.transform = ""; });
    });
}

/* ── Reveal on scroll ─────────────────────────── */
const revealObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry, idx) => {
            if (entry.isIntersecting) {
                entry.target.style.transitionDelay = `${(idx % 4) * 80}ms`;
                entry.target.classList.add("reveal--visible");
                revealObserver.unobserve(entry.target);
            }
        });
    },
    { threshold: 0.12 }
);

document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));

/* ── Contadores animados ──────────────────────── */
const statObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            const el = entry.target;
            const target = +el.dataset.count;
            const dur = 1400;
            const start = performance.now();
            (function tick(now) {
                const t = Math.min((now - start) / dur, 1);
                el.textContent = Math.round(target * (1 - Math.pow(1 - t, 3)));
                if (t < 1) requestAnimationFrame(tick);
            })(start);
            statObserver.unobserve(el);
        });
    },
    { threshold: 0.5 }
);

document.querySelectorAll(".stat__num").forEach((el) => statObserver.observe(el));

/* ── Scroll: progreso + nav auto-hide ─────────── */
const progress = document.getElementById("scroll-progress");
const nav = document.getElementById("nav");
let lastY = 0;

window.addEventListener("scroll", () => {
    const y = window.scrollY;
    const max = document.documentElement.scrollHeight - window.innerHeight;
    progress.style.width = `${(y / max) * 100}%`;
    if (y > 140 && y > lastY) nav.classList.add("nav--hidden");
    else nav.classList.remove("nav--hidden");
    lastY = y;
}, { passive: true });

// Cerrar menú móvil al navegar
document.querySelectorAll(".nav__links a").forEach((a) =>
    a.addEventListener("click", () => { document.getElementById("nav-toggle").checked = false; })
);

/* ── Copiar email ─────────────────────────────── */
document.getElementById("copy-email").addEventListener("click", async (e) => {
    const email = e.currentTarget.dataset.email;
    try {
        await navigator.clipboard.writeText(email);
        toast(I18N[lang].toastCopied);
    } catch {
        location.href = `mailto:${email}`;
    }
});

/* ── Konami: modo fiesta ──────────────────────── */
const KONAMI = ["ArrowUp","ArrowUp","ArrowDown","ArrowDown","ArrowLeft","ArrowRight","ArrowLeft","ArrowRight","b","a"];
let konamiPos = 0;

window.addEventListener("keydown", (e) => {
    if (document.activeElement === termBody) return;
    konamiPos = e.key === KONAMI[konamiPos] ? konamiPos + 1 : (e.key === KONAMI[0] ? 1 : 0);
    if (konamiPos === KONAMI.length) {
        konamiPos = 0;
        const on = document.body.classList.toggle("party");
        toast(on ? I18N[lang].toastParty : I18N[lang].toastPartyOff);
    }
});

/* ── Firma en consola ─────────────────────────── */
console.log(
    "%c<MV/> %c¿Inspeccionando el código? Me gusta tu estilo. Hablemos → manuelandresvasquezm21@gmail.com",
    "color:#22d3ee;font-size:1.4rem;font-weight:bold",
    "color:#98a0b8;font-size:0.9rem"
);

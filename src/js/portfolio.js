/* ════════════════════════════════════════════════
   Portfolio v2 — "Dev OS" · Manuel Vasquez
   Vanilla JS + Lenis (vendorizado) para smooth scroll.
   ════════════════════════════════════════════════ */

import Lenis from "./vendor/lenis.mjs";

const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ── i18n ─────────────────────────────────────── */
const I18N = {
    es: {
        skipLink: "Saltar al contenido",
        navHome: "Inicio", navAbout: "Sobre mí", navStack: "Stack",
        navProjects: "Proyectos", navServices: "Servicios", navContact: "Contacto",
        heroHello: "Hola, soy",
        heroDesc: "Construyo soluciones digitales de alto rendimiento: arquitecturas robustas y experiencias de usuario excepcionales, con código limpio y escalable.",
        heroCta: "Ver proyectos", heroCta2: "Hablemos",
        heroHint: '↓ psst: la terminal de abajo es real, escribe "help"',
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
        skipLink: "Skip to content",
        navHome: "Home", navAbout: "About", navStack: "Stack",
        navProjects: "Projects", navServices: "Services", navContact: "Contact",
        heroHello: "Hi, I'm",
        heroDesc: "I build high-performance digital solutions: robust architectures and exceptional user experiences, with clean, scalable code.",
        heroCta: "View projects", heroCta2: "Let's talk",
        heroHint: '↓ psst: the terminal below is real, type "help"',
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

function setLang(l) {
    lang = l;
    localStorage.setItem("lang", l);
    applyLang();
}

document.getElementById("lang-toggle").addEventListener("click", () => {
    setLang(lang === "es" ? "en" : "es");
});

applyLang();

/* ── Smooth scroll (Lenis) ────────────────────── */
let lenis = null;

if (!reducedMotion) {
    lenis = new Lenis({ duration: 1.1 });
    const rafLenis = (time) => {
        lenis.raf(time);
        requestAnimationFrame(rafLenis);
    };
    requestAnimationFrame(rafLenis);
}

function scrollToSection(hash) {
    const target = document.querySelector(hash);
    if (!target) return;
    if (lenis) {
        lenis.scrollTo(target, { offset: -88 });
    } else {
        target.scrollIntoView();
    }
    history.replaceState(null, "", hash);
}

// Los anclas internas pasan por Lenis para una única fuente de smoothing
document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener("click", (e) => {
        if (!a.hash || !document.querySelector(a.hash)) return;
        e.preventDefault();
        scrollToSection(a.hash);
    });
});

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
    "cv.txt":
        "MANUEL VASQUEZ MENDOZA\n" +
        "Full-Stack Developer · Barranquilla, CO\n" +
        "──────────────────────────────────────\n" +
        "· 3+ años construyendo software\n" +
        "· Frontend: JavaScript, React, Angular\n" +
        "· Backend : Java Spring Boot, Node.js\n" +
        "· Infra   : AWS, SQL/NoSQL, Git\n" +
        "──────────────────────────────────────\n" +
        "→ 'contact' para hablar conmigo",
};

const NEOFETCH =
    "   __  ___ _   __      manuel@manulzweb\n" +
    "  /  |/  /| | / /      ────────────────\n" +
    " / /|_/ / | |/ /       OS       : ManulzWeb OS v2.0\n" +
    "/_/  /_/  |___/        Role     : Full-Stack Developer\n" +
    "                       Stack    : JS · Spring Boot · AWS\n" +
    "                       Location : Barranquilla, CO 🇨🇴\n" +
    "                       Uptime   : 3+ years coding\n" +
    "                       Shell    : vanilla-js 100%";

let termHistory = [];
let termHistPos = -1;

// Se asigna en el módulo del canvas (solo si las animaciones están activas)
let startMatrixRain = null;

const TERM_CMDS = {
    help: () =>
        "commands:\n" +
        "  whoami         quién soy\n" +
        "  neofetch       ficha del sistema\n" +
        "  ls             listar archivos\n" +
        "  cat <file>     leer un archivo (prueba cv.txt)\n" +
        "  projects       ir a proyectos\n" +
        "  contact        ir a contacto\n" +
        "  pets           conocer a mis mascotas 🐾\n" +
        "  lang es|en     cambiar idioma\n" +
        "  theme          activar/desactivar partículas\n" +
        "  history        comandos anteriores (↑/↓ para navegar)\n" +
        "  matrix         🐇\n" +
        "  sudo hire-me   😏\n" +
        "  clear          limpiar pantalla\n" +
        "tip: Tab autocompleta",
    whoami: () => "Manuel Vasquez Mendoza — Full-Stack Developer\nBarranquilla, Colombia 🇨🇴",
    neofetch: () => NEOFETCH,
    ls: () => Object.keys(TERM_FILES).join("   "),
    projects: () => { scrollToSection("#projects"); return "cd ~/projects …"; },
    contact: () => { scrollToSection("#contact"); return "cd ~/contact …"; },
    pets: () => { setTimeout(() => (location.href = "mascotas.html"), 600); return "opening pets gallery… 🐕🐈"; },
    history: () =>
        termHistory.length ? termHistory.map((c, i) => `  ${i + 1}  ${c}`).join("\n") : "(vacío)",
    theme: () => {
        const off = document.body.classList.toggle("no-particles");
        return off ? "partículas desactivadas 🌑" : "partículas activadas ✨";
    },
    matrix: () => {
        if (!startMatrixRain) return "modprobe: ERROR: could not insert 'matrix_rain': animaciones reducidas";
        startMatrixRain(10);
        return (
            "$ sudo modprobe matrix_rain\n" +
            "[  OK  ] módulo matrix_rain.ko cargado en el kernel\n" +
            "[  OK  ] lluvia de caracteres activa · se descarga solo en 10s"
        );
    },
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
    termHistory.push(cmd);
    termHistPos = termHistory.length;
    const lower = cmd.toLowerCase();
    if (lower.startsWith("cat ")) {
        const file = cmd.slice(4).trim();
        termPrint(TERM_FILES[file] ?? `cat: ${file}: No such file`, TERM_FILES[file] ? "t-out" : "t-pink");
    } else if (lower.startsWith("lang ")) {
        const l = lower.slice(5).trim();
        if (l === "es" || l === "en") {
            setLang(l);
            termPrint(l === "es" ? "idioma cambiado a español 🇪🇸" : "language switched to English 🇬🇧");
        } else {
            termPrint(`lang: '${l}' no soportado — usa "lang es" o "lang en"`, "t-pink");
        }
    } else if (TERM_CMDS[lower]) {
        const out = TERM_CMDS[lower]();
        if (out !== null) termPrint(out);
    } else {
        termPrint(`command not found: ${cmd} — prueba "help"`, "t-pink");
    }
    termBody.scrollTop = termBody.scrollHeight;
}

// Autocompletado con Tab: comandos y, tras "cat ", archivos
function termComplete(buffer) {
    const catMatch = buffer.match(/^cat\s+(\S*)$/i);
    if (catMatch) {
        const hit = Object.keys(TERM_FILES).find((f) => f.startsWith(catMatch[1]));
        return hit ? `cat ${hit}` : buffer;
    }
    const candidates = [...Object.keys(TERM_CMDS), "cat ", "lang "];
    const hits = candidates.filter((c) => c.startsWith(buffer.toLowerCase()));
    return hits.length === 1 ? hits[0] : buffer;
}

termBody.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        termRun(termBuffer);
        termBuffer = "";
    } else if (e.key === "Backspace") {
        termBuffer = termBuffer.slice(0, -1);
    } else if (e.key === "Tab") {
        termBuffer = termComplete(termBuffer);
    } else if (e.key === "ArrowUp") {
        if (termHistPos > 0) termBuffer = termHistory[--termHistPos];
    } else if (e.key === "ArrowDown") {
        termBuffer = termHistPos < termHistory.length - 1 ? termHistory[++termHistPos] : (termHistPos = termHistory.length, "");
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

    function drawParticles() {
        ctx.clearRect(0, 0, W, H);
        for (const p of particles) {
            p.x += p.vx;
            p.y += p.vy;
            if (p.x < 0 || p.x > W) p.vx *= -1;
            if (p.y < 0 || p.y > H) p.vy *= -1;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
            ctx.fillStyle = "rgba(168, 70, 243, 0.5)";
            ctx.fill();
        }
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const a = particles[i], b = particles[j];
                const d = Math.hypot(a.x - b.x, a.y - b.y);
                if (d < 130) {
                    ctx.strokeStyle = `rgba(140, 37, 219, ${(1 - d / 130) * 0.18})`;
                    ctx.lineWidth = 1;
                    ctx.beginPath();
                    ctx.moveTo(a.x, a.y);
                    ctx.lineTo(b.x, b.y);
                    ctx.stroke();
                }
            }
            const dm = Math.hypot(particles[i].x - mouse.x, particles[i].y - mouse.y);
            if (dm < 180) {
                ctx.strokeStyle = `rgba(194, 105, 247, ${(1 - dm / 180) * 0.3})`;
                ctx.beginPath();
                ctx.moveTo(particles[i].x, particles[i].y);
                ctx.lineTo(mouse.x, mouse.y);
                ctx.stroke();
            }
        }
    }

    /* Lluvia Matrix en el fondo de la página (comando "matrix") */
    const MATRIX_CHARS = "アイウエオカキクケコサシスセソタチツテト0123456789<>/{}[];=";
    const MATRIX_FS = 16;
    let mode = "particles";
    let matrixUntil = 0;
    let drops = [];

    function initDrops() {
        drops = Array.from({ length: Math.ceil(W / MATRIX_FS) }, () => -((Math.random() * 40) | 0));
    }

    function drawMatrix() {
        // Capa translúcida que crea las estelas
        ctx.fillStyle = "rgba(8, 8, 8, 0.1)";
        ctx.fillRect(0, 0, W, H);
        ctx.font = `${MATRIX_FS}px "JetBrains Mono", monospace`;
        for (let i = 0; i < drops.length; i++) {
            const ch = MATRIX_CHARS[(Math.random() * MATRIX_CHARS.length) | 0];
            // Cabeza de la columna más clara, cuerpo en el morado de la marca
            ctx.fillStyle = Math.random() < 0.08 ? "#ebbafe" : "#a846f3";
            ctx.fillText(ch, i * MATRIX_FS, drops[i] * MATRIX_FS);
            if (drops[i] * MATRIX_FS > H && Math.random() > 0.975) drops[i] = 0;
            drops[i]++;
        }
        if (Date.now() > matrixUntil) {
            mode = "particles";
            document.body.classList.remove("matrix-mode");
            ctx.clearRect(0, 0, W, H);
        }
    }

    startMatrixRain = (seconds = 10) => {
        matrixUntil = Date.now() + seconds * 1000;
        if (mode !== "matrix") {
            mode = "matrix";
            initDrops();
            document.body.classList.add("matrix-mode");
            ctx.clearRect(0, 0, W, H);
        }
    };

    function draw() {
        if (mode === "matrix") drawMatrix();
        else drawParticles();
        requestAnimationFrame(draw);
    }

    window.addEventListener("resize", () => {
        resize();
        initParticles();
        if (mode === "matrix") initDrops();
    });
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
    let rx = -100, ry = -100, tx = -100, ty = -100;
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
    nav.classList.toggle("nav--scrolled", y > 12);
    if (y > 140 && y > lastY) nav.classList.add("nav--hidden");
    else nav.classList.remove("nav--hidden");
    lastY = y;
}, { passive: true });

/* ── Scrollspy: resaltar sección activa en el navbar ── */
const navLinks = new Map(
    [...document.querySelectorAll('.nav__link[href^="#"]')].map((a) => [a.hash.slice(1), a])
);

const spyObserver = new IntersectionObserver(
    (entries) => {
        for (const entry of entries) {
            if (!entry.isIntersecting) continue;
            navLinks.forEach((link, id) =>
                link.classList.toggle("nav__link--active", id === entry.target.id)
            );
        }
    },
    // Franja central del viewport: la sección que la cruza es la activa
    { rootMargin: "-40% 0px -55% 0px" }
);

navLinks.forEach((_, id) => {
    const section = document.getElementById(id);
    if (section) spyObserver.observe(section);
});

// Menú móvil: cerrar al navegar, con Esc, y atrapar el foco mientras está abierto
const navToggle = document.getElementById("nav-toggle");

document.querySelectorAll(".nav__links a").forEach((a) =>
    a.addEventListener("click", () => { navToggle.checked = false; })
);

navToggle.addEventListener("change", () => {
    if (navToggle.checked) document.querySelector(".nav__links a")?.focus();
});

window.addEventListener("keydown", (e) => {
    if (!navToggle.checked) return;
    if (e.key === "Escape") {
        navToggle.checked = false;
        return;
    }
    if (e.key === "Tab" && window.matchMedia("(max-width: 860px)").matches) {
        const items = [...document.querySelectorAll(".nav__links a, .nav__links button")];
        const first = items[0];
        const last = items[items.length - 1];
        if (e.shiftKey && document.activeElement === first) {
            e.preventDefault();
            last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
            e.preventDefault();
            first.focus();
        }
    }
});

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
    "color:#a846f3;font-size:1.4rem;font-weight:bold",
    "color:#98a0b8;font-size:0.9rem"
);

/* ════════════════════════════════════════════════
   Portfolio v2 — "Dev OS" · Manuel Vasquez
   Vanilla JS + Lenis (vendorizado) para smooth scroll.
   ════════════════════════════════════════════════ */

import Lenis from "./vendor/lenis.mjs";
import { PROJECTS } from "./data/projects.js";
import { TIMELINE } from "./data/timeline.js";
import { TESTIMONIALS } from "./data/testimonials.js";

// Clave de https://web3forms.com (gratis). Se lee de la variable de entorno
// VITE_WEB3FORMS_KEY en el build de Vite/Vercel (define un `.env` o el panel
// de Vercel). Con la clave vacía, el formulario cae a mailto: como respaldo.
// El `?? {}` mantiene el sitio funcionando en el deploy estático de GitHub
// Pages, donde no hay build y `import.meta.env` no existe. Ver README.
const ENV = import.meta.env ?? {};
const WEB3FORMS_KEY = ENV.VITE_WEB3FORMS_KEY || "";

const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ── i18n ─────────────────────────────────────── */
const I18N = {
    es: {
        skipLink: "Saltar al contenido",
        navHome: "Inicio", navAbout: "Sobre mí", navStack: "Stack",
        navProjects: "Proyectos", navServices: "Servicios", navContact: "Contacto",
        heroHello: "Hola, soy",
        heroDesc: "Construyo soluciones digitales de alto rendimiento: arquitecturas robustas y experiencias de usuario excepcionales, con código limpio y escalable.",
        heroCta: "Ver proyectos", heroCta2: "Hablemos", heroCv: "CV ↓",
        heroHint: '↓ psst: la terminal de abajo es real, escribe "help"',
        journeyTitle: "Trayectoria",
        journeyDesc: "El camino que me trajo hasta aquí, un commit a la vez.",
        testimonialsTitle: "Lo que dicen de mí",
        formName: "Nombre", formEmail: "Email", formMessage: "Mensaje", formSend: "Enviar mensaje",
        toastSent: "✓ Mensaje enviado, te responderé pronto",
        toastSendErr: "✗ No se pudo enviar — inténtalo de nuevo",
        toastMailto: "Abriendo tu app de correo…",
        aboutTitle: "Sobre mí",
        aboutP1: "Soy desarrollador Full-Stack con base en Barranquilla, Colombia. Me obsesiona el detalle: desde el diseño de una API hasta la última micro-interacción de la interfaz.",
        aboutP2: "Trabajo con JavaScript en el frontend y Java Spring Boot en el backend, y disfruto convertir problemas complejos en productos simples, rápidos y agradables de usar.",
        statYears: "años programando", statProjects: "proyectos construidos", statCommit: "compromiso por commit",
        stackTitle: "Stack tecnológico",
        stackDesc: "Herramientas que uso para construir soluciones robustas, rápidas y escalables.",
        chipLearning: ".NET — aprendiendo",
        projectsTitle: "Proyectos destacados",
        projectsDesc: "Una selección de trabajo reciente que refleja mi experiencia full-stack.",
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
        heroCta: "View projects", heroCta2: "Let's talk", heroCv: "CV ↓",
        heroHint: '↓ psst: the terminal below is real, type "help"',
        journeyTitle: "Journey",
        journeyDesc: "The path that got me here, one commit at a time.",
        testimonialsTitle: "What people say",
        formName: "Name", formEmail: "Email", formMessage: "Message", formSend: "Send message",
        toastSent: "✓ Message sent, I'll get back to you soon",
        toastSendErr: "✗ Couldn't send — please try again",
        toastMailto: "Opening your email app…",
        aboutTitle: "About me",
        aboutP1: "I'm a Full-Stack developer based in Barranquilla, Colombia. I'm obsessed with detail: from API design to the last micro-interaction in the UI.",
        aboutP2: "I work with JavaScript on the frontend and Java Spring Boot on the backend, and I enjoy turning complex problems into simple, fast, delightful products.",
        statYears: "years coding", statProjects: "projects built", statCommit: "commitment per commit",
        stackTitle: "Tech stack",
        stackDesc: "Tools I use to build robust, fast and scalable solutions.",
        chipLearning: ".NET — learning",
        projectsTitle: "Featured projects",
        projectsDesc: "A selection of recent work that reflects my full-stack experience.",
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
    renderProjects();
    renderTimeline();
    renderTestimonials();
}

document.getElementById("lang-toggle").addEventListener("click", () => {
    setLang(lang === "es" ? "en" : "es");
});

applyLang();

/* ── Tema claro/oscuro ────────────────────────── */
let theme = localStorage.getItem("theme") || "dark";
const themeToggle = document.getElementById("theme-toggle");

function applyTheme(t) {
    theme = t;
    document.documentElement.dataset.theme = t;
    localStorage.setItem("theme", t);
    // Muestra el tema al que se cambiará al pulsar
    themeToggle.textContent = t === "dark" ? "☀" : "☾";
}

themeToggle.addEventListener("click", () => applyTheme(theme === "dark" ? "light" : "dark"));
applyTheme(theme);

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
        "→ PDF: public/cv/Manuel-Vasquez-CV.pdf\n" +
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

/* ── Snake en la terminal ─────────────────────── */
let snakeActive = false;

function startSnake() {
    const COLS = 22;
    const ROWS = 11;
    let snake = [{ x: 5, y: 5 }];
    let dir = { x: 1, y: 0 };
    let pendingDir = dir;
    let food = null;
    let score = 0;
    snakeActive = true;

    const board = document.createElement("pre");
    board.className = "t-out";
    termOut.appendChild(board);

    const placeFood = () => {
        do {
            food = { x: (Math.random() * COLS) | 0, y: (Math.random() * ROWS) | 0 };
        } while (snake.some((s) => s.x === food.x && s.y === food.y));
    };
    placeFood();

    const render = () => {
        let out = "┌" + "─".repeat(COLS) + `┐ score: ${score}\n`;
        for (let y = 0; y < ROWS; y++) {
            out += "│";
            for (let x = 0; x < COLS; x++) {
                if (snake[0].x === x && snake[0].y === y) out += "█";
                else if (snake.some((s) => s.x === x && s.y === y)) out += "▓";
                else if (food.x === x && food.y === y) out += "◆";
                else out += " ";
            }
            out += "│\n";
        }
        out += "└" + "─".repeat(COLS) + "┘ ←↑↓→ mover · q sale";
        board.textContent = out;
        termBody.scrollTop = termBody.scrollHeight;
    };

    const end = (msg) => {
        clearInterval(timer);
        window.removeEventListener("keydown", onKey, true);
        snakeActive = false;
        termPrint(`${msg} — puntuación: ${score} 🐍`, "t-violet");
        termBody.scrollTop = termBody.scrollHeight;
    };

    const onKey = (e) => {
        if (e.key === "q" || e.key === "Escape") {
            e.preventDefault();
            e.stopPropagation();
            end("partida abandonada");
            return;
        }
        const map = {
            ArrowUp: { x: 0, y: -1 },
            ArrowDown: { x: 0, y: 1 },
            ArrowLeft: { x: -1, y: 0 },
            ArrowRight: { x: 1, y: 0 },
        };
        const d = map[e.key];
        if (!d) return;
        e.preventDefault();
        e.stopPropagation();
        if (d.x !== -dir.x || d.y !== -dir.y) pendingDir = d;
    };
    window.addEventListener("keydown", onKey, true);

    const timer = setInterval(() => {
        dir = pendingDir;
        const head = { x: snake[0].x + dir.x, y: snake[0].y + dir.y };
        const hitWall = head.x < 0 || head.x >= COLS || head.y < 0 || head.y >= ROWS;
        if (hitWall || snake.some((s) => s.x === head.x && s.y === head.y)) {
            end("💀 game over");
            return;
        }
        snake.unshift(head);
        if (head.x === food.x && head.y === food.y) {
            score++;
            placeFood();
        } else {
            snake.pop();
        }
        render();
    }, 130);

    render();
}

const TERM_CMDS = {
    help: () =>
        "commands:\n" +
        "  whoami           quién soy\n" +
        "  neofetch         ficha del sistema\n" +
        "  ls               listar archivos\n" +
        "  cat <file>       leer un archivo (prueba cv.txt)\n" +
        "  github           mis stats de GitHub en vivo\n" +
        "  snake            🐍 jugar snake (flechas · q sale)\n" +
        "  projects         ir a proyectos\n" +
        "  contact          ir a contacto\n" +
        "  pets             conocer a mis mascotas 🐾\n" +
        "  lang es|en       cambiar idioma\n" +
        "  theme light|dark cambiar tema\n" +
        "  particles        partículas on/off\n" +
        "  history          comandos anteriores (↑/↓ navega)\n" +
        "  matrix           lluvia de caracteres\n" +
        "  sudo hire-me     😏\n" +
        "  clear            limpiar pantalla\n" +
        "tip: Tab autocompleta",
    whoami: () => "Manuel Vasquez Mendoza — Full-Stack Developer\nBarranquilla, Colombia 🇨🇴",
    neofetch: () => NEOFETCH,
    ls: () => Object.keys(TERM_FILES).join("   "),
    projects: () => { scrollToSection("#projects"); return "cd ~/projects …"; },
    contact: () => { scrollToSection("#contact"); return "cd ~/contact …"; },
    pets: () => { setTimeout(() => (location.href = "mascotas.html"), 600); return "opening pets gallery… 🐕🐈"; },
    history: () =>
        termHistory.length ? termHistory.map((c, i) => `  ${i + 1}  ${c}`).join("\n") : "(vacío)",
    particles: () => {
        const off = document.body.classList.toggle("no-particles");
        return off ? "partículas desactivadas 🌑" : "partículas activadas ✨";
    },
    theme: () => `uso: theme light|dark — tema actual: ${theme}`,
    github: () => {
        fetch("https://api.github.com/users/manulzweb")
            .then((r) => (r.ok ? r.json() : Promise.reject()))
            .then((d) => {
                termPrint(
                    `user      : ${d.login}\n` +
                        `repos     : ${d.public_repos}\n` +
                        `followers : ${d.followers}\n` +
                        `following : ${d.following}\n` +
                        `since     : ${new Date(d.created_at).getFullYear()}\n` +
                        `→ https://github.com/${d.login}`
                );
                termBody.scrollTop = termBody.scrollHeight;
            })
            .catch(() => {
                termPrint("github: no se pudo consultar la API (¿sin conexión?)", "t-pink");
                termBody.scrollTop = termBody.scrollHeight;
            });
        return "consultando api.github.com…";
    },
    snake: () => {
        if (snakeActive) return "snake: ya hay una partida en curso";
        startSnake();
        return null;
    },
    matrix: () => {
        if (!startMatrixRain) return "rain: error: animaciones reducidas activas";
        startMatrixRain(10);
        return (
            "$ sudo rain activate\n" +
            "[  OK  ] rain.service iniciado\n" +
            "[  OK  ] lluvia de caracteres activa · se detiene sola en 10s"
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
    } else if (lower.startsWith("theme ")) {
        const t = lower.slice(6).trim();
        if (t === "light" || t === "dark") {
            applyTheme(t);
            termPrint(t === "light" ? "tema claro activado ☀" : "tema oscuro activado ☾");
        } else {
            termPrint(`theme: '${t}' no soportado — usa "theme light" o "theme dark"`, "t-pink");
        }
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
    const candidates = [...Object.keys(TERM_CMDS), "cat ", "lang ", "theme "];
    const hits = candidates.filter((c) => c.startsWith(buffer.toLowerCase()));
    return hits.length === 1 ? hits[0] : buffer;
}

termBody.addEventListener("keydown", (e) => {
    if (snakeActive) return; // el juego captura el teclado
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
function enableTilt(elements) {
    if (reducedMotion || !window.matchMedia("(hover: hover)").matches) return;
    elements.forEach((el) => {
        el.addEventListener("mousemove", (e) => {
            const r = el.getBoundingClientRect();
            const px = (e.clientX - r.left) / r.width - 0.5;
            const py = (e.clientY - r.top) / r.height - 0.5;
            el.style.transform = `perspective(900px) rotateY(${px * 7}deg) rotateX(${-py * 7}deg)`;
        });
        el.addEventListener("mouseleave", () => { el.style.transform = ""; });
    });
}

enableTilt(document.querySelectorAll(".tilt"));

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

/* ── Proyectos data-driven ────────────────────── */
// Renderiza las tarjetas desde src/js/data/projects.js.
// Añadir un proyecto = editar ese archivo, nada más.
function renderProjects() {
    const grid = document.getElementById("projects-grid");
    if (!grid) return;
    grid.innerHTML = "";

    PROJECTS.forEach((p) => {
        const card = document.createElement("article");
        card.className = "card project reveal tilt";

        const preview = p.image
            ? `<img class="project__img" src="${p.image}" alt="" loading="lazy">`
            : `<div class="project__code" aria-hidden="true">${Array.from({ length: 6 }, (_, i) => {
                  const cls = ["", ' class="c2"', ' class="c3"'][i % 3];
                  return `<i style="width:${32 + ((Math.random() * 50) | 0)}%"${cls}></i>`;
              }).join("")}</div>`;

        const links = (p.links ?? [])
            .map((l) => `<a href="${l.url}" target="_blank" rel="noopener">${l.label} ↗</a>`)
            .join("");

        card.innerHTML = `
            <div class="project__window">
                <div class="project__winbar">
                    <span></span><span></span><span></span>
                    <em class="mono">${p.file}</em>
                </div>
                ${preview}
            </div>
            <div class="project__body">
                <p class="project__tags mono">${p.tags}</p>
                <h3 class="project__title">${p.title[lang] ?? p.title.es}</h3>
                <p class="project__desc">${p.desc[lang] ?? p.desc.es}</p>
                <div class="project__links mono">${links}</div>
            </div>`;

        grid.appendChild(card);
        revealObserver.observe(card);
    });

    enableTilt(grid.querySelectorAll(".tilt"));
}

renderProjects();

/* ── Trayectoria data-driven ──────────────────── */
function renderTimeline() {
    const list = document.getElementById("timeline-list");
    if (!list) return;
    list.innerHTML = "";
    TIMELINE.forEach((t) => {
        const li = document.createElement("li");
        li.className = "timeline__item reveal";
        li.innerHTML = `
            <span class="timeline__year mono">${t.year}</span>
            <div class="timeline__content">
                <h3>${t.title[lang] ?? t.title.es}</h3>
                <p>${t.desc[lang] ?? t.desc.es}</p>
            </div>`;
        list.appendChild(li);
        revealObserver.observe(li);
    });
}

renderTimeline();

/* ── Testimonios (solo con datos reales) ──────── */
function renderTestimonials() {
    const section = document.getElementById("testimonials");
    const grid = document.getElementById("testimonials-grid");
    if (!section || !grid) return;
    section.hidden = TESTIMONIALS.length === 0;
    grid.innerHTML = "";
    TESTIMONIALS.forEach((t) => {
        const card = document.createElement("figure");
        card.className = "card testimonial reveal";
        card.innerHTML = `
            <blockquote>“${t.quote[lang] ?? t.quote.es}”</blockquote>
            <figcaption>
                <strong>${t.author}</strong>
                <span>${t.role[lang] ?? t.role.es}</span>
            </figcaption>`;
        grid.appendChild(card);
        revealObserver.observe(card);
    });
    renumberSections();
}

// Numeración de secciones calculada (ignora las ocultas)
function renumberSections() {
    document
        .querySelectorAll("main .section:not([hidden]) .section__index")
        .forEach((el, i) => {
            el.textContent = String(i + 1).padStart(2, "0");
        });
}

renderTestimonials();

/* ── Formulario de contacto ───────────────────── */
const contactForm = document.getElementById("contact-form");

contactForm?.addEventListener("submit", async (e) => {
    e.preventDefault();
    if (!contactForm.reportValidity()) return;
    const data = Object.fromEntries(new FormData(contactForm));

    // Sin clave de Web3Forms: respaldo por correo
    if (!WEB3FORMS_KEY) {
        const subject = encodeURIComponent(`Contacto desde el portafolio — ${data.name}`);
        const body = encodeURIComponent(`${data.message}\n\n— ${data.name} <${data.email}>`);
        location.href = `mailto:manuelandresvasquezm21@gmail.com?subject=${subject}&body=${body}`;
        toast(I18N[lang].toastMailto);
        return;
    }

    const btn = contactForm.querySelector("button[type=submit]");
    btn.disabled = true;
    try {
        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: { "Content-Type": "application/json", Accept: "application/json" },
            body: JSON.stringify({ access_key: WEB3FORMS_KEY, ...data }),
        });
        if (!res.ok) throw new Error();
        contactForm.reset();
        toast(I18N[lang].toastSent);
    } catch {
        toast(I18N[lang].toastSendErr);
    } finally {
        btn.disabled = false;
    }
});

/* ── PWA: service worker (solo en producción) ─── */
if ("serviceWorker" in navigator && location.hostname.endsWith("github.io")) {
    navigator.serviceWorker.register("sw.js").catch(() => {});
}

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

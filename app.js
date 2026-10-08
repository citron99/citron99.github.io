const translations = {
  ru: {
    skip_link: "Перейти к содержанию",
    brand_suffix: "/AI",
    open_menu: "Открыть меню",
    nav_projects: "Проекты",
    nav_github: "GitHub",
    nav_expertise: "Компетенции",
    nav_contact: "Контакты",
    page_title: "Дмитрий — AI systems & automation",
    hero_eyebrow: "AI Automation Engineer",
    hero_title: "Проектирую AI‑системы, <em>которые можно проверить.</em>",
    hero_lead: "От идеи и прототипа до интерфейса, API, тестов и сценариев безопасного запуска. В фокусе — AI‑ассистенты, RAG и автоматизация реальных процессов.",
    hero_cta_projects: "Смотреть проекты",
    hero_cta_telegram: "Написать в Telegram",
    console_status: "available",
    console_remote: "Remote",
    stat_projects: "крупных проекта Codex",
    stat_repos: "публичных репозиториев",
    stat_approach: "продуктовый подход",
    projects_eyebrow: "Codex projects",
    projects_title: "Системы, а не демо‑экраны",
    projects_subtitle: "Четыре локальных проекта: с архитектурой, защитными ограничениями, тестами и рабочими пользовательскими сценариями.",
    case1_status: "Пилот",
    case1_desc: "Помощник садовода: анализ фотографий и симптомов, история диагностики, календарь ухода, прогноз погоды и безопасные рекомендации с контролируемыми источниками.",
    case1_metric_strong: "3 языковые версии",
    case1_metric: "диагностика за <2 сек по 1000+ растений",
    case1_point1: "OpenAI / Gemini / DeepSeek с fallback‑логикой",
    case1_point2: "FastAPI, фоновые задания, PostgreSQL и Redis",
    case1_point3: "RU / LV / EN, WCAG‑проверки и E2E‑сценарии",
    case_repo_link: "Открыть репозиторий",
    case2_desc: "Единая система для домашнего и ресторанного учёта продуктов: сроки годности, рецепты, покупки и RAG‑помощник с проверяемыми источниками.",
    case2_metric_strong: "−30% потерь продуктов",
    case2_metric: "RAG-ответ за 1.5 сек по 10K+ позиций",
    case2_point1: "Семейный и B2B‑режимы с разграничением ролей",
    case2_point2: "Read‑only интеграция r_keeper и учёт остатков",
    case2_point3: "Локальный TF‑IDF или PostgreSQL + pgvector",
    case3_desc: "Платформа конкурентной разведки: AI‑аудит лендингов, мониторинг цен и доступности, приоритетный вотчлист и доказательный анализ закупок.",
    case3_metric_strong: "50+ конкурентов",
    case3_metric: "алерты в Telegram за 5 мин после изменения",
    case3_point1: "Алерты в Telegram и webhook‑журнал",
    case3_point2: "Сравнение цен, тренды и PDF‑отчёты",
    case3_point3: "Защита API, SSRF‑контроль и smoke‑тесты",
    case4_status: "Локальный пилот",
    case4_desc: "Контролируемая сеть агентов для юридических и финансовых процессов: policy gate, проверяемые основания, согласование владельцем и журнал решений.",
    case4_metric_strong: "100% цитируемость",
    case4_metric: "юридический анализ за 30 сек vs 2 часа вручную",
    case4_point1: "Legal RAG с точными цитатами и датой действия",
    case4_point2: "Kill switch, capability grants и уровни автономности",
    case4_point3: "FastAPI, pgvector, Redis / Celery и React",
    case4_status_link: "Разрабатывается локально",
    proof_eyebrow: "Results",
    proof_title: "Что получают клиенты",
    proof_subtitle: "Конкретные результаты из реализованных проектов.",
    proof1_title: "Потерь продуктов",
    proof1_desc: "SmartKitchen сократил списания за счёт умных уведомлений о сроках годности и автозаказа.",
    proof2_title: "Диагностика растений",
    proof2_desc: "AI Garden анализирует фото и симптомы по базе 1000+ растений с проверяемыми рекомендациями.",
    proof3_title: "Алерты о конкурентах",
    proof3_desc: "Competition Monitor отслеживает 50+ сайтов и отправляет уведомления в Telegram при изменениях.",
    proof4_title: "Цитируемость ответов",
    proof4_desc: "AI-офис предоставляет юридический анализ за 30 секунд с точными ссылками на источники.",
    github_eyebrow: "Open source archive",
    github_title: "Все проекты на GitHub",
    github_subtitle: "Полный публичный каталог citron99 — от RAG‑ассистентов до CRM, мониторинга и инфраструктурных экспериментов.",
    search_label: "Найти проект",
    search_placeholder: "Найти проект или технологию",
    filter_all: "Все",
    filter_ai: "AI / RAG",
    filter_business: "Business",
    filter_web: "Web / Infra",
    repo_empty: "По этому запросу проектов не найдено.",
    expertise_eyebrow: "How I build",
    expertise_title: "От бизнес‑сценария до наблюдаемой системы",
    expertise1_title: "AI‑продукт",
    expertise1_desc: "Формулирую сценарий, ограничения и критерии качества до выбора модели.",
    expertise2_title: "RAG и агенты",
    expertise2_desc: "Строю retrieval, валидацию источников, оркестрацию и безопасные fallback‑сценарии.",
    expertise3_title: "Full‑stack",
    expertise3_desc: "Связываю понятный интерфейс, API, фоновые задачи и хранение данных в один продукт.",
    expertise4_title: "Надёжность",
    expertise4_desc: "Добавляю тесты, rate limits, audit trail, контроль данных и эксплуатационные метрики.",
    contact_eyebrow: "Contact",
    contact_title: "Есть процесс, который пора отдать AI?",
    contact_subtitle: "Обсудим задачу, данные, ограничения и быстрый путь к проверяемому прототипу.",
    footer_text: "Дмитрий / AI systems & automation",
    footer_back: "Наверх"
  },
  en: {
    skip_link: "Skip to content",
    brand_suffix: "/AI",
    open_menu: "Open menu",
    nav_projects: "Projects",
    nav_github: "GitHub",
    nav_expertise: "Expertise",
    nav_contact: "Contact",
    page_title: "Dmitry — AI systems & automation",
    hero_eyebrow: "AI Automation Engineer",
    hero_title: "I build AI systems <em>you can verify.</em>",
    hero_lead: "From idea and prototype to interface, API, tests, and safe launch scenarios. Focus on AI assistants, RAG, and real process automation.",
    hero_cta_projects: "View projects",
    hero_cta_telegram: "Message on Telegram",
    console_status: "available",
    console_remote: "Remote",
    stat_projects: "Codex projects",
    stat_repos: "public repositories",
    stat_approach: "product approach",
    projects_eyebrow: "Codex projects",
    projects_title: "Systems, not demos",
    projects_subtitle: "Four local projects: with architecture, safety constraints, tests, and working user scenarios.",
    case1_status: "Pilot",
    case1_desc: "Gardener assistant: photo and symptom analysis, diagnosis history, care calendar, weather forecast, and safe recommendations with controlled sources.",
    case1_metric_strong: "3 language versions",
    case1_metric: "diagnosis in <2 sec across 1000+ plants",
    case1_point1: "OpenAI / Gemini / DeepSeek with fallback logic",
    case1_point2: "FastAPI, background jobs, PostgreSQL and Redis",
    case1_point3: "RU / LV / EN, WCAG checks and E2E scenarios",
    case_repo_link: "Open repository",
    case2_desc: "Unified system for home and restaurant product tracking: expiration dates, recipes, shopping, and RAG assistant with verifiable sources.",
    case2_metric_strong: "−30% product waste",
    case2_metric: "RAG response in 1.5 sec across 10K+ items",
    case2_point1: "Family and B2B modes with role separation",
    case2_point2: "Read-only r_keeper integration and stock tracking",
    case2_point3: "Local TF-IDF or PostgreSQL + pgvector",
    case3_desc: "Competitive intelligence platform: AI landing audits, price and availability monitoring, priority watchlist, and evidence-based procurement analysis.",
    case3_metric_strong: "50+ competitors",
    case3_metric: "Telegram alerts within 5 min of change",
    case3_point1: "Telegram alerts and webhook journal",
    case3_point2: "Price comparison, trends, and PDF reports",
    case3_point3: "API protection, SSRF control, and smoke tests",
    case4_status: "Local pilot",
    case4_desc: "Controlled agent network for legal and financial processes: policy gate, verifiable grounds, owner approval, and decision journal.",
    case4_metric_strong: "100% citation rate",
    case4_metric: "legal analysis in 30 sec vs 2 hours manually",
    case4_point1: "Legal RAG with exact quotes and effective dates",
    case4_point2: "Kill switch, capability grants, and autonomy levels",
    case4_point3: "FastAPI, pgvector, Redis / Celery, and React",
    case4_status_link: "Developed locally",
    proof_eyebrow: "Results",
    proof_title: "What clients get",
    proof_subtitle: "Concrete results from delivered projects.",
    proof1_title: "Product waste reduced",
    proof1_desc: "SmartKitchen cut write-offs with smart expiration notifications and auto-reordering.",
    proof2_title: "Plant diagnosis",
    proof2_desc: "AI Garden analyzes photos and symptoms across 1000+ plants with verifiable recommendations.",
    proof3_title: "Competitor alerts",
    proof3_desc: "Competition Monitor tracks 50+ sites and sends Telegram notifications on changes.",
    proof4_title: "Answer citation rate",
    proof4_desc: "AI office delivers legal analysis in 30 seconds with precise source links.",
    github_eyebrow: "Open source archive",
    github_title: "All projects on GitHub",
    github_subtitle: "Full public catalog of citron99 — from RAG assistants to CRM, monitoring, and infrastructure experiments.",
    search_label: "Find project",
    search_placeholder: "Find project or technology",
    filter_all: "All",
    filter_ai: "AI / RAG",
    filter_business: "Business",
    filter_web: "Web / Infra",
    repo_empty: "No projects found for this query.",
    expertise_eyebrow: "How I build",
    expertise_title: "From business scenario to observable system",
    expertise1_title: "AI product",
    expertise1_desc: "I define the scenario, constraints, and quality criteria before choosing a model.",
    expertise2_title: "RAG and agents",
    expertise2_desc: "I build retrieval, source validation, orchestration, and safe fallback scenarios.",
    expertise3_title: "Full-stack",
    expertise3_desc: "I connect clear interface, API, background jobs, and data storage into one product.",
    expertise4_title: "Reliability",
    expertise4_desc: "I add tests, rate limits, audit trail, data control, and operational metrics.",
    contact_eyebrow: "Contact",
    contact_title: "Have a process ready for AI?",
    contact_subtitle: "Let's discuss the task, data, constraints, and a fast path to a verifiable prototype.",
    footer_text: "Dmitry / AI systems & automation",
    footer_back: "Back to top"
  }
};

const repositories = [
  {
    name: "FOOD_AI",
    description: "SmartKitchen: учёт продуктов, ресторанные процессы и RAG-помощник с проверяемыми источниками.",
    language: "Python",
    category: ["ai", "business"],
    url: "https://github.com/citron99/FOOD_AI"
  },
  {
    name: "AI_GARDEN",
    description: "Мультимодальный помощник садовода с диагностикой, историей растений и календарём ухода.",
    language: "Python",
    category: ["ai"],
    url: "https://github.com/citron99/AI_GARDEN"
  },
  {
    name: "GARDENER",
    description: "Экспериментальный AI-проект для задач садоводства и ухода за растениями.",
    language: "Python",
    category: ["ai"],
    url: "https://github.com/citron99/GARDENER"
  },
  {
    name: "citron99",
    description: "Профиль разработчика: AI, автоматизация, инфраструктура и практический продуктовый подход.",
    language: "Profile",
    category: ["web"],
    url: "https://github.com/citron99/citron99"
  },
  {
    name: "citron99.github.io",
    description: "Исходный код первой версии персонального портфолио.",
    language: "HTML",
    category: ["web"],
    url: "https://github.com/citron99/citron99.github.io"
  },
  {
    name: "AI_project_Scout",
    description: "Scout для поиска и систематизации новостей и идей об AI-проектах.",
    language: "AI tools",
    category: ["ai"],
    url: "https://github.com/citron99/AI_project_Scout"
  },
  {
    name: "smartkitchen-family",
    description: "Семейный учёт продуктов, сроков годности, рецептов и списков покупок с RAG-подсказками.",
    language: "Python",
    category: ["ai", "business"],
    url: "https://github.com/citron99/smartkitchen-family"
  },
  {
    name: "universal-ai-assistant",
    description: "Платформа универсального AI-ассистента для бизнес-сценариев.",
    language: "AI Platform",
    category: ["ai", "business"],
    url: "https://github.com/citron99/universal-ai-assistant"
  },
  {
    name: "autodealer-ai-assistant",
    description: "AI-ассистент автодилера для обработки клиентских обращений и заявок.",
    language: "Python",
    category: ["ai", "business"],
    url: "https://github.com/citron99/autodealer-ai-assistant"
  },
  {
    name: "portfolio-faq-bot",
    description: "FAQ-ассистент для сайта: FastAPI, OpenAI и RAG-поиск по индексу FAISS.",
    language: "HTML",
    category: ["ai", "web"],
    url: "https://github.com/citron99/portfolio-faq-bot"
  },
  {
    name: "AI-Course-Curator",
    description: "Локальный RAG-куратор образовательной платформы для курса английского B1/B2.",
    language: "Python",
    category: ["ai"],
    url: "https://github.com/citron99/AI-Course-Curator"
  },
  {
    name: "CRM_commercial-organization",
    description: "CRM-система для процессов коммерческой организации.",
    language: "TypeScript",
    category: ["business", "web"],
    url: "https://github.com/citron99/CRM_commercial-organization"
  },
  {
    name: "AI-powered-commercial-proposal-generator",
    description: "Генератор коммерческих предложений на основе AI.",
    language: "Python",
    category: ["ai", "business"],
    url: "https://github.com/citron99/AI-powered-commercial-proposal-generator"
  },
  {
    name: "Metrics-Logging",
    description: "Практика сбора метрик, журналирования и наблюдаемости приложений.",
    language: "Python",
    category: ["web"],
    url: "https://github.com/citron99/Metrics-Logging"
  },
  {
    name: "File_Speech_AI",
    description: "Работа с PDF, изображениями и файлами, распознавание и генерация речи.",
    language: "Python",
    category: ["ai"],
    url: "https://github.com/citron99/File_Speech_AI"
  },
  {
    name: "ai-assistant-project",
    description: "Репозиторий проекта AI-ассистента.",
    language: "AI tools",
    category: ["ai"],
    url: "https://github.com/citron99/ai-assistant-project"
  },
  {
    name: "auto_parts_agent",
    description: "LangChain-агент для подбора автозапчастей по текстовому запросу покупателя.",
    language: "Python",
    category: ["ai", "business"],
    url: "https://github.com/citron99/auto_parts_agent"
  },
  {
    name: "rag-assistant-final",
    description: "RAG-бот интернет-магазина автозапчастей на ChromaDB и OpenAI.",
    language: "Python",
    category: ["ai", "business"],
    url: "https://github.com/citron99/rag-assistant-final"
  },
  {
    name: "competition-monitor",
    description: "Мониторинг конкурентов: AI-аудит, цены, доступность сайтов и алерты.",
    language: "HTML",
    category: ["business", "web", "ai"],
    url: "https://github.com/citron99/competition-monitor"
  },
  {
    name: "partsgen_mvp",
    description: "Vision + LLM-прототип для формирования карточек автозапчастей по тексту и фото.",
    language: "Python",
    category: ["ai", "business"],
    url: "https://github.com/citron99/partsgen_mvp"
  }
];

const root = document.documentElement;
const header = document.querySelector("[data-header]");
const themeButton = document.querySelector("[data-theme-toggle]");
const themeIcon = document.querySelector("[data-theme-icon]");
const menuButton = document.querySelector("[data-menu-toggle]");
const navigation = document.querySelector("[data-nav]");
const searchInput = document.querySelector("[data-repo-search]");
const grid = document.querySelector("[data-repo-grid]");
const emptyState = document.querySelector("[data-repo-empty]");
const filterButtons = [...document.querySelectorAll("[data-filter]")];

let activeFilter = "all";

function getSavedTheme() {
  try {
    return localStorage.getItem("portfolio-theme");
  } catch {
    return null;
  }
}

function setTheme(theme) {
  root.dataset.theme = theme;
  themeIcon.textContent = theme === "dark" ? "◐" : "◑";
  try {
    localStorage.setItem("portfolio-theme", theme);
  } catch {
    // The theme still works when storage is unavailable.
  }
}

const savedTheme = getSavedTheme();
if (savedTheme === "light" || savedTheme === "dark") {
  setTheme(savedTheme);
} else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
  setTheme("dark");
} else {
  setTheme("light");
}

themeButton.addEventListener("click", () => {
  setTheme(root.dataset.theme === "dark" ? "light" : "dark");
});

const langButton = document.querySelector("[data-lang-toggle]");
const langIcon = document.querySelector("[data-lang-icon]");

function getSavedLang() {
  try {
    return localStorage.getItem("portfolio-lang");
  } catch {
    return null;
  }
}

function applyTranslations(lang) {
  const t = translations[lang];
  if (!t) return;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    if (t[key] !== undefined) {
      el.innerHTML = t[key];
    }
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.dataset.i18nPlaceholder;
    if (t[key] !== undefined) {
      el.placeholder = t[key];
    }
  });

  document.documentElement.lang = lang;
  if (t.page_title) {
    document.title = t.page_title;
  }
  if (langIcon) {
    langIcon.textContent = lang === "ru" ? "RU" : "EN";
  }
}

function setLang(lang) {
  applyTranslations(lang);
  try {
    localStorage.setItem("portfolio-lang", lang);
  } catch {
    // Language still works when storage is unavailable.
  }
}

const savedLang = getSavedLang();
if (savedLang === "ru" || savedLang === "en") {
  setLang(savedLang);
} else {
  const browserLang = navigator.language.toLowerCase().startsWith("ru") ? "ru" : "en";
  setLang(browserLang);
}

if (langButton) {
  langButton.addEventListener("click", () => {
    setLang(root.lang === "ru" ? "en" : "ru");
  });
}

menuButton.addEventListener("click", () => {
  const open = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!open));
  navigation.classList.toggle("is-open", !open);
});

navigation.addEventListener("click", (event) => {
  if (event.target.closest("a")) {
    menuButton.setAttribute("aria-expanded", "false");
    navigation.classList.remove("is-open");
  }
});

window.addEventListener("scroll", () => {
  header.classList.toggle("is-scrolled", window.scrollY > 18);
}, { passive: true });

function createRepoCard(repo, index) {
  const link = document.createElement("a");
  link.className = "repo-card";
  link.href = repo.url;
  link.target = "_blank";
  link.rel = "noreferrer";
  link.setAttribute("aria-label", `${repo.name} — открыть на GitHub`);

  const top = document.createElement("div");
  top.className = "repo-top";
  const number = document.createElement("span");
  number.textContent = String(index + 1).padStart(2, "0");
  const arrow = document.createElement("span");
  arrow.className = "repo-arrow";
  arrow.setAttribute("aria-hidden", "true");
  arrow.textContent = "↗";
  top.append(number, arrow);

  const title = document.createElement("h3");
  title.textContent = repo.name;
  const description = document.createElement("p");
  description.textContent = repo.description;

  const bottom = document.createElement("div");
  bottom.className = "repo-bottom";
  const language = document.createElement("span");
  language.textContent = repo.language;
  const label = document.createElement("span");
  label.textContent = "Public";
  bottom.append(language, label);

  link.append(top, title, description, bottom);
  return link;
}

function renderRepositories() {
  const query = searchInput.value.trim().toLocaleLowerCase("ru");
  const filtered = repositories.filter((repo) => {
    const matchesFilter = activeFilter === "all" || repo.category.includes(activeFilter);
    const haystack = `${repo.name} ${repo.description} ${repo.language}`.toLocaleLowerCase("ru");
    return matchesFilter && haystack.includes(query);
  });

  grid.replaceChildren(...filtered.map((repo) => createRepoCard(repo, repositories.indexOf(repo))));
  emptyState.hidden = filtered.length > 0;
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activeFilter = button.dataset.filter;
    filterButtons.forEach((item) => item.classList.toggle("is-active", item === button));
    renderRepositories();
  });
});

const allFilterButton = document.querySelector('[data-filter="all"]');
if (allFilterButton) {
  const countSpan = allFilterButton.querySelector("span");
  if (countSpan) {
    countSpan.textContent = repositories.length;
  }
}

searchInput.addEventListener("input", renderRepositories);
renderRepositories();

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
if (prefersReducedMotion || !("IntersectionObserver" in window)) {
  document.querySelectorAll(".reveal").forEach((element) => element.classList.add("is-visible"));
} else {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { rootMargin: "0px 0px -8%", threshold: 0.08 });
  document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
}

document.querySelector("[data-year]").textContent = new Date().getFullYear();

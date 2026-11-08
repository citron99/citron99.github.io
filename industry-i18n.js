(() => {
const dictionary = {
  "Строительство и стройматериалы — автоматизация | Дмитрий Фролов": "Construction & Building Materials — Automation | Dmitry Frolov",
  "Перейти к содержанию": "Skip to content",
  "Дмитрий / AI": "Dmitry / AI",
  "Все направления": "All industries",
  "← Портфолио": "← Portfolio",
  "Строительство и стройматериалы": "Construction & Building Materials",
  "От заявки на материалы —": "From a materials enquiry —",
  "к понятному предложению.": "to a clear proposal.",
  "Автоматизация для поставщиков стройматериалов и строительных компаний: собирать обращения, готовить КП и следить за ценами без бесконечного переноса данных.": "Automation for building materials suppliers and construction companies: capture enquiries, prepare proposals and track prices without repeatedly copying data.",
  "Обсудить мою задачу ↗": "Discuss my project ↗",
  "Посмотреть решения": "Explore solutions",
  "Строительство": "Construction",
  "Кафе и рестораны": "Cafés & Restaurants",
  "Автомобили и запчасти": "Cars & Auto Parts",
  "Бизнес-процессы": "Business Processes",
  "Задачи бизнеса": "Business challenges",
  "Где можно убрать рутину": "Where to reduce routine work",
  "Заявки с сайта и из Telegram теряются между менеджерами.": "Website and Telegram enquiries get lost between sales managers.",
  "КП собирают вручную из прайсов и прошлых документов.": "Proposals are assembled manually from price lists and previous documents.",
  "Цены конкурентов проверяют нерегулярно.": "Competitor prices are checked irregularly.",
  "Проекты и применение": "Projects in practice",
  "Основа уже есть": "A foundation to build on",
  "Ниже — возможности моих проектов и то, как их можно адаптировать под ваш процесс. Подключение данных и сервисов компании входит в отдельную настройку.": "Below are the capabilities of my projects and ways to adapt them to your workflow. Connecting your company’s data and services requires additional setup.",
  "Мониторинг цен и предложений": "Price and offer monitoring",
  "Что есть в проекте": "What the project includes",
  "В проекте есть история цен SKU, пороговые алерты, сравнение позиций и PDF-отчёты.": "The project includes SKU price history, threshold alerts, item comparisons and PDF reports.",
  "Как применить в компании": "How to use it in your company",
  "Настроить перечень материалов, сопоставление единиц измерения и список сайтов. Уведомлять менеджера об изменениях по выбранным позициям.": "Configure materials, units of measure and monitored websites. Notify the sales manager when selected items change.",
  "Проект на GitHub ↗": "View project on GitHub ↗",
  "Генератор коммерческих предложений": "Sales Proposal Generator",
  "Черновик КП по заявке": "Draft proposals from enquiries",
  "Сервис принимает данные клиента, товары и сумму, генерирует текст и формирует PDF с таблицей и реквизитами.": "The service accepts customer details, products and an amount, generates text and creates a PDF with a product table and company details.",
  "Добавить шаблон поставщика, условия доставки и срок действия цены. Стоимость и наличие брать из подтверждённого прайса; отправка — после проверки менеджером.": "Add the supplier’s template, delivery terms and price validity. Use a confirmed price list for prices and availability; send only after a sales manager’s review.",
  "CRM отдела продаж": "Sales Team CRM",
  "Единая база обращений": "One place for incoming enquiries",
  "CRM хранит контакты и статусы лидов; менеджер видит назначенные ему записи, администратор — всю базу.": "The CRM stores lead contacts and statuses. Sales managers see their assigned records; administrators see the full database.",
  "Связать приём обращений с CRM, добавить объект, список материалов и ответственного. Каналы и правила распределения согласуются при внедрении.": "Connect enquiry intake to the CRM and add the construction site, materials list and responsible person. Agree on channels and assignment rules during implementation.",
  "Первый шаг": "First step",
  "Начать с обработки входящих заявок": "Start with incoming enquiries",
  "Один канал → проверка данных → карточка обращения → ответственный → уведомление в Telegram. На тестовых заявках проверяем полноту записи, отсутствие дублей и передачу менеджеру.": "One channel → data validation → enquiry record → assigned manager → Telegram notification. Use test enquiries to check complete records, duplicate prevention and handoff.",
  "Что понадобится": "What we need",
  "Примеры заявок, актуальный прайс, шаблон КП и описание работы отдела продаж.": "Sample enquiries, a current price list, a proposal template and an overview of your sales workflow.",
  "Что измерим": "What we measure",
  "Доля зарегистрированных обращений, время до передачи менеджеру и время подготовки черновика КП.": "The share of enquiries recorded, time to handoff and time to prepare a draft proposal.",
  "Из портфолио": "From the portfolio",
  "Пример интерфейса исходного проекта. Отраслевые сценарии и подключения обсуждаем под ваши данные.": "An example interface from the original project. Industry workflows and integrations are tailored to your data.",
  "Обсудим процесс": "Let’s discuss your workflow",
  "С чего начать в вашей компании?": "Where should your company start?",
  "Напишите, где сейчас возникает ручная работа и какие сервисы вы используете. Я предложу первый сценарий и состав работ; сроки и стоимость согласуем после разбора задачи.": "Tell me where manual work happens and which services you use. I’ll suggest an initial workflow and scope; we’ll agree on timing and cost after reviewing the task.",
  "Дмитрий Фролов / Портфолио": "Dmitry Frolov / Portfolio",
  "Наверх ↑": "Back to top ↑",
  "Кафе и рестораны — автоматизация | Дмитрий Фролов": "Cafés & Restaurants — Automation | Dmitry Frolov",
  "Продукты под контролем.": "Keep products under control.",
  "Меньше ручной сверки.": "Spend less time checking lists.",
  "Автоматизация повседневных задач кухни и управляющего: отчёты по срокам годности, поиск по инструкциям и контроль предложений конкурентов.": "Automation for kitchen teams and restaurant managers: expiry reports, instruction lookup and competitor offer monitoring.",
  "Сроки годности проверяют по разным спискам.": "Expiry dates are checked across separate lists.",
  "Сотрудники повторно спрашивают о правилах и процессах.": "Staff repeatedly ask about rules and procedures.",
  "Управляющий вручную собирает информацию для решений.": "Managers collect decision-making information manually.",
  "Отчёт по срокам годности": "Expiry date reports",
  "Реализован CLI-прототип: проверка подтверждённого инвентаря и отчёты Markdown, JSON и HTML. Есть необязательные AI-подсказки блюд.": "A CLI prototype checks confirmed inventory and produces Markdown, JSON and HTML reports. Optional AI meal suggestions are available.",
  "Настроить ежедневный отчёт для кухни. POS-адаптеры читают справочники; остатки и сроки нужно подтверждать отдельно. Подсказки блюд проверяет сотрудник.": "Set up a daily kitchen report. POS adapters read product directories; stock levels and expiry dates must be confirmed separately. Staff review meal suggestions.",
  "RAG-ассистент": "RAG Assistant",
  "База знаний для команды": "A knowledge base for your team",
  "В проекте rag-assistant-final реализован поиск по документам через ChromaDB и формирование ответа на основе найденного контекста.": "The rag-assistant-final project searches documents with ChromaDB and generates answers using the retrieved context.",
  "Заменить базу автозапчастей на инструкции заведения: открытие смены, приём поставок, хранение и обслуживание. Проверить ответы на вопросах сотрудников.": "Replace the auto parts knowledge base with restaurant instructions: opening a shift, receiving deliveries, storage and service. Validate answers against staff questions.",
  "Сравнение публичных предложений": "Compare public offers",
  "В проекте есть реестр позиций, история цен, сравнение и отчёты.": "The project includes an item registry, price history, comparisons and reports.",
  "Адаптировать позиции под сопоставимые блюда и предложения заведений. Источники, размеры порций и условия акций сверяются при настройке.": "Adapt items to comparable dishes and restaurant offers. Verify sources, portion sizes and promotion terms during setup.",
  "Начать с ежедневного отчёта кухни": "Start with a daily kitchen report",
  "Подтверждённый список продуктов → проверка сроков → отчёт «использовать в первую очередь» → просмотр ответственным. Проверяем даты и попадание каждой позиции в нужную категорию.": "Confirmed product list → expiry checks → priority-use report → review by the responsible person. Check dates and ensure every item appears in the correct category.",
  "Пример инвентаря с остатками и сроками, список ответственных и название используемой учётной системы.": "Sample inventory with stock levels and expiry dates, responsible staff and the name of your accounting system.",
  "Время подготовки отчёта, полнота учёта сроков и количество позиций, требующих ручного уточнения.": "Report preparation time, expiry data coverage and the number of items requiring manual clarification.",
  "Автомобили и автозапчасти — автоматизация | Дмитрий Фролов": "Cars & Auto Parts — Automation | Dmitry Frolov",
  "Автомобили и автозапчасти": "Cars & Auto Parts",
  "Помочь клиенту с выбором.": "Help customers choose.",
  "Передать менеджеру точный запрос.": "Give sales a clear enquiry.",
  "AI-ассистенты для автодилеров, магазинов запчастей и сервиса: уточнение запроса, поиск по каталогу, подготовка карточек и ответы по базе знаний.": "AI assistants for dealerships, parts stores and repair services: clarify enquiries, search catalogues, prepare product listings and answer knowledge-base questions.",
  "В запросах не хватает модели и года автомобиля.": "Enquiries omit the vehicle model and year.",
  "Заполнение карточек товаров отнимает время.": "Creating product listings takes time.",
  "Одни и те же вопросы о доставке и сервисе повторяются.": "The same delivery and service questions keep coming back.",
  "Продажи и сервис в одном API": "Sales and service through one API",
  "MVP на FastAPI с ролями Sales, HR и Service: сценарии цен, тест-драйва и записи в сервис.": "A FastAPI MVP with Sales, HR and Service roles, covering prices, test drives and service bookings.",
  "Подключить актуальные предложения дилера и согласованные правила передачи заявок. Доступ к CRM и календарю проверяется на тестовом контуре.": "Connect current dealership offers and agreed enquiry handoff rules. Validate CRM and calendar access in a test environment.",
  "Уточнение запроса и поиск детали": "Clarify enquiries and find parts",
  "Агент уточняет марку, модель и год, ищет в локальном каталоге и возвращает название, артикул и цену.": "The agent asks for make, model and year, searches a local catalogue and returns the part name, reference and price.",
  "Подключить каталог магазина. Совместимость и применяемость детали подтверждать по данным каталога или менеджером; VIN-проверка требует отдельной интеграции.": "Connect the store’s catalogue. Confirm compatibility using catalogue data or a sales manager; VIN checks require a separate integration.",
  "Карточки товаров из фото и текста": "Product listings from photos and text",
  "Прототип анализирует фото и описание поставщика, формирует карточку и экспортирует JSON или CSV.": "The prototype analyses a supplier’s photo and description, creates a product record and exports JSON or CSV.",
  "Настроить обязательные поля и формат импорта магазина. Артикулы, характеристики и применяемость проверять перед публикацией.": "Configure required fields and the store’s import format. Check part numbers, specifications and compatibility before publishing.",
  "RAG-бот магазина": "Store RAG Bot",
  "Ответы по документам компании": "Answers from company documents",
  "Поиск по базе знаний о доставке, оплате, возвратах и инструкциях для менеджеров.": "Knowledge-base search covering delivery, payments, returns and staff instructions.",
  "Загрузить действующие правила магазина. Для фактического статуса заказа отдельно подключить учётную систему; при нехватке данных передавать вопрос человеку.": "Load the store’s current policies. Live order status requires a separate connection to the accounting system; hand off to a person when data is missing.",
  "Начать с одного сценария подбора": "Start with one parts selection workflow",
  "Запрос покупателя → уточнение автомобиля → поиск в тестовом каталоге → карточка результата → подтверждение менеджером. Проверяем известные позиции и запросы, на которые в каталоге нет ответа.": "Customer enquiry → vehicle clarification → test catalogue search → result card → sales manager confirmation. Test known items and queries the catalogue cannot answer.",
  "Образец каталога, типовые запросы покупателей, правила подбора и условия доставки.": "A sample catalogue, common customer enquiries, selection rules and delivery terms.",
  "Полнота собранных данных, точность результатов по контрольному каталогу и время подготовки ответа.": "Completeness of collected details, accuracy against the control catalogue and response preparation time.",
  "Автоматизация бизнес-процессов — автоматизация | Дмитрий Фролов": "Business Process Automation | Dmitry Frolov",
  "Автоматизация бизнес-процессов": "Business Process Automation",
  "Связать обращения, документы": "Connect enquiries, documents",
  "и действия команды.": "and your team’s actions.",
  "Автоматизация для небольших компаний: приём заявок, CRM, коммерческие предложения и помощники по внутренним документам. Начинаем с одного измеримого процесса.": "Automation for small companies: enquiry intake, CRM, sales proposals and assistants for internal documents. Start with one measurable process.",
  "Данные вручную переносят между сервисами.": "Data is copied manually between services.",
  "Статус обращения приходится уточнять у коллег.": "Colleagues have to be asked for enquiry updates.",
  "Подготовка документов и поиск информации занимают время.": "Document preparation and information lookup take time.",
  "CRM коммерческой организации": "Business CRM",
  "Контакты, статусы и ответственные": "Contacts, statuses and ownership",
  "Реализованы авторизация, список лидов, контакты, статусы и разделение доступа менеджера и администратора.": "Includes authentication, lead lists, contacts, statuses and separate access for sales managers and administrators.",
  "Добавить нужные поля и связать CRM с источниками обращений через API или n8n. Проверить доступ каждой роли и передачу заявки.": "Add the fields you need and connect enquiry sources through an API or n8n. Verify each role’s access and the enquiry handoff.",
  "Генератор КП": "Proposal Generator",
  "Документ по данным сделки": "Documents from deal data",
  "Веб-сервис генерирует текст предложения, собирает PDF и хранит историю.": "The web service generates proposal text, builds a PDF and keeps a history.",
  "Применить фирменный шаблон и подтверждённые данные сделки. Согласование менеджером включить перед отправкой клиенту.": "Apply a branded template and confirmed deal details. Include sales manager approval before sending to the customer.",
  "AI-офис собственника": "Owner’s AI Office",
  "Контролируемая работа с документами": "Controlled document workflows",
  "Локальный интегрированный пилот: юридическая база знаний, правила согласования, журнал решений и изоляция компаний. Используются синтетические финансовые данные.": "A local integrated pilot with a legal knowledge base, approval rules, decision logs and company isolation. Financial data is synthetic.",
  "Выбрать один сценарий анализа документов. Перед внедрением проверить источники, доступы и качество ответов; реальные платежи и промышленная интеграция с 1С в пилоте отсутствуют.": "Choose one document analysis workflow. Verify sources, access and answer quality before implementation; the pilot does not include real payments or a production 1C integration.",
  "Поиск по внутренним инструкциям": "Search internal instructions",
  "Реализованы индексация документов, векторный поиск и ответ на основе найденного контекста.": "Includes document indexing, vector search and answers based on retrieved context.",
  "Загрузить регламенты компании, согласовать доступ и контрольные вопросы. Если подтверждения в документах нет, направлять запрос ответственному.": "Load company procedures, agree on access and prepare validation questions. Route the request to a responsible person if the documents do not support an answer.",
  "Начать с приёма и распределения обращений": "Start with enquiry intake and routing",
  "На основе моего сценария n8n: Webhook → AI-классификация → NocoDB → уведомление в Telegram. Для компании настраиваем категории, отделы и обработку ошибок; проверяем обычное, пустое и нестандартное обращение.": "Based on my n8n workflow: Webhook → AI classification → NocoDB → Telegram notification. Configure categories, departments and error handling; test normal, empty and unusual enquiries.",
  "Описание текущего процесса, 10–20 обезличенных примеров и список сервисов, между которыми переносят данные.": "A description of your current process, 10–20 anonymised examples and a list of services between which data is transferred.",
  "Время ручной обработки, полнота записей, правильность маршрутизации и количество ошибок.": "Manual processing time, record completeness, routing accuracy and error count.",
  "Для бизнеса": "For Business",
  "Решения для бизнеса": "Business Solutions",
  "Автоматизация в вашей отрасли": "Automation for your industry",
  "Выберите направление: задачи бизнеса, подходящие проекты и первый шаг к внедрению.": "Choose your industry: business challenges, relevant projects and a first step towards implementation.",
  "Посмотреть решения ↗": "Explore solutions ↗",
  "публичных репозитариев": "public repositories",
  "AI‑офис собственника": "Owner’s AI Office",
  "Направления автоматизации": "Automation industries",
  "Переключить цветовую тему": "Toggle colour theme",
  "Переключить язык": "Switch language",
  "Интерфейс Competition Monitor": "Competition Monitor interface",
  "Визуальный образ проекта SmartKitchen": "SmartKitchen project illustration",
  "Мониторинг товарных позиций в Competition Monitor": "Product monitoring in Competition Monitor",
  "Интерфейс локального пилота AI-офис собственника": "Interface of the Owner’s AI Office local pilot",
  "Включить светлую тему": "Switch to light theme",
  "Включить тёмную тему": "Switch to dark theme"
};
const records = [];
const walker = document.createTreeWalker(document.documentElement, NodeFilter.SHOW_TEXT);
let node;
while ((node = walker.nextNode())) {
  if (node.parentElement?.closest('script, style')) continue;
  const original = node.nodeValue;
  const key = original.trim();
  if (dictionary[key]) records.push({node,original,key});
}
const attributes = [];
document.querySelectorAll('[alt], [aria-label], meta[content]').forEach(element => {
  for (const name of ['alt', 'aria-label', 'content']) {
    const original = element.getAttribute(name);
    if (original && dictionary[original]) attributes.push({element,name,original});
  }
});
const industry = document.body.classList.contains('industry-page');
const button = document.querySelector('[data-industry-lang]');
function apply(lang) {
  for (const record of records) record.node.nodeValue = lang === 'en' ? record.original.replace(record.key, dictionary[record.key]) : record.original;
  for (const record of attributes) record.element.setAttribute(record.name, lang === 'en' ? dictionary[record.original] : record.original);
  if (industry) document.documentElement.lang = lang;
  if (button) { button.textContent = lang.toUpperCase(); button.setAttribute('aria-label',lang === 'en' ? 'Switch to Russian' : 'Переключить на английский'); }
  const theme = document.querySelector('[data-industry-theme]');
  if (theme) { const dark = document.documentElement.dataset.theme === 'dark'; theme.setAttribute('aria-label',lang === 'en' ? (dark ? 'Switch to light theme' : 'Switch to dark theme') : (dark ? 'Включить светлую тему' : 'Включить тёмную тему')); }
}
let lang = document.documentElement.lang === 'en' ? 'en' : 'ru';
if (industry) { try { const saved = localStorage.getItem('portfolio-lang'); if (saved === 'en' || saved === 'ru') lang = saved; } catch {} }
apply(lang);
window.addEventListener('portfolio-language-change', event => apply(event.detail));
button?.addEventListener('click', () => { const next = document.documentElement.lang === 'ru' ? 'en' : 'ru'; apply(next); try {localStorage.setItem('portfolio-lang',next);} catch {} });
document.querySelector('[data-industry-theme]')?.addEventListener('click', () => apply(document.documentElement.lang));
})();
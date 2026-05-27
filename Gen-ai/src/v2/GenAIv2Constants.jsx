export const modules = [
  { w: "WEEK 01", t: "AI Models, the 2026 Stack & Personal AI Stack", tags: ["Frontier models", "Common", "Notion AI · Claude · Gemini"], goal: "Map every major model category to a real tool and choose the right model for any task.", sessions: ["Types of AI Models & the Model Family Tree (incl. Sarvam, BharatGen, Krutrim)", "The 2026 Frontier Stack — GPT-5.5, Claude Opus 4.7, Gemini 2.5 Pro, DeepSeek V3", "AI for Everyday Work — 5 templates that automate weekly tasks"] },
  { w: "WEEK 02", t: "Prompt Engineering & 'Vibe Coding'", tags: ["System Prompts", "Common", "Claude Artifacts"], goal: "Master the art of prompting and rapid application creation with zero-code interfaces.", sessions: ["Few-shot learning, Chain of Thought, and React patterns", "System Prompts: Constraining models for enterprise use cases", "Creating complete functional MVPs with Claude Artifacts & Cursor"] },
  { w: "WEEK 03", t: "Search, Retrieval & RAG Foundations", tags: ["Vector DBs", "Common", "Pinecone · Qdrant"], goal: "Connect LLMs to your company's knowledge base without hallucination.", sessions: ["Embeddings and semantic search pipelines", "Chunking strategies and vector storage selection", "Building a naive RAG pipeline over internal PDFs"] },
  { w: "WEEK 04", t: "Voice Agents & Conversational Design", tags: ["STT / TTS", "Common", "ElevenLabs · Vapi"] },
  { w: "WEEK 05", t: "Enterprise Automations & Workflows", tags: ["Workflows", "Common", "n8n · Zapier"] },
  { w: "WEEK 06", t: "Document Intelligence at Scale", tags: ["OCR / Vision", "Common", "LlamaParse"] },
  { w: "WEEK 07", t: "Building Multi-Agent Frameworks", tags: ["Multi-Agent", "Common", "CrewAI · AutoGen"] },
  { w: "WEEK 08", t: "The Halfway Ship & Mid-Term Demo", tags: ["Capstone", "Common", "Production MVP"] },
  { w: "WEEK 09", t: "Advanced RAG & Hybrid Search", tags: ["Advanced RAG", "Tech", "LangChain"] },
  { w: "WEEK 10", t: "LangGraph & Cyclic Agents", tags: ["Cyclic Graph", "Tech", "LangGraph"] },
  { w: "WEEK 11", t: "Model Context Protocol (MCP)", tags: ["MCP", "Tech", "Anthropic MCP"] },
  { w: "WEEK 12", t: "Open Source Models & Local Hosting", tags: ["OS Models", "Tech", "Ollama · vLLM"] },
  { w: "WEEK 13", t: "Fine-Tuning Foundations & QLoRA", tags: ["Fine-tuning", "Tech", "Axolotl · Unsloth"] },
  { w: "WEEK 14", t: "AI Security & Guardrails", tags: ["Security", "Tech", "NeMo Guardrails"] },
  { w: "WEEK 15", t: "LLM Ops, Monitoring & Costs", tags: ["Ops", "Tech", "LangSmith · Phoenix"] },
  { w: "WEEK 16", t: "The Final Ship: Capstone Project", tags: ["Graduation", "Tech", "Public Ship"] },
];

export const ninjaCards = [
  { i: "Productivity", s: "SAT 01", t: ["MyDay AI", "automation tool"], f: true },
  { i: "Marketing", s: "SAT 02", t: ["Brand Voice", "Engine"] },
  { i: "EdTech", s: "SAT 03", t: ["Tutor in a", "Box"] },
  { i: "Media", s: "SAT 04", t: ["60-Second Story", "Studio"] },
  { i: "Healthcare", s: "SAT 05", t: ["ClinicCall AI", "voice agent"] },
  { i: "DevOps", s: "SAT 06", t: ["PR Whisperer", "code review"] },
  { i: "Retail", s: "SAT 07", t: ["Shop Sense", "assistant SaaS"] },
  { i: "HR & Talent", s: "SAT 08", t: ["HireSmart", "resume pipeline"] },
  { i: "BFSI", s: "SAT 09", t: ["Policy Bot", "RBI/SEBI RAG"] },
  { i: "Legal", s: "SAT 10", t: ["Contract", "Lens"] },
  { i: "Support", s: "SAT 11", t: ["Support Crew", "multi-agent"] },
  { i: "PropTech", s: "SAT 12", t: ["PropAgent", "MCP server"] },
  { i: "Manufacturing", s: "SAT 13", t: ["Factory Pulse", "anomaly ops"] },
  { i: "ESG", s: "SAT 14", t: ["ESG Scribe", "BRSR reports"] },
  { i: "Travel", s: "SAT 15", t: ["Trip Weaver +", "capstone preview"] },
  { i: "Grand Finale", s: "SAT 16", t: ["Pick your domain ·", "₹25k prize"], f: true },
];

export const capstones = [
  { tag: "T1 · Knowledge", title: "Knowledge Copilot for Enterprise", desc: "Ingests 1000+ internal docs, answers multi-hop questions with citations, exports cleaned-ready markdown.", chips: ["LlamaIndex", "LangGraph", "Cohere Rerank"], accept: "RAGAS Faithfulness ≥ 0.85 · 25 DeepEval tests pass" },
  { tag: "T2 · Voice", title: "Domain Voice Agent for Healthcare/BFSI", desc: "Live phone agent with real Indian number, books appointments, integrates calendar + CRM + EMR, DPDP-compliant.", chips: ["Vapi", "Claude Sonnet", "Twilio IN A"], accept: "50 real calls · ≥80% task completion" },
  { tag: "T3 · DevOps", title: "Code Review Multi-Agent System", desc: "Security + style + test + summariser agents review every PR in your GitHub repo, post unified review comments.", chips: ["LangGraph", "OpenAI Agents", "GitHub Actions"], accept: "20 real PRs · 5 known vulns caught · <30s" },
  { tag: "T4 · Ops", title: "AI Operations Monitor", desc: "Polls a dozen sources hourly, detects anomalies, generates daily/weekly digests, runs autonomously for 7 days.", chips: ["N8N", "LangSmith", "LangFuse · Web"], accept: "Anomaly P/R > 0.7 · 7-day uptime" },
  { tag: "T5 · Multimodal", title: "Multi-Modal Field Report Generator", desc: "Field worker uploads photos + voice → structured PDF with images, transcribed observations, recommendations.", chips: ["Whisper", "Claude Vision"], accept: "10 real visits processed · RAGAS scored" },
  { tag: "T6 · Finetune", title: "Fine-Tuned Domain LLM + RAG Hybrid", desc: "QLoRA-fine-tune Gemma 2B / Llama 3.2 3B on 1000+ examples, pair with RAG, serve via vLLM.", chips: ["Unsloth · TRL", "PASS · BGE-M3"], accept: "ROUGE-L lift > 15% · adapter on HF Hub" },
  { tag: "T7 · MCP", title: "Custom MCP Server for an Internal System", desc: "Expose your APIs / DBs / file systems as MCP tools. Connect to Claude Code, Cursor, Claude Desktop.", chips: ["Anthropic MCP SDK", "LangSmith"], accept: "5+ tools · 3 client integrations · audit log" },
  { tag: "T8 · SaaS", title: "Agentic SaaS Product (Production)", desc: "Full SaaS with auth, agent backend, Stripe billing, observability, cost governance. Soft launch on ProductHunt.", chips: ["NextJS · Supabase", "LangSmith"], accept: "10+ users wk1 · > ₹100/seat mo · evals pass" },
];

export const faqs = [
  { q: "What is AcceleratorX, and how is it different from other Generative AI courses in India?", a: "AcceleratorX offers a Generative AI course in India focused on real-world applications, not just theory. Unlike traditional courses, you learn how to build AI workflows, automation systems, and AI-powered solutions using tools like ChatGPT, making you job-ready for real business use cases." },
  { q: "Which is the best Generative AI course in India for working professionals?", a: "The best Generative AI course is one that focuses on practical skills, real AI projects, and career outcomes. AcceleratorX is designed for working professionals who want to transition into AI-driven roles." },
  { q: "Can I learn Generative AI without coding?", a: "Yes, you can learn Generative AI without coding. This course starts with no-code AI tools, prompt engineering, and automation workflows, making it beginner-friendly." },
  { q: "What career opportunities are available after completing a Generative AI course?", a: "AI / GenAI Engineer, Senior AI Engineer, AI Solutions Architect, ML Engineer, AI Product Manager — across GCCs, Indian startups, and traditional enterprises. Salary bands range ₹8L to ₹80L+." },
  { q: "How can I switch my career to Generative AI?", a: "Our 16-week program is designed for career switchers. Start with Common Foundations, pick your specialization at Week 9, ship 16 portfolio projects, and demo to hiring partners at Demo Day." },
];

export const mentors = [
  { n: "Yash Manghnani", r: "Senior AI Builder - Better Software", img: "/assets/mentors/gen-ai/yash.png", logo: "/assets/mentors/beetersoftware.png", linkedinUrl: "https://www.linkedin.com/in/yash-manghnani/" },
  { n: "Ashu Mishra", r: "Technical Product Manager - Zigram", img: "/assets/mentors/gen-ai/Ashu 1.png", logo: "/assets/mentors/zigram.png", linkedinUrl: "https://www.linkedin.com/in/ashumish/" },
  { n: "Prashant Sahatiya", r: "Program Coordinator & Asst. Prof.", img: "/assets/mentors/gen-ai/Dr. Prashant 2.png", logo: "/assets/mentors/gen-ai/Frame 51378-2.png", linkedinUrl: "https://www.linkedin.com/in/prashant-sahatiya?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" },
  { n: "Nitish Setty", r: "Managing Director - GrowSharp", img: "/assets/mentors/gen-ai/Nitish.png", logo: "/assets/mentors/grownswap.png", linkedinUrl: "https://www.linkedin.com/in/nitish-m-l-setty-7a0206192/" },
  { n: "Anjali Sharma", r: "Sr. AI Product Manager - Search Atlas", img: "/assets/mentors/gen-ai/Anjali Sharma 3.png", logo: "/assets/mentors/searchatlas.png", linkedinUrl: "https://www.linkedin.com/in/anjalisharmaaa/" },
];

export const CheckSvg = () => (
  <svg viewBox="0 0 18 18" fill="none">
    <circle cx="9" cy="9" r="8" stroke="currentColor" strokeWidth="1.5" />
    <path d="M5.5 9l2.5 2.5L13 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const CheckSvg16 = () => (
  <svg viewBox="0 0 16 16" fill="none">
    <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5" />
    <path d="M5 8l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

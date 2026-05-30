import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface ModuleData {
  week: string;
  title: string;
  tags: string[];
  goal: string;
  sessions: string[];
}

const modules: ModuleData[] = [
  {
    week: "WEEK 01",
    title: "AI Models, the 2026 Stack & Personal AI Stack",
    tags: ["Frontier models", "Common", "Notion AI · Claude · Gemini"],
    goal: "Map every major model category to a real tool and choose the right model for any task.",
    sessions: [
      "Types of AI Models & the Model Family Tree (incl. Sarvam, BharatGen, Krutrim)",
      "The 2026 Frontier Stack — GPT-5.5, Claude Opus 4.7, Gemini 2.5 Pro, DeepSeek V3",
      "AI for Everyday Work — 5 templates that automate weekly tasks"
    ]
  },
  {
    week: "WEEK 02",
    title: "Prompt Engineering & 'Vibe Coding'",
    tags: ["System Prompts", "Common", "Claude Artifacts"],
    goal: "Master the art of prompting and rapid application creation with zero-code interfaces.",
    sessions: [
      "Few-shot learning, Chain of Thought, and React patterns",
      "System Prompts: Constraining models for enterprise use cases",
      "Creating complete functional MVPs with Claude Artifacts & Cursor"
    ]
  },
  {
    week: "WEEK 03",
    title: "Search, Retrieval & RAG Foundations",
    tags: ["Vector DBs", "Common", "Pinecone · Qdrant"],
    goal: "Connect LLMs to your company's knowledge base without hallucination.",
    sessions: [
      "Embeddings and semantic search pipelines",
      "Chunking strategies and vector storage selection",
      "Building a naive RAG pipeline over internal PDFs"
    ]
  },
  {
    week: "WEEK 04",
    title: "Voice Agents & Conversational Design",
    tags: ["STT / TTS", "Common", "ElevenLabs · Vapi"],
    goal: "Deploy high-fidelity, low-latency voice conversational agents.",
    sessions: [
      "Evaluating Speech-to-Text (Deepgram) and Text-to-Speech (ElevenLabs)",
      "Handling latency and turn-taking mechanics",
      "Deploying a functional phone sales / customer care bot"
    ]
  },
  {
    week: "WEEK 05",
    title: "Enterprise Automations & Workflows",
    tags: ["Workflows", "Common", "n8n · Zapier"],
    goal: "Automate multi-step operational workflows using LLM decision nodes.",
    sessions: [
      "n8n vs Make: Visual programming for automation",
      "Handling conditional routing and API connectors",
      "Auto-triaging and resolving customer emails via LLMs"
    ]
  },
  {
    week: "WEEK 06",
    title: "Document Intelligence at Scale",
    tags: ["OCR / Vision", "Common", "LlamaParse"],
    goal: "Extract structured JSON from complex, unstructured business files.",
    sessions: [
      "Vision-language models for tables and graphs",
      "Parsing PDFs with LlamaParse and Unstructured.io",
      "Building a commercial-grade invoice parser"
    ]
  },
  {
    week: "WEEK 07",
    title: "Building Multi-Agent Frameworks",
    tags: ["Multi-Agent", "Common", "CrewAI · AutoGen"],
    goal: "Choreograph multiple distinct AI agents to collaborate on complex projects.",
    sessions: [
      "Role-playing agent architecture design",
      "Inter-agent communication and task handoffs",
      "Building a research and content creation agency"
    ]
  },
  {
    week: "WEEK 08",
    title: "The Halfway Ship & Mid-Term Demo",
    tags: ["Capstone", "Common", "Production MVP"],
    goal: "Ship your first complete AI artifact live to production for public feedback.",
    sessions: [
      "Hardening your AI app for general availability",
      "Scaling traffic and rate-limit management",
      "Demo Day: Presentation and peer reviews"
    ]
  },
  {
    week: "WEEK 09",
    title: "Advanced RAG & Hybrid Search",
    tags: ["Advanced RAG", "Tech", "LangChain"],
    goal: "Perfect retrieval accuracy with reranking and self-querying techniques.",
    sessions: [
      "Graph-RAG and knowledge graph integration",
      "ColBERT and BM25 hybrid search retrieval",
      "Evaluating retrieval precision with Ragas"
    ]
  },
  {
    week: "WEEK 10",
    title: "LangGraph & Cyclic Agents",
    tags: ["Cyclic Graph", "Tech", "LangGraph"],
    goal: "Create agent systems that can iterate, loop, and self-correct indefinitely.",
    sessions: [
      "State management and conditional loops in LangGraph",
      "Human-in-the-loop interrupt systems",
      "Building a persistent software engineering agent"
    ]
  },
  {
    week: "WEEK 11",
    title: "Model Context Protocol (MCP)",
    tags: ["MCP", "Tech", "Anthropic MCP"],
    goal: "Build standardized tool-calling servers that link LLMs to secure enterprise databases.",
    sessions: [
      "Creating custom MCP servers in Python/TS",
      "Secure read/write hooks into production systems",
      "Securing prompt boundaries in enterprise toolsets"
    ]
  },
  {
    week: "WEEK 12",
    title: "Open Source Models & Local Hosting",
    tags: ["OS Models", "Tech", "Ollama · vLLM"],
    goal: "Deploy state-of-the-art models locally without reliance on SaaS APIs.",
    sessions: [
      "Quantization: GGUF vs AWQ formats",
      "Deploying Llama 3 and DeepSeek with vLLM",
      "Managing custom inference endpoints on AWS/GCP"
    ]
  },
  {
    week: "WEEK 13",
    title: "Fine-Tuning Foundations & QLoRA",
    tags: ["Fine-tuning", "Tech", "Axolotl · Unsloth"],
    goal: "Adapt pre-trained LLMs to custom writing styles, domains, or codebases.",
    sessions: [
      "Preparing instruction-tuning datasets",
      "Parameter Efficient Fine-Tuning (PEFT) & QLoRA",
      "Fine-tuning Llama-3 8B on specific enterprise text"
    ]
  },
  {
    week: "WEEK 14",
    title: "AI Security & Guardrails",
    tags: ["Security", "Tech", "NeMo Guardrails"],
    goal: "Protect production LLM applications against prompt injection and leakage.",
    sessions: [
      "Detecting and preventing Jailbreaking / Hijacking",
      "PII filtering and toxicity monitoring",
      "Implementing NeMo Guardrails and Llama Guard"
    ]
  },
  {
    week: "WEEK 15",
    title: "LLM Ops, Monitoring & Costs",
    tags: ["Ops", "Tech", "LangSmith · Phoenix"],
    goal: "Track, evaluate, and optimize production AI spending and token telemetry.",
    sessions: [
      "Tracing production LLM spans with LangSmith",
      "Caching strategies for token cost savings (GPTCache)",
      "Semantic drift and evaluation metrics at scale"
    ]
  },
  {
    week: "WEEK 16",
    title: "The Final Ship: Capstone Project",
    tags: ["Graduation", "Tech", "Public Ship"],
    goal: "Ship a production-ready, secure, scalable AI agent system for a real business.",
    sessions: [
      "Deploying to production with high availability",
      "Pitching to investors and internal CFO stakeholders",
      "Graduation Day & Certificate Distribution"
    ]
  }
];

export default function Curriculum() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const toggleModule = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const formatNumber = (n: number) => (n < 10 ? `0${n}` : `${n}`);

  return (
    <div
      className="responsive-section curriculum-section relative flex flex-col items-center p-0 gap-[48px] w-[1276px]"
      style={{ margin: '60px auto 0', paddingBottom: '120px' }}
    >
      {/* Header Group */}
      <div className="curr-header-group flex flex-col items-center p-0 gap-[20px] w-[1188px] h-[96px] flex-none order-0 grow-0">
        {/* Label */}
        <div className="flex flex-col items-center p-0 w-[1188px] h-[16px] flex-none order-0 self-stretch grow-0">
          <span
            className="whitespace-nowrap h-[16px] font-['Open_Sans'] font-semibold text-[12px] leading-[16px] flex items-center justify-center tracking-[1.2px] uppercase flex-none order-0 grow-0"
            style={{
              background: 'linear-gradient(90deg, #6366F1 0%, #A855F7 35%, #FC6401 70%, #F59E0B 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              color: 'transparent'
            }}
          >
            16-Week Curriculum
          </span>
        </div>

        {/* Heading */}
        <div className="curr-title-wrapper flex flex-col items-center p-0 w-[1188px] h-[60px] flex-none order-1 self-stretch grow-0">
          <h2 className="curr-title-heading w-[1041px] h-[60px] font-['Inter'] font-medium text-[32px] leading-[60px] flex items-center justify-center text-center text-[#F5F7FF] flex-none order-0 grow-0">
            Every week ends with a shipped artifact your team can use Monday.
          </h2>
        </div>
      </div>

      {/* Subheading */}
      <p className="curr-subtitle-desc w-[1188px] h-[19px] font-['Inter'] font-medium text-[16px] leading-[19px] text-center text-[#C2C2C2] flex-none order-1 grow-0 -mt-[24px]">
        Sessions Tue / Thu / Sat live, plus AI Build Ninja Saturday. Total ≈ 110 live hours.
      </p>

      {/* Modules List */}
      <div
        className="curriculum-list"
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          width: '1276px',
          flex: 'none',
          order: 2,
          flexGrow: 0
        }}
      >
        {modules.map((module, index) => {
          const isOpen = openIndex === index;
          const isHovered = hoveredIndex === index;
          return (
            <div
              key={index}
              onClick={() => toggleModule(index)}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="curriculum-card"
              style={{
                boxSizing: 'border-box',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                padding: '24px',
                gap: '16px',
                width: '1276px',
                height: isOpen ? 'auto' : '76px',
                background: isOpen
                  ? 'linear-gradient(90deg, #0A0A0A 0%, #282828 100%)'
                  : 'linear-gradient(90deg, rgba(10, 10, 10, 0.6) 0%, rgba(40, 40, 40, 0.6) 100%)',
                border: (isOpen || isHovered)
                  ? '1px solid rgba(252, 100, 1, 0.3)'
                  : '1px solid rgba(252, 100, 1, 0.05)',
                backdropFilter: 'blur(4px)',
                borderRadius: '16px',
                flex: 'none',
                order: 0,
                alignSelf: 'stretch',
                flexGrow: 0,
                cursor: 'pointer',
                userSelect: 'none',
                transition: 'background 0.3s ease, border 0.3s ease, height 0.3s ease',
                overflow: 'hidden'
              }}
            >
              {/* Container */}
              <div
                className="curriculum-card-row"
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: isOpen ? 'flex-start' : 'center',
                  padding: '0px',
                  width: '1226px',
                  height: 'auto',
                  flex: 'none',
                  order: 0,
                  alignSelf: 'stretch',
                  flexGrow: 0
                }}
              >
                {/* Left Side Container */}
                <div
                  className="curriculum-card-left-wrapper"
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: isOpen ? 'flex-start' : 'center',
                    padding: '0px',
                    gap: '24px',
                    width: '705px',
                    height: 'auto',
                    flex: 'none',
                    order: 0,
                    flexGrow: 0
                  }}
                >
                  {/* Number Container */}
                  <div
                    className="curriculum-card-number-box"
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'flex-start',
                      padding: '0px',
                      width: '23px',
                      height: 'auto',
                      opacity: 0.5,
                      flex: 'none',
                      order: 0,
                      alignSelf: 'stretch',
                      flexGrow: 0
                    }}
                  >
                    <span
                      className="curriculum-card-number"
                      style={{
                        width: '23px',
                        height: '28px',
                        fontFamily: "'Inter', sans-serif",
                        fontStyle: 'normal',
                        fontWeight: 500,
                        fontSize: '20px',
                        lineHeight: '28px',
                        display: 'flex',
                        alignItems: 'center',
                        color: '#FC6401',
                        flex: 'none',
                        order: 0,
                        flexGrow: 0
                      }}
                    >
                      {formatNumber(index + 1)}
                    </span>
                  </div>

                  {/* Content Container */}
                  <div
                    className="curriculum-card-left"
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'flex-start',
                      padding: '0px',
                      gap: '12px',
                      width: '658px',
                      height: 'auto',
                      flex: 'none',
                      order: 1,
                      alignSelf: 'stretch',
                      flexGrow: 0
                    }}
                  >
                    {/* Heading 3 */}
                    <div
                      className="curriculum-card-title-row"
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        padding: '0px',
                        gap: '8px',
                        width: '658px',
                        height: '28px',
                        flex: 'none',
                        order: 0,
                        alignSelf: 'stretch',
                        flexGrow: 0
                      }}>
                      <h3 style={{
                        margin: 0,
                        fontFamily: "'Inter', sans-serif",
                        fontStyle: 'normal',
                        fontWeight: 400,
                        fontSize: '20px',
                        lineHeight: '28px',
                        display: 'flex',
                        alignItems: 'center',
                        color: '#FFFFFF',
                        flex: 'none',
                        order: 0,
                        flexGrow: 0
                      }}>
                        {module.title}
                      </h3>
                      <span style={{
                        fontFamily: "'Inter', sans-serif",
                        fontStyle: 'normal',
                        fontWeight: 600,
                        fontSize: '14px',
                        lineHeight: '28px',
                        display: 'flex',
                        alignItems: 'center',
                        color: '#FC6401',
                        textTransform: 'uppercase',
                        flex: 'none',
                        order: 1,
                        flexGrow: 0
                      }}>
                        {module.week.replace(/^WEEK 0/, 'WEEK ')}
                      </span>
                    </div>

                    {/* Expanded Info Text Container */}
                    {isOpen && (
                      <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        padding: '0px',
                        width: '658px',
                        height: 'auto',
                        flex: 'none',
                        order: 1,
                        alignSelf: 'stretch',
                        flexGrow: 0
                      }}>
                        <div style={{
                          width: '658px',
                          height: 'auto',
                          fontFamily: "'Inter', sans-serif",
                          fontStyle: 'normal',
                          fontWeight: 600,
                          fontSize: '16px',
                          lineHeight: '20px',
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'flex-start',
                          gap: '8px',
                          color: '#A0A8B8',
                          flex: 'none',
                          order: 0,
                          flexGrow: 0
                        }}>
                          <div>
                            <span style={{ color: '#FFFFFF', fontWeight: 600, display: 'block', marginBottom: '4px' }}>Goal</span>
                            <span style={{ color: '#A0A8B8', fontWeight: 600 }}>{module.goal}</span>
                          </div>
                          <div style={{ marginTop: '4px' }}>
                            <span style={{ color: '#FFFFFF', fontWeight: 600, display: 'block', marginBottom: '4px' }}>Sessions</span>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                              {module.sessions.map((session, sIdx) => (
                                <div key={sIdx} style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', gap: '8px' }}>
                                  <span style={{ color: '#A0A8B8' }}>•</span>
                                  <span style={{ color: '#A0A8B8', fontWeight: 600 }}>{session}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Right Side Container — Tags Only */}
                <div
                  className="curriculum-card-right"
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    padding: '0px',
                    gap: '10px',
                    height: '25px',
                    width: 'auto',
                    flex: 'none',
                    order: 1,
                    flexGrow: 0,
                    marginLeft: 'auto'
                  }}
                >
                  {module.tags.map((tag, tagIdx) => (
                    <div
                      key={tagIdx}
                      style={{
                        boxSizing: 'border-box',
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'flex-start',
                        padding: '4px 12px',
                        height: '25px',
                        background: 'rgba(252, 100, 1, 0.1)',
                        border: '1px solid rgba(252, 100, 1, 0.1)',
                        borderRadius: '25px',
                        flex: 'none',
                        order: tagIdx,
                        flexGrow: 0
                      }}
                    >
                      <span style={{
                        fontFamily: "'Inter', sans-serif",
                        fontStyle: 'normal',
                        fontWeight: 400,
                        fontSize: '10px',
                        lineHeight: '15px',
                        display: 'flex',
                        alignItems: 'center',
                        letterSpacing: '0.5px',
                        textTransform: 'uppercase',
                        color: '#FC6401',
                        flex: 'none',
                        order: 0,
                        flexGrow: 0,
                        whiteSpace: 'nowrap'
                      }}>
                        {tag}
                      </span>
                    </div>
                  ))}
                </div>

                {/* SVG — Chevron (Direct child of row) */}
                <div
                  className="curriculum-card-chevron"
                  style={{
                    width: '24px',
                    height: '24px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flex: 'none',
                    order: 2,
                    flexGrow: 0,
                    marginTop: '1px',
                    marginLeft: '32px'
                  }}
                >
                  <ChevronDown
                    size={24}
                    style={{
                      color: '#A0A8B8',
                      transition: 'transform 0.3s ease',
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                    }}
                    strokeWidth={2}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

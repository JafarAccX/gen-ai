import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, X, ChevronDown } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="faq-item"
      style={{
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        padding: '24px 32px',
        width: '1239px', // Match header width
        background: 'rgba(255, 255, 255, 0.02)',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        borderRadius: '16px',
        cursor: 'pointer',
        overflow: 'hidden',
        transition: 'all 0.3s ease',
        marginBottom: '16px',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
        }}
      >
        <span
          style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 500,
            fontSize: '18px',
            lineHeight: '24px',
            color: '#FFFFFF',
          }}
        >
          {question}
        </span>
        <div style={{ width: '24px', height: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {isOpen ? (
            <Plus size={24} color="#FFFFFF" style={{ transform: 'rotate(45deg)', transition: 'transform 0.3s ease' }} />
          ) : (
            <Plus size={24} color="#FFFFFF" style={{ transition: 'transform 0.3s ease' }} />
          )}
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0, marginTop: 0 }}
            animate={{ height: 'auto', opacity: 1, marginTop: 16 }}
            exit={{ height: 0, opacity: 0, marginTop: 0 }}
            transition={{ duration: 0.3 }}
            style={{ width: '100%' }}
          >
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 400,
                fontSize: '16px',
                lineHeight: '26px',
                color: '#A0A8B8',
                margin: 0,
              }}
            >
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default
  const [isExpanded, setIsExpanded] = useState(false);

  const faqs = [
    {
      question: "What is AcceleratorX, and how is it different from other Generative AI courses in India?",
      answer: "AcceleratorX offers a Generative AI course in India focused on real-world applications, not just theory. Unlike traditional courses, you learn how to build AI workflows, automation systems, and AI-powered solutions using tools like ChatGPT, making you job-ready for real business use cases."
    },
    {
      question: "Which is the best Generative AI course in India for working professionals?",
      answer: "The best Generative AI course is one that focuses on practical skills, real AI projects, and career outcomes. AcceleratorX is designed for working professionals who want to transition into AI-driven roles, automation, and AI applications without wasting time on outdated content."
    },
    {
      question: "Can I learn Generative AI without coding?",
      answer: "Yes, you can learn Generative AI without coding. This course starts with no-code AI tools, prompt engineering, and automation workflows, making it beginner-friendly and accessible for non-technical professionals."
    },
    {
      question: "What career opportunities are available after completing a Generative AI course?",
      answer: "After completing a Generative AI course, you can apply for roles such as: Generative AI Specialist, AI Workflow Automation Specialist, Conversational AI Designer, AI Product Associate, AI Content Systems Builder. These roles are growing rapidly across companies adopting AI tools and automation systems."
    },
    {
      question: "How can I switch my career to Generative AI?",
      answer: "To switch into Generative AI, you need hands-on experience, real-world projects, and a strong portfolio. AcceleratorX helps you build AI workflows, automation systems, and practical use cases that prove your skills to employers."
    },
    {
      question: "What is the salary of a Generative AI professional in India?",
      answer: "The average salary for Generative AI professionals in India is: Entry-level: ₹8–12 LPA, Mid-level: ₹12–25 LPA, Experienced: ₹25–70 LPA. Professionals skilled in Generative AI, ChatGPT, and automation often earn higher due to increasing demand."
    },
    {
      question: "Is this Generative AI course suitable for beginners and non-tech backgrounds?",
      answer: "Yes, this course is designed for beginners, freshers, and non-technical professionals. You don't need coding knowledge to start learning Generative AI, AI tools, and automation workflows."
    },
    {
      question: "What tools and technologies will I learn in this Generative AI course?",
      answer: "You will learn tools such as: ChatGPT and Generative AI platforms, AI automation tools and workflow systems, Prompt engineering techniques, Real-world AI applications. These tools help you build AI-powered solutions and automation systems."
    },
    {
      question: "Do I get a certificate after completing the Generative AI course?",
      answer: "Yes, you will receive a recognized certification, along with a portfolio of real Generative AI projects and automation workflows that strengthen your job applications."
    },
    {
      question: "How long does it take to become job-ready in Generative AI?",
      answer: "Most learners become job-ready within 3 to 6 months, depending on consistency. The course focuses on hands-on learning, AI projects, and practical implementation."
    }
  ];

  const visibleFaqs = isExpanded ? faqs : faqs.slice(0, 5); // Showing exactly 5 as requested by default

  return (
    <div
      id="faq-container"
      style={{
        position: 'relative',
        width: '1239px',
        margin: '40px auto 0', // Balanced gap below the Honest Answers Header
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end', // Aligns the "View more" button to the right
        zIndex: 50,
      }}
    >
      <div style={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
        {visibleFaqs.map((faq, index) => (
          <FAQItem
            key={index}
            question={faq.question}
            answer={faq.answer}
            isOpen={openIndex === index}
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          />
        ))}
      </div>

      {/* View more button */}
      <div
        onClick={() => setIsExpanded(!isExpanded)}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          cursor: 'pointer',
          marginTop: '24px',
          borderBottom: '1px solid rgba(255, 255, 255, 0.4)',
          paddingBottom: '2px',
        }}
      >
        <span
          style={{
            fontFamily: 'Inter',
            fontWeight: 500,
            fontSize: '18px',
            color: '#FFFFFF',
          }}
        >
          {isExpanded ? 'View less' : 'View more'}
        </span>
        <span style={{ fontSize: '18px', color: '#FFFFFF' }}>{isExpanded ? '↑' : '↓'}</span>
      </div>
    </div>
  );
}


import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "What is DigitX AI Agent OS and how does it work?",
    answer: "DigitX AI Agent OS is a revolutionary platform that allows businesses to create, deploy, and manage intelligent AI agents. These agents can automate complex workflows, handle customer interactions, analyze data, and integrate with your existing business tools. Our no-code platform makes it easy to build sophisticated AI automation without technical expertise.",
    value: "item-1",
  },
  {
    question: "How quickly can I deploy AI agents with DigitX?",
    answer:
      "Most businesses can have their first AI agent up and running within minutes using our pre-built templates. For custom agents, deployment typically takes 1-3 days depending on complexity. Our platform is designed for rapid deployment with minimal technical overhead.",
    value: "item-2",
  },
  {
    question:
      "Is my business data secure with DigitX AI Agent OS?",
    answer:
      "Absolutely. DigitX implements enterprise-grade security with SOC 2 compliance, end-to-end encryption, advanced access controls, and regular security audits. Your data is protected with bank-level security protocols and can be deployed on-premise for maximum control.",
    value: "item-3",
  },
  {
    question: "What integrations does DigitX support?",
    answer: "DigitX integrates with 500+ popular business tools including CRM systems (Salesforce, HubSpot), communication platforms (Slack, Teams), databases, APIs, and more. Our platform is designed to work seamlessly with your existing tech stack.",
    value: "item-4",
  },
  {
    question:
      "Do I need technical expertise to use DigitX AI Agent OS?",
    answer: "No technical expertise required! DigitX features a user-friendly, no-code interface that allows business users to create and manage AI agents without programming. However, we also provide advanced customization options for technical teams who want more control.",
    value: "item-5",
  },
  {
    question: "What kind of support does DigitX provide?",
    answer: "DigitX offers comprehensive support including email support for Starter plans, priority support for Professional plans, and 24/7 dedicated support for Enterprise customers. We also provide extensive documentation, video tutorials, and onboarding assistance.",
    value: "item-6",
  },
];

export const FAQSection = () => {
  return (
    <section id="faq" className="container md:w-[700px] py-24 sm:py-32">
      <div className="text-center mb-8">
        <h2 className="text-lg text-yellow-400 text-center mb-2 tracking-wider">
          DigitX FAQs
        </h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold">
          Frequently Asked Questions
        </h2>
      </div>

      <Accordion type="single" collapsible className="AccordionRoot">
        {FAQList.map(({ question, answer, value }) => (
          <AccordionItem key={value} value={value}>
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};

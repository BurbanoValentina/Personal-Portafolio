import { useState, memo } from "react";
import { IconPlus } from "@tabler/icons-react";

interface FAQItemProps {
  question: string;
  answer: string;
  defaultOpen?: boolean;
}

export const FAQItem = memo(({ question, answer, defaultOpen = false }: FAQItemProps): React.JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(defaultOpen);

  return (
    <div
      className={`glass rounded-2xl overflow-hidden transition-all duration-500 ${
        isOpen ? "glow-border" : "hover:glow-border"
      }`}
    >
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="w-full flex items-center justify-between gap-4 p-5 text-left cursor-pointer"
      >
        <h4 className="text-sm font-semibold leading-snug">{question}</h4>
        <div
          className={`w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center shrink-0 transition-transform duration-300 ${
            isOpen ? "rotate-45" : ""
          }`}
        >
          <IconPlus className="w-4 h-4 text-primary" />
        </div>
      </button>

      <div
        className={`grid transition-all duration-300 ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="px-5 pb-5 border-t border-border/50">
            <p className="text-sm text-muted-foreground leading-relaxed pt-4">
              {answer}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
});

FAQItem.displayName = "FAQItem";

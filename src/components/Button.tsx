import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonSize = "sm" | "default" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  size?: ButtonSize;
  children: ReactNode;
}

export const Button = ({ className = "", size = "default", children, ...props }: ButtonProps): React.JSX.Element => {
  const baseClasses =
    "relative overflow-hidden rounded-full font-medium focus-medium focus:outline-none focus-visible:ring-primary bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25";

  const sizeClasses: Record<ButtonSize, string> = {
    sm: "px-2 py-2 text-sm",
    default: "px-3 py-2 text-base",
    lg: "px-4 py-2 text-lg",
  };

  const classes = `${baseClasses} ${sizeClasses[size] ?? ""} ${className}`;

  return (
    <button className={classes} {...props}>
      <span className="relative flex items-center justify-center gap-2">
        {children}
      </span>
    </button>
  );
};

import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "light" | "outline-dark";
type ButtonSize = "md" | "lg";

const base =
  "group/button inline-flex items-center justify-center gap-3 rounded-[3px] font-medium whitespace-nowrap transition-colors duration-300 disabled:pointer-events-none disabled:opacity-60 [&_svg]:size-[1.05em] [&_svg]:shrink-0 [&_svg]:transition-transform [&_svg]:duration-500 [&_svg]:ease-out-expo";

const variants: Record<ButtonVariant, string> = {
  primary: "bg-forest-900 text-bone-50 hover:bg-forest-700",
  secondary: "border border-forest-950/20 text-forest-950 hover:border-forest-950",
  light: "bg-bone-100 text-forest-950 hover:bg-white",
  "outline-dark": "border border-bone-50/25 text-bone-50 hover:border-bone-50/70",
};

const sizes: Record<ButtonSize, string> = {
  md: "h-11 px-4 text-sm",
  lg: "h-14 px-6 text-[0.95rem]",
};

export function buttonStyles({
  variant = "primary",
  size = "md",
  className,
}: { variant?: ButtonVariant; size?: ButtonSize; className?: string } = {}): string {
  return cn(base, variants[variant], sizes[size], className);
}

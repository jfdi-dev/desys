import "../assets/typography.css";

export interface BrandingProps {
  text: string;
  className?: string;
}

export default function Branding({ text, className }: BrandingProps) {
  return <div className={["branding", className ?? ""].join(" ")}>{text}</div>;
}

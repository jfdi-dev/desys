import type { CSSProperties } from "react";
import "./nav-button.css";
import type { Color } from "../color";

export interface NavButtonProps {
  label: string;
  glow: Color;
  url: string;
}

export default function NavButton({ label, glow, url }: NavButtonProps) {
  return (
    <a
      href={url}
      className="nav-button"
      style={{ "--button-glow": glow } as CSSProperties}
    >
      {label}
    </a>
  );
}

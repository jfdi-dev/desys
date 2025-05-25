import type { CSSProperties } from "react";
import type { Color } from "../color";
import "./color-swatch.css";

export interface ColorSwatchProps {
  color: Color;
  name?: string;
}

export default function ColorSwatch({ color, name }: ColorSwatchProps) {
  const style: CSSProperties = {
    backgroundColor: color,
  };

  return (
    <div className="color-swatch" style={style}>
      {name}
    </div>
  );
}

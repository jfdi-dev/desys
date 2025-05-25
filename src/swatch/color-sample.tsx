import type { Color } from "../color";
import ColorSwatch from "./color";

export interface ColorSampleProps {
  colors: Array<Color>;
}

export default function ColorSample({ colors }: ColorSampleProps) {
  return (
    <div className="color-sample">
      {colors
        ? colors.map((color) => <ColorSwatch color={color} />)
        : "No colors provided..."}
    </div>
  );
}

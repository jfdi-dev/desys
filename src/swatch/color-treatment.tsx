import { useEffect, useState } from "react";
import type { Color } from "../color";
import ColorSample from "./color-sample";
import ColorSwatch from "./color";

export type ColorTreatmentProps = {
  name: string;
  color: string;
  labels: boolean;
} & (
  | {
      autogenerate: true;
      treatmentCompleted?: (
        tints: Record<string, Color>,
        shades: Record<string, Color>
      ) => void;
      tints?: number;
      shades?: number;
    }
  | {
      autogenerate: false;
      tints: Array<Color>;
      shades: Array<Color>;
    }
);

const samples = 4;

const clamp = (min: number, max: number) => (value: number) =>
  Math.max(Math.min(value, max), min);

const lerpColor = (target: string) => (color: string, t: number) => {
  const tc = target.slice(1);
  const c = color.slice(1);

  const byteClamp = clamp(0, 255);

  const tr = parseInt(tc.substring(0, 2), 16);
  const tg = parseInt(tc.substring(2, 4), 16);
  const tb = parseInt(tc.substring(4, 6), 16);

  const r = parseInt(c.substring(0, 2), 16);
  const g = parseInt(c.substring(2, 4), 16);
  const b = parseInt(c.substring(4, 6), 16);

  const _r = byteClamp(r + (tr - r) * t);
  const _g = byteClamp(g + (tg - g) * t);
  const _b = byteClamp(b + (tb - b) * t);

  const rr = Math.round(_r).toString(16).padStart(2, "0");
  const gg = Math.round(_g).toString(16).padStart(2, "0");
  const bb = Math.round(_b).toString(16).padStart(2, "0");

  const adjustedColor = `#${rr}${gg}${bb}`;

  return adjustedColor;
};

export default function ColorTreatment({
  color,
  labels = true,
  ...props
}: ColorTreatmentProps) {
  const [tints, setTints] = useState<Array<Color>>([]);
  const [shades, setShades] = useState<Array<Color>>([]);

  useEffect(() => {
    const namedColors =
      (name: string, suffix: string) => (colors: Array<Color>) =>
        colors.reduce(
          (acc, current, index) => ({
            ...acc,
            [`${name}-${suffix}-${index}`]: current,
          }),
          {}
        );

    const namedTints = namedColors(props.name, "tint");
    const namedShades = namedColors(props.name, "shade");

    const lerpToWhite = lerpColor("#ffffff");
    const lerpToBlack = lerpColor("#000000");

    const generateShades = (color: string) =>
      Array.from(Array(samples))
        .map((_, index) => (1.0 / (samples + 1)) * (index + 1))
        .map((t) => lerpToBlack(color, t));

    const generateTints = (color: string) =>
      Array.from(Array(samples))
        .map((_, index) => (1.0 / (samples + 1)) * (index + 1))
        .map((t) => lerpToWhite(color, t));

    if (props.autogenerate) {
      const tints = generateTints(color);
      setTints(tints);
      const shades = generateShades(color);
      setShades(shades);
      if (props.treatmentCompleted) {
        props.treatmentCompleted(namedTints(tints), namedShades(shades));
      }
    } else {
      setTints(props.tints);
      setShades(props.shades);
    }
  }, [color]);

  return (
    <div className="color-treatment">
      {labels && <h2>Tints</h2>}
      {tints && <ColorSample colors={tints.reverse()} />}
      {labels && <h2>Color</h2>}
      <ColorSwatch color={color} />
      {labels && <h2>Shades</h2>}
      {shades && <ColorSample colors={shades} />}
    </div>
  );
}

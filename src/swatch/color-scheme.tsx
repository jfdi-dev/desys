import type { Color } from "../color";
import ColorTreatment from "./color-treatment";
import "./color-scheme.css";

export interface ColorSchemeProps {
  colors: Record<string, Color>;
}

export default function ColorScheme({ colors }: ColorSchemeProps) {
  const treatments: Record<
    string,
    {
      color: Color;
      tints?: Record<string, Color>;
      shades?: Record<string, Color>;
    }
  > = Object.fromEntries(
    Object.entries(colors).map(([name, color]) => [name, { color }])
  );
  const colorsToString = (colors: Record<string, Color>) =>
    Object.entries(colors)
      .map(([name, color]) => `--${name}: ${color};\n`)
      .join("");
  //const logTreatments = () => console.log(treatmentsToString());
  const copyTreatmentsToClipboard = () =>
    navigator.clipboard.writeText(treatmentsToString());
  const treatmentsToString = () =>
    Object.entries(treatments)
      .map(
        ([name, treatment]) =>
          `--${name}: ${treatment.color};\n\n${colorsToString(
            treatment.tints ?? {}
          )}\n\n${colorsToString(treatment.shades ?? {})}\n`
      )
      .join("");
  const treatmentCompleted =
    (name: string) =>
    (tints: Record<string, Color>, shades: Record<string, Color>) =>
      (treatments[name] = { ...treatments[name], tints, shades });

  return (
    <>
      <button onClick={copyTreatmentsToClipboard}>Copy</button>
      <div className="color-scheme">
        {colors &&
          Object.entries(colors).map(([name, color]) => (
            <ColorTreatment
              labels={false}
              name={name}
              treatmentCompleted={treatmentCompleted(name)}
              color={color as string}
              autogenerate={true}
            />
          ))}
      </div>
    </>
  );
}

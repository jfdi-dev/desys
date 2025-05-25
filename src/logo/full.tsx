import Device from "../device/full";
import Branding from "../typography/branding";

import "./logo.css";

export interface LogoProps {
  orientation: "vertical" | "horizontal";
}

export default function Logo({ orientation = "horizontal" }: LogoProps) {
  return (
    <div className={["logo", orientation].join(" ")}>
      <Device />
      <Branding text="jfdi" />
    </div>
  );
}

import type { CSSProperties } from "react";
import type { Color } from "../color";

import "./layer.css";

export interface DeviceLayerProps {
  surfaceColor: Color;
  edgeColor: Color;
  glowDistance?: number;
  verticalOffset?: number;
  animateGlow?: boolean;
  selfContained?: boolean;
}

export type ReducedDeviceLayerProps = Omit<
  DeviceLayerProps,
  "edgeColor" | "surfaceColor"
>;

export default function DeviceLayer({
  animateGlow = false,
  verticalOffset = 0,
  glowDistance = 20,
  ...props
}: DeviceLayerProps) {
  const styleGlow: CSSProperties = {
    fill: "none",
    stroke: props.edgeColor,
    strokeWidth: 5,
    translate: `0px ${verticalOffset}px`,
    filter: `blur(${glowDistance}px)`,
  };

  const styleSurface: CSSProperties = {
    fill: props.surfaceColor,
    stroke: props.edgeColor,
    strokeWidth: 5,
    translate: `0px ${verticalOffset}px`,
  };

  const scaleX = 4 / 5;
  const scaleY = scaleX * -1;
  const skew = 0.5;
  const matrix = `matrix(${scaleX}, ${skew}, ${scaleY}, ${skew}, 50, 10)`;

  const rect = {
    transform: matrix,
    ry: 4,
    width: 50,
    height: 50,
  };

  return (
    <g>
      <rect
        style={styleGlow}
        className={animateGlow ? "animate-glow" : ""}
        {...rect}
      />
      <rect style={styleSurface} {...rect} />
    </g>
  );
}

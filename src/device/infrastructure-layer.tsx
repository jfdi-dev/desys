import DeviceLayer, { type ReducedDeviceLayerProps } from "./layer";

import "../assets/colors.css";

export const InfrastructureLayer = (props: ReducedDeviceLayerProps) => (
  <DeviceLayer
    surfaceColor="var(--infrastructure-surface)"
    edgeColor="var(--infrastructure-edge)"
    {...props}
  />
);

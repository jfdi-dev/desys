import DeviceLayer, { type ReducedDeviceLayerProps } from "./layer";

import "../assets/colors.css";

export const ApplicationLayer = (props: ReducedDeviceLayerProps) => (
  <DeviceLayer
    surfaceColor="var(--application-surface)"
    edgeColor="var(--application-edge)"
    {...props}
  />
);

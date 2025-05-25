import DeviceLayer, { type ReducedDeviceLayerProps } from "./layer";

import "../assets/colors.css";

export const PipelineLayer = (props: ReducedDeviceLayerProps) => (
  <DeviceLayer
    surfaceColor="var(--pipeline-surface)"
    edgeColor="var(--pipeline-edge)"
    {...props}
  />
);

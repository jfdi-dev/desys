import { InfrastructureLayer } from "./infrastructure-layer";
import { PipelineLayer } from "./pipeline-layer";
import { ApplicationLayer } from "./application-layer";

import "./layer.css";

export default function Device() {
  return (
    <svg style={{ overflow: "visible" }} width={100} height={100}>
      <g className="animate-bob">
        <InfrastructureLayer
          verticalOffset={24}
          glowDistance={5}
          animateGlow={true}
        />
        <PipelineLayer
          verticalOffset={12}
          glowDistance={5}
          animateGlow={true}
        />
        <ApplicationLayer glowDistance={5} animateGlow={true} />
      </g>
    </svg>
  );
}

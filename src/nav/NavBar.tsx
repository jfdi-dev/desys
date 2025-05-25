import NavButton from "../button/NavButton";
import "./nav-bar.css";

export default function NavBar() {
  return (
    <div className="nav-bar">
      <NavButton
        url="#infrastructure"
        label="Infrastructure"
        glow="var(--infrastructure-edge)"
      />
      <NavButton url="#pipeline" label="Pipeline" glow="var(--pipeline-edge)" />
      <NavButton
        url="#application"
        label="Application"
        glow="var(--application-edge)"
      />
    </div>
  );
}

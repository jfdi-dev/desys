import SecondaryButton from "./SecondaryButton";
import "./top-bar.css";
import GitHubIcon from "../assets/github-icon.svg";

export default function TopBar() {
  return (
    <div className="top-bar">
      <div className="right">
        <SecondaryButton
          url="https://docs.jfdi.dev"
          label="Docs"
          external={true}
        />
        <SecondaryButton
          url="https://github.com/jfdi-dev"
          label="GitHub"
          icon={GitHubIcon}
        />
      </div>
    </div>
  );
}

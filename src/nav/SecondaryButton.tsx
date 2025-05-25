import ExternalLinkIcon from "../assets/external-link.svg";
import "./secondary-button.css";

export interface SecondaryButtonProps {
  label: string;
  url: string;
  external?: boolean;
  icon?: string;
}

export default function SecondaryButton({
  label,
  url,
  icon,
  external = false,
}: SecondaryButtonProps) {
  return (
    <div className="secondary-button">
      <a href={url}>
        {label}
        {external && <img src={ExternalLinkIcon} className="icon small" />}
        {icon && <img src={icon} className="icon small" />}
      </a>
    </div>
  );
}

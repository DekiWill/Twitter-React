import { Sparkle } from "phosphor-react";
import './Header.css'

interface Header {
    title: string
}

export function Header(props: Header) {
  return (
    <div className="timeline-header">{props.title}
    <Sparkle/>
    </div>
  );
}
import React from 'react';

interface SideNavButtonProps {
  index?: number;
  text: string;
  Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  setActiveButton: Function;
}

export default function SideNavButton({ index, text, Icon, setActiveButton }: SideNavButtonProps) {
  return (
    <div onClick={() => {setActiveButton(index, text)}} className="side-nav-button">
      <div className="side-nav-button-content">
        <Icon className="side-nav-button-icon" />
        <div className="side-nav-button-text">{text}</div>
      </div>
    </div>
  );
}

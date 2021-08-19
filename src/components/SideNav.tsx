import React from 'react';
import SideNavButtons from './SideNavButtons';


interface SideNavProps {
  activeButtonKey: number;
  setActiveButton: Function;
}

export default function SideNav ({ activeButtonKey, setActiveButton }: SideNavProps) {
  return (
    <div className="side-nav">
      <SideNavButtons
        activeButtonKey={activeButtonKey}
        setActiveButton={setActiveButton}
      />
    </div>
  );
}

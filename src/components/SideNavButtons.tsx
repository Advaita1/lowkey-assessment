import React from 'react';
import ActiveButton from './ActiveButton';
import SideNavButton from './SideNavButton';
import buttonData from '../buttonData';

interface SideNavButtonsProps {
  activeButtonKey: number;
  setActiveButton: Function;
}

export default function SideNavButtons ({ activeButtonKey, setActiveButton }: SideNavButtonsProps) {
  return (
    <div className="side-nav-buttons">
      <ActiveButton activeButtonKey={activeButtonKey}/>
        {
          buttonData.map(
            (data, index) => <SideNavButton
                                key={index}
                                index={index}
                                Icon={data.icon}
                                text={data.text}
                                setActiveButton={setActiveButton}
                              />
          )
        }
    </div>
  );
}

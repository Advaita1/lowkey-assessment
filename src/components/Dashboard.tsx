import React, { useState, useCallback } from 'react';
import BigText from './BigText';
import SideNav from './SideNav';
import buttonData from '../buttonData';

export default function Dashboard() {
  const [activeButton, setActiveButton] = useState({
    key: 0,
    text: buttonData[0].text
  });

  const setActiveButtonWapper = useCallback((key, text) => {
    setActiveButton({ key, text });
  }, [setActiveButton]);

  return (
    <div className="dashboard">
      <SideNav
        activeButtonKey={activeButton.key}
        setActiveButton={setActiveButtonWapper}
      />
      <BigText text={activeButton.text} />
    </div>
  );
}

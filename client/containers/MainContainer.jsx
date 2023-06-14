import NavBarContainer from './NavBarContainer';
import HackContainer from './HackContainer';
import React, { useEffect, useState } from "react";

const MainContainer = ({ user, setUser }) => {
  const [category, setCategory] = useState('Codesmith');
  const [hacks, setHacks] = useState([]);


  // Render NavBarContainer and HackContainer
  return (
    <div>
      <NavBarContainer user={user} setUser={setUser} category={category} setCategory={setCategory} hacks={hacks} setHacks={setHacks} />
      <HackContainer category={category} setCategory={setCategory} hacks={hacks} />
    </div>
  );
};

export default MainContainer;
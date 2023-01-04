
import { useState } from 'react';
function Navbar() {

  const [loggaut,loggain] = useState('Logga in');
  
  const handleLoggain = (name) => {
    loggain(name);
  };
  return (
    <div className="navbar">
      <div className="container">
        <h2>Bästa böcker</h2>
        <button onClick={()=>{handleLoggain('Matewos')}}>{loggaut}</button>
      </div>
    </div>
    

  );
}

export default Navbar;

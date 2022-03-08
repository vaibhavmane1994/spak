import React from 'react';

function Navbar(props) {
    return (
        <div style={navbarStyle}>
          <h1>This is Navbar</h1>  
        </div>
    );
}

  const navbarStyle= {
      background : 'lightgray',
      width : '250px',
      height:'500px',
      padding : '10px',
      float:'left'

  }

export default Navbar;
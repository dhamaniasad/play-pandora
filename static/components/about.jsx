import React from "react";
import { Navbar, NavItem, NavDropdown, MenuItem, Nav } from 'react-bootstrap';

class About extends React.Component {
  render() {
    return (
      <div>
         <h2>Song recommendations from your PlayList (heh!)</h2>
         <p>
           Build personalized Pandora radio stations based on your Play Music playlists! 
           The Music Genome Project is excellent, and has frequently helped me uncover great new additions for my music collection.
           All of my music is in Google Play though, that's no good! Fret not! Play Pandora (only two hard things in computer science) is here to save your life! 
         </p>
       </div>
    )
  }
}

export default About;

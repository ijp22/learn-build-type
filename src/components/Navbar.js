import { Link } from 'react-router-dom';

// Styled Components
import { StyledNavbar, StyledNavBrand, StyledNavItem, StyledNavLink, StyledAccent } from '../styled';

const Navbar = () => {
  return (
    <StyledNavbar>
      <StyledNavBrand>
        <Link to='/'>
          Learn.Build.<StyledAccent>Type</StyledAccent>
        </Link>
      </StyledNavBrand>
      <StyledNavItem>
        <li>
          <StyledNavLink to='/'>Home</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to='/high-scores'>High Scores</StyledNavLink>
        </li>
      </StyledNavItem>
    </StyledNavbar>
  );
};
export default Navbar;

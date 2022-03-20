import { Nav } from './Header.styles';
import ShopRounded from '@material-ui/icons/ShopRounded';

const Header = () => {
  return (
    <Nav>
      <ShopRounded style={{ fontSize: '3rem', color: 'lightblue' }} />
      <p>
        <span> jS</span>hop
      </p>
    </Nav>
  );
};

export default Header;

import { FooterWrapper, Logo } from './Footer.styles';

import ShopRounded from '@material-ui/icons/ShopRounded';

const Footer = () => {
  return (
    <FooterWrapper>
      <Logo>
        <ShopRounded style={{ fontSize: '3rem', color: 'white' }} />
        <p>
          <span> jS</span>hop
        </p>
      </Logo>

      <div>
        <h3>CUSTOMER SERVICE</h3>
        <p>(123) 123-123123</p>
        <p>Help Center</p>
        <p>Track an Order</p>
        <p>Return an Item</p>
        <p>Return Policy</p>
        <p>Privacy & Security</p>
        <p>Feedback</p>
      </div>
    </FooterWrapper>
  );
};

export default Footer;

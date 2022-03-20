import {
  Wrapper,
  HeroBtn,
  CarouseleItemContainer,
  Section,
} from './Hero.styles';
import KeyBoardArrowDown from '@material-ui/icons/KeyboardArrowDown';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

type carItem = {
  img: string;
  desc: string;
};

const carItems: carItem[] = [
  { img: './images/shop.jpg', desc: 'Fashionable clothes' },
  { img: './images/tech.jpg', desc: 'Newest tech' },
  { img: './images/fashion.jpg', desc: 'Best quality' },
];

const Hero = () => {
  return (
    <>
      <Wrapper>
        <img src='./images/hero.jpg' alt='' />
        <h2>
          Everyting you need <span>in one place</span>
        </h2>
        <a href='#shop'>
          <HeroBtn>
            Shop Now
            <KeyBoardArrowDown />
          </HeroBtn>
        </a>
      </Wrapper>

      <Section colored>
        <h1>Why are we the best?</h1>
        <AliceCarousel
          infinite
          autoPlayInterval={2000}
          disableButtonsControls
          autoPlay
          mouseTracking
          items={carItems.map(({ img, desc }) => (
            <CarouseleItemContainer>
              <img src={img} alt='' />
              <div className='overlay'>
                <p>{desc}</p>
              </div>
            </CarouseleItemContainer>
          ))}
        />
      </Section>
    </>
  );
};

export default Hero;

import ShopSection from './Components/ShopSection/ShopSection';
import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import { Global } from './GlobalStyles';
import Footer from './Components/Footer/Footer';

export type CartItemType = {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  amount: number;
};

function App() {
  return (
    <>
      <Global />
      <Header />
      <Hero />
      <ShopSection />
      <Footer />
    </>
  );
}

export default App;

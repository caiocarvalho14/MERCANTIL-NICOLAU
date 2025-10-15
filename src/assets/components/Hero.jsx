import Ecommerce1 from '../png/ecommerce1.png'
import Ecommerce1m from '../png/ecommerce1m.png'

import Ecommerce2 from '../png/ecommerce2.png'
import Ecommerce2m from '../png/ecommerce2m.png'

import Ecommerce3 from '../png/ecommerce3.png'
import Ecommerce3m from '../png/ecommerce3m.png'

import Carousel from 'react-bootstrap/Carousel';
function Hero() {
  return (
    <div style={{ paddingTop: '62px' }} id='inicio'>
      <Carousel>
        <Carousel.Item interval={3000}>
          <img style={{ width: '100%' }} className='d-none d-md-block' src={Ecommerce1} alt="" />
          <img style={{ width: '100%' }} className='d-md-none' src={Ecommerce1m} alt="" />
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img style={{ width: '100%' }} className='d-none d-md-block' src={Ecommerce2} alt="" />
          <img style={{ width: '100%' }} className='d-md-none' src={Ecommerce2m} alt="" />
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img style={{ width: '100%' }} className='d-none d-md-block' src={Ecommerce3} alt="" />
          <img style={{ width: '100%' }} className='d-md-none' src={Ecommerce3m} alt="" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
export default Hero;
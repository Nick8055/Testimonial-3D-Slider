import './App.css';  
import { useState } from 'react';
import Slider from 'react-slick';
import pic from './profile pic.jpg';
import {FaArrowRight, FaArrowLeft} from 'react-icons/fa';


const Items = ({dp, cname, des, date}) =>{
  return(
    <div className='item'>
      <img id='dp' src={dp}/>
      <div className='cnamedesdate'>
        <h1 className="cname">{cname}</h1>
        <h1 className="des">{des}</h1>
        <h1 className='date'>{date}</h1>
      </div>
    </div>
  )
}

const images1 = [
 <Items date={'1st August 2022'} dp={pic} cname={'Gary Clone 1'} des={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse '}/>,
 <Items date={'1st August 2022'} dp={pic} cname={'Gary Clone 2'} des={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse '}/>,
 <Items date={'1st August 2022'} dp={pic} cname={'Gary Clone 3'} des={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse '}/>,
 <Items date={'1st August 2022'} dp={pic} cname={'Gary Clone 4'} des={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse '}/>,
];

const images = [
  pic,pic,pic,pic,
];


const App = () => {

  let x = window.innerWidth;
  let y  = 0;

  if(x >= 900){
    y = 3;
  }
  else{
    y = 1;
  }

  const NextArrow = ({onClick}) => {
    return(
      <div className='arrow next' onClick={onClick}>
        <FaArrowRight />
      </div>
    )
  }

  const PrevArrow = ({onClick}) => {
    return(
      <div className='arrow prev' onClick={onClick}>
        <FaArrowLeft />
      </div>
    )
  }

  const [imageIndex, setImageIndex] = useState(0);

  const settings = {
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    lazyload: true,
    speed: 300,
    slidesToShow: y,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow/>,
    prevArrow: <PrevArrow/>,
    beforeChange: (current, next) => setImageIndex(next),
  };

  return(
    <div className='App'>
      <h1 className='Heading'>Testimonials</h1>
      <h1 className='Slogan'>Our Clinicians love us. We are more capable, yet Pocket Friendly.</h1>
      {/* <h1>{x}</h1> */}
      <Slider {...settings}>
        {images1.map((div, idx) => (
          <div className={idx === imageIndex ? "slide activeSlide" : "slide"}>
            {div}
          </div>
        )

        )}
      </Slider>

      
    </div>
  )
}

export default App;





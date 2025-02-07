// import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import classNames from './styles.module.scss';

const slideOptions = {
  nfinite: false,
  centerMode: false,
  slidesToShow: 1,
  variableWidth: false,
  dots: true,
  arrows: false,
  infinite: true,
  speed: 500,
  adaptiveHeight: true,
};

export function ImageSlider() {
  return (
    <div className={`${classNames.slider} w-full max-w-full relative`}>
      {/*<Slider {...slideOptions} className={'z-10'}>*/}
      {/*{casinoActiveSlides.map((slide, index) => (*/}
      {/*  <div key={index}>*/}
      {/*    <div className={'rounded-[36px] relative overflow-hidden'}>*/}
      {/*      <div className={'absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black to-transparent'}></div>*/}
      {/*      <picture className="w-full h-full object-cover">*/}
      {/*        <source media="(max-width: 480px)" srcSet={slide.imageMobile} />*/}
      {/*        <source media="(min-width: 481px)" srcSet={slide.imageDesktop} />*/}
      {/*        <img src={slide.imageDesktop} alt={slide.text} />*/}
      {/*      </picture>*/}
      {/*      <div*/}
      {/*        className={`absolute bottom-6 left-6 md:bottom-8 md:left-8 xl:bottom-12 xl:left-12 2xl:bottom-14 2xl:left-14`}*/}
      {/*      >*/}
      {/*        <h2 className="text-white text-base mb-3 xl:mb-5 2xl:mb-7">{slide.buttonText}</h2>*/}
      {/*        <Button className={'uppercase'} onClick={() => (window.location.href = slide.buttonUrl)}>*/}
      {/*          <span>{slide.buttonText}</span>*/}
      {/*        </Button>*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*))}*/}
      {/*</Slider>*/}
    </div>
  );
}

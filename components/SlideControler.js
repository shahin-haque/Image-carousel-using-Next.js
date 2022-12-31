import Image from 'next/image';
import React, { useEffect } from 'react';

const SlideControler = ({ SlideIndex, setSlideIndex, SliderImages }) => {
  const ChangePrevImg = () => {
    setSlideIndex((SlideIndex) => SlideIndex - 1);
    if (SlideIndex === 0) {
      setSlideIndex(SliderImages.length - 1);
    }
  };

  const ChangeNextImg = () => {
    setSlideIndex((SlideIndex) => SlideIndex + 1);
    if (SlideIndex === SliderImages.length - 1) {
      setSlideIndex(0);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      ChangeNextImg();
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  });

  return (
    <>
      <div className="controsl prev">
        <Image
          src="/chevron-left-circle.svg"
          alt="chevron-left-circle"
          width={35}
          height={35}
          onClick={() => ChangePrevImg()}
        />
      </div>
      <div className="controsl next">
        <Image
          src="/chevron-right-circle.svg"
          alt="chevron-rright-circle"
          width={35}
          height={35}
          onClick={() => ChangeNextImg()}
        />
      </div>
    </>
  );
};

export default SlideControler;

import { useState } from 'react';
import Image from 'next/image';
import i1 from '../public/1.jpg';
import i2 from '../public/2.jpg';
import i3 from '../public/3.jpg';
import i4 from '../public/4.jpg';
import i5 from '../public/5.jpg';

import SlideControler from '../components/SlideControler';

const SliderImages = [i1, i2, i3, i4, i5];

export default function Home() {
  const [SlideIndex, setSlideIndex] = useState(0);

  return (
    <main>
      <Image
        src={SliderImages[SlideIndex]}
        alt="nature image"
        placeholder="blur"
      />
      <SlideControler
        SlideIndex={SlideIndex}
        setSlideIndex={setSlideIndex}
        SliderImages={SliderImages}
      />
    </main>
  );
}

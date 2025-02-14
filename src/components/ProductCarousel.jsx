import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { useMediaQuery } from "@uidotdev/usehooks";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const ProductCarousel = ({ id, content }) => {
  const containerRef = useRef(null);
  const contentRef = useRef(null);
  const sectionRefs = useRef([]);
  const imageRefs = useRef([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const isMobile = useMediaQuery("only screen and (max-width : 1024px)");

  useEffect(() => {
    const ctx = gsap.context(() => {
      sectionRefs.current.forEach((section, index) => {
        ScrollTrigger.create({
          trigger: section,
          start: 'top 80%',
          end: 'bottom 20%',
          onEnter: () => setCurrentIdx(index),
          onEnterBack: () => setCurrentIdx(Math.max(0, index)),
        });
      });

      ScrollTrigger.create({
        trigger: containerRef.current,
        start: 'top top',
        endTrigger: contentRef.current,
        end: 'bottom bottom',
        pin: '.image-container',
        pinSpacing: false,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const tl = gsap.timeline();
    
    tl.to(imageRefs.current, {
      opacity: 0,
      duration: 0.1,
      ease: 'power2.out',
    });

    tl.to(imageRefs.current[currentIdx], {
      opacity: 1,
      duration: 0.1,
      ease: 'power2.in',
    });
  }, [currentIdx]);

  if (isMobile) {
    <section>
      <div>here</div>
    </section>
  }

  return (
    <section id={id} ref={containerRef} className="relative flex flex-row items-start justify-between w-full px-4 component-wrapper">
      <div ref={contentRef} className="w-1/2 flex flex-col gap-5">
        {content.map((item, index) => (
          <div
            key={index}
            ref={(el) => (sectionRefs.current[index] = el)}
            className="w-full min-h-screen flex text-sm sm:text-lg py-5 text-white flex-col justify-center gap-10"
          >
            <div className="bg-gradient-to-r from-[#917efe] to-white text-transparent bg-clip-text text-2xl sm:text-5xl">{item.name}</div>
            {item.desc}
          </div>
        ))}
      </div>

      <div className="image-container w-2/5">
        <div className="fixed top-0 h-screen w-full flex items-center justify-center">
          {content.map((item, index) => 
          (<div
            ref={(el) => (imageRefs.current[index] = el)}
            className="w-full h-4/5 absolute top-1/10 left-0 transition-all duration-300 flex justify-end"
            style={{ opacity: index === currentIdx ? 1 : 0 }}>
              <img
                key={index}
                src={item.img}
                className="object-contain"
                alt={item.name}
              />
            </div>)
          )}
        </div>
      </div>
    </section>
  );
};

export default ProductCarousel;

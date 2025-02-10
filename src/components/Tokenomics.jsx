import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const Counter = ({ value }) => {
  const ref = useRef(null);
  const [count, setCount] = useState("0"); // Start from "0" for smooth animation

  useEffect(() => {
    const match = value.match(/(\d+)([a-z%]*)/i);
    if (!match) return;

    const targetNumber = parseInt(match[1], 10);
    const unit = match[2] || "";

    const obj = { num: 0 };

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ref.current,
        start: "top 95%",
        toggleActions: "restart pause resume reset",
      },
    });

    tl.to(obj, {
      num: targetNumber,
      duration: 2,
      ease: "power2.out",
      onUpdate: () => {
        setCount(`${Math.round(obj.num)}${unit}`);
      },
    });

    return () => {
      tl.kill();
    };
  }, [value]);

  return (
    <span ref={ref}>
      {count}
    </span>
  );
};

const stats = [
  { stat: '10m', desc: 'Token Supply' },
  { stat: '5%', desc: 'Buy/Sell Tax' },
  { stat: '3%', desc: 'Max Wallet' },
  { stat:'0%', desc:'Transfer' }
]

const Tokenomics = () => (
  <section id="Tokenomics" className="py-12 lg:py-24 relative">
    <div className="w-full px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 2xl:px-52 flex flex-col gap-5 lg:gap-10">
      <div className="bg-clip-text text-transparent bg-gradient-to-l from-[#917efe] to-white text-center text-[18px] lg:text-[52px] mb-6 lg:mb-14">Tokenomics</div>
      <div className="flex flex-row justify-center">
        {stats.map((stat, index) => (
          <div key={index} className={`flex flex-col text-center px-5 lg:px-10 border-[#4a4a4a] ${index!==stats.length-1 ? 'lg:border-r':''}`}>
            <div className="bg-clip-text text-transparent bg-gradient-to-l from-[#fe7ef1] to-white mb-4 text-[18px] lg:text-[52px]"><Counter value={stat.stat} /></div>
            <div className="text-white text-[10px] lg:text-[14px]">{stat.desc}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default Tokenomics;
import { useRef, useEffect } from "react";
import { motion, px } from "framer-motion";
import ApertureCard from "./common/ApertureCard";
import eyeIcon from "../images/eye2.png";
import goldeneyeIcon from "../images/goldeneye2.png";
import mroIcon from "../images/mro2.png";
import thirdeyeIcon from "../images/thirdeye.png";
import video from "/teaser.mp4";
import "../../src/App.css";

const ethereumData = {
  title: "",
  content: "Third Eye isn’t just another market tracker—it’s a hyper-specialized intelligence engine built solely for pumpfun dynamics. While Glimpse, Aperture and God's Eye masters the broader market, The Third Eye focuses exclusively on detecting, tracking, and capitalizing on high-momentum pumpfun plays before they explode. Powered by AI-driven PnL tracking, liquidity-to-volume mapping, and social sentiment surges, Apex identifies coordinated accumulation patterns, influencer-driven hype, and pre-pump signals with precision. Its adaptive automation lets you customize alerts, sniper entries, and strategic exits, ensuring you’re positioned ahead of the FOMO wave—not chasing it. With zero-latency execution and fully customizable strategy tools, Third Eye transforms chaos into opportunity, putting you in command of the fastest, most volatile moves in the market.",
  data: [
    { title: "Filters", content: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit." },
    { title: "Filters", content: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit." },
    { title: "Filters", content: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit." }
  ]
};

const solanaData = {
  title: "",
  content: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
  data: [
    { title: "Filters", content: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit." },
    { title: "Filters", content: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit." },
    { title: "Filters", content: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit." }
  ]
};

export default function Aperture() {
  const eyeIconRef = useRef(null);
  const eyeVideoRef = useRef(null);
  const mroIconRef = useRef(null);
  const mroVideoRef = useRef(null);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  useEffect(() => {
    if (!eyeIconRef.current || !eyeVideoRef.current || !mroIconRef.current || !mroVideoRef.current) return;
    const observer = new ResizeObserver(() => {
      const size = (window.innerHeight - eyeIconRef.current.clientHeight) / 2;
      eyeIconRef.current.style.top = `${size}px`;
      eyeVideoRef.current.style.top = `calc(50% - ${eyeVideoRef.current.clientHeight / 2}px`;
      mroIconRef.current.style.top = `calc(50% - ${mroIconRef.current.clientHeight / 2}px`;
      mroVideoRef.current.style.top = `calc(50% - ${mroVideoRef.current.clientHeight/2}px`;
    });

    observer.observe(eyeIconRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="Aperture" className="py-12 lg:py-24 flex flex-col gap-12 relative">
      <div className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 2xl:px-52 grid md:grid-row-2 gap-12 lg:gap-4 xl:gap-12">
        <div className="text-center">
          <span className="text-5xl bg-gradient-to-r from-pink-500 to-blue-500 text-transparent bg-clip-text">
            Third Eye
          </span>
        </div>
        <div className="grid grid-cols-3 gap-12 lg:gap-4 xl:gap-12">
          {/* Eye Section */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="relative"
          >
            <img
              ref={eyeIconRef}
              src={thirdeyeIcon}
              alt="Eye Icon"
              className="w-full h-auto md:w-full z-[9] sticky"
            />
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-col flex-1 gap-4 xl:gap-8 items-center"
          >
            <ApertureCard data={ethereumData} />
            <ApertureCard data={solanaData} />
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-col flex-1 gap-4 xl:gap-8 items-center"
          >
            <video
              ref={eyeVideoRef}
              controls
              loop
              muted
              className="w-full h-auto sticky"
            >
              <source src={video} type="video/mp4" />
            </video>
          </motion.div>
        </div>
      </div>

      <div className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 2xl:px-52 grid md:grid-row-2 gap-12 lg:gap-4 xl:gap-12">
        <div className="text-center">
          <span className="text-5xl bg-gradient-to-r from-pink-500 to-blue-500 text-transparent bg-clip-text">
            Oculus AI
          </span>
        </div>
        <div className="grid grid-row-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-12 lg:gap-4 xl:gap-12">
          {/* Eye Section */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-col flex-1 gap-4 xl:gap-8 items-center md:col-span-2 xl:col-span-2 lg:col-span-2 relative"
          >
            {/* Eye Image */}
            <img
              ref={mroIconRef}
              src={mroIcon}
              alt="Eye Icon"
              className="w-full h-auto md:w-full z-[9]"
            />
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-col flex-1 gap-4 xl:gap-8 items-center col-span-1"
          >
            <ApertureCard data={ethereumData} />
            <ApertureCard data={solanaData} />
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-col flex-1 gap-4 xl:gap-8 items-center col-span-1"
          >
            {/* Video */}
            <video
              ref={mroVideoRef}
              autoPlay
              loop
              muted
              className="w-full h-full object-cover"
            >
              <source src={video} type="video/mp4" />
            </video>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
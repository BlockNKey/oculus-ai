import { motion } from "framer-motion";
import { GoCheckCircle } from "react-icons/go";
import { RiCloseCircleLine } from "react-icons/ri";
import { IoStar } from "react-icons/io5";
import { Fragment, useEffect, useRef } from "react";
import ethereumIcon from "../images/ethereum.png";


const ethereumData = [
  { label: "Verified", isDev: true, value: [1, 1, 1] },
  { label: "Locked Liquidity", isDev: false, value: [0, 1, 1] },
  { label: "Funding Origin", isDev: false, value: [1, 1, 1] },
  { label: "Block 0 Snipers", isDev: false, value: [0, 1, 1] },
];

const solanaData = [
  { label: "Authoratative", isDev: false, value: [1, 1, 1] },
  { label: "Exclude Bundled Launches", isDev: false, value: [0, 0, 0] },
  { label: "PF Bonding Duration", isDev: false, value: [0, 0, 0] },
];

const allData = [
  { label: "Pair Age", isDev: false, value: [0, 1, 1] },
  { label: "Initial Liquidity", isDev: false, value: [1, 1, 1] },
  { label: "Burned Liquidity", isDev: false, value: [0, 1, 1] },
  { label: "Socials", isDev: false, value: [0, 1, 1] },
  { label: "Volume", isDev: false, value: [0, 1, 1] },
  { label: "Socials", isDev: false, value: [0, 1, 1] },
  { label: "Trending", isDev: false, value: [1, 1, 1] },
  { label: "Dextools", isDev: false, value: [1, 1, 1] },
  { label: "Dexscreener", isDev: false, value: [0, 0, 1] },
  { label: "Supply Distro", isDev: false, value: [0, 0, 0] },
  { label: "Marketcap", isDev: false, value: [0, 0, 0] },
  { label: "Volume", isDev: false, value: [0, 1, 1] },
  { label: "Whitelist", isDev: false, value: [0, 0, 0] },
  { label: "Blacklist", isDev: false, value: [0, 0, 0] },
  { label: "Simulate Buys", isDev: false, value: [0, 0, 0] },
  { label: "Simulate Sells", isDev: false, value: [0, 0, 0] },
];

export default function Tiers() {
  const glimpseRef = useRef(null);
  const apertureRef = useRef(null);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0 },
  };

  useEffect(() => {
    if (!apertureRef.current || !glimpseRef.current) return;

    const observer = new ResizeObserver(() => {
      glimpseRef.current.style.height = `${apertureRef.current.clientHeight}px`;
    });

    observer.observe(apertureRef.current);

    return () => observer.disconnect();
  }, [apertureRef.current]);

  return (
    <section id="Tires" className="py-48 text-white">
      <div className="w-full px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 2xl:px-52">
        <div className="relative flex flex-col gap-8">
          <div className="px-4 lg:px-20 pt-10 md:pt-8 pb-8 border border-[#e5e7eb] tiers-gradient rounded-xl gap-x-9 gap-y-5 grid grid-cols-5">
            <div className="col-span-2" />
            <div className="flex flex-col items-center gap-5 text-center">
              <img src="/glimpse.png" loading="lazy" alt="glimpse" ref={glimpseRef} />
              <div className="md:flex text-white text-xs md:text-xl xl:text-3xl">
                Glimpse
              </div>
              <div className="text-[8px] md:text-xs xl:text-lg">15,000 OCU</div>
            </div>
            <div className="flex flex-col items-center gap-5 text-center">
              <img src="/aperture.png" loading="lazy" alt="aperture" ref={apertureRef} />
              <div className="md:flex text-white text-xs md:text-xl xl:text-3xl">
                Aperture
              </div>
              <div className="text-[8px] md:text-xs xl:text-lg">15,000 OCU</div>
            </div>
            <div className="flex flex-col items-center gap-5 text-center">
              <img src="/goldeneye.png" loading="lazy" alt="god's eye" />
              <div className="md:flex text-white text-xs md:text-xl xl:text-3xl">
                God's Eye
              </div>
              <div className="text-[8px] md:text-xs xl:text-lg">15,000 OCU</div>
            </div>

            {ethereumData.map((item, index) => (
              <Fragment
                key={index}
              >
                <div className="flex flex-1 flex-row gap-2 col-span-2 items-center">
                  <div className="text-[12px] md:text-lg lg:text-2xl size-[fit-content]">{item.label}</div>
                  <div className="font-semibold text-[8px] md:text-xs lg:text-md text-[#917efe] bg-[#917efe33] rounded-full leading-none px-2 size-[fit-content]">eth</div>
                </div>
                {item.value.map((value, value_index) =>
                  <div key={value_index} className="flex justify-center">
                    {value ? (
                        <img src="/check-pink.svg" className="checkmark-pink rounded-full size-[20px] md:size-[40px]" />
                      ) : (
                        <img src="/times.svg" className="size-[20px] md:size-[40px]" />
                      )}
                  </div>
                )}
              </Fragment>
            ))}

            {solanaData.map((item, index) => (
              <Fragment
                key={index}
              >
                <div className="flex flex-1 flex-row gap-2 col-span-2 items-center">
                  <div className="text-[12px] md:text-lg lg:text-2xl size-[fit-content]">{item.label}</div>
                  <div className="font-semibold text-[8px] md:text-xs lg:text-md text-[#917efe] bg-[#917efe33] rounded-full leading-none px-2 size-[fit-content]">sol</div>
                </div>
                {item.value.map((value, value_index) =>
                  <div key={value_index} className="flex justify-center">
                    {value ? (
                        <img src="/check-pink.svg" className="checkmark-pink rounded-full size-[20px] md:size-[40px]" />
                      ) : (
                        <img src="/times.svg" className="size-[20px] md:size-[40px]" />
                      )}
                  </div>
                )}
              </Fragment>
            ))}

            {allData.map((item, index) => (
              <Fragment
                key={index}
              >
                <div className="flex flex-1 flex-row gap-2 col-span-2 items-center">
                  <div className="text-[12px] md:text-lg lg:text-2xl size-[fit-content]">{item.label}</div>
                </div>
                {item.value.map((value, value_index) =>
                  <div key={value_index} className="flex justify-center">
                    {value ? (
                        <img src="/check-pink.svg" className="checkmark-pink rounded-full size-[20px] md:size-[40px]" />
                      ) : (
                        <img src="/times.svg" className="size-[20px] md:size-[40px]" />
                      )}
                  </div>
                )}
              </Fragment>
            ))}
          </div>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-4"
          >
            <motion.div
              variants={item}
              className="tiers-gradient1 border border-[#e5e7eb] p-4 rounded-lg flex flex-col items-start gap-4"
            >
              <div className="flex items-center gap-2">
                <IoStar className="text-purple-100 text-2xl" />
                <span className="text-xl">GLLIMPSE</span>
              </div>
              <span>Free-Spectre AI Search Engine is free at its core</span>
            </motion.div>
            <motion.div
              variants={item}
              className="tiers-gradient1 border border-[#e5e7eb] p-4 rounded-lg flex flex-col items-start gap-4"
            >
              <div className="flex items-center gap-2">
                <IoStar className="text-pink-400 text-2xl" />
                <span className="text-xl">APERTURE</span>
              </div>
              <span>Standard-0.005% of Tokens (500 SPECTRE tokens)</span>
            </motion.div>
            <motion.div
              variants={item}
              className="tiers-gradient1 border border-[#e5e7eb] p-4 rounded-lg flex flex-col items-start gap-4"
            >
              <div className="flex items-center gap-2">
                <IoStar className="text-green-200 text-2xl" />
                <span className="text-xl">GOD'S EYE</span>
              </div>
              <span>Advanced-0.01% of Tokens(1000 SPECTRE tokens)</span>
            </motion.div>
            {/* <motion.div
      variants={item} className="bg-neutral-950 border border-gray-900 p-4 rounded-lg flex flex-col items-start gap-4">
              <div className="flex items-center gap-2">
                <IoStar className="text-green-500 text-2xl" />
                <span className="text-xl">*Tire4</span>
              </div>
              <span>Premium-0.07% of Tokens(7000 PECTRE tokens)</span>
            </div> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

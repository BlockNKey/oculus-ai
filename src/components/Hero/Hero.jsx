import { motion } from "framer-motion";
import heroImg from "../../images/ezgif-1-45da7c135d.gif";
import solanaIcon from "../../images/icon/logo-solana.svg";
import ethereumIcon from "../../images/icon/ethereum-logo.svg";
import raydiumIcon from "../../images/icon/raydium-logo.svg";
import uniswapIcon from "../../images/icon/uniswap-logo.svg";

// const CONFIG = {
//   artwork: "/hero.png",
//   teaser: "/teaser.mp4",
// };

const Links = {
  ethereumBot: "https://t.me/OculusEthereum_Bot?start=web",
  solonaBot: "https://t.me/OculusSolana_Bot?start=web",
};

const Hero = () => {
  return (
    <section
      id="Vision"
      className="relative min-h-screen flex flex-col items-center overflow-hidden px-4 sm:px-0 justify-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="w-full lg:w-1/2 relative mt-24"
      >
        <img
          src={heroImg}
          alt="Oculus Character"
          className="w-3/4 mx-auto object-contain relative z-10"
        />
      </motion.div>

      <div className="relative z-10 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 2xl:px-52 flex flex-col md:flex-row items-center justify-between  gap-12 lg:gap-4 xl:gap-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full mx-auto lg:w-3/5 mb-8 md:mb-0 text-center md:text-left flex flex-col items-center"
        >
          <h1 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r text-white text-center sm:mt-20 mt-15 md:mt-0 lg:mt-0 xl:mt-0 2xl:mt-0">

          </h1>
          <p className="text-lg text-center sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl mb-6 md:mb-8 bg-clip-text text-transparent bg-gradient-to-l from-[#917efe] to-white">
            Autonomous Reconnaissance Across Ethereum and Solana
          </p>

          {/*
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <button class="relative group border border-gradient-to-b from-black to-white bg-transparent text-transparent bg-clip-text font-bold py-2 px-4 rounded-lg text-base tracking-wider transition duration-300 ease-in-out hover:shadow-lg hover:shadow-[#ffffff50]">
              <span class="bg-gradient-to-b from-black to-white bg-clip-text text-transparent">
                <a target="_blank" href={Links.ethereumBot}>
                  LAUNCH ETHEREUM BOT
                </a>
              </span>
            </button>

            */}
          {/* <button className="relative group border border-gradient-to-r from-black to-white text-gradient-to-r from-black to-white font-bold py-2 sm:py-2 px-4 sm:px-6 rounded-lg text-base sm:text-lg tracking-wider w-full sm:w-auto hover:shadow-lg hover:shadow-pink-600/50"> */}
          {/* <button class="relative group border border-black bg-white text-black font-bold py-2 px-4 rounded-lg text-base tracking-wider transition duration-300 ease-in-out transform hover:bg-black hover:text-white hover:shadow-lg"> */}

          {/*
            <button class="relative group border border-gradient-to-b from-black to-white bg-transparent text-transparent bg-clip-text font-bold py-2 px-4 rounded-lg text-base tracking-wider transition duration-300 ease-in-out hover:shadow-lg hover:shadow-[#ffffff50]">
              <span class="bg-gradient-to-b from-black to-white bg-clip-text text-transparent">
                <a target="_blank" href={Links.solonaBot}>
                  LAUNCH SOLONA BOT
                </a>
              </span>
            </button>
          </div>

          */}
        </motion.div>


      </div>
    </section>
  );
};

export default Hero;

<style jsx>{`
  .gradient-border {
    background: linear-gradient(to right, black, white);
    -webkit-background-clip: border-box;
    background-clip: border-box;
    border: 4px solid transparent; /* Adjust border width as needed */
  }
`}</style>

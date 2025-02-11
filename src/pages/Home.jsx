import StackedCards from "../components/StackedCards/StackedCards";
import StackedCards2 from "../components/StackedCards/StackedCards2";
import Hero from "../components/Hero/Hero";
import ProductCarousel from "../components/ProductCarousel";
import Features from "../components/Features";
import Statistics from "../components/Statistics";
import Footer from "../components/Footer";
import Teaser from "../components/Teaser";
import Pricing from "../components/Pricing";
import Hero2 from "../components/Hero/Hero2";
import Hero3 from "../components/Hero/Hero3";
import Navbar from "../components/Navbar";
import Vision from "../components/Vision";
import Aperture from "../components/Aperture";
// import GoldEye from "../components/GoldEye";
// import MrOculus from "../components/MrOculus";
import Tires from "../components/Tiers";
import StarField from "../components/StarField";
import Tokenomics from "../components/Tokenomics";
import { CircularCarousel } from "../components/CircularCarousel";

const Home = () => {
  return (
    <div className="min-h-screen bg-black text-[#c7c7d7] font-[Poppins]">
      <StarField />
      <Navbar />
      <Hero />

      <ProductCarousel content={[
        {
          sno: 0,
          name: "Glimpse",
          desc: "Glimpse is a lightweight yet robust monitoring bot designed to track market movements with precision.",
          img: "/glimpse.png",
        },
        {
          sno: 0,
          name: "Glimpse",
          desc: "It continuously scans price fluctuations, volume shifts, and key indicators across multiple exchanges, providing real-time alerts on potential trading opportunities. Equipped with customizable triggers for volatility spikes, trend reversals, and whale movements, it empowers traders with actionable insights.",
          img: "/glimpse.png",
        },
        {
          sno: 0,
          name: "Glimpse",
          desc: "Built for speed and efficiency, Glimpse operates with minimal latency, ensuring users stay ahead of market shifts without unnecessary complexity.",
          img: "/glimpse.png",
        },
      ]} />

      <ProductCarousel content={[
        {
          sno: 1,
          name: "Aperture",
          desc: "Building on the solid foundation of Glimpse, Aperture takes market monitoring to the next level. It enhances real-time tracking with AI-powered analytics, predictive modeling, and on-chain data insights, allowing traders to anticipate trends and react faster. ",
          img: "/aperture.png",
        },
        {
          sno: 1,
          name: "Aperture",
          desc: "Designed for professionals, it offers customizable automation, API trading integration, and advanced risk management tools, ensuring seamless execution and maximum efficiency.",
          img: "/aperture.png",
        },
        {
          sno: 1,
          name: "Aperture",
          desc: "With features like whale movement detection, arbitrage tracking, and sentiment analysis, Aperture transforms data into actionable intelligence—giving you a decisive edge in the crypto market.",
          img: "/aperture.png",
        },
      ]} />

      <ProductCarousel content={[
        {
          sno: 2,
          name: "God's Eye",
          desc: "Evolving beyond Aperture, God's Eye is the apex of market monitoring—an omniscient, fully customizable intelligence system designed for elite traders, institutions, and algorithmic strategists.",
          img: "/goldeneye.png",
        },
        {
          sno: 2,
          name: "God's Eye",
          desc: "It grants unparalleled control, allowing users to design, automate, and optimize bespoke trading strategies with deep-learning AI, advanced quant models, and real-time on-chain forensics. With God’s eye market surveillance, it cross-analyzes price action, whale activity, liquidity flows, and sentiment across all major exchanges, Layer 1s, Layer 2s, and DeFi ecosystems.",
          img: "/goldeneye.png",
        },
        {
          sno: 2,
          name: "God's Eye",
          desc: "Custom scripting, API-level integrations, and AI-enhanced alerts adapt to your unique trading style, providing a zero-latency edge in even the most volatile conditions. God's Eye isn’t just a tool—it’s an unstoppable force that sees everything, predicts faster, and executes smarter.",
          img: "/goldeneye.png",
        },
      ]} />

      {/* <Vision /> */}
      {/* <GoldEye />
      <MrOculus /> */}

      {/* <Hero2 />
      <Hero3 />
      <StackedCards />
      <StackedCards2 /> */}
      {/* <Features /> */}
      {/* <Pricing /> */}
      <Tires />
      <ProductCarousel content={[
        {
          sno: 0,
          name: "Third Eye",
          desc: "Third Eye isn’t just another market tracker—it’s a hyper-specialized intelligence engine built solely for pumpfun dynamics. While Glimpse, Aperture and God's Eye masters the broader market, The Third Eye focuses exclusively on detecting, tracking, and capitalizing on high-momentum pumpfun plays before they explode. Powered by AI-driven PnL tracking, liquidity-to-volume mapping, and social sentiment surges, Apex identifies coordinated accumulation patterns, influencer-driven hype, and pre-pump signals with precision.",
          img: "/thirdeye.png",
        },
        {
          sno: 0,
          name: "Third Eye",
          desc: "Its adaptive automation lets you customize alerts, sniper entries, and strategic exits, ensuring you’re positioned ahead of the FOMO wave—not chasing it. With zero-latency execution and fully customizable strategy tools, Third Eye transforms chaos into opportunity, putting you in command of the fastest, most volatile moves in the market.",
          video: "/teaser.mp4",
        }
      ]} />
      <ProductCarousel content={[
        {
          sno: 1,
          name: "Oculus AI",
          desc: "Third Eye isn’t just another market tracker—it’s a hyper-specialized intelligence engine built solely for pumpfun dynamics. While Glimpse, Aperture and God's Eye masters the broader market, The Third Eye focuses exclusively on detecting, tracking, and capitalizing on high-momentum pumpfun plays before they explode. Powered by AI-driven PnL tracking, liquidity-to-volume mapping, and social sentiment surges, Apex identifies coordinated accumulation patterns, influencer-driven hype, and pre-pump signals with precision.",
          img: "/mro2.png",
        },
        {
          sno: 1,
          name: "Oculus AI",
          desc: "Its adaptive automation lets you customize alerts, sniper entries, and strategic exits, ensuring you’re positioned ahead of the FOMO wave—not chasing it. With zero-latency execution and fully customizable strategy tools, Third Eye transforms chaos into opportunity, putting you in command of the fastest, most volatile moves in the market.",
          video: "/teaser.mp4",
        }
      ]} />
      {/*<Aperture />*/}
      <Tokenomics />
      <CircularCarousel
        className="team-carousel"
        radiusX={760}
        radiusY={500}
        items={[
          {
            sno: 0,
            name: "Chill Monger",
            role: "Founder and Chief Architect",
            desc: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
            img: "/chill.jpg",
          },
          {
            sno: 1,
            name: "Commander",
            role: "Co-Founder and Operations Director",
            desc: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
            img: "/commander.jpg",
          },
          {
            sno: 2,
            name: "Martin",
            role: "Strategy Architect and Communications Director",
            desc: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
            img: "/martin.jpg",
          },
          {
            sno: 3,
            name: "Shinzo",
            role: "Product Architect and Community Director",
            desc: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
            img: "/shinzo.jpg",
          },
          {
            sno: 4,
            name: "Scott",
            role: "Reconnaissance Architect and Innovation Director",
            desc: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
            img: "/scott.jpg",
          },
          {
            sno: 5,
            name: "Johnson",
            role: "Hype Architect",
            desc: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
            img: "/johnson.jpg",
          }
        ]}
        variant="team"
      />
      {/* <Statistics />
      <Teaser /> */}
      <Footer />
    </div>
  );
};

export default Home;

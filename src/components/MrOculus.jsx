import { motion } from "framer-motion";
import Card from "./common/Card";
import mroImg from "../images/mro.png";

const data = [
  {
    title: "Ethereum",
    content:
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
  },
  {
    title: "Filters",
    content:
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
  },
  {
    title: "Solana",
    content:
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
  },
  {
    title: "Filters",
    content:
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
  },
];

export default function MrOculus() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };
  return (
    <section id="Mr. Oculus" className="bg-[#2d1b55]/10 py-24">
      <div className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 2xl:px-52 grid md:grid-cols-2 gap-12 lg:gap-4 xl:gap-12">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-4 xl:gap-8">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-col flex-1 gap-4 xl:gap-8 items-center lg:mt-40"
          >
            {data.slice(0, 2).map((item) => (
              <Card key={item.title} data={item} />
            ))}
          </motion.div>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-col flex-1 gap-4 xl:gap-8 items-center"
          >
            {data.slice(2, 4).map((item) => (
              <Card key={item.title} data={item} />
            ))}
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 0, y: 200 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center gap-8"
        >
          <div className="flex flex-col items-start">
            <h2 className="text-3xl md:text-xl xl:text-5xl">
              Oculus AI
            </h2>
          </div>
          <img src={mroImg} alt="mro Icon" className="w-2/3 md:w-full" />
        </motion.div>
      </div>
    </section>
  );
}

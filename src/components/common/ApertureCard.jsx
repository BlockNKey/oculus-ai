import { motion } from "framer-motion";

import PropTypes from "prop-types";

export default function ApertureCard({ data }) {
  const item = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0 },
  };
  return (
    <motion.div
      variants={item}
      className="bg-gray-950 text-white rounded-md p-8 flex flex-col items-start gap-4"
    >
      <div className="text-3xl bg-gradient-to-r from-pink-500 to-blue-500 text-transparent bg-clip-text ml-4">{data.title}</div>
      <div>{data.content}</div>
      {data.data.map((item, index) => (
        <div key={index}>
          <div className="text-xl font-bold mb-4">{item.title}</div>
          <div>{item.content}</div>
        </div>
      ))}
    </motion.div>
  );
}

ApertureCard.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    data: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
};


"use client";
import { motion } from "framer-motion";
import NFTItem from "../../components/NFTItem";
import { useNftCollection } from "../../components/lib/utils";

function Homepage() {
  const { listNft, loading, totalItems, hasMore } = useNftCollection(0);
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.8,
          delay: 0.6,
          type: "spring",
          stiffness: 200,
        },
      }}
      className="w-full lg:w-fit"
    >
      <div className="lg:bg-transparent">
        <div className="grid gap-6 grid-cols-1 lg:grid-cols-3 xl:grid-cols-4">
          {listNft?.map((item, index) => (
            <div key={index} className="col-span-1 ">
              <NFTItem item={item} />
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default Homepage;

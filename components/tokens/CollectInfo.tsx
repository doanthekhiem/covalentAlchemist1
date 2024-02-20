"use client";
import logoCollect from "@/public/logoCollect.png";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const CollectInfo = ({ data, id }: { data: any, id?: string }) => {
  return (
    <motion.div
      initial={{ y: 10, opacity: 0 }}
      animate={{
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.5,
          delay: 0.9,
          type: "spring",
          stiffness: 200,
        },
      }}
      className="lg:block w-ful lg:w-fit"
    >
      <div className=" md:w-[300px] w-full rounded-lg h-fit sticky top-[105px] ">
        <div>
          <div className="bg-main-opacity min-w-min rounded-lg p-4 border border-neutral-800 h-fit">
            <h2 className="font-RubikBold text-lg text-neutral-200">
              {data?.nft_data.external_data.name}
            </h2>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Link
                  href="https://zora.co/0xadfb97961950b5894438c1c2f461695c023e2e14"
                  target="_blank"
                >
                  <Image
                    className="rounded-t-lg object-cover"
                    width={32}
                    height={32}
                    src={logoCollect.src}
                    alt=""
                  />
                </Link>
                <p className="text-xs my-3 w-full text-neutral-200 font-RubikExtraBold">
                  Covalent
                </p>
              </div>
            </div>
            <p className="text-xs my-3 w-full text-neutral-400 font-RubikRegular">
              Special-made NFTs for Alchemists that have shown above and beyond
              contributions to the ecosystem and community. These are available
              for a limited time for version Alchemist 4.0.
            </p>
            <div className="border border-neutral-700 my-5" />
            <div className="text-neutral-200 flex flex-col gap-4">
              <div className="flex items-center justify-between  rounded-md ">
                <h3 className="text-xs ">Contract Address</h3>
                <h3 className="text-xs font-RubikExtraBold hover:underline">0xfeee...af44f</h3>
              </div>
              <div className="flex items-center justify-between  rounded-md ">
                <h3 className="text-xs ">Unique minters</h3>
                <h3 className="text-xs font-RubikExtraBold">18</h3>
              </div>
              <div className="flex items-center justify-between  rounded-md ">
                <h3 className="text-xs ">Creator earnings</h3>
                <h3 className="text-xs font-RubikExtraBold">0.005994 ETH</h3>
              </div>
            </div>
            <div className="border border-neutral-700 my-5" />
            <Link href={`https://zora.co/collect/zora:0xfeee3700698f8d75bcc18e009022c7b44d2af44f/${id}`} target="_blank"><button className="w-full text-neutral-50 h-10 bg-main bg-[#ff4c8b] rounded-lg hover:shadow">Mint Now on Zora</button></Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default CollectInfo;

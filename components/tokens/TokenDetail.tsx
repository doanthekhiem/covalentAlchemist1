"use client"
import { motion } from "framer-motion";
import Homepage from "../../app/HomePage/page";
import { useNftCollectionById } from "../lib/utils";
import { DetailImage } from "./DetailImage";
import CollectInfo from "./CollectInfo";

const TokenDetail = ({ id }) => {
    const { dataNft, sizeNft, loading, totalView } = useNftCollectionById(id);
    return <div>
        <motion.div
            initial={{ y: 10, opacity: 0 }}
            animate={{
                y: 0,
                opacity: 1,
                transition: { duration: 0.3, type: "spring", stiffness: 200 },
            }}
            className="w-full lg:w-fit max-w-[78rem] m-auto text-neutral-300"
        >
            <div className="max-w-[78rem] mx-auto ">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_450px] py-4">
                    <DetailImage loading={loading} url={dataNft[0]?.nft_data.external_data.animation_url} />
                    <CollectInfo data={dataNft?.[0]} id={id} />
                </div>
            </div>
        </motion.div >
    </div >
}

export default TokenDetail
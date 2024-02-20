import Image from "next/image"
import Link from "next/link"
import { PiEyeBold } from "react-icons/pi"

const NFTItem = ({ item }: any) => {
    return (
        <div
            className="max-w-sm overflow-hidden border border-[#58585fbb] rounded-lg shadow  dark:border-gray-700 text-neutral-200 hover:shadow-lg hover:scale-105 duration-100">
            <Link href={`/tokens/${Number(item.nft_data.token_id)}`} target="_blank">
                <Image className="rounded-t-lg object-cover max-h-[213px]" width={262} height={250} src={item.nft_data.external_data.image}
                    alt={item.nft_data.external_data.name} />
            </Link>
            <div className="p-2">
                <div className="flex w-full items-center justify-between">
                    <div className="font-bold">{item.contract_name}</div>
                    <p className=" text-neutral-300 gap-1 rounded-md whitespace-nowrap px-2 h-5 flex items-center justify-center text-[12px] font-RubikRegular">
                        <div className="text-sm"><PiEyeBold />
                        </div> <span className="line-clamp-1 max-w-20">12</span>
                    </p>

                </div>
                <p className="text-[12px]">{item.nft_data.external_data.name}</p>
            </div>
        </div >
    )

}
export default NFTItem
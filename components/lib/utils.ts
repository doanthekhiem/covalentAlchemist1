import { Chain, Chains, CovalentClient, NftTokenContract } from "@covalenthq/client-sdk";
import { useEffect, useState } from "react";
import data from './data.json';


export const apiService = new CovalentClient(process.env.NEXT_PUBLIC_COVALENT_KEY as string);

export const useNftCollection = (pageNumber: number) => {
  const [loading, setLoading] = useState(false);
  const [listNft, setListNft] = useState<NftTokenContract[]>([]);
  const [totalItems, setTotalItems] = useState(0);
  const [hasMore, setHasmore] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true)
        const d = await apiService.NftService.getTokenIdsForContractWithMetadataByPage(data.chain as Chains, data.contract_address, { withUncached: true, pageNumber: pageNumber, pageSize: 20 });
        if (d.error) {
          setListNft([]);
        }
        d.data.items.reduce((_, item) => item.nft_data.external_data.image = data.ipfs_gateway + item.nft_data.external_data.image.slice(21), '');
        setTotalItems(d.data.pagination.total_count);
        setListNft(d.data.items);
        setHasmore(d.data.pagination.has_more);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setListNft([])
        setLoading(false);
      }
    })()
  }, [pageNumber])

  return {
    loading,
    listNft,
    totalItems,
    hasMore
  }
}

export const useNftCollectionById = (id: string) => {
  const [loading, setLoading] = useState(true);
  const [dataNft, setData] = useState<NftTokenContract[]>([]);
  const [sizeNft, setSizeNft] = useState('0');
  const [totalView, setTotalView] = useState('0');

  useEffect(() => {
    (async () => {
      try {
        setLoading(true)
        const res = await apiService.NftService.getNftMetadataForGivenTokenIdForContract(data.chain as Chain, data.contract_address, id, { withUncached: true });
        if (res.error) {
          setData([])
        } else {
          res.data.items.reduce((_, item) => item.nft_data.external_data.image = data.ipfs_gateway + item.nft_data.external_data.image.slice(21), '');
          res.data.items.reduce((_, item) => item.nft_data.external_data.animation_url = data.ipfs_gateway + item.nft_data.external_data.animation_url.slice(7), '');
          if (res.data.items.length > 0) {
            try {
              const size = await fetch(res.data.items[0].nft_data.external_data.animation_url).then(response => response.headers.get("content-length"));
              const sizeMb = (Number(size) / 1048576);
              setSizeNft(new Intl.NumberFormat().format(sizeMb));
            } catch (error) {
              console.log(error);
              setSizeNft('0');
            }
            await fetch(`/api/${id}`, { method: 'POST' })
              .then((resp) => resp.json())
              .then((data) => setTotalView(new Intl.NumberFormat().format(data.res.views)))
              .catch(() => setTotalView('0'))
          }
          setData(res.data.items)
        }
        setLoading(false)
      } catch (error) {
        console.log(error)
        setLoading(false)
        setData([]);
      }
    })()
  }, [id])

  return {
    loading,
    dataNft,
    sizeNft,
    totalView
  }
}
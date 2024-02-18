import { useEffect, useState } from "react";


export const LazyVideo = ({ url }: { url: string }) => {
  const [isLoad, setIsLoad] = useState(true);

  return (
    <>
      <video
        src={url}
        preload="auto"
        autoPlay
        loop
        playsInline
        muted
        className={isLoad ? 'hidden' : 'w-full h-full aspect-ratio'}
        onLoadedData={() => setIsLoad(false)}
      />
      <div className="flex items-center justify-cetner h-full">
      </div>
    </>

  )
}
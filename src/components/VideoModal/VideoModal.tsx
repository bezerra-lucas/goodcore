import Vimeo from "@u-wave/react-vimeo";
import useWindowSize from "@/hooks/WindowResize";
import { SetStateAction, useCallback } from "react";

import { BsX } from "react-icons/bs";

interface iVideoModal {
  isOpen: boolean;
  setIsOpen: React.Dispatch<SetStateAction<boolean>>;
}

export default function VideoModal({ isOpen, setIsOpen }: iVideoModal) {
  const windowSize = useWindowSize();

  const handleCloseModal = useCallback(() => {
    setIsOpen(false);
  }, [setIsOpen]);

  if (!windowSize.width) {
    return <></>;
  }

  return (
    <>
      {isOpen && (
        <div className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center ">
          <div
            onClick={handleCloseModal}
            className="cursor-pointer absolute bg-[#000000ba] top-0 left-0 w-screen h-screen z-[700]"
          ></div>
          <div className="z-[800] max-w-[97%] flex justify-center items-center">
            <BsX
              onClick={handleCloseModal}
              className="absolute text-white top-7 right-12 text-[70px] cursor-pointer"
            />
            <Vimeo
              video="https://player.vimeo.com/video/779299719?h=ae457fbb11"
              controls={true}
              autoplay={true}
              width={
                windowSize.width > 900
                  ? windowSize.width * 0.7
                  : windowSize.width * 0.9
              }
            />
          </div>
        </div>
      )}
    </>
  );
}

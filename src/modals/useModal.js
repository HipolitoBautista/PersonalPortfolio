import { useState } from "react";

function useModal() {
  const [openModal, setOpenModal] = useState(false);
  console.log(openModal);
  return {
    openModal,
    setOpenModal, // Include the setOpenModal function
  };
}

export default useModal;

// export const useModal = () => {
//     const [openModal, setOpenModal] = useState(false);
//     console.log({ openModal });
//     return { openModal, setOpenModal };
//   }

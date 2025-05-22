import { createContainer } from "unstated-next";
import useModal from "./useModal";

const LayoutContainer = createContainer(() => {
  const loginModal = useModal();
  return {
    loginModal,
  };
});

export default LayoutContainer;

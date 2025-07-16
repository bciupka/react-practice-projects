import { useState } from "react";
import Button from "../../ui/Button";
import CreateCabinForm from "./CreateCabinForm";
import Modal from "../../ui/Modal";

function AddCabin() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const closeForm = () => setIsOpenModal(false);

  return (
    <div>
      <Button onClick={() => setIsOpenModal((curr) => !curr)}>
        Add new cabin
      </Button>
      {isOpenModal && (
        <Modal onClose={closeForm}>
          <CreateCabinForm onCloseModal={closeForm} />
        </Modal>
      )}
    </div>
  );
}

export default AddCabin;

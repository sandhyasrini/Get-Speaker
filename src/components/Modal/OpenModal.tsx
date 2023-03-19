import React, { Dispatch, SetStateAction, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import ModalForm from "./ModalForm";
import ModalList from "./ModalList";
import { useAppDispatch, useAppSelector } from "../../store/store";
import Button from "../Button/Button";
import { addDeveloper, developer } from "../../store/slices/developerSlice";
import { SelectChangeEvent } from "@mui/material/Select";

interface Props {
  open: boolean;
  handleClose: Dispatch<SetStateAction<boolean>>;
}

/**
 *
 * @param open boolean
 * @param handleClose function
 * @description
 */

function OpenModal({ open, handleClose }: Props): JSX.Element {
  const getAllState = useAppSelector((state) => state);
  const [details, setDetails] = useState<developer | {}>({});
  const dispatch = useAppDispatch();

  function addDetails(
    e: React.ChangeEvent<HTMLInputElement> | SelectChangeEvent<string> | null,
    label: string
  ) {
    setDetails({ ...details, [e.target?.name]: e.target.value });
  }

  function onSubmitForm(
    e: React.MouseEvent<HTMLButtonElement> | null,
    isOpen: boolean
  ) {
    dispatch(addDeveloper(details as developer));
    handleClose(isOpen);
  }

  function onCloseModal(
    e: React.MouseEvent<HTMLButtonElement> | null,
    isOpen: boolean
  ) {
    handleClose(isOpen);
  }

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {getAllState.modal.heading}
          </Typography>
          <Typography
            id="modal-modal-description"
            sx={{ mt: 2 }}
            className="m-10"
          >
            {(getAllState.modal.modalAction === "Edit" ||
              getAllState.modal.modalAction === "Create") && (
              <ModalForm captureChange={addDetails} />
            )}
            {getAllState.modal.modalAction === "Randomize" && <ModalList />}
          </Typography>
          <div className="flex flex-1">
            <Button
              buttonName="Cancel"
              handleModalState={onCloseModal}
              modalState={open}
              buttonType="outlined"
            />
            <Button
              buttonName="Done"
              handleModalState={onSubmitForm}
              modalState={open}
              buttonType="contained"
            />
          </div>
        </Box>
      </Modal>
    </div>
  );
}

export default OpenModal;

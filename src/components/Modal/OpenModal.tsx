import React, { Dispatch, SetStateAction } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import ModalForm from "./ModalForm";
import ModalList from "./ModalList";
import { useAppSelector } from "../../store/store";
import Button from "../Button/Button";

interface Props {
  open: boolean;
  handleClose: Dispatch<SetStateAction<boolean>>;
}

function OpenModal(props: Props) {
  const modalDetails = useAppSelector((state) => state.modal);
  return (
    <div>
      <Modal
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {modalDetails.heading}
          </Typography>
          <Typography
            id="modal-modal-description"
            sx={{ mt: 2 }}
            className="m-10"
          >
            {(modalDetails.modalAction === "Edit" ||
              modalDetails.modalAction === "Create") && <ModalForm />}
            {modalDetails.modalAction === "Randomize" && <ModalList />}
          </Typography>
          <div className="flex flex-1">
            <Button
              buttonName="Cancel"
              handleModalState={props.handleClose}
              modalState={props.open}
              buttonType="outlined"
            />
            <Button
              buttonName="Done"
              handleModalState={props.handleClose}
              modalState={props.open}
              buttonType="contained"
            />
          </div>
        </Box>
      </Modal>
    </div>
  );
}

export default OpenModal;

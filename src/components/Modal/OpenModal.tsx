import React, { Dispatch, SetStateAction } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import SelectItem from "../SelectItem/SelectItem";

interface Props {
  open: boolean;
  handleOpen: Dispatch<SetStateAction<boolean>>;
  handleClose: Dispatch<SetStateAction<boolean>>;
}

function OpenModal(props: Props) {
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
            Create New User
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }} className="m-10">
          <SelectItem menuItems={['FullStack', 'Frontend', 'Backend']} dropdownName="Role"/>
          <SelectItem menuItems={['Full-time', 'Part-time', 'Contractor']} dropdownName="Status" />
          <SelectItem menuItems={['Team-A', 'Team-B', 'Team-C']} dropdownName="Team" />
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}

export default OpenModal;

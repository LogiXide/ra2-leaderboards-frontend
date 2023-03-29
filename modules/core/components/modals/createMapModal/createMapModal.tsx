import { useState } from 'react';

import { Box, Modal, Typography, Button } from '@mui/material';

import { MapForm } from '@/modules/maps/components/maps/forms';

import { styles } from '../styles';

type FormValuesType = {
  name: string;
  imageUrl: string;
  author: string;
  spots: number;
};

type PropsType = {
  onCreateMap: (data: FormValuesType) => void;
};

const CreateMapModal: React.FC<PropsType> = (props) => {
  const [openModal, setOpenModal] = useState<boolean>(false);

  const handleOpen = () => setOpenModal(true);
  const handleClose = () => setOpenModal(false);

  return (
    <>
      <Button onClick={handleOpen} variant="contained">
        Add Map
      </Button>

      {openModal && (
        <Modal open={openModal} onClose={handleClose}>
          <Box sx={styles}>
            <Typography
              display="flex"
              justifyContent="flex-start"
              mb={2}
              variant="h6"
              component="h2"
            >
              Create Map
            </Typography>

            <MapForm onCreateMap={props.onCreateMap} onClose={handleClose} />
          </Box>
        </Modal>
      )}
    </>
  );
};

export { CreateMapModal };

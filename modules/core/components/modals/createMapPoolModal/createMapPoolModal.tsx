import { useState } from 'react';

import { Box, Modal, Typography, Button } from '@mui/material';

import { MapPoolForm } from '@/modules/maps/components/mapPools/forms';

import { styles } from '../styles';

type FormValuesType = {
  name: string;
};

type PropsType = {
  onCreateMapPool: (data: FormValuesType) => void;
};

const CreateMapPoolModal: React.FC<PropsType> = (props) => {
  const [openModal, setOpenModal] = useState<boolean>(false);

  const handleOpen = () => setOpenModal(true);
  const handleClose = () => setOpenModal(false);

  return (
    <>
      <Button onClick={handleOpen} variant="contained">
        Add Map Pools
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
              Create Map Pools
            </Typography>

            <MapPoolForm
              onCreateMapPool={props.onCreateMapPool}
              onClose={handleClose}
            />
          </Box>
        </Modal>
      )}
    </>
  );
};

export { CreateMapPoolModal };

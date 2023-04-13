import { useState } from 'react';

import { Box, Modal, Typography, Button } from '@mui/material';

import { MapPoolForm } from '@/modules/maps/components';

type FormValuesType = {
  name: string;
  maps: { id: number; name: string }[];
};

type PropsType = {
  onCreateMapPool: (values: FormValuesType) => void;
};

// TODO: move styles
const styles = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  maxWidth: 500,
  width: '100%',
  bgcolor: 'background.paper',
  borderRadius: 1,
  boxShadow: 24,
  padding: 3,
};

const CreateMapPoolModal: React.FC<PropsType> = (props) => {
  const { onCreateMapPool } = props;

  const [openModal, setOpenModal] = useState<boolean>(false);

  const handleOpenModal = () => setOpenModal(true);

  const handleCloseModal = () => setOpenModal(false);

  return (
    <>
      <Button onClick={handleOpenModal} variant="contained">
        Add Map Pool
      </Button>

      {openModal && (
        <Modal open={openModal} onClose={handleCloseModal}>
          <Box sx={styles}>
            <Typography
              display="flex"
              justifyContent="flex-start"
              mb={2}
              variant="h6"
              component="h2"
            >
              Create Map Pool
            </Typography>

            <MapPoolForm type="create" onSubmit={onCreateMapPool} />
          </Box>
        </Modal>
      )}
    </>
  );
};

export { CreateMapPoolModal };

import { useState } from 'react';

import { Box, Modal, Typography, Button } from '@mui/material';

import { TeamForm } from '@/modules/players/components';

import type { FormValuesType } from '@/modules/players/components';

type PropsType = {
  onCreateTeam: (data: FormValuesType) => void;
};

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

const CreateTeamModal: React.FC<PropsType> = (props) => {
  const [openModal, setOpenModal] = useState<boolean>(false);

  const handleOpen = () => setOpenModal(true);
  const handleClose = () => setOpenModal(false);

  return (
    <>
      <Button onClick={handleOpen} variant="contained">
        Add Team
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
              Create Player
            </Typography>

            <TeamForm
              onCreateTeam={props.onCreateTeam}
              onClose={handleClose}
            />
          </Box>
        </Modal>
      )}
    </>
  );
};

export { CreateTeamModal };

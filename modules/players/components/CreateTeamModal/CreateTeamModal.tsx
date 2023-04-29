import { useState } from 'react';
import { Box, Modal, Typography, Button } from '@mui/material';

import { TeamForm } from '@/modules/players/components';

type FormValuesType = {
  name: string;
  players: { id: number; name: string }[];
};

type PropsType = {
  onCreateTeam: (values: FormValuesType) => void;
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

const CreateTeamModal: React.FC<PropsType> = (props) => {
  const { onCreateTeam } = props;

  const [openModal, setOpenModal] = useState<boolean>(false);

  return (
    <>
      <Button variant="contained" onClick={() => setOpenModal(true)}>
        Add Team
      </Button>

      {openModal && (
        <Modal open={openModal} onClose={() => setOpenModal(false)}>
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

            <TeamForm onSubmit={onCreateTeam} type="create" />
          </Box>
        </Modal>
      )}
    </>
  );
};

export { CreateTeamModal };

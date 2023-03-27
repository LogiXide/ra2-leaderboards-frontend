import { Box, Modal, Typography } from '@mui/material';

type PropsType = {
  open: boolean;
  title: string;
  onClose: () => void;
  children: React.ReactNode;
};

const style = {
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

const BasicModal: React.FC<PropsType> = (props) => {
  return (
    <Modal open={props.open} onClose={props.onClose}>
      <Box sx={style}>
        <Typography
          display="flex"
          justifyContent="flex-start"
          mb={2}
          variant="h6"
          component="h2"
        >
          {props.title}
        </Typography>

        {props.children}
      </Box>
    </Modal>
  );
};

export { BasicModal };

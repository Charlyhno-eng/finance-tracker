import { Button, ButtonProps } from '@mui/material';

export default function CustomButton(props: ButtonProps) {
  return (
    <Button
      {...props}
      sx={{
        color: '#fff',
        p: '10px 20px',
        textTransform: 'none',
        borderRadius: 2,
        backgroundColor: 'rgba(103, 58, 183, 0.05)',
        backdropFilter: 'blur(6px)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        boxShadow: '0 4px 16px rgba(103, 58, 183, 0.3)',
        transition: 'all 0.3s ease',

        '&:hover': {
          backgroundColor: 'rgba(103, 58, 183, 0.2)',
          boxShadow: '0 6px 20px rgba(103, 58, 183, 0.5)',
          borderColor: 'rgba(255, 255, 255, 0.2)',
        },

        '&:disabled': {
          backgroundColor: 'rgba(255, 255, 255, 0.05)',
          color: 'rgba(255, 255, 255, 0.3)',
          borderColor: 'rgba(255, 255, 255, 0.05)',
        },
      }}
    />
  );
}

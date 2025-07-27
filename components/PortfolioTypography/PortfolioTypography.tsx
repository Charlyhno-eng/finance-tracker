import { Typography, TypographyProps } from '@mui/material';

export default function PortfolioTypography(props: TypographyProps) {
  return (
    <Typography
      {...props}
      sx={{
        fontSize: 36,
        fontWeight: 'bold',
        color: '#7F00FF',
        letterSpacing: 1,
        ...props.sx,
      }}
    />
  );
}

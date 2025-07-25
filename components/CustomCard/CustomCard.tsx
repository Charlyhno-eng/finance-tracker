import { Card, CardContent, Typography, Box, SxProps, Theme } from '@mui/material';

type CustomCardProps = {
  title?: string;
  subtitle?: string;
  children?: React.ReactNode;
  sx?: SxProps<Theme>;
}

export default function CustomCard({ title, subtitle, children, sx }: CustomCardProps) {
  return (
    <Card
      sx={{
        bgcolor: 'rgba(103, 58, 183, 0.03)',
        boxShadow: '0 8px 24px rgba(103, 58, 183, 0.4)',
        backdropFilter: 'blur(8px)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        color: '#fff',
        p: 2,
        ...sx,
      }}
    >
      <CardContent>
        {title && (
          <Typography variant="h6" sx={{ fontWeight: 600, mb: 0.5 }}>
            {title}
          </Typography>
        )}
        {subtitle && (
          <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)', mb: 1 }}>
            {subtitle}
          </Typography>
        )}
        <Box>
          {children}
        </Box>
      </CardContent>
    </Card>
  );
}

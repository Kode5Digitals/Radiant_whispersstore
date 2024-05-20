import { CircularProgress, Typography } from '@mui/material';
import "../App.css"

const LoadingSpinner = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
        <CircularProgress size={400} style={{ marginBottom: 20,color: '#F13DA6' }} />
    <Typography variant="h6" className='text-pink-700 text-2xl absolute ' style={{ textAlign: 'center' }}>Radiantwhispersstore products...</Typography>
  </div>
  )
 
}

export default LoadingSpinner;
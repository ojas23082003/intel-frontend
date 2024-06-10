import { useState } from 'react';
import audio_img from './assets/audio.jpg';
import doc_img from './assets/doc.jpg';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Spinner from 'react-bootstrap/Spinner';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

export default function Output() {
    const now = 0;
    const [isLoading,setLoading] = useState(true);

    return (
      <div>
        <div className='container ubuntu-medium'>
        <h1>We will transcribe and show the output in some time...</h1>
        </div>
        {isLoading && <div className='spinner'>
        <Box sx={{ width: '100%' }}>
          <LinearProgress />
        </Box>
        </div>}
        <div className='images'>
            <img src={doc_img} className='audio-img'></img>
            <img src={audio_img} className='audio-img'></img>
        </div>
      </div>
    );
}
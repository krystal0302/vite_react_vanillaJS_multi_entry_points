import React from 'react'
import { createRoot } from 'react-dom/client';
import CustomBack from '@/components/CustomBack';

function ComponentRoot() {
    return (
      <div className='row'>
        <CustomBack />
      </div>
    )
  }

  const root = createRoot(document.getElementById('backbtn'));
  root.render(<ComponentRoot />);
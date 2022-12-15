import React from 'react';

import Video from './Video';
import { ContextProvider } from './SocketContext';

import './styles.css';
  
const Index = () => {

  return (
    <div className="index">
      <ContextProvider>
        <Video />
      </ContextProvider>
    </div>
  );
};

export default Index;

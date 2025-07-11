import React from 'react'
import ChatBot from "react-chatbotify";
import { settings } from './Settings';
import { flow } from './flow';

const ChatBoat = () => {
  return (
         <ChatBot flow={flow} settings={settings}  />
  )
}

export default ChatBoat
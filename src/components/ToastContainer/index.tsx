import React from 'react';
import Toast from './Toast';
import { Container } from './styles';
import { ToasMessage } from '../../hooks/toast';

interface ToasContainerProps {
  messages: ToasMessage[];
}
const ToastContainer: React.FC<ToasContainerProps> = ({ messages }) => {
  return (
    <Container>
      {messages.map((message) => (
        <Toast key={message.id} message={message} />
      ))}
    </Container>
  );
};

export default ToastContainer;

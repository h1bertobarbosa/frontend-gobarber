import React from 'react';
import { useTransition } from 'react-spring';
import Toast from './Toast';
import { Container } from './styles';
import { ToasMessage } from '../../hooks/toast';

interface ToasContainerProps {
  messages: ToasMessage[];
}
const ToastContainer: React.FC<ToasContainerProps> = ({ messages }) => {
  const messagesWithTransictions = useTransition(
    messages,
    (message) => message.id,
    {
      from: { right: '-120%' },
      enter: { right: '0%' },
      leave: { right: '-120%' },
    },
  );
  return (
    <Container>
      {messagesWithTransictions.map(({ item, key, props }) => (
        <Toast key={key} message={item} style={props} />
      ))}
    </Container>
  );
};

export default ToastContainer;

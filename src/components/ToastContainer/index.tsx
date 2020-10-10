import React from 'react';

import { useTransition } from 'react-spring';
import Toast from './Toast/index';

import { ToastMessages } from '../../hooks/toast';
import { Container } from './style';

interface ToastPropsMessages {
  messages: ToastMessages[];
}

const ToastContainer: React.FC<ToastPropsMessages> = ({ messages }) => {
  const messagesWhitinTransition = useTransition(
    messages,
    (message) => message.id,
    {
      from: { right: '-120%', opacity: 0 },
      enter: { right: '0%', opacity: 1 },
      leave: { right: '-120%', opacity: 0 },
    },
  );

  return (
    <Container>
      {messagesWhitinTransition.map(({ item, key, props }) => (
        <Toast key={key} style={props} message={item} />
      ))}
    </Container>
  );
};

export default ToastContainer;

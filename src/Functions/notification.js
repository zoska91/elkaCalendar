import { store } from 'react-notifications-component';

const notification = (title, message, type) =>
  store.addNotification({
    title,
    message,
    type,
    insert: 'top',
    container: 'top-right',
    animationIn: ['animated', 'fadeIn'],
    animationOut: ['animated', 'fadeOut'],
    dismiss: {
      duration: 1000,
      onScreen: true,
    },
  });

export default notification;

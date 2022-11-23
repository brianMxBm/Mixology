export const updateNotification = (updater, text, type = 'error') => {
  updater({ text, type });
  setTimeout(() => {
    updater({ text: '', type: '' });
  }, 7000);
};

import { toast, TypeOptions } from 'react-toastify';

export const showNotifyMessage = (text: string, type: TypeOptions) => {
  toast(text, {
    position: 'bottom-left',
    theme: 'colored',
    type,
  });
};

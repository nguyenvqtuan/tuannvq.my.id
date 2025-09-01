import { useNotifyStore } from '@/src/common/stores/notify';

const useNotif = () => {
  const { showNotify, setNotifyText } = useNotifyStore();

  function notif(text: string) {
    setNotifyText(text);
    showNotify();
  }

  return notif;
};

export default useNotif;

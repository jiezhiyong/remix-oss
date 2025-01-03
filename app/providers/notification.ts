import { NotificationProvider } from '@refinedev/core';
import { toast } from 'sonner';

export const notificationProvider: NotificationProvider = {
  open: ({ key, message, description, type }) => {
    // 成功通知
    if (type === 'success') {
      toast.success(message, { description });
    }

    // 失败通知
    else if (type === 'error') {
      toast.error(message, { description });
    }

    // 处理中通知
    else if (type === 'progress') {
      toast.loading(message, { description });
    }
  },
  close: (key) => toast.dismiss(key),
};

export const useNotificationProvider = (): NotificationProvider => {
  return notificationProvider;
};

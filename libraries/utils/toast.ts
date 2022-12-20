import toastr from 'toastr';

export const showError = (message: string | Object) => {
  if (typeof message === 'object') {
    showError((message as any).message);
    return;
  }
  toastr.options = {
    positionClass: 'toast-bottom-full-width',
    hideDuration: 300,
    timeOut: 60000,
  };

  toastr.error(message);
};

export const showSuccess = (message: string | Object) => {
  if (typeof message === 'object') {
    showSuccess((message as any).message);
    return;
  }
  toastr.options = {
    positionClass: 'toast-bottom-full-width',
    hideDuration: 300,
    timeOut: 60000,
  };
  toastr.success(message);
};

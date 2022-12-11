import toastr from 'toastr';

export const showError = (message: string) => {
  toastr.options = {
    positionClass: 'toast-top-full-width',
    hideDuration: 300,
    timeOut: 60000
  };

  toastr.error(message);
}

export const showSuccess = (message: string) => {
  toastr.options = {
    positionClass: 'toast-top-full-width',
    hideDuration: 300,
    timeOut: 60000
  };
  toastr.success(message);
}


// eslint-disable-next-line import/no-extraneous-dependencies
import Swal from 'sweetalert2';

declare type ToastType = 'warning' | 'error' | 'success' | 'info' | 'question';

export function toastAlert(title: ToastType, text: string) {
  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast: {
      addEventListener: (arg0: string, arg1: any) => void;
    }) => {
      toast.addEventListener('mouseenter', Swal.stopTimer);
      toast.addEventListener('mouseleave', Swal.resumeTimer);
    },
  });

  Toast.fire({
    icon: title,
    title: text,
  });
}

export function toasts(title: ToastType, text: string) {
  let timerInterval: number | undefined;
  Swal.fire({
    icon: title,
    html: text,
    timer: 4000,
    timerProgressBar: true,
    willClose: () => {
      clearInterval(timerInterval);
    },
  });
}

export function toastSuccess() {
  let timerInterval: number | undefined;
  Swal.fire({
    icon: 'success',
    html: 'Usuário logado!',
    timer: 2000,
    timerProgressBar: true,
    willClose: () => {
      clearInterval(timerInterval);
    },
  });
}

export function toastWarning() {
  let timerInterval: number | undefined;
  Swal.fire({
    icon: 'warning',
    html: 'Atenção, dados incorretos!',
    timer: 2000,
    timerProgressBar: true,
    willClose: () => {
      clearInterval(timerInterval);
    },
  });
}

export function toastError() {
  let timerInterval: number | undefined;
  Swal.fire({
    icon: 'error',
    html: 'Algo deu Errado!',
    timer: 2000,
    timerProgressBar: true,
    willClose: () => {
      clearInterval(timerInterval);
    },
  });
}

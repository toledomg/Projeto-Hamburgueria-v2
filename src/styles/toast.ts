import Swal from 'sweetalert2';

export function toastAlert(title, text) {
  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer);
      toast.addEventListener('mouseleave', Swal.resumeTimer);
    },
  });

  Toast.fire({
    icon: title,
    title: text,
  });
}

export function toasts(title, text) {
  let timerInterval;
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
  let timerInterval;
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
  let timerInterval;
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
  let timerInterval;
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

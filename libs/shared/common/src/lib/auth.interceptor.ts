import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const username = 'TECHNICAL_USER';
  const password = 'Cronos#2024!';

  return next(
    req.clone({
      headers: req.headers.set('Authorization', `Basic ${window.btoa(username + ':' + password)}`)
    })
  );
};

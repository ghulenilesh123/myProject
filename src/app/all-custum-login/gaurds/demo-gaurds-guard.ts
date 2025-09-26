import { CanActivateFn } from '@angular/router';

export const demoGaurdsGuard: CanActivateFn = (route, state) => {
  return true;
};

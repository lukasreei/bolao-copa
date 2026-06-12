export const ADMIN_EMAIL = 'lukas581800@gmail.com';

export function isBootstrapAdminEmail(email?: string | null) {
  return email?.trim().toLowerCase() === ADMIN_EMAIL;
}

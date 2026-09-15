import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import AdminChrome from '@/components/admin/AdminChrome';
import { ADMIN_COOKIE, verifySessionToken } from '@/lib/admin-session';

export default async function AdminPortalLayout({ children }: { children: React.ReactNode }) {
  const token = cookies().get(ADMIN_COOKIE)?.value;
  if (!(await verifySessionToken(token))) {
    redirect('/admin/login');
  }

  return <AdminChrome>{children}</AdminChrome>;
}

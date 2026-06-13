import { HomeNavbar } from '@/features/home/components/navbar/HomeNavbar';

type AppShellProps = {
  children: React.ReactNode;
};

export function AppShell({ children }: AppShellProps) {
  return (
    <div className='min-h-screen bg-background'>
      <HomeNavbar />

      <main>{children}</main>
    </div>
  );
}

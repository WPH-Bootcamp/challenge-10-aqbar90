import { HomeNavbar } from '@/features/home/components/navbar/HomeNavbar';

type Props = {
  children: React.ReactNode;
};

export default function RestaurantLayout({ children }: Props) {
  return (
    <>
      <HomeNavbar />
      {children}
    </>
  );
}

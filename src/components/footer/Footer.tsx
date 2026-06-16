import FooterBrand from './FooterBrand';
import FooterExplore from './FooterExplore';
import FooterHelp from './FooterHelp';
import FooterSocials from './FooterSocials';

export default function Footer() {
  return (
    <footer
      className='
        bg-[#0A0D12]
        px-4
        py-10
        md:px-30
        md:py-16
      '
    >
      <div
        className='
          mx-auto
          flex
          max-w-screen-xl
          flex-col
          gap-6
        '
      >
        <FooterBrand />

        <FooterSocials />

        <div
          className='
            flex
            gap-4
          '
        >
          <div className='flex-1'>
            <FooterExplore />
          </div>

          <div className='flex-1'>
            <FooterHelp />
          </div>
        </div>
      </div>
    </footer>
  );
}

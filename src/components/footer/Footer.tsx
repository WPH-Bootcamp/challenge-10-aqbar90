import FooterBrand from './FooterBrand';
import FooterExplore from './FooterExplore';
import FooterHelp from './FooterHelp';
import FooterSocials from './FooterSocials';

export default function Footer() {
  return (
    <footer
      className='
        border-t
        border-[#D5D7DA]
        bg-[#0A0D12]
        px-4
        py-12
        md:px-30
        md:py-20
      '
    >
      <div
        className='
          flex
          flex-col
          gap-10
          md:flex-row
          md:justify-between
          md:gap-17.25
        '
      >
        <div
          className='
            flex
            flex-col
            gap-10
            md:w-95
          '
        >
          <FooterBrand />
          <FooterSocials />
        </div>

        <FooterExplore />

        <FooterHelp />
      </div>
    </footer>
  );
}

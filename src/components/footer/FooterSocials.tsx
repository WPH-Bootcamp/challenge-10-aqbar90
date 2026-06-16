import { FaFacebookF, FaInstagram, FaLinkedin, FaTiktok } from 'react-icons/fa';

export default function FooterSocials() {
  const socials = [
    {
      icon: FaFacebookF,
      href: '#',
    },
    {
      icon: FaInstagram,
      href: '#',
    },
    {
      icon: FaLinkedin,
      href: '#',
    },
    { icon: FaTiktok, href: '#' },
  ];

  return (
    <div
      className='
        flex
        flex-col
        gap-5
        md:flex-row
        md:gap-3
      '
    >
      <p
        className='
          text-sm
          font-bold
          text-white
        '
      >
        Follow on Social Media
      </p>

      <div
        className='
          flex
          gap-3
        '
      >
        {socials.map((social, index) => {
          const Icon = social.icon;

          return (
            <a
              key={index}
              href={social.href}
              target='_blank'
              rel='noopener noreferrer'
              className='
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                border
                border-[#252B37]
                transition-colors
                hover:bg-white/10
              '
            >
              <Icon className='size-5 text-white' />
            </a>
          );
        })}
      </div>
    </div>
  );
}

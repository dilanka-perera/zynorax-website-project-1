import Link from 'next/link';
import WideContainer from './WideContainer';

interface ContactBannerProps {
  title?: string;
  buttonText?: string;
  href?: string;
}

const ContactBanner: React.FC<ContactBannerProps> = ({
  title = 'Connect with Us',
  buttonText = 'Request Our Services',
  href = '/contact/contact-services',
}) => {
  return (
    <WideContainer>
      <div className="flex flex-col w-full bg-blue-900 h-[250px] items-center justify-center">
        <p className="text-white text-2xl sm:text-3xl md:text-4xl mb-8">
          {title}
        </p>
        <Link
          href={href}
          className="bg-white text-slate-900 px-8 py-3 font-normal hover:bg-slate-200 rounded text-sm sm:text-base md:text-lg"
        >
          {buttonText}
        </Link>
      </div>
    </WideContainer>
  );
};

export default ContactBanner;

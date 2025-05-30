import Image from 'next/image';
import Topic from '../Topic';
import Link from 'next/link';

interface ContactCardProps {
  imageSrc: string;
  title: string;
  description: string;
  email: string;
  buttonText: string;
  buttonUrl: string;
}

const ContactCard: React.FC<ContactCardProps> = ({
  imageSrc,
  title,
  description,
  email,
  buttonText,
  buttonUrl,
}) => {
  return (
    <div className="flex flex-col items-center justify-center overflow-hidden md:px-20 py-8 w-full mx-auto text-center">
      <div className="flex items-center justify-center w-full">
        <div className="flex flex-col bg-blue-100 shadow-md p-6 mx-6 my-6 items-center justify-center">
          <Image
            className="opacity-80"
            src={imageSrc}
            alt={'General Inquiries'}
            width={150}
            height={150}
            unoptimized
          />
        </div>
      </div>

      <Topic text={title} />
      <p className="text-center mt-5 text-base sm:text-lg md:text-xl">
        {description}
      </p>
      <p className="text-center mt-2 mb-5 text-sm sm:text-base md:text-lg text-blue-900">
        Email: {email}
      </p>

      <Link
        href={buttonUrl}
        className="inline-block bg-blue-950 hover:bg-blue-900 text-white font-normal text-sm sm:text-base md:text-lg px-6 py-3 shadow-lg min-w-[200px] text-center rounded"
      >
        {buttonText}
      </Link>
    </div>
  );
};

export default ContactCard;

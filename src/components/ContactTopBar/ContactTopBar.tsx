import Link from "next/link";
import { IconType } from "react-icons";
import { FiMail, FiSmartphone } from "react-icons/fi";

export default function ContactTopBar() {
  return (
    <div className="h-7 bg-primary-dark flex justify-center items-center">
      <div className="h-7 max-w-[1200px] w-[97%] flex items-center">
        <div className="ml-auto gap-x-5 flex flex-row">
          <LinkSpan
            text="contact@goodcore.co.uk"
            href="mailto:contanct@goodcore.co.uk"
            Icon={FiMail}
          />
          <LinkSpan
            text="020 8781 6903"
            href="tel:02087816903"
            Icon={FiSmartphone}
          />
        </div>
      </div>
    </div>
  );
}

interface iLinkSpan {
  text: string;
  href: string;
  Icon: IconType;
}

function LinkSpan({ text, href, Icon }: iLinkSpan) {
  return (
    <Link href={href} className="flex flex-row items-center gap-x-2">
      <Icon className="text-white" />
      <span className="text-xs uppercase text-white hover:underline">
        {text}
      </span>
    </Link>
  );
}

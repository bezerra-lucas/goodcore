import Link from "next/link";
import Image from "next/image";

import logo from "@/assets/logo.webp";
import peopleConfig from "@/assets/people-config.webp";

import { RiArrowDropDownFill } from "react-icons/ri";
import { AiOutlineArrowRight } from "react-icons/ai";
import Button from "@/components/Button";

export default function Navbar() {
  return (
    <div className="flex justify-center">
      <nav className="h-16 max-w-[1090px] w-[97%] flex flex-row items-center content-between ">
        <Image src={logo} alt="goodcore logo" width={240} height={36}></Image>
        <ul className="ml-auto text-[#303234] child:flex child:items-center gap-x-1 child:h-16 child:font-normal child:text-[14px] flex flex-row ">
          <li>
            <Link href="/services" className="peer cursor-pointer">
              <div className="uppercase flex items-center border-b-2 border-b-[#00000000] transition-all ease-in-out delay-[50] hover:bg-[#007bff15] hover:text-primary hover:border-b-primary h-16 w-full px-3">
                Services
                <RiArrowDropDownFill className="text-2xl" />
              </div>
            </Link>
            <div className=" absolute hidden peer-hover:flex hover:flex w-full top-[92px] bg-[white] left-0 shadow border-t border-[#f7f7f7] ">
              <div className="max-w-[1200px] w-[97%] grid grid-cols-3 mx-auto gap-x-4 py-4">
                <div className="flex flex-col gap-y-3">
                  <DropdownCard
                    href="#"
                    title="web app development"
                    text="Cost-efficient business apps and web portals custom-built for a variety of industries"
                  />
                  <DropdownCard
                    href="#"
                    title="bespoke business aplications"
                    text="Custom web and mobile-based software solutions for efficient business processes"
                  />
                  <DropdownCard
                    href="#"
                    title="web portal development"
                    links={[
                      { name: "B2B PORTAL DEVELOPMENT", href: "#" },
                      { name: "VENDOR PORTAL DEVELOPMENT", href: "#" },
                      { name: "CUSTOMER PORTAL DEVELOPMENT", href: "#" },
                    ]}
                  />
                  <DropdownCard
                    href="#"
                    title="desktop app development"
                    links={[
                      {
                        name: "WINDOWS DEVELOPMENT",
                        href: "#",
                      },
                      {
                        name: "macOS DEVELOPMENT",
                        href: "#",
                      },
                    ]}
                  />
                </div>
                <div className="flex flex-col gap-y-3">
                  <DropdownCard
                    href="#"
                    title="mobile app development"
                    text="Custom-built user-friendly Android, iOS, and cross-platform mobile apps"
                  />
                  <DropdownCard
                    href="#"
                    title="Software Development Outsourcing"
                    links={[
                      { name: "DEDICATED DEVELOPMENT TEAM", href: "#" },
                      { name: "IT STAFF AUGMENTATION", href: "#" },
                    ]}
                  />
                  <DropdownCard
                    href="#"
                    title="for startups"
                    links={[
                      { name: "MVP DEVELOPMENT", href: "#" },
                      { name: "DISCOVERY WORKSHOPS", href: "#" },
                      { name: "VIRTUAL CTO", href: "#" },
                    ]}
                  />
                  <DropdownCard
                    href="#"
                    title="product development"
                    links={[
                      { name: "SaaS APPLICATION DEVELOPMENT", href: "#" },
                      { name: "WHITE LABEL SOFTWARE DEVELOPMENT", href: "#" },
                    ]}
                  />
                </div>
                <div className="flex flex-col gap-y-3">
                  <div className="p-4 mt-12">
                    <span className="uppercase text-[0.9rem] font-semibold cursor-pointer hover:text-primary">
                      PROFESSIONAL SERVICES
                    </span>

                    <div className="text-md flex flex-col gap-y-5 mt-3 ">
                      <Link href="#">
                        <span className="cursor-pointer hover:font-semibold hover:text-primary flex flex-row items-center gap-x-3 text-sm">
                          <AiOutlineArrowRight />
                          SOFTWARE PROJECT RESCUE
                        </span>
                      </Link>
                      <Link href="#">
                        <span className="cursor-pointer hover:font-semibold hover:text-primary flex flex-row items-center gap-x-3 text-sm">
                          <AiOutlineArrowRight />
                          SUPPORT & MAINTENANCE
                        </span>
                      </Link>
                      <Link href="#">
                        <span className="cursor-pointer hover:font-semibold hover:text-primary flex flex-row items-center gap-x-3 text-sm">
                          <AiOutlineArrowRight />
                          API DEVELOPMENT & SYSTEM INTEGRATION
                        </span>
                      </Link>
                      <Link href="#">
                        <span className="cursor-pointer hover:font-semibold hover:text-primary flex flex-row items-center gap-x-3 text-sm">
                          <AiOutlineArrowRight />
                          QA & TESTING SERVICES
                        </span>
                      </Link>
                      <Link href="#">
                        <span className="cursor-pointer hover:font-semibold hover:text-primary flex flex-row items-center gap-x-3 text-sm">
                          <AiOutlineArrowRight />
                          UI/UX DESIGN
                        </span>
                      </Link>
                    </div>
                  </div>
                  <Image
                    className="mt-20"
                    src={peopleConfig}
                    alt="peopleConfig"
                  />
                </div>
              </div>
            </div>
          </li>
          <li>
            <Link href="/technologies" className="peer cursor-pointer">
              <div className="uppercase flex items-center border-b-2 border-b-[#00000000] transition-all ease-in-out delay-[50] hover:bg-[#007bff15] hover:text-primary hover:border-b-primary h-16 w-full px-3">
                Technologies
                <RiArrowDropDownFill className="text-2xl" />
              </div>
            </Link>
            <div className="absolute hidden peer-hover:flex hover:flex w-full top-[92px] bg-[white] left-0 shadow border-t border-[#f7f7f7] ">
              <div className="max-w-[1200px] w-[97%] grid grid-cols-4 mx-auto gap-x-4 py-4">
                <div className="flex flex-col gap-y-3">
                  <DropdownCard
                    href="#"
                    title="web development"
                    links={[
                      { name: "Node.JS", href: "#" },
                      { name: "PHP", href: "#" },
                      { name: ".NET", href: "#" },
                      { name: "JAVA", href: "#" },
                    ]}
                  />
                </div>
                <div className="flex flex-col gap-y-3">
                  <DropdownCard
                    href="#"
                    title="FrontEnd Development"
                    links={[
                      { name: "REACT", href: "#" },
                      { name: "VUE.JS", href: "#" },
                      { name: "ANGULAR", href: "#" },
                    ]}
                  />
                </div>
                <div className="flex flex-col gap-y-3">
                  <DropdownCard
                    href="#"
                    title="Mobile App Development"
                    links={[
                      { name: "iOS", href: "#" },
                      { name: "ANDROID", href: "#" },
                      { name: "CROSS-PLATFORM", href: "#" },
                    ]}
                  />
                </div>
                <div className="flex flex-col gap-y-3">
                  <DropdownCard
                    href="#"
                    title="Cloud Development"
                    links={[
                      { name: "Microsoft Azure", href: "#" },
                      { name: "GOOGLE CLOUD PLATFORM", href: "#" },
                    ]}
                  />
                </div>
              </div>
            </div>
          </li>
          <li>
            <Link href="/company" className="peer cursor-pointer">
              <div className="uppercase flex items-center border-b-2 border-b-[#00000000] transition-all ease-in-out delay-[50] hover:bg-[#007bff15] hover:text-primary hover:border-b-primary h-16 w-full px-3">
                Company
                <RiArrowDropDownFill className="text-2xl" />
              </div>
            </Link>
            <div className="absolute hidden peer-hover:flex hover:flex w-full top-[92px] bg-[white] left-0 shadow border-t border-[#f7f7f7] ">
              <div className="max-w-[1200px] w-[97%] grid grid-cols-3 mx-auto gap-x-4 py-4">
                <div className="flex flex-col gap-y-3">
                  <DropdownCard
                    href="#"
                    title="About Us"
                    text="The hardworking team behind GoodCore – achieving excellence since 2005 "
                  />
                  <DropdownCard
                    href="#"
                    title="Technologies"
                    text="Tools and technologies selected depending on the specifics of each project"
                  />
                </div>
                <div className="flex flex-col gap-y-3">
                  <DropdownCard
                    href="#"
                    title="How we work"
                    text="Four flexible engagement models: You choose one that will work best for you!"
                  />
                  <DropdownCard
                    href="#"
                    title="Pricing"
                    text="All the various factors you need to consider when sizing up development costs"
                  />
                </div>
                <div className="flex flex-col gap-y-3">
                  <DropdownCard
                    href="#"
                    title="Our Process"
                    text="Our time-tested process of developing efficient and fully custom software systems"
                  />
                  <DropdownCard
                    href="#"
                    title="FAQs"
                    text="Answering some of the most common questions that you may have in mind"
                  />
                </div>
              </div>
            </div>
          </li>
          <li>
            <Link href="/" className="peer cursor-pointer">
              <div className="uppercase flex items-center border-b-2 border-b-[#00000000] transition-all ease-in-out delay-[50] hover:bg-[#007bff15] hover:text-primary hover:border-b-primary h-16 w-full px-3">
                Industries
                <RiArrowDropDownFill className="text-2xl" />
              </div>
            </Link>
            <div className="absolute hidden peer-hover:flex hover:flex w-full top-[92px] bg-[white] left-0 shadow border-t border-[#f7f7f7] ">
              <div className="max-w-[1200px] w-[97%] grid grid-cols-3 mx-auto gap-x-4 py-4">
                <div className="flex flex-col gap-y-2">
                  <DropdownCard
                    href="#"
                    title="Tech"
                    text="Software tailored to your requirements to solve your technology challenges "
                  />
                  <DropdownCard
                    href="#"
                    title="Healthcare"
                    text="Custom-built solutions that redefine healthcare and patient management"
                  />
                </div>
                <div className="flex flex-col gap-y-2">
                  <DropdownCard
                    href="#"
                    title="Sports"
                    text="Bespoke sports software solutions including sports apps, websites, and more!"
                  />
                  <DropdownCard
                    href="#"
                    title="Utilities"
                    text="Customised software solutions for the highly asset-intensive utility sector"
                  />
                </div>
                <div className="flex flex-col gap-y-3">
                  <DropdownCard
                    href="#"
                    title="Finance & Fintech"
                    text="Web and mobile apps that truly represent fintech's progress and advancements"
                  />
                  <DropdownCard
                    href="#"
                    title="Education"
                    text="Bridging the gap between education and technology via custom software"
                  />
                </div>
              </div>
            </div>
          </li>
          <li>
            <Link href="/cases" className="peer cursor-pointer">
              <div className="uppercase flex items-center border-b-2 border-b-[#00000000] transition-all ease-in-out delay-[50] hover:bg-[#007bff15] hover:text-primary hover:border-b-primary h-16 w-full px-3">
                Case Studies
              </div>
            </Link>
          </li>
          <li>
            <Link href="/blog" className="peer cursor-pointer">
              <div className="uppercase flex items-center border-b-2 border-b-[#00000000] transition-all ease-in-out delay-[50] hover:bg-[#007bff15] hover:text-primary hover:border-b-primary h-16 w-full px-3">
                Blog
              </div>
            </Link>
          </li>
        </ul>
        <div>
          <button className="peer px-5 py-2 bg-green-600 hover:bg-green-700 text-white">
            Dropdown
          </button>
        </div>
      </nav>
      <div className="h-16 flex items-center">
        <Button type="outlined" text="get in touch" className=""></Button>
      </div>
    </div>
  );
}

interface iLink {
  href: string;
  name: string;
}

interface iDropdownCard {
  title: string;
  text?: string;
  links?: Array<iLink>;
  href: string;
}

function DropdownCard({ title, text, href, links }: iDropdownCard) {
  return (
    <div className="bg-[#f6f8fa] hover:bg-[#e3e9f0] border-l-4 border-l-primary p-4 rounded-r-[10px] rounded-l-[3px]">
      <span className="uppercase text-[0.9rem] font-semibold cursor-pointer hover:text-primary">
        {title}
      </span>
      <>
        {text && <p className="mt-2 text-[#828282]">{text}</p>}
        {links && (
          <div className="text-md flex flex-col gap-y-1 mt-3">
            {links.map((link, index) => {
              return (
                <Link href={link.href} key={index}>
                  <span className="cursor-pointer hover:font-semibold hover:text-primary flex flex-row items-center gap-x-3 text-sm">
                    <AiOutlineArrowRight />
                    {link.name}
                  </span>
                </Link>
              );
            })}
          </div>
        )}
      </>
    </div>
  );
}

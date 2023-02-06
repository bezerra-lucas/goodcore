import Link from "next/link";
import Image from "next/image";

import logo from "@/assets/logo.webp";
import peopleConfig from "@/assets/people-config.webp";

import { RiArrowDropDownFill } from "react-icons/ri";
import { AiOutlineArrowRight } from "react-icons/ai";
import Button from "@/components/Button";
import { BsX } from "react-icons/bs";
import { RiArrowRightSFill, RiArrowDownSFill } from "react-icons/ri";
import { FaBars } from "react-icons/fa";
import { useState } from "react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMenuMobileOpen] = useState(false);

  return (
    <>
      <div className="shadow-md fixed lg:relative flex justify-center bg-[white] w-screen z-[2000]">
        <nav className="h-16 max-w-[1090px] w-[97%] flex flex-row items-center content-between ">
          <Image
            className="ml-5 lg:ml-0"
            src={logo}
            alt="goodcore logo"
            width={240}
            height={36}
          ></Image>
          <ul className="hidden lg:flex ml-auto text-[#303234] child:flex child:items-center gap-x-1 child:h-16 child:font-normal child:text-[14px] flex-row ">
            <li>
              <Link href="/services" className="peer cursor-pointer">
                <div className="uppercase flex items-center border-b-2 border-b-[#00000000] transition-all ease-in-out delay-[50] hover:bg-[#007bff15] hover:text-primary hover:border-b-primary h-16 w-full px-3">
                  Services
                  <RiArrowDropDownFill className="text-2xl" />
                </div>
              </Link>
              <div className=" absolute hidden peer-hover:flex hover:flex w-full top-16 bg-[white] left-0 shadow border-t border-[#f7f7f7] ">
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
              <div className="absolute hidden peer-hover:flex hover:flex w-full top-16 bg-[white] left-0 shadow border-t border-[#f7f7f7] ">
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
              <div className="absolute hidden peer-hover:flex hover:flex w-full top-16 bg-[white] left-0 shadow border-t border-[#f7f7f7] ">
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
                      text="Our time-tested process of developing efficient and fully custom sotop-16ftware systems"
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
              <div className="absolute hidden peer-hover:flex hover:flex w-full top-16 bg-[white] left-0 shadow border-t border-[#f7f7f7] ">
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
        <div className="h-16 hidden lg:flex items-center">
          <Button type="outlined" text="get in touch" className=""></Button>
        </div>

        {!isMobileMenuOpen && (
          <div
            onClick={() => {
              setIsMenuMobileOpen(true);
            }}
            className="flex cursor-pointer mr-8 items-center justify-center lg:hidden h-16"
          >
            <FaBars className="text-[40px] text-[#185286]" />
          </div>
        )}

        {isMobileMenuOpen && (
          <>
            <div
              onClick={() => {
                setIsMenuMobileOpen(false);
              }}
              className="flex cursor-pointer mr-8 items-center justify-center lg:hidden h-16"
            >
              <BsX className="text-[50px] text-[#185286]" />
            </div>
          </>
        )}
      </div>
      {isMobileMenuOpen && <MobileMenu />}
    </>
  );
}

function MobileMenu() {
  return (
    <div className="fixed lg:hidden h-screen overflow-auto top-10 left-0 w-screen py-6 z-[1000]">
      <div className="dropdown-wrapper py-8 bg-[white] min-h-screen flex flex-col ml-auto text-[#303234]">
        <DropdownList
          title="services"
          links={[
            { name: "Web App Development", href: "#" },
            { name: "Bespoke Business Applications", href: "#" },
            { name: "Mobile App Development", href: "#" },
            {
              title: "Software Development Outsourcing",
              links: [
                { name: "Overview", href: "#" },
                { name: "Dedicated Development Team", href: "#" },
                { name: "IT Staff Augmentation", href: "#" },
              ],
            },
            {
              title: "Web Portal Development",
              links: [
                { name: "Overview", href: "#" },
                { name: "B2B Portal Development", href: "#" },
                { name: "Vendor Portal Development", href: "#" },
                { name: "Customer Portal Development", href: "#" },
              ],
            },
            {
              title: "For Startups",
              links: [
                { name: "Software Development for Startups", href: "#" },
                { name: "MVP Development", href: "#" },
                { name: "Discovery Workshops", href: "#" },
                { name: "Virtual CTO", href: "#" },
              ],
            },
            {
              title: "Desktop Development",
              links: [
                { name: "Overview", href: "#" },
                { name: "Windows Development", href: "#" },
                { name: "macOS Development", href: "#" },
              ],
            },
            {
              title: "Product Development",
              links: [
                { name: "Overview", href: "#" },
                { name: "SaaS App Development Company", href: "#" },
                { name: "White Label Software Development", href: "#" },
              ],
            },
            { name: "Software Project Rescue", href: "#" },
            { name: "Support & Maintenance", href: "#" },
            { name: "API Development & System Integration", href: "#" },
            { name: "QA & Testing Services", href: "#" },
            { name: "UI/UX Design", href: "#" },
          ]}
        />
        <DropdownList
          title="technologies"
          links={[
            {
              title: "Web Development",
              links: [
                { name: "Node.js", href: "#" },
                { name: "PHP", href: "#" },
                { name: ".NET", href: "#" },
              ],
            },
            {
              title: "FrontEnd Development",
              links: [
                { name: "Overview", href: "#" },
                { name: "React", href: "#" },
                { name: "Vue.js", href: "#" },
                { name: "Angular", href: "#" },
              ],
            },
            {
              title: "Mobile App Development",
              links: [
                { name: "iOS", href: "#" },
                { name: "Android", href: "#" },
                { name: "Cross-Platform", href: "#" },
              ],
            },
            {
              title: "Cloud Development",
              links: [
                { name: "Overview", href: "#" },
                { name: "Microsoft Azure", href: "#" },
                { name: "Google Cloud Platform", href: "#" },
              ],
            },
          ]}
        />
        <DropdownList
          title="Company"
          links={[
            { name: "About Us", href: "#" },
            { name: "How We Work", href: "#" },
            { name: "Technologies", href: "#" },
            { name: "Our Process", href: "#" },
            { name: "FAQs", href: "#" },
            { name: "Pricing", href: "#" },
          ]}
        />
        <DropdownList
          title="Industries"
          links={[
            { name: "Tech", href: "#" },
            { name: "Healthcare", href: "#" },
            { name: "Utility", href: "#" },
            { name: "Education", href: "#" },
            { name: "Finance", href: "#" },
            { name: "Sports", href: "#" },
          ]}
        />
        <DropdownList
          title="Case Studies"
          links={[{ name: "Case Studies", href: "#" }]}
        />
        <DropdownList title="Blog" links={[{ name: "Blog", href: "#" }]} />
      </div>
    </div>
  );
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
        {text && <p className="mt-2 text-[#828282] items-center">{text}</p>}
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

interface iLink {
  href: string;
  name: string;
}
interface iDropdownListItem {
  title: string;
  links: Array<iDropdownListItem | iLink>;
}

function DropdownList({ title, links }: iDropdownListItem) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleOpenDropdown = () => {
    setIsDropdownOpen(true);
  };

  const handleCloseDropdown = () => {
    setIsDropdownOpen(false);
  };

  const handleToggleDropdownState = () => {
    if (isDropdownOpen) {
      setIsDropdownOpen(false);
    } else {
      setIsDropdownOpen(true);
    }
  };

  const linksType = typeof links;
  return (
    <div className="dropdown-list-item">
      {links.length === 1 && <div className="open-dropdown">{title}</div>}
      {links.length > 1 && (
        <>
          <div onClick={handleToggleDropdownState} className="open-dropdown">
            <span>{title}</span>
            <span className="ml-1 text-2xl text-primary">
              {!isDropdownOpen && (
                <RiArrowRightSFill onClick={handleOpenDropdown} />
              )}
              {isDropdownOpen && (
                <RiArrowDownSFill onClick={handleCloseDropdown} />
              )}
            </span>
          </div>
          <div className={`dropdown ${isDropdownOpen ? "block" : "hidden"}`}>
            {links.map((link, index) => {
              if ("links" in link) {
                return (
                  <DropdownList
                    key={index}
                    title={link.title}
                    links={link.links}
                  />
                );
              } else {
                return (
                  <div key={index} className="open-dropdown">
                    {link.name}
                  </div>
                );
              }
            })}
          </div>
        </>
      )}
    </div>
  );
}

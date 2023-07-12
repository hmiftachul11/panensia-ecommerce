import Image from "next/image";
import Link from "next/link";

import { footerLinks } from "@/constants";

const Footer = () => (
    <footer className='flex flex-col text-black-100  mt-5 border-t border-gray-100'>
        <div className='flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10'>
            <div className='flex flex-col justify-start items-start gap-6'>
                <Image src='/logo.png' alt='logo' width={118} height={18} className='object-contain' />
                <p className='text-base text-gray-700 font-thin'>
                    Panensia is an agricultural startup
                    that <br />aims to optimize the absorption 
                    of agricultural <br />harvests in Indonesia by means of innovation.
                </p>
                <p></p>
            </div>

            <div className="footer__links">
                {footerLinks.map((item) => (
                    <div key={item.title} className="footer__link">
                        <h3 className="font-bold">{item.title}</h3>
                        <div className="flex flex-col gap-5">
                            {item.links.map((link) => (
                                <Link
                                    key={link.title}
                                    href={link.url}
                                    className="text-gray-500 font-thin"
                                >
                                    {link.title}
                                </Link>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>

        <div className='flex justify-between items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-4 font-thin'>
            <p>@2023 Panensia. All rights reserved</p>

            <div className="footer__copyrights-link">
                <Link href="/" className="text-gray-500 font-thin">
                    Privacy & Policy
                </Link>
                <Link href="/" className="text-gray-500 font-thin">
                    Terms & Condition
                </Link>
            </div>
        </div>
    </footer>
);

export default Footer;
import Link from "next/link";
export interface Platform {
    name: string;
    iconSrc: string;
    href: string;
}

interface FooterProps {
    platforms: Platform[]
}
const Footer = ({platforms}: FooterProps) => {
const year = new Date().getFullYear();

  return (
    <section className="py-4 md:py-6 my-5 sm:my-10">
        <div className=" flex flex-col gap-4 items-center justify-center ">
            <div className="flex flex-row gap-4 items-center justify-center">
                {platforms.map((platform) => (
                    <a
                        key={platform.name}
                        href={platform.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={platform.name}
                        className="inline-flex items-center justify-center p-1 rounded hover:bg-hover focus:outline-none focus:ring-2"
                        >
                        <img key={platform.name} src={platform.iconSrc} alt={platform.name} className="dark:invert"/>
                        </a>
                ))}
            </div>
            <h3 className=" text-base font-normal line-clamp-3">
               Copyright © {year}. All Rights Reserved
            </h3>
            <div className="flex flex-row gap-4 items-center justify-center">
                <div className="flex items-center gap-2 text-sm text-slate-400">
                    <span>Made with</span>
                    <img src={'/platforms/nextjs.svg'} alt="Next.js" height={20} width={20}/>
                </div>
                <div className="relative">
                   <div className="text-slate-400 font-bold absolute top-[-15px]">
                        .
                   </div>
                    
                </div>
                <a
                    href={'https://github.com/ahmedBilal5/portfolio'}
                    target="_blank"
                    className=" text-sm text-cyan-500 text-base font-normal leading-6 hover:text-cyan-600 transition-colors whitespace-nowrap flex items-center gap-1"
                >
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="h-3.5 w-3.5"
                        aria-hidden="true"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M9 7h8v8" />
                    </svg>
                    View Source Code
                </a>
            </div>
        </div>
    </section>
  )
}



export default Footer
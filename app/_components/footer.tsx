
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
                        className="inline-flex items-center justify-center p-1 rounded hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-sky-500"
                        >
                        <img key={platform.name} src={platform.iconSrc} alt={platform.name}/>
                        </a>
                ))}
            </div>
            <h3 className="text-slate-800 text-base font-normal line-clamp-3">
               Copyright © {year}. All Rights Reserved
            </h3>
        </div>
    </section>
  )
}



export default Footer
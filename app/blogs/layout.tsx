import { ReactNode } from "react";

export default function BlogLayout({children}: {children: ReactNode}){
    return <div className="md:max-w-[80%] mx-auto">
        {children}
    </div>
}
// import Image from "next/image";

export default function Home() {
    return (
        <div className="h-screen p-8 mx-auto flex justify-center items-center bg-[#2d545e] text-[#F2F0EF] font-mono text-base">
            <div className="flex items-center gap-5 p-8">
                <div className="about-me">
                    <h1 className="text-2xl font-bold">Katherine Charry</h1>
                    <h2 className="text-lg font-semibold">Hello World!</h2>
                    <p className="pr-8">I’m a second-year Computer Science student at the University of California, San Diego. 
                        I work in the Boolean Lab under Professor Sahoo, developing a web-based tool to automate 
                        primer design for miRNA detection, and contribute as a developer on the CSES Runway Avenue 
                        site development team. Beyond programming, I mentor first-year Computing students as a Lead 
                        Peer Mentor with CSE-PACE and organize and lead programming workshops for local high schools 
                        as the Logistics Lead for the ACM Outreach team.</p>
                </div>

                <img 
                    className="w-72 h-72 rounded-full object-cover" 
                    src="/imgs/profile-pic.JPG" 
                    alt="Profile Picture" 
                />
            </div>
        </div>
    );
}

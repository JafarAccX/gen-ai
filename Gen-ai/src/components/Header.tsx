import { useState } from "react";
import { Menu, X, ChevronDown, ArrowUpRight } from "lucide-react";
import { NAV_LINKS } from "../constants/GenAIv2Constants";

export default function Header() {
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-[100] h-[80px] flex items-center justify-center w-full px-4 md:px-6 select-none">
            <div className="w-full max-w-[1300px] h-[60px] mt-[10px] bg-[#000000] backdrop-blur-[5px] rounded-[100px] flex items-center justify-between pr-[20px]" style={{ paddingLeft: '20px' }}>

                {/* Logo */}
                <a href="/" className="flex items-center space-x-2 hover:opacity-90 transition-all duration-200">
                    <img
                        src="/assets/accelerator.png"
                        alt="AcceleratorX"
                        className="h-[20px] w-auto object-contain"
                    />
                </a>

                {/* Desktop Navigation & Auth (Visible on Desktop) */}
                <div className="hidden lg:flex items-center gap-[70px]">
                    {/* Nav Links */}
                    <nav className="flex items-center gap-[56px]">
                        <a
                            href="#home"
                            className="w-[39px] h-[20px] flex items-center justify-center font-inter font-medium text-[14px] text-[#DFDFDF] tracking-[-0.36px] border-b-[1px] border-[#3E38E0] transition-colors"
                        >
                            Home
                        </a>
                        <div className="w-[80px] h-[20px] relative group cursor-pointer flex items-center gap-[4px]">
                            <span className="font-inter font-medium text-[14px] text-[#DFDFDF] tracking-[-0.36px] hover:text-white transition-colors">
                                Programs
                            </span>
                            <ChevronDown size={14} className="text-[#DFDFDF] mt-[1px]" />
                        </div>
                        <a
                            href="#about"
                            className="w-[40px] h-[20px] flex items-center font-inter font-medium text-[14px] text-[#DFDFDF] tracking-[-0.36px] hover:text-white transition-colors"
                        >
                            About
                        </a>
                        <a
                            href="#blog"
                            className="w-[29px] h-[20px] flex items-center font-inter font-medium text-[14px] text-[#DFDFDF] tracking-[-0.36px] hover:text-white transition-colors"
                        >
                            Blog
                        </a>
                        <a
                            href="#jobs"
                            className="w-[66px] h-[20px] flex items-center font-inter font-medium text-[14px] text-[#DFDFDF] tracking-[-0.36px] hover:text-white transition-colors"
                        >
                            Job Portal
                        </a>
                    </nav>

                    {/* Auth Group */}
                    <div className="flex items-center gap-[16px]">
                        <a
                            href="#sign-in"
                            className="w-[40px] h-[20px] flex items-center font-inter font-medium text-[14px] text-[#DFDFDF] tracking-[-0.36px] hover:text-white transition-colors"
                        >
                            Log In
                        </a>

                        <a
                            href="#sign-up"
                            className="w-[110px] h-[28px] pl-[12px] flex items-center select-none hover:opacity-90 transition-opacity"
                        >
                            {/* Sign Up Text Container */}
                            <div className="w-[71px] h-[28px] flex items-center justify-center border border-[#3E38E0] rounded-[20px] font-inter font-medium text-[14px] text-[#DFDFDF] tracking-[-0.36px] z-10">
                                Sign Up
                            </div>
                            {/* Arrow Circle */}
                            <div className="w-[28px] h-[28px] ml-[-1px] flex items-center justify-center border border-[#3E38E0] rounded-full bg-transparent text-[#FFFFFF] z-20">
                                <ArrowUpRight size={16} strokeWidth={1.5} />
                            </div>
                        </a>
                    </div>
                </div>

                {/* Mobile Hamburger Menu */}
                <button
                    className="lg:hidden flex items-center justify-center w-[36px] h-[36px] rounded-full bg-[#1A1A1A] border border-[#333]"
                    onClick={() => setMobileOpen(true)}
                >
                    <Menu size={20} className="text-white" />
                </button>
            </div>

            {/* Mobile Sidebar */}
            <div className={`fixed inset-0 z-[200] bg-black transition-all duration-300 lg:hidden ${mobileOpen ? "translate-x-0" : "translate-x-full"}`}>
                <div className="flex items-center justify-between px-6 py-6 border-b border-white/5">
                    <img src="/assets/accelerator.png" alt="AcceleratorX" className="h-[20px] object-contain" />
                    <button onClick={() => setMobileOpen(false)} className="p-1">
                        <X size={28} className="text-white" />
                    </button>
                </div>

                <div className="flex flex-col p-8 gap-8">
                    {NAV_LINKS.map((link) => (
                        <a
                            key={link}
                            href={link === "Home" ? "#home" : `#${link.toLowerCase().replace(" ", "-")}`}
                            onClick={() => setMobileOpen(false)}
                            className="text-[20px] font-medium text-[#DFDFDF] hover:text-white transition-colors flex items-center justify-between border-b border-[#1A1A1A] pb-4"
                        >
                            {link}
                            {link === "Programs" && <ChevronDown size={18} />}
                        </a>
                    ))}

                    <div className="mt-8 flex flex-col gap-4">
                        <a
                            href="#sign-in"
                            onClick={() => setMobileOpen(false)}
                            className="w-full h-[52px] rounded-xl border border-[#3E38E0]/30 flex items-center justify-center text-[#DFDFDF] text-[16px] font-semibold hover:bg-white/5 transition-colors"
                        >
                            Log In
                        </a>
                        <a
                            href="#sign-up"
                            onClick={() => setMobileOpen(false)}
                            className="w-full h-[52px] rounded-xl bg-[#3E38E0] flex items-center justify-center text-white text-[16px] font-bold hover:opacity-95 transition-opacity"
                        >
                            Sign Up
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
}


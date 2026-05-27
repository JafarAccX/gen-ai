import { useState, useEffect } from "react";
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
                <div className="hidden xl:flex items-center gap-[70px]">
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
                    className="xl:hidden flex items-center justify-center w-[36px] h-[36px] rounded-full bg-[#1A1A1A] border border-[#333]"
                    onClick={() => setMobileOpen(true)}
                >
                    <Menu size={20} className="text-white" />
                </button>
            </div>

            {/* Mobile Sidebar Backdrop Overlay */}
            {mobileOpen && (
                <div
                    className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[190] xl:hidden transition-opacity duration-300"
                    onClick={() => setMobileOpen(false)}
                />
            )}

            {/* Mobile Sidebar Drawer */}
            <div className={`fixed inset-y-0 right-0 z-[200] w-[85vw] max-w-[320px] bg-black/95 backdrop-blur-xl border-l border-white/10 transition-all duration-300 xl:hidden flex flex-col ${mobileOpen ? "translate-x-0" : "translate-x-full"} shadow-2xl p-4 h-full transform-gpu`}>
                {/* Header (fixed at top) */}
                <div className="flex items-center justify-between mb-8 flex-shrink-0">
                    <img src="/assets/accelerator.png" alt="Logo" className="h-5 w-auto object-contain" />
                    <button
                        onClick={() => setMobileOpen(false)}
                        className="text-gray-400 hover:text-white p-2 rounded-full transition-colors"
                    >
                        <X size={24} />
                    </button>
                </div>

                {/* Scrollable links container */}
                <div className="flex flex-col space-y-2 flex-grow overflow-y-auto pr-1">
                    {/* Courses */}
                    <div className="mb-2">
                        <button
                            className="font-sans flex items-center justify-between w-full text-gray-200 hover:text-white text-lg font-semibold py-3 px-4 rounded-xl transition-colors"
                            onClick={() => setMobileOpen(false)}
                        >
                            <span>Courses</span>
                            <ChevronDown size={20} className="transition-transform duration-300" />
                        </button>
                    </div>

                    {/* About */}
                    <a
                        className="font-sans flex items-center justify-between py-3 px-4 rounded-xl text-lg font-semibold transition-colors text-gray-200 hover:text-white"
                        href="#about"
                        onClick={() => setMobileOpen(false)}
                    >
                        <span>About</span>
                    </a>

                    {/* Blog */}
                    <a
                        className="font-sans flex items-center justify-between py-3 px-4 rounded-xl text-lg font-semibold transition-colors text-gray-200 hover:text-white"
                        href="#blog"
                        onClick={() => setMobileOpen(false)}
                    >
                        <span>Blog</span>
                    </a>

                    {/* Jobs Portal */}
                    <a
                        className="font-sans flex items-center justify-between py-3 px-4 rounded-xl text-lg font-semibold transition-colors text-gray-200 hover:text-white"
                        href="#jobs"
                        onClick={() => setMobileOpen(false)}
                    >
                        <span>Jobs Portal</span>
                    </a>

                    {/* Our Platforms */}
                    <div className="mb-2">
                        <button
                            className="font-sans flex items-center justify-between w-full text-[#FFBB00] hover:text-[#FFBB00]/80 text-lg font-semibold py-3 px-4 rounded-xl transition-colors"
                            onClick={() => setMobileOpen(false)}
                        >
                            <span>Our Platforms</span>
                            <ChevronDown size={20} className="transition-transform duration-300" />
                        </button>
                    </div>
                </div>

                {/* Footer / Buttons Container at the bottom of drawer */}
                <div className="mt-auto pt-8 border-t border-white/10 flex-shrink-0">
                    <div className="flex flex-col space-y-3">
                        <a
                            className="font-sans w-full text-center py-3 px-6 rounded-xl border border-white/20 text-gray-200 font-semibold hover:bg-white/5 transition-colors"
                            href="#sign-in"
                            onClick={() => setMobileOpen(false)}
                        >
                            Login
                        </a>
                        <a
                            className="font-sans w-full text-center py-3 px-6 rounded-xl bg-[#1a71f6] text-white font-semibold shadow-lg shadow-blue-500/20 hover:bg-blue-600 transition-all active:scale-[0.98]"
                            href="#sign-up"
                            onClick={() => setMobileOpen(false)}
                        >
                            Sign Up
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
}


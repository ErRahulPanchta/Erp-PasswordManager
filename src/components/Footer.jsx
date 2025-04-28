import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-slate-800 text-white flex flex-col justify-center items-center py-4 gap-2">
            <a href="/" className="logo font-bold text-2xl">
                <span className="text-green-500">&lt;</span>Pass<span className="text-green-500">OP/&gt;</span>
            </a>
            <div className="flex items-center">
                Created with <img src="/icons/heart.png" alt="Heart" className="w-6 mx-2" /> by Erp Technology
            </div>
            <p className="text-xs text-gray-400">© {new Date().getFullYear()} PassOP. All rights reserved.</p>
        </footer>
    );
};

export default Footer;

import React from 'react';

const Navbar = () => {
    return (
        <nav className="bg-slate-800 text-white">
            <div className="mycontainer flex justify-between items-center px-4 py-5 h-14">
                <div className="logo font-bold text-2xl">
                    <span className="text-green-500">&lt;</span>Pass<span className="text-green-500">OP/&gt;</span>
                </div>
                <a href="https://github.com/ErRahulPanchta" target="_blank" rel="noopener noreferrer">
                    <button className="bg-green-600 hover:bg-green-500 flex items-center gap-2 rounded-full px-4 py-2">
                        <img src="/icons/github.svg" className="w-6 invert" alt="GitHub" />
                        GitHub
                    </button>
                </a>
            </div>
        </nav>
    );
};

export default Navbar;

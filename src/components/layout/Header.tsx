import Link from 'next/link';

export default function Header() {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-gray-800 bg-gray-900/95 backdrop-blur supports-[backdrop-filter]:bg-gray-900/80">
            <div className="container mx-auto flex h-20 items-center justify-between px-6">
                <Link href="/" className="flex items-center space-x-2">
                    <span className="text-2xl font-bold tracking-tight text-white">iCraftThemes</span>
                </Link>

                <nav className="hidden md:flex items-center space-x-8 text-[17px] font-medium text-gray-300">
                    <Link href="/" className="transition-colors hover:text-white">
                        Home
                    </Link>
                    <Link href="/about" className="transition-colors hover:text-white">
                        About
                    </Link>
                    <Link href="/contact" className="transition-colors hover:text-white">
                        Contact
                    </Link>
                </nav>

                <div className="flex items-center space-x-4">
                    <button className="md:hidden p-2 text-gray-400 hover:text-white">
                        <span className="sr-only">Toggle Menu</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" /></svg>
                    </button>
                </div>
            </div>
        </header>
    );
}

import Link from "next/link";


const Navbar = () => {
    const navItem = [
        {
            title: 'Home',
            path: '/'
        },
        {
            title: 'About',
            path: '/about'
        },
        {
            title: 'Service',
            path: '/service'
        },
        {
            title: 'Blog',
            path: '/blog'
        },
        {
            title: 'Contact',
            path: '/contact'
        },
    ]

    return (
        <div className="navbar bg-base-200 px-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {
                            navItem.map((item) => <Link key={item} href={item.path}>{item.title}</Link>)
                        }
                    </ul>
                </div>
                <Link href={'/'} style={{ color: 'black', fontSize: '25px' }}>
                    Car Doctor
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 space-x-5 text-xl">
                    {
                        navItem.map((item) => <Link key={item} href={item.path}>{item.title}</Link>)
                    }
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn ">Appointment</a>
            </div>
        </div>
    );
};

export default Navbar;
import Link from 'next/link';

const Navbar = () => {
	return (
		<nav className='text-black my-6 max-w-5xl mx-auto flex justify-between'>
			<Link className='text-black font-bold' href={'/'}>
				countries-list
			</Link>
			<Link className='' href={'/countries'}>
				Countries
			</Link>
		</nav>
	);
};

export default Navbar;

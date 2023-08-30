'use client';
import Image from 'next/image';
import { Country } from '../countries/page';
import { useState } from 'react';

const CountriesTable = ({ countries }: { countries: Country[] }) => {
	const [search, setSearch] = useState('');
	return (
		<div>
			<input
				type='text'
				name='search'
				placeholder='Search by name'
				className='p-2 px-4 my-4 bg-zinc-200 rounded-full mx-auto block'
				onChange={(e) => {
					setSearch(e.target.value);
				}}
			/>
			<table className='bg-zinc-900 text-zinc-200 border-spacing-0 border-separate border-2 border-zinc-800 p-4 rounded mx-auto table-auto'>
				<thead className='text-left bg-zinc-700 rounded'>
					<tr className='rounded text-zinc-300'>
						<th className='p-2 rounded-l'>Name</th>
						<th className='p-2 rounded-r'>Flag</th>
					</tr>
				</thead>
				<tbody>
					{!search
						? countries.map((country) => {
								return (
									<tr className='' key={country.name.common}>
										<td className='mr-20'>{country.name.common}</td>
										<td>
											<Image
												src={country.flags.svg}
												width={0}
												height={0}
												sizes='100vw'
												className='w-24 h-auto'
												alt={country.flags.alt}
											/>
										</td>
									</tr>
								);
						  })
						: countries.map((country) => {
								if (country.name.common.toLowerCase().startsWith(search.toLowerCase()))
									return (
										<tr className='my-2' key={country.name.common}>
											<td className='mr-3'>{country.name.common}</td>
											<td>
												<Image
													src={country.flags.svg}
													width={0}
													height={0}
													sizes='100vw'
													className='w-24 h-auto'
													alt={country.flags.alt}
												/>
											</td>
										</tr>
									);
						  })}
				</tbody>
			</table>
		</div>
	);
};

export default CountriesTable;

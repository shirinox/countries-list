import CountriesTable from '../components/CountriesTable';

export type Country = {
	flags: {
		png: string;
		svg: string;
		alt: string;
	};
	name: {
		common: string;
		official: string;
		nativeName: {
			[lang: string]: {
				official: string;
				common: string;
			};
		};
	};
};

const CountriesList = async () => {
	const res = await fetch('https://restcountries.com/v3.1/all?fields=name,flags');
	const countries: Country[] = await res.json();
	return <CountriesTable countries={countries} />;
};

export default CountriesList;

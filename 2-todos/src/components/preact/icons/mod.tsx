import type { JSX } from "preact/jsx-runtime";

export interface Icon {
	name:
	| 'bell'
	| 'calendar'
	| 'hash'
	| 'inbox'
	| 'plus'
	| 'search'
	| 'sidebar'
	| 'sunrise'
	| 'plus-circle';
	svg: JSX.Element;
}

export const icons: Record<Icon['name'], Icon> = {
	bell: {
		name: 'bell',
		svg: (
			<>
				<path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
				<path d="M13.73 21a2 2 0 0 1-3.46 0" />
			</>),
	},
	calendar: {
		name: 'calendar',
		svg: (
			<>
				<rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
			</>),
	},
	hash: {
		name: 'hash',
		svg: (
			<>
				<line x1="4" y1="9" x2="20" y2="9" />
				<line x1="4" y1="15" x2="20" y2="15" />
				<line x1="10" y1="3" x2="8" y2="21" />
				<line x1="16" y1="3" x2="14" y2="21" />
			</>),
	},
	inbox: {
		name: 'inbox',
		svg: (
			<>
				<polyline points="22 12 16 12 14 15 10 15 8 12 2 12" />
				<path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" />
			</>),
	},
	plus: {
		name: 'plus',
		svg: (
			<>
				<line x1="12" y1="5" x2="12" y2="19" />
				<line x1="5" y1="12" x2="19" y2="12" />
			</>),
	},
	search: {
		name: 'search',
		svg: (
			<>
				<circle cx="11" cy="11" r="8" />
				<line x1="21" y1="21" x2="16.65" y2="16.65" />
			</>),
	},
	sidebar: {
		name: 'sidebar',
		svg: (
			<>
				<rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
				<line x1="9" y1="3" x2="9" y2="21" />
			</>),
	},
	sunrise: {
		name: 'sunrise',
		svg: (
			<>
				<path d="M17 18a5 5 0 0 0-10 0" />
				<line x1="12" y1="2" x2="12" y2="9" />
				<line x1="4.22" y1="10.22" x2="5.64" y2="11.64" />
				<line x1="1" y1="18" x2="3" y2="18" />
				<line x1="21" y1="18" x2="23" y2="18" />
				<line x1="18.36" y1="11.64" x2="19.78" y2="10.22" />
				<line x1="23" y1="22" x2="1" y2="22" />
				<polyline points="8 6 12 2 16 6" />
			</>),
	},
	'plus-circle': {
		name: 'plus-circle',
		svg: (
			<>
				<circle cx="12" cy="12" r="10" />
				<line x1="12" y1="8" x2="12" y2="16" />
				<line x1="8" y1="12" x2="16" y2="12" />
			</>),
	},
};

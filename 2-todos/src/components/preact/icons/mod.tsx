import type { JSX } from "preact/jsx-runtime";

export interface Icon {
	name:
	| 'bell'
	| 'check'
	| 'calendar'
	| 'hash'
	| 'inbox'
	| 'plus'
	| 'search'
	| 'sidebar'
	| 'sunrise'
	| 'plus-circle'
	| 'grid'
	| 'circleCheker'
	| 'chevron-up'
	| 'chevron-down'
	| 'more-horizontal'
	| 'x'
	| 'flag'
	| 'lock'
	| 'drag'
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
	check:{
		name:'check',
		svg:(
			<>
			  <svg width="24" height="24" viewBox="0 0 24 24">
				<line
				  x1="20"
				  y1="6"
				  x2="9"
				  y2="17"
				  stroke="currentColor"
				  strokeWidth="2"
				  strokeLinecap="round"
				  strokeLinejoin="round"
				/>
				<line
				  x1="9"
				  y1="17"
				  x2="4"
				  y2="12"
				  stroke="currentColor"
				  strokeWidth="2"
				  strokeLinecap="round"
				  strokeLinejoin="round"
				/>
			  </svg>
			</>
		  )

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
	grid: {
		name: 'grid',
		svg: (
			<>
				<rect x="3" y="3" width="7" height="7" />
				<rect x="14" y="3" width="7" height="7" />
				<rect x="14" y="14" width="7" height="7" />
				<rect x="3" y="14" width="7" height="7" />
			</>
		)
	},
	circleCheker: {
		name:'circleCheker',
		svg:(
			<>
			  
			  <path fill="currentColor" fill-rule="evenodd" d="M8 14.001a6 6 0 1 1 0-12 6 6 0 0 1 0 12Zm0-1a5 5 0 1 0 0-10 5 5 0 0 0 0 10ZM5.146 8.147a.5.5 0 0 1 .708 0L7 9.294l3.146-3.147a.5.5 0 0 1 .708.708l-3.5 3.5a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 0-.708Z" clip-rule="evenodd"></path>
			
			</>
		  )
	},
	'chevron-up':{
		name:'chevron-up',
		svg:(
			<>
			  <svg width="24" height="24" viewBox="0 0 24 24">
				<polyline
				  points="18 15 12 9 6 15"
				  stroke="currentColor"
				  strokeWidth="1"
				  strokeLinecap="round"
				  strokeLinejoin="round"
				/>
			  </svg>
			</>
		  )
	},
	'chevron-down':{
		name:'chevron-down',
		svg:(
			<>
			  <svg width="24" height="24" viewBox="0 0 24 24">
				<polyline
				  points="6 9 12 15 18 9"
				  stroke="currentColor"
				  strokeWidth="1"
				  strokeLinecap="round"
				  strokeLinejoin="round"
				/>
			  </svg>
			</>
		  )
	},
	'more-horizontal':{
		name:'more-horizontal',
		svg:(
			<>
			  <svg width="24" height="24" viewBox="0 0 24 24">
				<circle cx="12" cy="12" r="2" stroke="currentColor" strokeWidth="1" fill="none"/>
				<circle cx="19" cy="12" r="2" stroke="currentColor" strokeWidth="1" fill="none"/>
				<circle cx="5" cy="12" r="2" stroke="currentColor" strokeWidth="1" fill="none"/>
			  </svg>
			</>
		  )
	},
	'x':{
		name:'x',
		svg:(
			<>
			  <svg width="24" height="24" viewBox="0 0 24 24">
				<line x1="18" y1="6" x2="6" y2="18" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
				<line x1="6" y1="6" x2="18" y2="18" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
			  </svg>
			</>
		  )
	},
	'flag':{
		name:'flag',
		svg:(
			<>
			  <svg width="24" height="24" viewBox="0 0 24 24">
				<path
				  d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"
				  stroke="currentColor"
				  strokeWidth="1"
				  strokeLinecap="round"
				  strokeLinejoin="round"
				/>
				<line
				  x1="4"
				  y1="22"
				  x2="4"
				  y2="15"
				  stroke="currentColor"
				  strokeWidth="1"
				  strokeLinecap="round"
				  strokeLinejoin="round"
				/>
			  </svg>
			</>
		  )

	},
	'lock':{
		name:'lock',
		svg:(
			<>
			  <svg width="24" height="24" viewBox="0 0 24 24">
				<rect
				  x="3"
				  y="11"
				  width="18"
				  height="11"
				  rx="2"
				  ry="2"
				  stroke="currentColor"
				  strokeWidth="1"
				  fill="none"
				/>
				<path
				  d="M7 11V7a5 5 0 0 1 10 0v4"
				  stroke="currentColor"
				  strokeWidth="1"
				  strokeLinecap="round"
				  strokeLinejoin="round"
				
				/>
			  </svg>
			</>
		  )
	},
	'drag':{
		name:'drag',
		svg:(<>
			<path 
			fill="currentColor" 
			d="M14.5 15.5a1.5 1.5 0 1 1-.001 3.001A1.5 1.5 0 0 1 14.5 15.5zm-5 0a1.5 1.5 0 1 1-.001 3.001A1.5 1.5 0 0 1 9.5 15.5zm5-5a1.5 1.5 0 1 1-.001 3.001A1.5 1.5 0 0 1 14.5 10.5zm-5 0a1.5 1.5 0 1 1-.001 3.001A1.5 1.5 0 0 1 9.5 10.5zm5-5a1.5 1.5 0 1 1-.001 3.001A1.5 1.5 0 0 1 14.5 5.5zm-5 0a1.5 1.5 0 1 1-.001 3.001A1.5 1.5 0 0 1 9.5 5.5z">
			</path>
		</>)
	}
};

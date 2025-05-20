export interface Commentary {
	author: string;
	content: string;
	avatar: string;
}

const firstComment: Commentary = {
	author: 'Miguel Angel Duran',
	content:
		'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."',
	avatar:
		'https://talent-land.es/wp-content/uploads/2024/06/tl-es-2024-speaker-main-stage-miguel-angel-duran-g-01-600x800-1.jpg',
};

const secondComment: Commentary = {
	author: 'Guillermo Rauch',
	content:
		'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ."',
	avatar: 'https://rauchg.com/images/rauchg-3d4cecf.jpg',
};

const thirdComment: Commentary = {
	author: 'Evan You',
	content:
		'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ."',
	avatar: 'https://avatars.githubusercontent.com/u/499550?v=4',
};
const fourthComment: Commentary = {
	author: 'Evan You',
	content:
		'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ."',
	avatar: 'https://avatars.githubusercontent.com/u/499550?v=4',
};

export const COMMENTS: Commentary[] = [
	firstComment,
	secondComment,
	thirdComment,
];

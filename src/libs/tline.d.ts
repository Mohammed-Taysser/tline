export type TLine = {
	name: string;
	url?: string;
	description: string;
	createdAt: Date;
	tags: string[];
	links?: [
		{
			name: string;
			url: string;
		}
	];
};

export type DefaultProps = {
	tag: null | string;
	year: null | number;
	reversed: boolean;
	darkmode: boolean;
	timeline: TLine[];
};

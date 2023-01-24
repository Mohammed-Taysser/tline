import React, { useEffect, useState } from 'react';
import { DefaultProps, TLine } from './tline';
import './tline.css';

const MONTHS = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December',
];

function Tline(props: DefaultProps) {
	const [timeline, setTimeline] = useState<TLine[]>(props.timeline);

	useEffect(() => {
		let sortFn = null;
		if (props.reversed) {
			sortFn = (a: TLine, b: TLine) =>
				b.createdAt.getTime() - a.createdAt.getTime();
		} else {
			sortFn = (a: TLine, b: TLine) =>
				a.createdAt.getTime() - b.createdAt.getTime();
		}

		timeline.sort(sortFn);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [props.reversed]);

	useEffect(() => {
		setTimeline(
			props.timeline.filter((item) => {
				if (props.tag === 'all') {
					return true;
				} else {
					return props.tag ? item.tags.includes(props.tag) : true;
				}
			})
		);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [props.tag]);

	useEffect(() => {
		setTimeline(
			props.timeline.filter((item) => {
				if (props.year === 0) {
					return true;
				} else {
					return props.year
						? item.createdAt.getFullYear() === props.year
						: true;
				}
			})
		);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [props.year]);

	if (props.timeline.length === 0) {
		return <></>;
	}

	return (
		<div className={`timeline-wrapper ${props.darkmode ? 'darkmode' : ''}`}>
			<ul className='timeline'>
				{timeline.map((repo, index) => (
					<li key={repo.name + repo.url}>
						<div
							className={`${index % 2 === 0 ? 'direction-r' : 'direction-l'}`}
						>
							<div className='flag-wrapper'>
								<span className='flag'>
									{repo.url ? (
										<a
											title={repo.name}
											target='_blank'
											rel='noreferrer'
											href={repo.url}
										>
											{repo.name}
										</a>
									) : (
										repo.name
									)}
								</span>
								<span className='time-wrapper'>
									<span className='time'>
										{repo.createdAt.getFullYear()},{' '}
										{MONTHS[repo.createdAt.getMonth()]}
									</span>
								</span>
							</div>
							<div className='desc'>
								<p>{repo.description}</p>
								{repo.links &&
									repo.links.length > 0 &&
									repo.links.map((link) => (
										<React.Fragment key={link.name + link.url}>
											<a href={link.url}>{link.name}</a>,{' '}
										</React.Fragment>
									))}
							</div>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
}

Tline.defaultProps = {
	tag: 'all',
	year: 0,
	reversed: false,
	darkmode: false,
	timeline: [],
};

export default Tline;

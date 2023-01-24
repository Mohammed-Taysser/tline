import { useState } from 'react';
import Tline, { DefaultProps } from './libs/Tline';
import CONFIG from './config';
import data from './data';
import './app.css';

function App() {
	const [setting, setSetting] = useState<DefaultProps>({
		tag: 'all',
		year: 0,
		reversed: false,
		darkmode: false,
		timeline: data,
	});

	return (
		<div className={`app ${setting.darkmode ? 'darkmode' : ''}`}>
			<div className='options-wrapper '>
				<h1 className=''>TLINE</h1>
				<div>
					<label>
						<input
							type='checkbox'
							name='reversed'
							onChange={(evt) =>
								setSetting({ ...setting, reversed: evt.target.checked })
							}
						/>
						Reverse Timeline
					</label>
				</div>
				<div>
					<label>Filter by tags:</label>
					<select
						title='select a tag'
						onChange={(evt) =>
							setSetting({ ...setting, tag: evt.target.value })
						}
					>
						<option value='all'>--Select a tag--</option>
						{CONFIG.tags.map((tag) => (
							<option value={tag} key={tag}>
								{tag}
							</option>
						))}
					</select>
				</div>
				<div className='date-filter'>
					<label>Filter by year:</label>
					<select
						title='Select a year'
						onChange={(evt) =>
							setSetting({ ...setting, year: parseInt(evt.target.value) })
						}
					>
						<option value={0}>--Select a year--</option>
						{CONFIG.years.map((year) => (
							<option value={year} key={year}>
								{year}
							</option>
						))}
					</select>
				</div>
				<div>
					<label>
						<input
							type='checkbox'
							onChange={(evt) =>
								setSetting({ ...setting, darkmode: evt.target.checked })
							}
						/>
						Dark Mode
					</label>
				</div>
				<div>
					<a
						className='header-link'
						href='https://github.com/mohammed-taysser/tline'
						target='_blank'
						rel='noreferrer noopener'
						title='Github url'
					>
						Github
					</a>
				</div>
			</div>
			<Tline {...setting} />
		</div>
	);
}

export default App;

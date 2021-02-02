import React from 'react';

import * as Icons from '../components/icons';
import { Button } from '../components';
export default {
	title: 'Example/Navigation Bar Icons',
};

export const NavIcons = () => (
	<div className='icons'>
		<Icons.Apps style={{ color: '#4255d4' }} />
		<Icons.HomePage style={{ color: '#4255d4' }} />
		<Icons.Layer style={{ color: '#4255d4' }} />
		<Icons.Messages style={{ color: '#4255d4' }} />
		<Icons.Settings style={{ color: '#4255d4' }} />
		<Icons.Logout style={{ color: '#4255d4' }} />
	</div>
);

export const AllIcons = () => (
	<div className='icons'>
		<Icons.Apps />
		<Icons.HomePage />
		<Icons.Layer />
		<Icons.Messages />
		<Icons.Settings />
		<Icons.Logout />
		<Icons.Active />
		<Icons.Bookings />
		<Icons.Calender />
		<Icons.Controller />
		<Icons.Fire />
		<Icons.Wave />
		<Icons.Waiting />
		<Icons.Rejected />
		<Icons.LeftArrow />
		<Icons.RightArrow />
		<Icons.Location />
		<Icons.User />
		<Icons.Search />
		<Icons.Reports />
		<Icons.Map />
	</div>
);

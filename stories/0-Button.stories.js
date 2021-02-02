import React from 'react';
import { Button } from '../components';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import { HomePage } from '../components/icons';

export default {
	title: 'Example/Button',
	component: Button,
	decorators: [withKnobs],
};

const Template = (args) => <Button {...args} />;
const style = {
	padding: 6,
};
export const DefaultButton = Template.bind({});
DefaultButton.args = {
	label: 'Button',
	children: text('Test Me!', 'Click me!'),
	style: style,
};

export const ActiveButton = Template.bind({});
ActiveButton.args = {
	active: boolean('active', true),
	style: style,
	children: 'Test Me!',
};

export const LinkButton = Template.bind({});
LinkButton.args = {
	children: 'Test Me!',
	style: style,
	href: '#',
};

export const IconButton = Template.bind({});
IconButton.args = {
	children: 'Icon Button',
	style: style,
	startIcon: <HomePage />,
};

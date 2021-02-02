import React from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import styles from './index.module.css';
import PropTypes from 'prop-types';

function LinkButton({ href, children, ...props }) {
	return (
		<Link href={href}>
			<a {...props}>
				{props?.startIcon}
				{children}
			</a>
		</Link>
	);
}

function BaseButton({ children, startIcon, ...props }) {
	return (
		<button type='button' {...props}>
			{startIcon} {children}
		</button>
	);
}

function Button({
	full = false,
	children,
	className,
	startIcon,
	active = false,
	...rest
}) {
	const Comp = rest.href ? LinkButton : BaseButton;

	return (
		<Comp
			className={clsx(styles.button, className, active && styles.active)}
			startIcon={startIcon}
			{...rest}
		>
			{children}
		</Comp>
	);
}

Button.propTypes = {
	full: PropTypes.bool,
	active: PropTypes.bool,
	href: PropTypes.string,
	className: PropTypes.string,
	children: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
	onClick: PropTypes.func,
	startIcon: PropTypes.object,
};

Button.defaultProps = {
	onClick: undefined,
	active: false,
	href: undefined,
	full: false,
};

export default Button;

import React from 'react';
import Header from './Header';

export default function Hero() {
	return (<div id="hero">
		<div className="main">
			{'Cutting edge '}
			<em>technology</em>
			{' meets beautiful '}
			<em>data visualization.</em>
		</div>
		<div className="secondary">
			Industrial-grade frameworks to supercharge your next big idea.
		</div>
	</div>);
}
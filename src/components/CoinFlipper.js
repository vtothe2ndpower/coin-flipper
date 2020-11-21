import React, { Component } from 'react';
import Coin from './Coin';
import { choice } from '../helpers';
import '../CoinFlipper.css';

class CoinFlipper extends Component {
	static defaultProps = {
		coins: [
			{
				side: 'heads',
				imgSrc:
					'https://images.squarespace-cdn.com/content/5786a922cd0f688d44f9cab2/1482516309363-XRW7H2807LYQGOTAU3QK/quarter.png?content-type=image%2Fpng'
			},
			{
				side: 'tails',
				imgSrc: 'https://www.nicepng.com/png/full/146-1464848_quarter-tail-png-tails-on-a-coin.png'
			}
		]
	};
	constructor(props) {
		super(props);
		this.state = {
			currCoin: null,
			nFlips: 0,
			nHeads: 0,
			nTails: 0
		};
		this.handleClick = this.handleClick.bind(this);
		this.flipCoin = this.flipCoin.bind(this);
	}

	flipCoin() {
		const newCoin = choice(this.props.coins);
		this.setState((st) => {
			return {
				currCoin: newCoin,
				nFlips: st.nFlips + 1,
				nHeads: st.nHeads + (newCoin.side === 'heads' ? 1 : 0),
				nTails: st.nTails + (newCoin.side === 'tails' ? 1 : 0)
			};
		});
	}

	handleClick(e) {
		this.flipCoin();
	}

	render() {
		return (
			<div className="CoinFlipper">
				<h2>Let's Flip A Coin</h2>
				{this.state.currCoin && <Coin info={this.state.currCoin} />}
				<button onClick={this.handleClick}>Flip Me</button>
				<p>
					Out of {this.state.nFlips} flips, there have been {this.state.nHeads} heads and {this.state.nTails}{' '}
					tails.
				</p>
			</div>
		);
	}
}

export default CoinFlipper;

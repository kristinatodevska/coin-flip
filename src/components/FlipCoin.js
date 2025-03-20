import React, { Component } from 'react';
import Coin from './Coin';
import logoImg from '../img/logo.gif';
import headsImg from '../img/heads.png';
import tailsImg from '../img/tails.png';
import flipCoinImg from '../img/flip-coin.gif';

class FlipCoin extends Component {
    static defaultProps = {
        coins: [
            {
                side: "heads",
                imgSrc: headsImg,
                alt: "Head side of the coin"
            },
            {
                side: "tails",
                imgSrc: tailsImg,
                alt: "Tail side of the coin"
            }
        ]
    };

    constructor(props) {
        super(props);
        this.state = {
            currFace: null,
            totalFlips: 0,
            heads: 0,
            isFlipping: false
        };
        this.handleClick = this.handleClick.bind(this);
    }

    choice(arr) {
        const randomIdx = Math.floor(Math.random() * arr.length);
        return arr[randomIdx];
    }

    flipCoin() {
        const newFace = this.choice(this.props.coins);
        this.setState(curState => {
            const heads = curState.heads + (newFace.side === "heads" ? 1 : 0);
            return {
                currFace: newFace,
                totalFlips: curState.totalFlips + 1,
                heads: heads,
                isFlipping: false
            };
        });
    }

    handleClick() {
        this.setState({ isFlipping: true });

        setTimeout(() => {
            this.flipCoin();
        }, 1000);
    }

    render() {
        const { currFace, totalFlips, heads, isFlipping } = this.state;
        
        return (
            <div className="col">
                <h1>Let's flip a coin</h1>

                {isFlipping ? (
                    <figure>
                        <img 
                            src={flipCoinImg} 
                            alt="Moving image of hand flipping a coin" 
                            className="p-3 rounded-circle"
                            width="200"
                            height="200"
                        />
                        <span className="visually-hidden">Flipping coin...</span>
                    </figure>
                ) : currFace ? (
                    <Coin info={currFace} />
                ) : (
                    <figure>
                        <img 
                            src={logoImg}
                            alt="Animated yellow emoji man with glasses" 
                            className="p-3"
                            width="240"
                            height="200"
                        />
                    </figure>
                )}

                {isFlipping ? (
                    <p className="lead">
                        Flipping...
                    </p>
                ) : currFace ? (
                    <p className="lead">
                        You got <span className="fw-bold">{currFace.side}</span>!
                    </p>
                ) : (
                    <p className="lead">
                        Click button to flip coin
                    </p>
                )}

                <button className="btn btn-dark btn-lg my-2" onClick={this.handleClick} disabled={isFlipping}>
                    Flip coin
                </button>

                <hr className="my-5" />

                <p>
                    Out of <span className="fw-bold">{totalFlips} flips</span>, <br />
                    there have been <span className="fw-bold text-success">{heads} heads </span> <br />
                    and <span className="fw-bold text-danger">{totalFlips - heads} tails</span>
                </p>
            </div>
        );
    }
}

export default FlipCoin;

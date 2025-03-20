import React, { Component } from 'react';

class Coin extends Component {
    render() {
        return (
            <figure className="Coin position-relative">
                <img
                    src={this.props.info.imgSrc}
                    alt={this.props.info.alt}
                    height={200}
                    width={200}
                    className="p-3"
                />
                {[...Array(12)].map((_, i) => (
                    <div key={i} className={"sparkle sparkle-" + i}></div>
                ))}
            </figure>
        );
    }
}

export default Coin;

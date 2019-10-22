import React from 'react';
import {TransitionGroup} from "react-transition-group";
import * as d3 from 'd3';
import {Letter} from "./Letter";

export class Alphabet extends React.Component {

    static letters = "abcdefghijklmnopqrstuvwxyz".split('');
    state = {
        alphabet: []
    };

    componentDidMount() {
        d3.interval(this.shuffleAlphabet, 1500);
    }

    shuffleAlphabet = () => {
        const alphabet = d3
            .shuffle(Alphabet.letters)
            .slice(0, Math.floor(Math.random() * Alphabet.letters.length))
            .sort();

        this.setState({
            alphabet
        })
    };

    render() {
        let transform = `translate(${this.props.x}, ${this.props.y})`;

        return (
            <g transform={transform}>
                <TransitionGroup enter={true} component={'g'}>
                    {this.state.alphabet.map((d, i) => (
                        <Letter letter={d} index={i} key={d} />
                    ))}
                </TransitionGroup>
            </g>
        )
    }
}

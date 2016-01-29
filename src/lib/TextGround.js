import React, {Component, PropTypes} from 'react'
import Utils from './utils/Utils'

export default class TextGround extends Component {

    static propTypes = {
        maxRow: PropTypes.number,
        minRows: PropTypes.number,
        rows: PropTypes.number,
        lineMaxWidth: PropTypes.number,
        lineMinWidth: PropTypes.number,
        lineHeight: PropTypes.number,
        color: PropTypes.string,
        seed: PropTypes.number
    };

    static defaultProps = {
        maxRows: 1,
        lineMaxWidth: 1.0,
        lineMinWidth: 0.4,
        lineHeight: 0.69,
        color: '#ccc'
    };

    render() {
        let {
            maxRows,
            minRows,
            rows,
            lineMaxWidth,
            lineMinWidth,
            lineHeight,
            color,
            seed
            } = this.props;
        const utils = new Utils(seed);
        if (!rows)
            rows = minRows ? utils.random(minRows, maxRows) : maxRows;
        let body = [];
        for (let i = 0, last = rows - 1, key = 0; i < rows; ++i, key += 2) {
            body.push(<span key={key} style={{
                display: 'inline-block',
                lineHeight: Math.round(lineHeight * 100) + '%',
                backgroundColor: color,
                width: utils.random(Math.round(lineMinWidth*100), Math.round(lineMaxWidth*100)) + '%'
            }}>&nbsp;</span>);
            if (i !== last) body.push(<br key={key+1}/>);
        }
        return <span>{body}</span>;
    }

}

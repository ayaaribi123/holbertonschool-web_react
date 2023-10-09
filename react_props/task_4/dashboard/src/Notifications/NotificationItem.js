import React from 'react';
import PropTypes from 'prop-types';

export default function NotificationItem(props) {
    const {type, html, value} = props;
    return html ? (
        <li 
            dangerouslySetInnerHTML={{__html: html.__html}}
            data={type}>
        </li>
    ) : (
        <li 
            data={type}>
            {value}
        </li>
    )
}

NotificationItem.propTypes = {
    type: PropTypes.string.isRequired,
    value: PropTypes.string,
    html: PropTypes.shape({
        __html: PropTypes.string,
    }),
}
  
NotificationItem.defaultProps = {
    type: "default"
}
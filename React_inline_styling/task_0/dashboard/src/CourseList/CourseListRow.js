import React from 'react';
import PropTypes from 'prop-types';

const Stylerow = {
    backgroundColor: "#f5f5f5ab"
}

const headerStyleRow = {
    backgroundColor: "#deb5b545"
}

export default function CourseListRow({isHeader, textFirstCell, textSecondCell}) {
    if (isHeader) {
        if (textSecondCell === null) {
            return (
                <tr style={headerStyleRow}>
                    <th colSpan="2">{textFirstCell}</th>
                </tr>
            )
        } else {
            return (
                <tr style={headerStyleRow}>
                    <th>{textFirstCell}</th>
                    <th>{textSecondCell}</th>
                </tr>
            )
        }
    } else {
        return (
            <tr style={Stylerow}>
                <td>{textFirstCell}</td>
                <td>{textSecondCell}</td>
            </tr>
        )
    }
}

CourseListRow.propTypes = {
    isHeader: PropTypes.bool,
    textFirstCell: PropTypes.string.isRequired,
    textSecondCell: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
      ]),
}

CourseListRow.defaultProps = {
    isHeader: false,
    textSecondCell: null
}
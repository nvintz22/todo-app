import React from 'react';
import { connect } from 'react-redux';
import { setFilterAction } from '../reduxModules/common/filter';

const Footer = ({ filters, setActiveFilter }) => {
    const style = {
        margin: '0 10px',
        cursor: 'pointer'
    }
    
    return (
        <div>
            <hr />
           {/* <span style={style}>All</span>
            <span style={style}>Active</span>
            <span style={style}>Completed</span>*/ }
            {filters.map(filter => (
                <span style={style} onClick={() => setActiveFilter(filter.key)}>{filter.text}</span>
            ))}
        </div>
    )
}

export default connect(
    state => ({
        filters: state.filter.filters
    }),
    dispatch => ({
        setActiveFilter: key => dispatch(setFilterAction(key))
    })
)(Footer);
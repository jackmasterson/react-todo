import React, {Component} from 'react';
import {connect} from 'react-redux';
import ListItem from './ListItem';

// renders multiple list items
class ListItems extends Component {
    render() {
        return(
            <ListItem/>
        )
    }
}

export default connect(
    (state) => (state)
)(ListItems);
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../store/actions/actions'

import TableData from '../components/ListTable';

class Wrapper extends Component {

    addData () {
        return {
                id: new Date().valueOf(),
                name: 'Mike' + new Date().valueOf() + 1,
                title: 'Marley' + new Date().valueOf() + 2
            }
    }

    render () {
        return (
            <div>
                <h1>List of data</h1>
                <button onClick={() => this.props.getResult(this.addData())}>Add Data</button>
                <TableData>
                    <tbody>
                    {this.props.storedResults.map(strResult => (
                        <tr key={strResult.value.id}>
                            <td>{strResult.value.id}</td>
                            <td>{strResult.value.name}</td>
                            <td>{strResult.value.title}</td>
                        </tr>
                    ))}
                    </tbody>
                </TableData>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        storedResults: state.results
    }
};

const mapDispatchToProps = dispatch => {
    return {
        getResult: (result) => dispatch(actionCreators.getResult(result))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Wrapper);
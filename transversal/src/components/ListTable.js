import React from 'react'

// functional component
const listTable = (props) => (
    <div>
        <table>
            <tr>
                <td>ID</td>
                <td>Name</td>
                <td>Title</td>
            </tr>
            {props.children}
        </table>
    </div>
);

export default listTable;
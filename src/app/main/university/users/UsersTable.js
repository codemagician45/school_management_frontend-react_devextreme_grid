import React, { useEffect, useState } from 'react';
import { Typography, } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';

import withReducer from 'app/store/withReducer';
import * as Actions from '../../store/actions';
import reducer from '../../store/reducers';
import { useDispatch, useSelector } from 'react-redux';
import DataGrid, {
    Column,
    Editing,
    Paging,
} from 'devextreme-react/data-grid';
import 'devextreme-react/text-area';

function UsersTable() {

    const dispatch = useDispatch();
    const users = useSelector(({ university }) => university.users.data);
    const [updatedUser, setUser] = useState(null);
    const [addedUser, addUser] = useState(null);

    useEffect(() => {
        dispatch(Actions.getUsers())
    }, [dispatch])

    useEffect(() => {
        if (addedUser)
            dispatch(Actions.addUser(addedUser))
    }, [addedUser])

    useEffect(() => {
        if (updatedUser) {
            console.log(updatedUser)
            dispatch(Actions.updateUser(updatedUser))
        }
    }, [updatedUser])

    const rowchange = (e) => {
        if (e) {
            setUser(e.data);
        }
    }
    const rowInsert = (e) => {
        if (e) {
            addUser(e.data)
            console.log(e)
        }
    }
    return (
        <Paper className="w-full mt-24">
            <div className="p-16">
                <Typography className="text-24">Users List</Typography>
                <DataGrid
                    dataSource={users}
                    keyExpr="id"
                    showBorders={true}
                    columnAutoWidth={true}
                    onRowUpdated={rowchange}
                    onRowInserted={rowInsert}
                >
                    <Paging enabled={true} />
                    <Editing
                        mode="form"
                        allowUpdating={true}
                        allowAdding={true}
                    />
                    <Column dataField="name" caption="Contact Name"
                    />
                    <Column dataField="mobile" caption="Mobile" />
                    <Column dataField="email" caption="Email" />
                    <Column dataField="phone" caption="Phone" />
                    <Column dataField="ext" caption="Ext" />
                    <Column dataField="title" caption="Title" />
                </DataGrid>

            </div>
        </Paper>
    )
}

export default withReducer('university', reducer)(UsersTable);
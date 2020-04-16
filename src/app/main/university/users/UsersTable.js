import React, { useEffect, useState } from 'react';
import { Typography, Divider } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import reducer from '../store/reducers';
import withReducer from 'app/store/withReducer';
import * as Actions from '../store/actions';
import { useDispatch, useSelector } from 'react-redux';
import DataGrid, {
    Column,
    FormItem,
    Editing,
    Paging,
    Lookup
} from 'devextreme-react/data-grid';
import 'devextreme-react/text-area';
import { updateUser } from '../store/actions';

function UsersTable() {

    const dispatch = useDispatch();
    const users = useSelector(({ university }) => university.users.data);
    const [updatedUser, setUser] = useState(null);
    const [addedUser, addUser] = useState(null);
    console.log(users)
    // console.log(updatedUser)

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
                        // form={
                        //     items = ["name", "mobile"]
                        // }
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
                    {/* <Column caption="View" />
                    <Column caption="Suspend" /> */}
                    {/* <Lookup dataSource={states} valueExpr="ID" displayExpr="Name" />
                    </Column>
                    <Column dataField="BirthDate" dataType="date" />
                    <Column dataField="Notes" visible={false}>
                        <FormItem colSpan={2} editorType="dxTextArea" editorOptions={{ height: 100 }} />
                    </Column> */}
                </DataGrid>

            </div>
        </Paper>
    )
}

export default withReducer('university', reducer)(UsersTable);
// export default UsersTable;
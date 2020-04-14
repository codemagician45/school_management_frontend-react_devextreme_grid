import React, { useEffect } from 'react';
import DataGrid, { RemoteOperations, SearchPanel, Sorting, Paging, Pager, Editing, StateStoring, Export, Selection, GroupPanel, Column } from 'devextreme-react/data-grid';
import { Typography, Divider } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import reducer from '../store/reducers';
import withReducer from 'app/store/withReducer';
import * as Actions from '../store/actions';
import { useDispatch, useSelector } from 'react-redux';

function UsersTable() {

    const dispatch = useDispatch();
    const users = useSelector(({ university }) => university.users.data);

    useEffect(() => {
        dispatch(Actions.getUsers())
    }, [dispatch])

    console.log(users);

    return (
        <Paper className="w-full mt-24">
            <div className="p-16">
                <Typography className="text-24">Users List</Typography>


            </div>
        </Paper>
    )
}
export default withReducer('university', reducer)(UsersTable);
// export default UsersTable;
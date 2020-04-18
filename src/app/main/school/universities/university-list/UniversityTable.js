import React, { useEffect, useState } from 'react'
import withReducer from 'app/store/withReducer'
import { useDispatch, useSelector } from 'react-redux';
import * as Actions from '../../../store/actions';
import reducer from '../../../store/reducers';
import Paper from '@material-ui/core/Paper';
import { Typography, Grid } from '@material-ui/core'
import DataGrid, {
    Column,
    FormItem,
    Editing,
    Paging,
    Lookup
} from 'devextreme-react/data-grid';
import 'devextreme-react/text-area';


function UniversityTable() {

    const dispatch = useDispatch();
    const universities = useSelector(({ school }) => school.universities.data);

    // const [updatedFair, setFair] = useState(null);
    // const [newFair, addFair] = useState(null);

    console.log(universities);
    useEffect(() => {
        dispatch(Actions.getUniversities());
    }, [dispatch])

    // useEffect(() => {
    //     if (newFair)
    //         dispatch(Actions.createFair(newFair))
    // }, [newFair])

    // useEffect(() => {
    //     if (updatedFair) {
    //         dispatch(Actions.editFair(updatedFair))
    //     }
    // }, [updatedFair])

    // const rowchange = (e) => {
    //     if (e) {
    //         setFair(e.data);
    //     }
    // }
    // const rowInsert = (e) => {
    //     if (e) {
    //         addFair(e.data)
    //     }
    // }

    return (
        <Paper className="w-full mt-24">
            <div className="p-16">
                <Typography className="text-24">University List</Typography>
                <DataGrid
                    dataSource={universities}
                    // keyExpr="id"
                    showBorders={true}
                    columnAutoWidth={true}
                // onRowUpdated={rowchange}
                // onRowInserted={rowInsert}
                >
                    <Paging enabled={true} />
                    {/* <Editing
                        mode="form"
                        allowUpdating={true}
                        allowAdding={true} /> */}
                    <Column dataField="name" caption="University Name" />
                    <Column dataField="email" caption="University Email" />
                    <Column dataField="phone" caption="Phone" />
                    <Column dataField="website" caption="Website" cellRender={cellRender} icon="link" />
                    <Column dataField="map_link" caption="Map" />
                    <Column dataField="city" caption="City" />
                    <Column dataField="users" caption="Contact Person" />
                </DataGrid>
            </div>
        </Paper>
    )
}

const cellRender = (link) => {
    return <a href={link.data.website} target="_blank" ><i className="dx-icon-link"></i></a>
}

export default withReducer('school', reducer)(UniversityTable);
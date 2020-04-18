import React, { useEffect, useState } from 'react'
import withReducer from 'app/store/withReducer'
import { useDispatch, useSelector } from 'react-redux';
import * as Actions from '../../store/actions';
import reducer from '../../store/reducers';
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


function CounselorTable() {

    const dispatch = useDispatch();
    const counselors = useSelector(({ school }) => school.counselors.data);

    const [updatedCounselor, setCounselor] = useState(null);
    const [newCounselor, addCounselor] = useState(null);

    const schoolId = localStorage.getItem('sch_id')

    console.log(counselors);
    useEffect(() => {
        dispatch(Actions.getCounselors(schoolId));
    }, [dispatch])

    useEffect(() => {
        if (newCounselor)
            dispatch(Actions.createCounselor(newCounselor))
    }, [newCounselor])

    useEffect(() => {
        if (updatedCounselor) {
            dispatch(Actions.editCounselor(updatedCounselor))
        }
    }, [updatedCounselor])

    const rowchange = (e) => {
        if (e) {
            setCounselor(e.data);
        }
    }
    const rowInsert = (e) => {
        if (e) {
            console.log(e)
            addCounselor(e.data)
        }
    }

    return (
        <Paper className="w-full mt-24">
            <div className="p-16">
                <Typography className="text-24">Counselor List</Typography>
                <DataGrid
                    dataSource={counselors}
                    // keyExpr="id"
                    showBorders={true}
                    columnAutoWidth={true}
                    onRowUpdated={rowchange}
                    onRowInserted={rowInsert}
                >
                    <Paging enabled={true} />
                    <Editing
                        mode="form"
                        allowUpdating={true}
                        allowAdding={true} />
                    <Column dataField="full_name" caption="Full Name" />
                    <Column dataField="mobile" caption="Mobile" />
                    <Column dataField="email" caption="Email" />
                </DataGrid>
            </div>
        </Paper>
    )
}

const cellRender = (link) => {
    return <a href={link.data.website} target="_blank" ><i className="dx-icon-link"></i></a>
}

export default withReducer('school', reducer)(CounselorTable);
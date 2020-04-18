import React, { useEffect } from 'react'
import withReducer from 'app/store/withReducer'
import { useDispatch, useSelector } from 'react-redux';
import * as Actions from '../../../store/actions';
import reducer from '../../../store/reducers';
import Paper from '@material-ui/core/Paper';
import { Typography } from '@material-ui/core'
import DataGrid, {
    Column,
    Paging,
    SearchPanel
} from 'devextreme-react/data-grid';
import 'devextreme-react/text-area';

function FutureFairTable() {

    const dispatch = useDispatch();
    const fairs = useSelector(({ school }) => school.fairs.data);

    useEffect(() => {
        dispatch(Actions.getFairsSch());
    }, [dispatch])

    const today = new Date();
    const pastFairs = fairs.filter((fair) => Date.parse(today) < Date.parse(fair.end_date))

    return (
        <Paper className="w-full mt-24">
            <div className="p-16">
                <Typography className="text-24">Fairs List</Typography>
                <DataGrid
                    dataSource={pastFairs}
                    // keyExpr="id"
                    showBorders={true}
                    columnAutoWidth={true}
                >
                    <Paging enabled={true} />
                    <SearchPanel visible={true} width={240} placeholder="Search..." />
                    <Column dataField="start_date" caption="Start Date" dataType="datetime" />
                    <Column dataField="end_date" caption="End Date" dataType="datetime" />
                    <Column dataField="students_grade12_number" caption="Number of grade 12 students" />
                    <Column dataField="students_grade11_number" caption="Number of grade 11 students" />
                    <Column dataField="universities_max" caption="Universities Max Number" />
                </DataGrid>
            </div>
        </Paper>
    )
}

export default withReducer('school', reducer)(FutureFairTable);
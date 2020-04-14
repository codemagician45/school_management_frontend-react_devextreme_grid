import React, { useEffect } from 'react'
import withReducer from 'app/store/withReducer'
import { useDispatch, useSelector } from 'react-redux';
import * as Actions from '../../store/actions';
import reducer from '../../store/reducers'
import Paper from '@material-ui/core/Paper';
import { Typography } from '@material-ui/core'
import DataGrid, {
    Column,
    FormItem,
    Editing,
    Paging,
    Lookup
} from 'devextreme-react/data-grid';
import 'devextreme-react/text-area';


function FairsListTable() {

    const dispatch = useDispatch();
    const fairs = useSelector(({ school }) => school.fairs.data);
    console.log(fairs);
    useEffect(() => {
        dispatch(Actions.getFairsSch());
    }, [dispatch])

    return (
        <Paper className="w-full mt-24">
            <div className="p-16">
                <Typography className="text-24">Fairs List</Typography>
                <DataGrid
                    dataSource={fairs}
                    // keyExpr="ID"
                    showBorders={true}
                    columnAutoWidth={true}
                >
                    <Paging enabled={true} />
                    <Editing
                        mode="form"
                        allowUpdating={true}
                        allowAdding={true} />
                    <Column dataField="start_date" caption="Start Date" dataType="datetime" />
                    <Column dataField="end_date" caption="End Date" dataType="datetime" />
                    <Column dataField="students_grade12_number" caption="Number of grade 12 students" />
                    <Column dataField="students_grade11_number" caption="Number of grade 11 students" />
                    <Column dataField="universities_max" caption="Universities Max Number" />
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

export default withReducer('school', reducer)(FairsListTable);
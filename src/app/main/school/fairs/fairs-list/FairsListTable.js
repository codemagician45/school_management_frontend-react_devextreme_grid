import React, { useEffect, useState } from 'react'
import withReducer from 'app/store/withReducer'
import { useDispatch, useSelector } from 'react-redux';
import * as Actions from '../../../store/actions';
import reducer from '../../../store/reducers'
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


function FairsListTable() {

    const dispatch = useDispatch();
    const fairs = useSelector(({ school }) => school.fairs.data);

    const [updatedFair, setFair] = useState(null);
    const [newFair, addFair] = useState(null);

    console.log(fairs);
    useEffect(() => {
        dispatch(Actions.getFairsSch());
    }, [dispatch])

    useEffect(() => {
        if (newFair)
            dispatch(Actions.createFair(newFair))
    }, [newFair])

    useEffect(() => {
        if (updatedFair) {
            dispatch(Actions.editFair(updatedFair))
        }
    }, [updatedFair])

    const rowchange = (e) => {
        if (e) {
            setFair(e.data);
        }
    }
    const rowInsert = (e) => {
        if (e) {
            addFair(e.data)
        }
    }

    return (
        <Paper className="w-full mt-24">
            <div className="p-16">
                <Typography className="text-24">Fairs List</Typography>
                <DataGrid
                    dataSource={fairs}
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
                    <Column dataField="start_date" caption="Start Date" dataType="datetime" />
                    <Column dataField="end_date" caption="End Date" dataType="datetime" />
                    <Column dataField="students_grade12_number" caption="Number of grade 12 students" />
                    <Column dataField="students_grade11_number" caption="Number of grade 11 students" />
                    <Column dataField="universities_max" caption="Universities Max Number" />


                    <Column dataField="to_univ_message" caption="Message from School to Universities" visible={false}>
                        <FormItem colSpan={2} editorType="dxTextArea" editorOptions={{ height: 100 }} />
                    </Column>
                    <Column dataField="to_sup_message" caption="Request from Udros Team" visible={false}>
                        <FormItem colSpan={2} editorType="dxTextArea" editorOptions={{ height: 100 }} />
                    </Column>


                </DataGrid>
            </div>
        </Paper>
    )
}

export default withReducer('school', reducer)(FairsListTable);
import React, { useEffect } from 'react';
import DataGrid, { RemoteOperations, SearchPanel, Sorting, Paging, Pager, Editing, StateStoring, Export, Selection, GroupPanel, Column } from 'devextreme-react/data-grid';
import { Typography, Divider } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router';
import * as Actions from '../store/actions';



function SchoolsTable() {

    const dispatch = useDispatch();
    const schools = useSelector(({ university }) => university.schools.data);

    useEffect(() => {
        dispatch(Actions.getSchools());
    }, [dispatch]);

    console.log(process.env)
    return (
        <Paper className="w-full mt-24">
            <div className="p-16">
                <Typography className="text-24">Schools List</Typography>
                <DataGrid
                    dataSource={schools}
                    showBorders={true}
                    allowColumnResizing={true}
                    allowColumnReordering={true}
                    // ref={(ref) => this.dataGrid = ref}
                    rowAlternationEnabled={true}
                    columnAutoWidth={true}
                // onToolbarPreparing={this.onToolbarPreparing}
                >
                    <RemoteOperations />
                    <SearchPanel visible={true} width={240} placeholder="Search..." />
                    <Sorting mode="multiple" />
                    {/* <Editing mode="row" allowUpdating={true} allowDeleting={true} allowAdding={true} /> */}
                    <StateStoring enabled={true} type="localStorage" storageKey="parentsTable" />
                    <Export enabled={true} fileName="Parents" allowExportSelectedData={true} />
                    <Selection mode="multiple" />
                    <GroupPanel visible={false} />
                    <Column dataField="id" caption="ID" />
                    <Column dataField="name" caption="School Name" />
                    <Column dataField="email" caption="School Email" />
                    <Column dataField="phone" caption="School Phone" />
                    <Column dataField="city" caption="City" />
                    <Column dataField="website" caption="Website" cellRender={cellRender} icon="link" />
                    <Column dataField="users" caption="Contact Person" />
                    <Column dataField="emails" caption="Contact Email" />
                    <Pager showPageSizeSelector={true} allowedPageSizes={[5, 10, 20, 50]} showInfo={false} />
                    <Paging enabled={true} defaultPageSize={5} />
                </DataGrid>
            </div>
        </Paper>
    )
}

const cellRender = (link) => {
    return <a href={link.data.website} target="_blank" ><i className="dx-icon-link"></i></a>
}


// export default withReducer('university', reducer)(SchoolsTable);
export default withRouter(SchoolsTable);
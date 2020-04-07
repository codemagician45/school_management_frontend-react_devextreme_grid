import React, { Component } from 'react';
import DataGrid, { RemoteOperations, SearchPanel, Sorting, Paging, Pager, Editing, StateStoring, Export, Selection, GroupPanel, Column } from 'devextreme-react/data-grid';
import { Typography, Divider } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';

function UsersTable() {
    return (
        <Paper className="w-full mt-24">
            <div className="p-16">
                <Typography className="text-24">Users List</Typography>
                <DataGrid
                    // dataSource={remoteDataSource}
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
                    <Editing mode="row" allowUpdating={true} allowDeleting={true} allowAdding={true} />
                    <StateStoring enabled={true} type="localStorage" storageKey="parentsTable" />
                    <Export enabled={true} fileName="Parents" allowExportSelectedData={true} />
                    <Selection mode="multiple" />
                    <GroupPanel visible={false} />
                    <Column dataField="name" caption="Name" />
                    <Column dataField="student" caption="Student" />
                    <Column dataField="email" caption="Email" />
                    <Pager showPageSizeSelector={true} allowedPageSizes={[5, 10, 20, 50]} showInfo={false} />
                    <Paging enabled={true} defaultPageSize={5} />
                    {/* <Template name="newHeaderLayout" render={this.toolbarItemRender} /> */}
                </DataGrid>

            </div>
        </Paper>
    )
}
export default UsersTable;
import React, { Component } from 'react';
import DataGrid, { RemoteOperations, SearchPanel, Sorting, Paging, Pager, Editing, StateStoring, Export, Selection, GroupPanel, Column } from 'devextreme-react/data-grid';
import { Template } from 'devextreme-react/core/template';
import { createStore } from 'devextreme-aspnet-data-nojquery';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

const serviceUrl = 'http://localhost:3000/api/teachers';

const remoteDataSource = createStore({
  key: 'id',
  loadUrl: serviceUrl + '/get',
  insertUrl: serviceUrl + '/insert',
  updateUrl: serviceUrl + '/update',
  deleteUrl: serviceUrl + '/delete'
});

class TeachersTable extends Component {
	constructor(props) {
		super(props);

		this.onToolbarPreparing = this.onToolbarPreparing.bind(this);
    this.toolbarItemRender = this.toolbarItemRender.bind(this);
    this.onInitNewRow = this.onInitNewRow.bind(this);
    this.dataGrid = null;
  }

  onInitNewRow(e) {
    e.data.start = new Date();
    e.data.end = new Date();
    e.data.title = 'Title Here';
  }

  toolbarItemRender() {
    return (
      <Typography className="text-24">Teachers List</Typography>
    );
  }

  onToolbarPreparing(e) {
    e.toolbarOptions.items.unshift({
      location: 'before',
      template: 'newHeaderLayout'
    });
  }

  render() {
    return (
      <Paper className="w-full">
        <DataGrid
          dataSource={remoteDataSource}
          showBorders={true}
          allowColumnResizing={true}
          allowColumnReordering={true}
          ref={(ref) => this.dataGrid = ref}
          rowAlternationEnabled={true}
          columnAutoWidth={true}
          onInitNewRow={this.onInitNewRow}
          onToolbarPreparing={this.onToolbarPreparing}
        >
  				<RemoteOperations />
  				<SearchPanel visible={true} width={240} placeholder="Search..." />
  				<Sorting mode="multiple" />
  				<Editing mode="row"	allowUpdating={true} allowDeleting={true} allowAdding={true} />
  				<StateStoring enabled={true} type="localStorage" storageKey="teachersTable" />
  				<Export enabled={true} fileName="Teachers" allowExportSelectedData={true} />
          <Selection mode="multiple" />
  				<GroupPanel visible={false} />
  				<Column dataField="start" dataType="datetime" caption="Starts On" />
  				<Column dataField="end" dataType="datetime" caption="Ends On" />
  				<Column dataField="title" caption="Title" />
  				<Column dataField="tooltip" caption="Description" />
  				<Column dataField="location" caption="Location" />
          <Pager showPageSizeSelector={true} allowedPageSizes={[5, 10, 20, 50]} showInfo={false} />
          <Paging enabled={true} defaultPageSize={5} />
          <Template name="newHeaderLayout" render={this.toolbarItemRender} />
        </DataGrid>
      </Paper>
    );
  }
}

export default TeachersTable;

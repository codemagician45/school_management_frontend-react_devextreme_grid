import React, { Component } from 'react';
import DataGrid, { RemoteOperations, SearchPanel, Sorting, Paging, Pager, Editing, StateStoring, Export, Selection, GroupPanel, Column } from 'devextreme-react/data-grid';
import { Template } from 'devextreme-react/core/template';
import { createStore } from 'devextreme-aspnet-data-nojquery';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

const serviceUrl = 'http://localhost:3000/api/parents';

const remoteDataSource = createStore({
  key: 'id',
  loadUrl: serviceUrl + '/get',
  insertUrl: serviceUrl + '/insert',
  updateUrl: serviceUrl + '/update',
  deleteUrl: serviceUrl + '/delete'
});

class ParentsTable extends Component {
	constructor(props) {
		super(props);

		this.onToolbarPreparing = this.onToolbarPreparing.bind(this);
    this.toolbarItemRender = this.toolbarItemRender.bind(this);
    this.dataGrid = null;
  }

  toolbarItemRender() {
    return (
      <Typography className="text-24">Parents List</Typography>
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
          onToolbarPreparing={this.onToolbarPreparing}
        >
  				<RemoteOperations />
  				<SearchPanel visible={true} width={240} placeholder="Search..." />
  				<Sorting mode="multiple" />
  				<Editing mode="row"	allowUpdating={true} allowDeleting={true} allowAdding={true} />
  				<StateStoring enabled={true} type="localStorage" storageKey="parentsTable" />
  				<Export enabled={true} fileName="Parents" allowExportSelectedData={true} />
          <Selection mode="multiple" />
  				<GroupPanel visible={false} />
  				<Column dataField="name" caption="Name" />
  				<Column dataField="student" caption="Student" />
  				<Column dataField="email" caption="Email" />
          <Pager showPageSizeSelector={true} allowedPageSizes={[5, 10, 20, 50]} showInfo={false} />
          <Paging enabled={true} defaultPageSize={5} />
          <Template name="newHeaderLayout" render={this.toolbarItemRender} />
        </DataGrid>
      </Paper>
    );
  }
}

export default ParentsTable;

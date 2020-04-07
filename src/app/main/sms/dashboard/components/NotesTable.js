import React, { Component } from 'react';
import DataGrid, { RemoteOperations, SearchPanel, Sorting, Paging, Pager, StateStoring, Export, Selection, GroupPanel, Column } from 'devextreme-react/data-grid';
import { Template } from 'devextreme-react/core/template';
import { createStore } from 'devextreme-aspnet-data-nojquery';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import jwtService from 'app/services/jwtService';

const role = jwtService.getUserRole();

const serviceUrl = 'http://localhost:3000/api/notes';

const remoteDataSource = createStore({
  key: 'id',
  loadUrl: serviceUrl + '/get'
});

class NotesTable extends Component {
	constructor(props) {
		super(props);

		this.onToolbarPreparing = this.onToolbarPreparing.bind(this);
    this.toolbarItemRender = this.toolbarItemRender.bind(this);
    this.dataGrid = null;
  }

  dataGridAttributes = { id: role }

  toolbarItemRender() {
    return (
      <Typography className="text-24">Notes List</Typography>
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
          elementAttr={this.dataGridAttributes}
        >
  				<RemoteOperations />
  				<SearchPanel visible={true} width={240} placeholder="Search..." />
  				<Sorting mode="multiple" />
  				<StateStoring enabled={true} type="localStorage" storageKey="notesTable" />
  				<Export enabled={true} fileName="Notes" allowExportSelectedData={true} />
          <Selection mode="multiple" />
  				<GroupPanel visible={false} />
  				<Column dataField="name" caption="Note" />
  				<Column dataField="text" caption="Details" />
          <Column dataField="createdAt" dataType="datetime" caption="Date" />
          <Pager showPageSizeSelector={true} allowedPageSizes={[5, 10, 20, 50]} showInfo={false} />
          <Paging enabled={true} defaultPageSize={5} />
          <Template name="newHeaderLayout" render={this.toolbarItemRender} />
        </DataGrid>
      </Paper>
    );
  }
}

export default NotesTable;

import React, { Component } from 'react';
import DataGrid, { RemoteOperations, SearchPanel, Sorting, Paging, Pager, Editing, StateStoring, Export, Selection, GroupPanel, Column } from 'devextreme-react/data-grid';
import { Template } from 'devextreme-react/core/template';
import { createStore } from 'devextreme-aspnet-data-nojquery';
import Typography from '@material-ui/core/Typography';

const serviceUrl = 'http://localhost:3000/api/admissions';

const remoteDataSource = createStore({
  key: 'id',
  loadUrl: serviceUrl + '/get',
  insertUrl: serviceUrl + '/insert',
  updateUrl: serviceUrl + '/update',
  deleteUrl: serviceUrl + '/delete'
});

class Admissions extends Component {
	constructor(props) {
		super(props);

		this.onToolbarPreparing = this.onToolbarPreparing.bind(this);
    this.toolbarItemRender = this.toolbarItemRender.bind(this);
    this.onInitNewRow = this.onInitNewRow.bind(this);
    this.dataGrid = null;
  }

  onInitNewRow(e) {
    e.data.createdAt = new Date();
  }

  toolbarItemRender() {
    return (
      <Typography className="text-24">Admission Enquiry</Typography>
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
				<StateStoring enabled={true} type="localStorage" storageKey="admissionsTable" />
				<Export enabled={true} fileName="Admission Enquiry" allowExportSelectedData={true} />
        <Selection mode="multiple" />
				<GroupPanel visible={false} />
        <Column dataField="name" caption="Name" />
        <Column dataField="phone" caption="Phone" />
        <Column dataField="source" caption="Source" />
				<Column dataField="enquiryDate" dataType="date" caption="Enquiry Date" />
				<Column dataField="followUpDate" dataType="date" caption="Next Follow Up Date" />
        <Pager showPageSizeSelector={true} allowedPageSizes={[5, 10, 20, 50]} showInfo={false} />
        <Paging enabled={true} defaultPageSize={5} />
        <Template name="newHeaderLayout" render={this.toolbarItemRender} />
      </DataGrid>
    );
  }
}

export default Admissions;

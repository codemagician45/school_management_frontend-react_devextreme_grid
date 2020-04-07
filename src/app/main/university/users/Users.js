import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FusePageSimple from '@fuse/core/FusePageSimple';
import FuseAnimateGroup from '@fuse/core/FuseAnimateGroup';
import UsersAdd from './UsersAdd';
import UsersTable from './UsersTable';
// import { FusePageCarded, DemoContent } from '@fuse/core';
// import TeachersTable from './TeachersTable';
import { Divider } from '@material-ui/core';
const useStyles = makeStyles({
    header: {
        background: '#039be5'
    }
});

export default function Users() {
    const classes = useStyles();

    return (
        <FusePageSimple
            classes={{
                header: classes.header,
                toolbar: 'px-24 border-b-1'
            }}
            header={
                <div className="pl-24">
                    <h1 className="text-48">Users</h1>
                </div>
            }
            content={

                <FuseAnimateGroup enter={{ animation: "transition.slideLeftBigIn" }} leave={{ animation: "transition.slideRightBigOut" }}>

                    <div className="flex flex-wrap">
                        <div className="w-full p-24">
                            <UsersAdd />

                            <UsersTable />
                        </div>
                    </div>
                </FuseAnimateGroup>
            }
            innerScroll
        />
    );
}
import React, { createFactory } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FusePageSimple from '@fuse/core/FusePageSimple';
import FuseAnimateGroup from '@fuse/core/FuseAnimateGroup';
import UserProfileEdit from './UserProfileEdit';

const useStyles = makeStyles({
    header: {
        background: '#039be5'
    }
});

export default function UniversityProfile() {
    const classes = useStyles();
    return (
        <FusePageSimple
            classes={{
                header: classes.header,
                toolbar: 'px-24 border-b-1'
            }}
            header={
                <div className="pl-24">
                    <h1 className="text-48">User Profile</h1>
                </div>
            }
            content={

                <FuseAnimateGroup enter={{ animation: "transition.slideLeftBigIn" }} leave={{ animation: "transition.slideRightBigOut" }}>

                    <div className="flex flex-wrap">
                        <div className="w-full p-24">
                            <UserProfileEdit />
                        </div>
                    </div>
                </FuseAnimateGroup>
            }
            innerScroll
        />
    );
}
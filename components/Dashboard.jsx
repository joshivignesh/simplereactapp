import React from 'react'
import  { connect } from 'react-redux';
import { ConnectedTaskList } from '../components/TaskList';

export const Dashboard = ({groups}) => (
    <div>
        <h2>Dashboard</h2>
        {groups.map(group=>(<div key={group.name}>
            {group.name}
        </div>))}
        <ConnectedTaskList/>
    </div>
)

function mapStateToProps (state)  {
return {
    groups:state.groups
}
}

export const ConnectedDashboard = connect(mapStateToProps)(Dashboard);
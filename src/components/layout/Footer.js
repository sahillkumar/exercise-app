import React from 'react';
import {Tabs,Tab, AppBar} from '@material-ui/core'
import withWidth from '@material-ui/core/withWidth'
import {withContext} from '../../context'

class Footer extends React.Component {

    getIndex=()=>{
        const {category,muscles}= this.props
        return category? muscles.findIndex(muscles=>muscles===category)+1:0;
    }

    tabSelect=(e,index)=>{
        const {onCategorySelect,muscles}= this.props
        onCategorySelect(index ? muscles[index-1]:'')
    }

    render() { 
        const {muscles,width}=this.props
        return ( 
            <AppBar position="static">
            <Tabs
            value={this.getIndex()}
            variant={width!=='xs'?"fullWidth":"scrollable"}
            onChange={this.tabSelect}
            scrollButtons="auto"
            TabIndicatorProps={{style:{
                height:3
            }}}
            >
            <Tab label="All" />
            {muscles.map(group=>
                <Tab key={group} label={group} />
            )}
            </Tabs>
        </AppBar>
         );
    }
}
export default withContext(withWidth()(Footer));


import * as React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';

import MainView from '@views/pages/main/MainView';


export const RouteList = [
    {
        title: "MainView",
        type: "button",
        url: "main/",
        background: "#1a6c00",
        compoent: MainView
    }
];

export class RouteRender extends React.Component<any,any> {

    constructor(props : any) {
        super(props)
        this.SetRouter = this.SetRouter.bind(this);
    }
    
    SetRouter() {

        return (RouteList.map((row, index) => {
            return (
                <Route path={`/${row.url}`} component={row.compoent} key={`MainRoute${index}`}/>
            )
        }))
    }

    render() {
        return (
            <Switch>
                {this.SetRouter()}
                <Redirect to="/main"/>
            </Switch>
        )
    }
}

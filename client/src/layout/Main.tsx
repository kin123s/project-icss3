import * as React from 'react';

import styled from 'styled-components';

import { Airbnb } from 'styled-icons/boxicons-logos/Airbnb';
// layout
import {DefaultContents, DefaultRow} from '@views/components/layout/Default';

// header 
import TopHeader from '@views/components/main/TopHeader';

import { RouteRender } from '@views/config/routes/RouterMain';

const TopContents = styled(DefaultContents)`
    width : 100%;
    height : 50px;
`;

const MainContents = styled(DefaultContents)`
    width : 100%;
    height : calc( 100vh - 50px );
    background : #e5edf5;
`;

export interface IWithProps {}

export default class Main extends React.Component < IWithProps,
any > {

    constructor(props : IWithProps) {
        super(props);
    }


    render() {

        return (
            <div>
                <DefaultRow>             
                    <TopContents>
                        <TopHeader/>
                    </TopContents>
                </DefaultRow>
                <DefaultRow>
                    <MainContents>
                        <Airbnb/>
                        <RouteRender/>
                    </MainContents>
                </DefaultRow>
            </div>

        );
    }
}
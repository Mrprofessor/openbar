import React, { Component } from 'react';
import { Container, Header, Divider,Icon,Button,Segment} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';

import SearchBar from './SearchBar';
import ShowItems from './ShowItems';

class App extends Component {

    render() {
        return (
            <div >
                <Container textAlign='center' >
                <Header as='h2' icon textAlign='center' style={{marginTop : '1.5rem'}}>
                    <Icon name='cocktail' color='olive' circular bordered inverted black/>
                    <Header.Content>
                        Openbar
                    </Header.Content>
                </Header>
                <Divider />
                <SearchBar />
                <ShowItems />
                </Container>
                
            </div>
        )
    }
}

export default App;
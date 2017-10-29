import React, { Component } from 'react';
import {Grid, Form, Button,Icon,Input} from 'semantic-ui-react'

class SearchBar extends Component {

    render() {
        return (
            <div>
                <Form>
                    <Grid textAlign='center'>
                        <Grid.Row>
                            <Grid.Column width={12}>
                                <Form.Field>
                                <Input
                                    action={{ color: 'teal', labelPosition: 'right', icon: 'search', content: 'Find' }}
                                    placeholder='Search local bars'
                                />
                                </Form.Field>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Form>
            </div>

        );
    }
}

export default SearchBar;
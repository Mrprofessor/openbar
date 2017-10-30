import React, { Component } from 'react';
import {Grid, Form, Input} from 'semantic-ui-react'

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: null,
            searchText : null
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({ searchText : event.target.value})
    }
    handleSubmit(event) {
        event.preventDefault();
        if (this.state.searchText !== null && this.state.searchText !== '') {
            this.props.search(this.state.searchText);           // Calling search function in app.js
        } else {
            alert("Enter the location");
        }
    }

    render() {
        return (
            <div>
                <Form onSubmit={this.handleSubmit}>
                    <Grid textAlign='center'>
                        <Grid.Row>
                            <Grid.Column width={12}>
                                <Form.Field>
                                    <Input 
                                        onChange = {this.handleChange}
                                        size='big'
                                        action={{ color: 'teal', labelPosition: 'right', icon: 'search', content: 'Find' }}
                                        placeholder='Search location'
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
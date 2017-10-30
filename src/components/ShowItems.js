import React, {Component} from 'react';
import { Container, Grid, Card, Icon, Image} from 'semantic-ui-react';

class ShowItems extends Component {
	constructor(props) {
		super(props);

		this.createItems = this.createItems.bind(this);
	}
	createItems(item){
		return (<Grid.Column style={{ marginTop: '1rem' }} key={item.restaurant.id}>
					<Card>
						<Image src='/assets/images/avatar/large/matthew.png' />
						<Card.Content>
							<Card.Header>
								{item.restaurant.name}
							</Card.Header>
							<Card.Meta>
								<span className='date'>
									{item.restaurant.location.locality}	
								</span>
							</Card.Meta>
							<Card.Description>
								Matthew is a musician living in Nashville.
							</Card.Description>
						</Card.Content>
						<Card.Content extra>
							<a>
								<Icon name='user' />
								22 Friends
							</a>
						</Card.Content>
					</Card>
		</Grid.Column>
		);
	}
	render() {
		let showBars = this.props.bars.map(this.createItems);
		console.log(this.props.bars);
		return(
			<Container style={{marginTop : '5%'}}>
				<Grid verticalAlign='middle' columns={3} >
					<Grid.Row>
						{showBars}
					</Grid.Row>
				</Grid>
			</Container>
				
		);
	}
}

export default ShowItems;
import React, {Component} from 'react';
import { Container, Grid, Card, Icon, Image} from 'semantic-ui-react';

class ShowItems extends Component {
	constructor(props) {
		super(props);

		this.createItems = this.createItems.bind(this);
	}
	createItems(item){
		return (<Grid.Column style={{ marginTop: '1rem' }} key={item.restaurant.id}
		mobile={16} tablet={8} computer={4} >
					<Card>
					    <Image src={item.restaurant.featured_image} />
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
				    			{item.restaurant.cuisines}
				    		</Card.Description>
			    		</Card.Content>
					    <Card.Content extra>
					    	<a href={item.restaurant.events_url} target="_blank" >
					        	<Icon name='arrow right' /> Go there  
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
			<Container style={{marginTop : '5%'}} >
				<Grid verticalAlign='middle'>
				{/*	<Grid.Row>
						{showBars}
					</Grid.Row> */}
					{showBars}
				</Grid>
			</Container>
				
		);
	}
}

export default ShowItems

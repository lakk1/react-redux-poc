import React from 'react';
import { Card, Image, Button } from 'semantic-ui-react';
import logo from '../../logo.svg';

const AssetCard = props => (
	<Card>
		<Card.Content>
			<Image floated="right" size="mini" src={logo} />
			<Card.Header>{props.asset.title}</Card.Header>
			<Card.Meta>{props.asset.title}</Card.Meta>
			<Card.Description>{props.asset.body}</Card.Description>
		</Card.Content>
		<Card.Content extra>
			<div className="ui two buttons">
				<Button basic color="green">
					Approve
				</Button>
				<Button basic color="red">
					Decline
				</Button>
			</div>
		</Card.Content>
	</Card>
);

export default AssetCard;

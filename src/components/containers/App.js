import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Grid, Image, Container, Card, Loader, Input, Header } from 'semantic-ui-react';
import logo from '../../logo.svg';
import AssetCard from '../ui/AssetCard';
import * as actions from '../../actions';

class App extends Component {
	constructor(props) {
		super(props);

		this.handleChange = this.handleChange.bind(this);
	}

	componentWillMount() {
		this.props.fetchingAssets();
	}

	assetsList() {
		if (!this.props.marketplace.visibleAssets) {
			return <Loader active inline="centered" />;
		} else if (this.props.marketplace.visibleAssets.length === 0) {
			return (
				<Grid.Column>
					<Header as="h3" color="red" textAlign="center" disabled>
						No Assets Found.
					</Header>
				</Grid.Column>
			);
		} else {
			return (
				<Card.Group className="centered">
					{this.props.marketplace.visibleAssets.map(function(asset) {
						return <AssetCard asset={asset} key={asset.id} />;
					})}
				</Card.Group>
			);
		}
	}

	handleChange(event) {
		const term = event.target.value.toString().toLowerCase();
		console.log(this);
		this.props.searchingAssets(term);
	}

	render() {
		return (
			<Container>
				<Grid>
					<Grid.Row centered>
						<Image src={logo} size="small" />
					</Grid.Row>
					<Grid.Row centered>
						<Header as="h1" color="orange">
							React-redux-semantic-ui POC{' '}
						</Header>
					</Grid.Row>
					<Grid.Row centered>
						<p> Client side Search demo using react, redux and semantic-ui with fakejsonapi</p>
					</Grid.Row>
					<Grid.Row>
						<Grid.Column>
							<Input
								fluid
								iconPosition="left"
								icon={{ name: 'search' }}
								placeholder="Quick Search..."
								onChange={this.handleChange}
							/>
						</Grid.Column>
					</Grid.Row>
					<Grid.Row>{this.assetsList()}</Grid.Row>
				</Grid>
			</Container>
		);
	}
}

// Mapping Main redux store to local props
const mapStateToProps = state => {
	return {
		marketplace: state.marketplace,
	};
};

function mapDispatchToprops(dispatch) {
	return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToprops)(App);

import React, {Component} from 'react';
import {ScrollView, Image, Dimensions} from 'react-native';

const dim = Dimensions.get('window');

class Picture extends Component
{
	render()
	{
		const pic = {uri: `${this.props.uri}?h=${dim.height / 3}&w=${dim.width}`};
		return (
			<Image source={pic} style={{width: dim.width, height: dim.height / 3}} />
		);
	}
}

class Gallery extends Component
{
	render()
	{
		return (
			<ScrollView>
				<Picture uri="https://images.unsplash.com/photo-1423012373122-fff0a5d28cc9" />
				<Picture uri="https://images.unsplash.com/photo-1452825152636-89e0f09f1267" />
				<Picture uri="https://images.unsplash.com/photo-1496347646636-ea47f7d6b37b" />
				<Picture uri="https://images.unsplash.com/photo-1493441883526-0ed85220dc0c" />
				<Picture uri="https://images.unsplash.com/photo-1502842113467-03fdcac39fe5" />
				<Picture uri="https://images.unsplash.com/photo-1497271679421-ce9c3d6a31da" />
				<Picture uri="https://images.unsplash.com/photo-1469487885741-33b975dd5bbc" />
				<Picture uri="https://images.unsplash.com/photo-1473445361085-b9a07f55608b" />
				<Picture uri="https://images.unsplash.com/photo-1489769697626-b604955909a0" />
				<Picture uri="https://images.unsplash.com/photo-1484199408980-5918a796a53f" />
			</ScrollView>
		);
	}
}

module.exports = Gallery;

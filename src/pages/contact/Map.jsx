import React, {Fragment} from 'react'
import {Link} from 'gatsby'

const Map = props => {
	return (
		<Fragment>
			<iframe width="500" height="350" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://www.openstreetmap.org/export/embed.html?bbox=107.60343432426454%2C-6.923231675697511%2C107.60942101478577%2C-6.920169616172951&amp;layer=mapnik" style={{border: '1px solid black'}}>
			</iframe>

			<br/>
				<small>
					<a href="{`https://www.openstreetmap.org/#map=18/${props.lat}/${props.lng}`}">
						View Larger Map
					</a>
				</small>
		</Fragment>
	)
}

export default Map
import React, {Component} from 'react'

import { getDataStore } from '../../helpers/dataStore';
export default class SetName extends Component {

	constructor (props) {
		super(props)
	}

	componentDidMount() {
		const data = getDataStore();

		if(data.name) {
			app.settings.curr_user = {}
			app.settings.curr_user.name = data.name;
			this.refs.name.value  = data.name;
		}
	}

//	------------------------	------------------------	------------------------

	render () {
		return (
			<div id='SetName'>

				<h1>Set Name</h1>

				<div ref='nameHolder' className='input_holder left'>
					<label>Name </label>
					<input ref='name' type='text' className='input name' placeholder='Name' />
				</div>

				<button type='submit' onClick={this.saveName.bind(this)} className='button'><span>SAVE <span className='fa fa-caret-right'></span></span></button>

			</div>
		)
	}

//	------------------------	------------------------	------------------------

	saveName (e) {
		// const { name } = this.refs
		// const { onSetName } = this.props
		// onSetName(name.value.trim())

		this.props.onSetName(this.refs.name.value.trim())
	}

}

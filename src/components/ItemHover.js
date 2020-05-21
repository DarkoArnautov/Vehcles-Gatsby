import React from "react"

class ItemHover extends React.Component {
	constructor(props) {
	    super(props)
	    this.state = {
	      	hoverItem: false, 
	    }
	    this.hoverItem = this.hoverItem.bind(this)
	    this.hoverItemOff = this.hoverItemOff.bind(this)
	}

	hoverItem(){
		this.setState({ hoverItem: true });
	}

	hoverItemOff(){ 
		this.setState({ hoverItem: false });    
	}

	render(){
		const { children } = this.props
		return(
			<span
				onMouseEnter={this.hoverItem} 
				onMouseLeave={this.hoverItemOff}
			>
				{children(this.state.hoverItem)}
			</span>
		)
	}
}

export default ItemHover
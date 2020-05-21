import React from 'react'

const ArrowIcon = (props) => (
	<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22">
	    <path fill={props.fill} fill-rule="nonzero" d="M11.707.293a1 1 0 0 1 .083 1.32l-.083.094L3.414 10H21a1 1 0 0 1 .117 1.993L21 12H3.414l8.293 8.293a1 1 0 0 1 .083 1.32l-.083.094a1 1 0 0 1-1.32.083l-.094-.083-10-10-.073-.082a1.005 1.005 0 0 1-.007-.008l.08.09A1.008 1.008 0 0 1 0 11.02v-.037c0-.024.002-.048.004-.071L0 11a1.008 1.008 0 0 1 .21-.613c.028-.035.054-.066.083-.094l10-10a1 1 0 0 1 1.414 0z"/>
	</svg>
)

ArrowIcon.defaultProps = {
	fill: "#FFF"
}

export default ArrowIcon

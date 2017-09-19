import React from 'react';
import { connect } from 'dva';

function Example(props){
	console.log(props)
	const clickE = () => {
		props.dispatch({type:'example/fetch',payload:{'a':1}})
	}

	return (
		<div onClick={clickE}>
		  Example
		</div>
	);
};

Example.propTypes = {
};

export default connect(({example}) => ({example}))(Example);
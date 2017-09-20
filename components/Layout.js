import React from 'react';
import { connect } from 'dva';
import Head from 'next/head'
// import 'antd-mobile/dist/antd-mobile.css';

function Layout({ children, title = 'This is the default title' }){

	return (
		<div>
			<Head>
			  	<title>{title}</title>
			  	<meta charSet='utf-8' />
			  	<meta name='viewport' content='initial-scale=1.0, width=device-width' />
          		<script src="https://as.alipayobjects.com/g/component/fastclick/1.0.6/fastclick.js"></script>
          		<script dangerouslySetInnerHTML={{ __html: `
				    if ('addEventListener' in document) {
				      document.addEventListener('DOMContentLoaded', function() {
				        FastClick.attach(document.body);
				      }, false);
				    }
				    if(!window.Promise) {
				      document.writeln('<script src="https://as.alipayobjects.com/g/component/es6-promise/3.2.2/es6-promise.min.js"'+'>'+'<'+'/'+'script>');
				    }
          		` }} />
          		<link rel='stylesheet' type='text/css' href='http://xz-bktt.oss-cn-beijing.aliyuncs.com/css/am2.css' />
			</Head>

			{children}
		</div>
	);
};

Layout.propTypes = {
};

export default connect(({example}) => ({example}))(Layout);
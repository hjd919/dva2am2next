import Link from 'next/link';
import React from 'react';
import Router from 'next/router'
import dva from 'dva';
import { lala } from '../styles/index';
import Example from '../components/Example'
import Layout from '../components/Layout'
import exampleModel from '../models/example';
import globalStyles from '../styles/global';
import Stage3 from '../components/Stage3';

export default class Index extends React.Component {
  componentDidMount(){
    // if ('addEventListener' in document) {
    //   document.addEventListener('DOMContentLoaded', function() {
    //     FastClick.attach(document.body);
    //   }, false);
    // }
    // if(!window.Promise) {
    //   document.writeln('<script src="https://as.alipayobjects.com/g/component/es6-promise/3.2.2/es6-promise.min.js"'+'>'+'<'+'/'+'script>');
    // }
  }

  render() {
    const app = dva();

    app.model(exampleModel);

    app.router(() => {
      return (
        <Layout>
          <Stage3 />
          {/*<Link prefetch href="/users">
            <a>Go to /users222</a>
          </Link>
          <Link href={{ pathname: '/users', query: { name: 'Zeit' } }}>
            <a>Go to /users</a>
          </Link>
          Click <span onClick={() => Router.push('/users')}>here</span> to read more
          <p>only this paragraph will get the style :)</p>
          <div className="lala">only this paragraph will get the style :)</div>
          { /* style 
          <style jsx>{lala}</style>
          <style jsx global>{globalStyles}</style>*/ }
        </Layout>
      );
    });

    const Component = app.start();
    return (
      <Component />
    );
  }
}
import Link from 'next/link';
import Router from 'next/router'

import dva from 'dva';
import styles,{lala} from '../styles/index';
import globalStyles from '../styles/global';
import Example from '../components/Example';
import exampleModel from '../models/example';

export default () => {
  const app = dva();

  app.model(exampleModel);

  app.router(() => {
    return (
      <div>
        <Example />
        <Link prefetch href="/users">
          <a>Go to /users222</a>
        </Link>
        <Link href={{ pathname: '/users', query: { name: 'Zeit' } }}>
          <a>Go to /users</a>
        </Link>
        Click <span onClick={() => Router.push('/users')}>here</span> to read more
        <p>only this paragraph will get the style :)</p>
        <div className="lala">only this paragraph will get the style :)</div>
        { /* style */ }
        <style jsx>{lala}</style>
        <style jsx global>{globalStyles}</style>
      </div>
    );
  });

  const Component = app.start();
  return (
    <Component />
  );
}

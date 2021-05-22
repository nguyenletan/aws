import './App.css';
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
import {withAuthenticator} from '@aws-amplify/ui-react';
import Nav from './component/Nav';

import Upload from './component/Upload';
import Search from './component/Search';

Amplify.configure(awsconfig);

const App = () => {

  return (
      <div className="App subpixel-antialiased xl:container mx-auto">
        <Nav/>
        <div
            className="p-10 flex flex-col justify-start bg-green-200">
        <Upload/>
        <Search/>
        </div>
      </div>
  );
};

export default withAuthenticator(App);
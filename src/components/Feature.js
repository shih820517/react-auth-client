import React from 'react';

import requireAuth from './requireAuth';

class Feature extends React.Component {
  render() {
    return (
      <div>
        <h3>Only can see me after login!</h3>
      </div>
    );
  }
}

export default requireAuth(Feature);
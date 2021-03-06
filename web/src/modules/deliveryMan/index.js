import React from 'react';
import PropTypes from 'prop-types';

import Routes from './routes';

import { Wrapper } from './styles';

export default function DeliveryMan({ match }) {
  return (
    <Wrapper>
      <Routes path={match.path} />
    </Wrapper>
  );
}

DeliveryMan.propTypes = {
  match: PropTypes.shape().isRequired,
};

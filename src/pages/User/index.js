import React, { Component } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import api from '../../services/api';
// import { Container } from './styles';

const propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
  route: PropTypes.shape({
    params: PropTypes.shape({
      user: PropTypes.shape({
        login: PropTypes.string,
        avatar: PropTypes.string,
        name: PropTypes.string,
        bio: PropTypes.string,
      }),
    }),
  }).isRequired,
};
class User extends Component {
  state = {
    stars: [],
  };

  async componentDidMount() {
    const { user } = this.props.route.params;

    const response = await api.get(`/users/${user.login}/starred`);
    this.setState({ stars: response.data });
  }

  render() {
    const { stars } = this.state;
    return <View />;
  }
}
User.propTypes = propTypes;
export default User;

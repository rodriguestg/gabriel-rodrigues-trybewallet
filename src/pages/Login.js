import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { loginUser } from '../redux/actions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      pass: '',
    };
  }

  atualizarState = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  }

  valuation = () => {
    const { email, pass } = this.state;
    const MIN_PASS = 6;
    const VAL_EMAIL = -1;
    const com = email.split('.');
    // console.log(com);
    // console.log(pass.length);
    if (pass.length < MIN_PASS) return true;
    if (email.indexOf('@') === VAL_EMAIL
      || email.indexOf('.') === VAL_EMAIL
      || com.indexOf('com') === VAL_EMAIL) return true;
    return false;
  }

  clickLogin = () => {
    const { history, loginClick } = this.props;
    const { email } = this.state;
    loginClick(email);
    history.push('/carteira');
  }

  render() {
    return (
      <div>
        <form>
          <label htmlFor="email">
            <input
              data-testid="email-input"
              type="text"
              id="email"
              name="email"
              onChange={ this.atualizarState }
            />
          </label>
          <label htmlFor="password">
            <input
              data-testid="password-input"
              type="text"
              id="password"
              name="pass"
              onChange={ this.atualizarState }
            />
          </label>
          <button type="button" disabled={ this.valuation() } onClick={ this.clickLogin }>
            Entrar
          </button>
        </form>
      </div>
    );
  }
}

// const mapStateToProps = (state) => ({ state });
const mapDispatchToProps = (dispatch) => ({
  loginClick: (state) => dispatch(loginUser(state)),
});

Login.propTypes = {
  loginClick: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default connect(null, mapDispatchToProps)(Login);

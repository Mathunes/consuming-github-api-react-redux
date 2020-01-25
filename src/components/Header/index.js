import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import * as searchActions from '../../actions/search.js';
import { connect } from 'react-redux';
import './style.css';
import logoGithub from '../../assets/images/github.svg';

class Header extends Component {
    state = {
        user: ''
    }

    searchUser = (e) => {
        e.preventDefault();

        this.props.searchUser(this.state.user)
    }

    render() {
        return (
            <header>
                <div className="title-container">
                    <img src={logoGithub} alt="Logo github" className="logo"/>
                    <h1 className="title-header">GitHub Usuários</h1>
                </div>
                <form onSubmit={this.searchUser}>
                    <input type="text" placeholder="Pesquisar..." onChange={(e) => {this.setState({user: e.target.value})}}/>
                    <input type="submit" value="Buscar"/>
                </form>
            </header>
        )
    }
}

const mapStateToProps = state => ({
    user: state.user
})


const mapDispatchToProps = dispatch =>
    bindActionCreators(searchActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Header);
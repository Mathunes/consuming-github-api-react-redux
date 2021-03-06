import React, { Component } from 'react';
import './style.css';

export default class RepositorieCard extends Component {
    render() {
        const {name, description, html_url, language} = this.props.repoData;

        return (
            <div className="repositorie-card">
                <h3><a href={html_url} target="_Blank" rel="noopener noreferrer">{name}</a></h3>
                <h4>{description}</h4>
                <p>{language}</p>
            </div>
        )
    }
}
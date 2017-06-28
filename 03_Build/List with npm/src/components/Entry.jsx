import React from 'react';
import './Entry.css';

const Entry = React.createClass({

    render() {
        const {
            name,
            avatar,
            location,
            email,
            github,
            facebook
        } = this.props;

        return (
            <div className="entry-body">
                <img className="avatar" src={avatar}/>
                <div className="entry-text">
                    <p className="name">
                        {name}
                    </p>
                    <p className="city">
                        {location}
                    </p>
                    <div className="contacts">
                        <a href={email}>
                            {email}
                        </a>
                        <div className="social">
                            <div className={"icon" + (facebook ? " facebook" : "")}/>
                            <a href={facebook}>
                                {facebook ? "facebook" : ""}
                            </a>
                            <div className={"icon" + (github ? " github" : "")}/>
                            <a href={github}>
                                {github ? "github" : ""}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

export default Entry;

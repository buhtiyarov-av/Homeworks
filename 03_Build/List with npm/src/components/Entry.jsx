import React from 'react';
import * as styles from './Entry.css';
import cx from 'classnames';

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
            <div className={styles.entryBody}>
                <img className={styles.avatar} src={avatar}/>
                <div className={styles.entryText}>
                    <p className={styles.name}>
                        {name}
                    </p>
                    <p className={styles.city}>
                        {location}
                    </p>
                    <div className={styles.contacts}>
                        <a href={email}>
                            {email}
                        </a>
                        <div className={styles.social}>
                            <div className={facebook ? cx(styles.icon, styles.facebook) : ""}/>
                            <a href={facebook}>
                                {facebook ? "facebook" : ""}
                            </a>
                            <div className={github ? cx(styles.icon, styles.github) : ""}/>
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

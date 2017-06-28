import React from 'react';
import './List.css';

import Entry from './Entry.jsx'

const PLACEHOLDER = [{
    "name": "Name",
    "avatar": "http://u.dasmerkendienie.com/56079e55c16bf3.22115148_mr_bender______classy__by_sgtconker1r-d4nqpzu.png",
    "location": "CITY",
    "email": "acme@email.xxx",
    "github": "https:/github.com/User",
    "facebook": ""
}];

const List = React.createClass({

    render() {
        const itemsGot = this.props.items || PLACEHOLDER;
        return(
            <div className="list-body">
                {
                    itemsGot.map((student) =>
                        <Entry
                            key={student.location + student.facebook}
                            name={student.name}
                            avatar={student.avatar}
                            location={student.location}
                            email={student.email}
                            github={student.github}
                            facebook={student.facebook}
                        />
                    )
                }
            </div>
        );
    }
});

export default List;

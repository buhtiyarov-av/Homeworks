
const Card = React.createClass({
    render() {
        return (
            <div className="flip-container">
                <div className={"flipper"+(this.props.flipped ? " flipped" : "")}>
                    <Front>
                        Click me...
                    </Front>
                    <Back>
                        <div>
                            <img src="https://pp.userapi.com/c837236/v837236258/400b0/oFFZ1S3-CT0.jpg" className="displayed"/>
                        </div>
                    </Back>
                </div>
            </div>);
    }
});

const Front = React.createClass({
    render() {
        return (
            <div className="front">
                {this.props.children}
            </div>
        )
    }
});

const Back = React.createClass({
    render() {
        return (
            <div className="back">
                {this.props.children}
            </div>
        )
    }
});

const App = React.createClass({
    getInitialState() {
        return ({
            flipped: false
        });
    },
    cardFlip() {
        this.setState({
            flipped: !this.state.flipped
        });
    },
    render() {
        return (
            <div onClick={this.cardFlip}>
                <Card flipped={this.state.flipped}/>
            </div>
    )}
});

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);

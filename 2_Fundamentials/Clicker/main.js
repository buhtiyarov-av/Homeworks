const App = React.createClass({
    getInitialState() {
        return ({
            divStyle: {
                "-webkit-user-select": "none",
                "-moz-user-select": "none",
                "-ms-user-select": "none",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                width: "100px",
	            height: "100px",
	            background: "red",
	            borderRadius: "50px",
                color: "white",
                boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)"
            },
            scale: {
                r: 1
            },
            container: {
                position: "fixed",
                top: "50%",
                left: "50%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center"
            }
        });
    },
    isClicked() {
        this.setState((prevState) => {
            return {
                scale: {
                    r: prevState.scale.r <= 2 ? prevState.scale.r += 0.1 : 0.9
                },
                divStyle: {
                    ...prevState.divStyle,
                    transform: `scale(${this.state.scale.r}, ${this.state.scale.r})`,
                    transition: "transform 0.3s"
                }
            }
        });
    },
    render() {
        const style = this.state.divStyle;

        return (
            <div style={this.state.container}>
                <div style={style} onClick={this.isClicked}>click me</div>
            </div>
        );
    }
});

// You could pass dynamic stuff here as needed.
ReactDOM.render(
    <App/>,
    document.getElementById("root")
);

const Tweet = React.createClass({
    render() {
        return (
            <div>
                <img src={this.props.avatar} />
                <h3>@{this.props.author}</h3>
                <p>{this.props.text}</p>
                <img src={this.props.image} />
                <br />
                likes: {this.props.likes} retweets: {this.props.retweets}
            </div>
        );
    }
});

const Feed = React.createClass({
    render() {
        return (
            <div>
                <Tweet
                    author='bennettb83'
                    text='Distinguishing between a muffin and chihuahua will be the next big hurdle in #machinelearning. @Redo @Louis_Monier'
                    image='https://pbs.twimg.com/media/ChL0GdiU0AIWdC_.jpg'
                    avatar='https://pbs.twimg.com/profile_images/697667697564200960/j72a_Ozw_bigger.jpg'
                    likes={233}
                    retweets={282}
                />
            </div>
        );
    }
});

ReactDOM.render(
    <Feed />,
    document.getElementById('root')
);

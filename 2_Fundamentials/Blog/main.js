const HeaderPanel = React.createClass({

    render() {
        return(
            <div className="title">
                Blog
            </div>
        );
    }
});

const EditorPanel = React.createClass({
    getInitialState() {
        return {
            id: "",
            avatar: "http://i.imgur.com/H357yaH.jpg",
            name: "",
            title: "",
            text: "",
            tags: "",
            attachment: ""
        };
    },

    handleNameChange(addName) {
        this.setState({
            name: addName.target.value
        });
    },

    handleThemeChange(addTheme) {
        this.setState({
            title: addTheme.target.value
        });
    },

    handleArticleChange(addText) {
        this.setState({
            text: addText.target.value
        });
    },

    handleTagChange(addTag) {
        const tagArray = addTag.target.value.split(',')
        this.setState({
            tags: tagArray
        });
    },

    handleArticleAdd() {
        const date = new Date();
        const uniqueNewTags = deleteNotUniq(this.state.tags);
        const newArticle = {
            id: Math.random().toString(36).substr(2, 10),
            name: this.state.name,
            avatar: "http://i.imgur.com/H357yaH.jpg",
            title: this.state.title,
            date: date.toISOString().substring(0, 10),
            text: this.state.text,
            tags: uniqueNewTags.toString(),
            attachment: this.state.attachment
        };

        this.props.onTagAdd(uniqueNewTags);
        this.props.onArticleAdd(newArticle);
        this.resetState();
    },

    resetState() {
        this.setState({
            id: "",
            name: "",
            avatar: "http://i.imgur.com/H357yaH.jpg",
            title: "",
            text: "",
            tags: "",
            attachment: ""
        });
    },

    render() {

        return(
            <div className="editor-panel">
                <div className="editor">
                    <div className="controls">
                        <div className="marker edit">
                            Edit
                        </div>
                        <div className="marker preview">
                            Preview
                        </div>
                        <button className="delete">
                            Delete
                        </button>
                    </div>
                    <input type="text" value={this.state.name} placeholder="Type your name here..." onChange={this.handleNameChange}/>
                    <input type="text" value={this.state.title} placeholder="Type the theme..." onChange={this.handleThemeChange}/>
                    <textarea rows={5} value={this.state.text} placeholder="Type your text here..." className="text-input" onChange={this.handleArticleChange}/>
                </div>
                <div className="post">
                    <textarea rows={5} value={this.state.tags} placeholder="Type your tags" className="text-input tags" onChange={this.handleTagChange}/>
                    <div>
                        <button onClick={this.handleArticleAdd}>Post</button>
                        <button>Browse tags</button>
                    </div>
                </div>
            </div>
        );
    }
});

const TagList = React.createClass({
    render() {
        const item = this.props;

        return (
            <div>
                {item},
            </div>
        );
    }
});

const BlogBody = React.createClass({
    handleSearchChanged(queue) {
        this.props.onSearchChange(queue.target.value)
    },

    render() {

        return (
            <div className="blog-body">
                <div className="article-grid">
                    {
                        this.props.articles.map(article =>
                            <Article
                                key={article.id}
                                avatar={article.avatar}
                                title={article.title}
                                text={article.text}
                                attachment={article.attachment}
                            >
                                {article.date}
                                {article.tags}
                                {article.name}
                            </Article>
                        )
                    }
                </div>
                <div className="article-search">
                    <div>
                        <input placeholder="Search by..." style={{width: "70%"}} type="text" onChange={this.handleSearchChanged}/>
                        <button className="search-button" style={{width: "25%"}}>Search</button>
                    </div>
                    <div className="tags-cloud">
                        {
                            this.props.tagsBrowsable.map((tag, index) =>
                                <div
                                    className="tag-block"
                                    key={index}>
                                    {tag}
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        );
    }
});

const Article = React.createClass({

    render() {
        const {
            avatar,
            title,
            text,
            attachment,
            children
        } = this.props;

        return (
            <div className="article-body">
                <div className="article-title">
                    <img src={avatar} style={{width: "100px", height: "100px", border: "3px solid black"}}/>
                    <div style={{alignSelf:"center", marginLeft:"10px"}}>
                        {children}
                    </div>
                </div>
                <div className="article-text">
                    <img className="article-attachment" src={attachment}/>
                    {text}
                </div>
            </div>
        );
    }
});

const BlogApp = React.createClass({

    getInitialState() {
        return ({
            articles: [],
            tags: [],
            articleFilter: ""
        });
    },

    handleArticleAdd(newArticle) {
        this.setState({
            articles: [newArticle, ...this.state.articles]
        });
    },

    handleTagAdd(newTags) {
        this.state.tags.push.apply(this.state.tags, newTags);
        this.setState({
            tags: deleteNotUniq(this.state.tags)
        });
    },

    componentDidMount() {
        const savedArticles = JSON.parse(localStorage.getItem('blogArticles'));
        const savedTags = JSON.parse(localStorage.getItem('blogTags'));

        if (savedArticles) {
            this.setState({
                articles: savedArticles
            });
        }
        if (savedTags) {
            this.setState({
                tags: deleteNotUniq(savedTags)
            });
        }
    },

    componentDidUpdate() {
        const savedArticles = JSON.stringify(this.state.articles);
        const savedTags = JSON.stringify(this.state.tags);
        localStorage.setItem('blogTags', savedTags);
        localStorage.setItem('blogArticles', savedArticles);
    },

    searchChanged(searchQueue) {
        this.setState({
            articleFilter: searchQueue
        });
    },

    render() {

        const articlesFiltered = this.state.articles.filter((article) =>
             this.state.articles[name].toLowerCase().indexOf(this.articleFilter.toLowerCase()) !== -1 ||
             this.state.articles[title].toLowerCase().indexOf(this.articleFilter.toLowerCase()) !== -1 ||
             this.state.articles[text].toLowerCase().indexOf(this.articleFilter.toLowerCase()) !== -1 ||
             this.state.articles[tags].toLowerCase().indexOf(this.articleFilter.toLowerCase()) !== -1;
        );

        return (
            <div>
                <div className="upper-block">
                    <HeaderPanel/>
                    <EditorPanel onArticleAdd={this.handleArticleAdd} onTagAdd={this.handleTagAdd}/>
                </div>
                <div className="lower-block">
                    <BlogBody articles={articlesFiltered} tagsBrowsable={this.state.tags} onSearchChange={this.searchChanged}/>
                </div>
            </div>
        );
    }
});

ReactDOM.render(
    <BlogApp/>, document.getElementById('root')
);

function deleteNotUniq(arr) {
    var seen = {};
    return arr.filter(function(item) {
        return seen.hasOwnProperty(item) ? false : (seen[item] = true);
    });
}

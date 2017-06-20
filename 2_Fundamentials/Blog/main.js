
const BlogApp = React.createClass({

    render() {
        return (
            <div>
                <div className="upper-block">
                    <HeaderPanel/>
                    <EditorPanel/>
                </div>
                <div className="lower-block">
                    <BlogBody/>
                </div>
            </div>
        );
    }
});

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
                    <textarea rows={5} placeholder="Type your text here..." className="text-input"/>
                </div>
                <div className="post">
                    <textarea rows={5} placeholder="Type your tags" className="text-input tags"/>
                    <div>
                        <button>Post</button>
                        <button>Browse tags</button>
                    </div>
                </div>
            </div>
        );
    }
});

const BlogBody = React.createClass({

    render() {

        return (
            <div className="blog-body">
                <div className="article-grid">
                    <Article/>
                    <Article/>
                    <Article/>
                </div>
                <div className="article-search">
                    <div>
                        <input placeholder="Search by tag..." style={{width: "70%"}} type="text"/>
                        <button className="search-button" style={{width: "25%"}}>Search</button>
                    </div>
                    <div className="tag-cloud">tags</div>
                </div>
            </div>
        );
    }
});

const Article = React.createClass({

    render() {

        return (
            <div className="article-body">
                <div className="article-title">
                    <img src="http://i.imgur.com/H357yaH.jpg" style={{width: "100px", height: "100px", border: "3px solid black"}}/>
                    <div style={{alignSelf:"center", marginLeft:"10px"}}>
                        Title
                        <br/>
                        11.11.11 Zzzzz zzzzz Xxxxx Xxxxx
                    </div>
                </div>
                <div className="article-text">
                    <img className="article-attachment" src="https://cs541608.userapi.com/c841635/v841635702/1885/c9YxT2tBQWQ.jpg"/>
                    Letter wooded direct two men indeed income sister. Impression up admiration he by partiality is. Instantly immediate his saw one day perceived. Old blushes respect but offices hearted minutes effects. Written parties winding oh as in without on started. Residence gentleman yet preserved few convinced. Coming regret simple longer little am sister on. Do danger in to adieus ladies houses oh eldest. Gone pure late gay ham. They sigh were not find are rent. He unaffected sympathize discovered at no am conviction principles. Girl ham very how yet hill four show. Meet lain on he only size. Branched learning so subjects mistress do appetite jennings be in. Esteems up lasting no village morning do offices. Settled wishing ability musical may another set age. Diminution my apartments he attachment is entreaties announcing estimating. And total least her two whose great has which. Neat pain form eat sent sex good week. Led instrument sentiments she simplicity. Or kind rest bred with am shed then. In raptures building an bringing be. Elderly is detract tedious assured private so to visited. Do travelling companions contrasted it. Mistress strongly remember up to. Ham him compass you proceed calling detract. Better of always missed we person mr. September smallness northward situation few her certainty something. Death there mirth way the noisy merit. Piqued shy spring nor six though mutual living ask extent. Replying of dashwood advanced ladyship smallest disposal or. Attempt offices own improve now see. Called person are around county talked her esteem. Those fully these way nay thing seems. He an thing rapid these after going drawn or. Timed she his law the spoil round defer. In surprise concerns informed betrayed he learning is ye. Ignorant formerly so ye blessing. He as spoke avoid given downs money on we. Of properly carriage shutters ye as wandered up repeated moreover. Inquietude attachment if ye an solicitude to. Remaining so continued concealed as knowledge happiness. Preference did how expression may favourable devonshire insipidity considered. An length design regret an hardly barton mr figure. Betrayed cheerful declared end and. Questions we additions is extremely incommode. Next half add call them eat face. Age lived smile six defer bed their few. Had admitting concluded too behaviour him she. Of death to or to being other. Improve ashamed married expense bed her comfort pursuit mrs. Four time took ye your as fail lady. Up greatest am exertion or marianne. Shy occasional terminated insensible and inhabiting gay. So know do fond to half on. Now who promise was justice new winding. In finished on he speaking suitable advanced if. Boy happiness sportsmen say prevailed offending concealed nor was provision. Provided so as doubtful on striking required. Waiting we to compass assured. Folly was these three and songs arose whose. Of in vicinity contempt together in possible branched. Assured company hastily looking garrets in oh. Most have love my gone to this so. Discovered interested prosperous the our affronting insipidity day. Missed lovers way one vanity wishes nay but. Use shy seemed within twenty wished old few regret passed. Absolute one hastened mrs any sensible. Wrong do point avoid by fruit learn or in death. So passage however besides invited comfort elderly be me. Walls began of child civil am heard hoped my. Satisfied pretended mr on do determine by. Old post took and ask seen fact rich. Man entrance settling believed eat joy. Money as drift begin on to. Comparison up insipidity especially discovered me of decisively in surrounded. Points six way enough she its father. Folly sex downs tears ham green forty. Fat new smallness few supposing suspicion two. Course sir people worthy horses add entire suffer. How one dull get busy dare far. At principle perfectly by sweetness do. As mr started arrival subject by believe. Strictly numerous outlived kindness whatever on we no on addition.
                </div>
            </div>
        );
    }
});

ReactDOM.render(
    <BlogApp/>, document.getElementById('root')
);

import React from 'react';

class Share extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            hasAdblocker: false
        }
    }

    componentDidMount() {
    }

    share(platform, evt) {
        evt.preventDefault();

        const text = `Ik heb zojuist '${this.props.product}' gekregen! #watkrijgiknu? https://watkrijgiknu.nl`;

        switch(platform.toLowerCase()) {
            case "twitter":
                window.open('https://twitter.com/intent/tweet?text=' + encodeURIComponent(text));
                break;
                case "facebook":
                window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURI('https://watkrijgiknu.nl')}&t=${encodeURIComponent(text)}`);
                break;

            default: return;
        }
    }

    render() {
        const { hasAdblocker } = this.state;
        return (
            <React.Fragment>
                {
                    hasAdblocker === true ? <span className={"alert alert-danger"}>blabla</span> : null
                }

                <div className={"share"}>
                    <a href={"/"} onClick={(e) => this.share('Twitter', e)} rel={"noreferer"} target={"_blank"}>Twitter</a>
                    <a href={"/"} onClick={(e) => this.share('Facebook', e)} rel={"noreferer"} target={"_blank"}>Facebook</a>
                </div>
            </React.Fragment>
        );
    }
}

export default Share;

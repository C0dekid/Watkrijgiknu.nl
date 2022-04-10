import React from 'react';
import Contact from "./pages/contact";
import Footer from "./footer";

import kutprijzen from "./assets/c_images/kutprijzen";
import Share from "./share";

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentPage: "/",
            pages: [
                { path: "/",  screen: null },
                { path: "/contact",  screen: Contact },
            ],
            prize: null,
            rejected: 0,
            accept: false
        };

        this.surprise = this.surprise.bind(this);
        this.navigate = this.navigate.bind(this);
    }

    componentDidMount() {
        this.surprise(null);
    }

    navigate(path = "/", evt) {
        if(evt) {
            evt.preventDefault();
        }
        if(/^[a-zA-Z]+$/.test(path.replace("/", "")) === true) {
            const { pages, currentPage } = this.state;
            const navi = pages.filter(page => page.path === path);

            if(navi.length === 1) {
                if(currentPage !== path) {
                    this.setState({ currentPage: path });
                }
            }
        }
    }

    surprise(e) {
        if(e !== null) {
            e.preventDefault();
            const { rejected } = this.state;
            this.setState({ rejected: rejected+1 });
        }

        const items = [
            //{ product: "1% korting", desc: "Krijg 1% korting op van alles.", icon: kutprijzen.wc_papier },
            { product: "Kniebeschermers", desc: "Voor mensen waarvan de knieën achterste voren buigen.", icon: kutprijzen.kniebescherming },
            { product: "Veters", desc: "Om je schoenen mee vast te maken (.. of als je je schoonmoeder niet mag!)", icon: kutprijzen.veters },
            { product: "2,500 pakken wc papier", desc: "Voor als je net sushi gegeten hebt.", icon: kutprijzen.wc_papier },
            { product: "Een toiletbril", desc: "ja.", icon: kutprijzen.toiletbril },
            { product: "Een aubergine", desc: "Waarom is dit ding paars??", icon: kutprijzen.aubergine },
            { product: "Nog eens vier jaar Mark Rutte", desc: "Euh.. ja.", icon: kutprijzen.mark },
            { product: "Adoptie door Mark Rutte", desc: "Markie als papa!", icon: kutprijzen.mark },
            { product: "Brief van de belastingdienst", desc: "U bent ons €25,000,- verschuldigd. Waar blijft dat geld?", icon: kutprijzen.belastingdienst },
            { product: "Vierkante tomaten", desc: "Horen rond te zijn maarja.", icon: kutprijzen.tomaten },
            { product: "Broek schoenen", desc: "wtf", icon: kutprijzen.schoenen },
            { product: "Smeerkaas", desc: "Wie dacht dat dit een goed idee was?", icon: kutprijzen.smeerkaas },
            { product: "Ongewenste mail", desc: "U heeft zojuist €1 miljoen gewonnen! Het enige wat u hoeft te doen is uw bankgegevens aan ons geven.", icon: kutprijzen.spam },
            { product: "Slechte kwaliteit foto", desc: "haha", icon: kutprijzen.foto },
            { product: "Verlening van de lockdown", desc: "Lijkt net op een onopzegbare telefoon abonnement.", icon: kutprijzen.lockdown },
        ];

        this.setState({
            prize: items[Math.floor(Math.random() * items.length)]
        });
    }

    render() {
        const { prize, rejected, accept, currentPage } = this.state;

        if(currentPage === "/") {
            return (
                <React.Fragment>
                    <main className="flex-shrink-0">
                        <div className="container text-center">
                            <p className={"text-center"}><img src={"assets/c_images/surprise-box.png"} style={{ width: 120 }}/></p>
                            {
                                accept === false ?
                                    <React.Fragment>
                                        <h3 className="mt-5">{ prize === null ? "Wat krijg ik nu?" : "Dit is wat je krijgt 🤩:" }</h3>
                                        <div className={"prize"}>
                                            {
                                                rejected < 10 ?

                                                    prize === null ? <p>Niks.</p> :
                                                        <React.Fragment>
                                                            <div className={"leprize"}>
                                                                <h5>{ prize.product }</h5>
                                                                <p>
                                                                    <img src={prize.icon} className={"prize-image"} />
                                                                </p>
                                                                <p>{ prize.desc }</p>
                                                                <p>
                                                                    <button className={"btn btn-primary btn-sm"} onClick={() => this.setState({ accept: true })}>Dit wil ik!</button>
                                                                </p>
                                                            </div>
                                                            <p>Niet blij hiermee? Als ondankbare, kan je altijd nog <a href={"/"} onClick={(e) => this.surprise(e)}>wat anders</a> krijgen.</p>
                                                        </React.Fragment>

                                                    :
                                                    <React.Fragment>
                                                        <h4>Jij krijgt niks meer!</h4>
                                                        <p>Je hebt al 10x nee gezegd tegen ons aanbod.</p>
                                                    </React.Fragment>
                                            }
                                        </div>
                                    </React.Fragment>
                                    :

                                    <React.Fragment>
                                        <div className={"prize"}>
                                            <div className={"leprize"}>
                                                <h5>Gefeliciteerd!</h5>
                                                {
                                                    rejected === 0 ? <p>Je bent zojuist de gelukkige eigenaar geworden van <b>{ prize.product }</b>. Toch mooi om te zien dat er tenminste mensen zijn die blij zijn met wat ze krijgen, dat zien wij graag!</p> : <p>Na {rejected} keer niet tevreden te zijn met het eerste aanbod, heb je er toch voor gekozen voor <b>{prize.product}</b>.</p>
                                                }

                                                Delen: <Share product={prize.product} />
                                            </div>
                                        </div>
                                    </React.Fragment>
                            }
                        </div>
                    </main>
                    <Footer />
                </React.Fragment>
            );
        }
    }
}


export default App;

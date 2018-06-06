import React, { Component } from "react";
import ReactGA from 'react-ga';


class Rules extends Component {
    constructor(props) {
        super(props);
        ReactGA.initialize('UA-120470128-1');
        ReactGA.pageview(window.location.hash);
    }

  render() {
    return (
      <div className="rules-div">
        <div className="header-1 centered-title">Crypto Against Humanity Player's Guide</div>
        <div className="lbl-text margin-text centered-text">
        Crypto Against Humanity is a platform for content creation of card combinations.<br/><br/>
         There are two types of cards: white cards and black cards. White cards, which typically represent a noun or pronoun, and black
         cards, which usually are sentences or phrases with blank spaces. These cards and the resulting combinations of both
         are completely generated by the community.<br/><br/>
         Users can create white cards which can then can be bought and sold for ether on the Play page.
         As more people buy into a white card they think goes best with the current black card the price goes up.
         And if the white card falls out of favor and people start to sell it the price falls<br/><br/>
         Users can also submit Black cards to the Token Curated Registry (TCR) from which a new black card is chosen at random
         every 2 hours.
         </div><br/>
         <div className="header-1 centered-title"> Alice's Use Case </div><br/>
         <div className="lbl-text margin-text centered-text">Alice opens Crypto Against Humanity and notices the black card with the text
         "_____, Satoshi's true vision" She scrolls through the list of available white cards and notices one labeled "Bitconnect"
         and she thinks that is really funny. She also notices it is very cheap in comparison to the rest of the cards. Alice buys some.<br/> <br/>
         After a few hours the card becomes really popular and as other people discover it and buy in the price soars. Now that
         it's worth quite a bit more to sell than Alice bought it for. She now sells her cards back to the marke for Eth and gets ready to play again!</div>
      </div>
    );
  }
}

export default Rules;
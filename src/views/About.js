import { styled } from "styled-components";
import ViewWrapper from "../atoms/ViewWrapper";

const Title = styled.h3`
  text-align: center;
  font-size: 30px;
`

const Body = styled.p`
  width: 90vw;
  margin: auto;
  font-weight: 600;
`


const About = ({ width }) => {
  return (
    <ViewWrapper width={width}>
      <Title>About Us</Title>
      <Title>The Quack Mission</Title>
      <Body>Why $QUACK and what’s the future of this QUACKING mission?

        Firstly, $QUACK isn’t just meme coin, it’s a movement..: lead by a doxxed founder and a QUACK hungry community!

        Christian Clayton the founder created $QUACK because he was sick of constant rug pulls and bad actors in the space, he wanted a safe space were people can invest and actually sleep comfy on a coin..

        So $QUACK was made from the people for the people, the branding born from mighty ducks, visions to hit the top 3 base chain projects, he knows he will be the underduck that comes out number 1 in the league.

        @onlineboss27 has been in crypto for 10 years and is well known in the space, 140k TikTok, 130k instagram and a active telegram community, crypto marketing agency and he has made multiple 7 figures trading meme coins and has built multiple successfully web2 businesses.

        Quack has support from the biggest names in crypto, and the brand/future will consist of more big partnerships, a content Strategy to generate an income that rewards holders.

        A very influential and well known marketer and coordinator working behind the scenes, @KINGWAGYU (KING ADVISORY) is leading the way for the marketing campaign.. he is very capable of moving projects within a blink of an eye..

        As $QUACKs mission is to onboard the masses to BASE, this is very much aligned with basechain /coinbase and as Onlineboss being a doxxed leader will be a big factor for support from coinbase.

        Alpha groups and meet ups and building a strong community is top priority on this mission community is everything.. As a boxing enthusiast, Onlineboss will be entering crypto boxing fights promoting Quack to millions, and possibly future events for $QUACK.

        Christian is a business man and has a network of over 100 million followers, the masses will be onboarded via quack

        Future plans for software utilities will be rolled out to help onboard and educate the new people to crypto and as a confident leader, expect Christian to be on your favourite podcast and crypto stages pushing the quack movement

        So $QUACK welcomes everyone to the movement🦆 enjoy the flight.
      </Body>
    </ViewWrapper>
  );
}

export default About;

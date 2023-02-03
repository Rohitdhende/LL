//import npm packages
import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';
import {
  FaTelegramPlane,
  FaTwitter,
  FaYoutube,
  FaReddit,
  FaSpotify,
  FaInstagram,
  FaTiktok,
  FaFacebook,
  FaMedium,
} from 'react-icons/fa';

//import next js packages
import Image from 'next/image';
import Link from 'next/link';

//import styles
import styled from 'styled-components';
import Media from '../styles/media-breackpoint';
import Gs from '../styles/theme.config';

//import media
import FootArrow from '../public/images/footer-arrow.png';

const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <FooterSection>
      <Gs.Container style={{ maxWidth: '1300px' }}>
        <motion.div
          ref={ref}
          style={{
            transform: isInView ? 'none' : 'translateY(200px)',
            opacity: isInView ? 1 : 0,
            transition: 'all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1)',
          }}
        >
          <FooterPart1>
            <SocialIcons>
              <Link
                className="fb"
                target="_blank"
                href={{ pathname: 'https://t.me/liquidloans' }}
                aria-label="Connect with us on Facebook"
              >
                <FaTelegramPlane />
              </Link>
              <Link
                className="yt"
                target="_blank"
                href={{ pathname: 'https://www.youtube.com/c/liquidloans' }}
                aria-label="Connect with us on youtube"
              >
                <FaYoutube />
              </Link>
              <Link
                className="tw"
                target="_blank"
                href={{ pathname: 'https://weighinwithwallrus.com/spotify' }}
                aria-label="Connect with us on podcast spotify"
              >
                <FaSpotify />
              </Link>
              <Link
                className="tw"
                target="_blank"
                href={{ pathname: 'https://twitter.com/liquidloansio/' }}
                aria-label="Connect with us on twitter"
              >
                <FaTwitter />
              </Link>
              <Link
                className="tw"
                target="_blank"
                href={{ pathname: 'https://www.tiktok.com/@liquidloans' }}
                aria-label="Connect with us on tiktok"
              >
                <FaTiktok />
              </Link>
              <Link
                className="tw"
                target="_blank"
                href={{ pathname: 'https://www.facebook.com/liquidloansio' }}
                aria-label="Connect with us on Facebook"
              >
                <FaFacebook />
              </Link>

              <Link
                className="tw"
                target="_blank"
                href={{ pathname: 'https://www.instagram.com/liquidloansio/' }}
                aria-label="Connect with us on instagram"
              >
                <FaInstagram />
              </Link>

              <Link
                className="tw"
                target="_blank"
                href={{ pathname: 'https://liquidloans.medium.com/' }}
                aria-label="Connect with us on medium"
              >
                <FaMedium />
              </Link>
              {/* <Link
                className="tw"
                target="_blank"
                href={{ pathname: 'https://www.reddit.com/r/LiquidLoans/' }}
                aria-label="Connect with us on reddit"
              >
                <FaReddit />
              </Link> */}
            </SocialIcons>
          </FooterPart1>
          <FooterPart2>
            <div className="footbox">
              <p>Knowledge</p>
              <nav>
                <Link href="/how-it-works">
                  <Image src={FootArrow} alt="foo arrow" />
                  How It Works
                </Link>
                <Link href="/vault/video">
                  <Image src={FootArrow} alt="foo arrow" />
                  Videos
                </Link>
                <Link href="/vault/podcasts">
                  <Image src={FootArrow} alt="foo arrow" />
                  Podcasts
                </Link>
                <Link
                  target="_blank"
                  href={{ pathname: 'https://docs.liquidloans.io/' }}
                >
                  <Image src={FootArrow} alt="foo arrow" />
                  Knowledge
                </Link>
                <Link href="https://www.liquidloans.io/faq">
                  <Image src={FootArrow} alt="foo arrow" />
                  FAQs
                </Link>
                <Link href="/vault/research">
                  {' '}
                  <Image src={FootArrow} alt="foo arrow" />
                  Research
                </Link>
                <Link href="https://www.liquidloans.io/resources">
                  <Image src={FootArrow} alt="arrow" />
                  Resources
                </Link>
              </nav>
            </div>
            <div className="footbox">
              <p>Company</p>
              <nav>
                <Link href="/dapp">
                  <Image src={FootArrow} alt="arrow" />
                  Dapp
                </Link>
                <Link
                  target="_blank"
                  href={{ pathname: 'https://testnet.liquidloans.io/' }}
                >
                  <Image src={FootArrow} alt="arrow" />
                  Testnet
                </Link>

                <Link href="/downloads">
                  <Image src={FootArrow} alt="arrow" />
                  Downloads
                </Link>
                <Link href="/about">
                  <Image src={FootArrow} alt="arrow" />
                  About Us
                </Link>
                <Link href="/about-pulsechain">
                  <Image src={FootArrow} alt="arrow" />
                  PulseChain
                </Link>
                <Link href="/connect">
                  <Image src={FootArrow} alt="arrow" />
                  Connect
                </Link>
              </nav>
            </div>
            <div className="footbox fix01">
              {/* <p>Subscribe To Newsletter</p>
                            <p className="desc-text">Stay up-to-date with all the latest news from <br />Liquid Loans.</p>
                            <FooterForm>
                                <input type="text" />
                                <SubBtn>SUBSCRIBE</SubBtn>
                            </FooterForm> */}

              <p>Subscribe To Newsletter</p>
              <p className="desc-text">
                Stay up-to-date with all the latest news from <br />
                Liquid Loans.
              </p>
              <form
                action="https://app.getresponse.com/add_subscriber.html"
                acceptCharset="utf-8"
                method="post"
                target="_blank"
              >
                <FooterForm>
                  <input
                    type="text"
                    name="email"
                    aria-label="enter your email"
                    aria-labelledby="enter your email"
                  />
                  <br />
                  <input
                    type="hidden"
                    name="campaign_token"
                    value="rX3AH"
                    aria-labelledby="campaign token"
                    aria-label="campaign token"
                  />
                  <SubBtn>
                    <input
                      type="submit"
                      className="inputBTN"
                      value="Subscribe"
                      aria-labelledby="submit to subscribe"
                      aria-label="submit to subscribe"
                    />{' '}
                  </SubBtn>
                </FooterForm>
              </form>
            </div>
          </FooterPart2>
          <FooterPart3>
            <p>
              Copyright © 2023 Liquid Loans. <br className="Show-sm" /> All
              Rights Reserved.{' '}
            </p>
            <TermLinks>
              <Link
                href="/terms-and-conditions"
                aria-label="Website Terms and Conditions"
              >
                Website Terms
              </Link>
              <Link href="/protocol-disclaimer" aria-label="Website Protocols">
                Protocol Disclaimer
              </Link>
              <Link href="/privacy-policy" aria-label="Website Privacy Policy">
                Privacy Policy
              </Link>
            </TermLinks>
          </FooterPart3>
        </motion.div>
      </Gs.Container>
    </FooterSection>
  );
};

const FlexDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

const FooterSection = styled.div`
  background-color: ${(props) => props.theme.Footerbg};
  ${Media.xl} {
    padding: 0 25px;
  }
  ${Media.sm} {
    padding: 0 12px;
  }
`;

const FooterPart1 = styled(FlexDiv)`
  padding: 40px 0px;
  a {
    font-size: 18px;
    color: ${(props) => props.theme.TextWhite};
    :hover {
      color: ${(props) => props.theme.LGreyText};
    }
  }
`;

const SocialIcons = styled(FlexDiv)`
  a {
    margin: 0px 17px;
    line-height: 16px;
    svg {
      color: ${(props) => props.theme.TextPurple};
      :hover {
        color: ${(props) => props.theme.Menuhover};
      }
    }
    &.fb {
      font-size: 25px;
    }
    &.tw {
      font-size: 24px;
    }
    &.yt {
      font-size: 28px;
    }
  }
`;

const FooterPart2 = styled(FlexDiv)`
  justify-content: space-between;
  align-items: flex-start;
  padding: 50px 0px;
  border-top: 1px solid ${(props) => props.theme.FooterBorder};
  border-bottom: 1px solid ${(props) => props.theme.FooterBorder};

  .footbox.fix01 {
    width: 100%;
    max-width: 310px;
  }
  ${Media.sm} {
    .footbox {
      width: 50%;
      &:nth-last-child(01) {
        width: 100%;
        margin-top: 45px;
      }
    }
  }

  p {
    font-size: 20px;
    color: ${(props) => props.theme.TextWhite};
    margin: 0px 0px 27px;

    &.desc-text {
      font-size: 16px;
      color: ${(props) => props.theme.FooterLink};
      line-height: 24px;
      margin-bottom: 15px;
      margin-top: -6px;
      ${Media.sm} {
        br {
          display: none;
        }
      }
    }
  }
  nav {
    a {
      display: block;
      color: ${(props) => props.theme.FooterLink};
      font-size: 16px;
      margin-bottom: 24px;
      img {
        margin-right: 12px;
      }
      :last-child {
        margin-bottom: 0px;
      }
      :hover {
        color: ${(props) => props.theme.FooterLinkHover};
      }
    }
  }
`;

const FooterForm = styled.div`
  position: relative;
  input {
    max-width: 341px;
    height: 48px;
    background-color: ${(props) => props.theme.InputBg};
    width: 100%;
    border: 1px solid ${(props) => props.theme.InputBorder} !important;
    font-size: 16px;
    padding-left: 10px;
    color: ${(props) => props.theme.TextWhite};
  }
  ${Media.sm} {
    input {
      max-width: 100%;
    }
  }

  .button {
    font-size: 18px !important;
    line-height: 22px;
    height: 40px !important;
    padding: 10px 12px;
    border-radius: 5px;
    color: ${(props) => props.theme.TextWhite};
    background: linear-gradient(
      90deg,
      ${(props) => props.theme.GColor1},
      ${(props) => props.theme.GColor2}
    );
    :hover {
      background: linear-gradient(
        90deg,
        ${(props) => props.theme.GColor1Medium},
        ${(props) => props.theme.GColor2Medium}
      );
    }
  }

  .SubBtn .inputBTN {
    display: inline-block;
    width: auto;
    margin: 10px 0 0 0;
    font-size: 16px;
    line-height: 16px;
    padding: 10px 12px;
    border-radius: 5px;
    color: #fff;
    background: linear-gradient(90deg, #733bad, #4f00cf);
  }
`;

const SubBtn = styled.div`
  /* position:absolute; top:6px; right:6px; font-size:16px; line-height:16px; padding:10px 12px; border-radius:5px;
    color:${(props) =>
    props.theme.TextWhite}; background:linear-gradient(90deg, ${(props) =>
    props.theme.GColor1}, ${(props) => props.theme.GColor2});
    :hover{ background:linear-gradient(90deg, ${(props) =>
    props.theme.GColor1Medium}, ${(props) => props.theme.GColor2Medium});} */

  .inputBTN {
    display: inline-block;
    width: auto;
    margin: 10px 0 0 0;
    font-size: 16px;
    line-height: 16px;
    padding: 10px 12px;
    border-radius: 5px;
    color: #fff;
    background: linear-gradient(
      90deg,
      ${(props) => props.theme.GColor1},
      ${(props) => props.theme.GColor2}
    );
    :hover {
      background: linear-gradient(
        90deg,
        ${(props) => props.theme.GColor1Medium},
        ${(props) => props.theme.GColor2Medium}
      );
    }
  }
`;

const FooterPart3 = styled(FlexDiv)`
  justify-content: space-between;
  padding: 27px 0px;
  p {
    font-size: 18px;
    font-weight: light;
    color: ${(props) => props.theme.TermLink};
    margin: 0px;
  }

  ${Media.sm} {
    p {
      text-align: center;
      width: 100%;
    }
    justify-content: center;
  }
`;

const TermLinks = styled(FlexDiv)`
  ${Media.sm} {
    padding: 10px 0;
  }
  a {
    font-size: 18px;
    font-weight: 400;
    color: ${(props) => props.theme.TermLink};
    border-right: 1px solid ${(props) => props.theme.TermLink};
    padding: 0px 10px;
    :last-child {
      border-right: 0px;
    }
    :hover {
      color: ${(props) => props.theme.FooterLinkHover};
    }

    ${Media.sm} {
      font-size: 14px;
      :nth-child(01) {
        padding-left: 0;
      }
    }
  }
`;

const ModalHeader = styled.div`
  background: linear-gradient(
    90deg,
    ${(props) => props.theme.GColor1},
    ${(props) => props.theme.GColor2}
  );
  padding: 20px;
  color: ${(props) => props.theme.TextWhite};
  font-size: 26px;
  font-weight: 500;
`;

const ModalContent = styled.div`
  padding: 40px 25px;
  h1 {
    font-size: 22px;
    font-weight: bold;
    color: ${(props) => props.theme.MTitle};
    margin: 0px 0px 30px;
  }
  p,
  li {
    font-size: 17px;
    font-weight: 400;
    color: ${(props) => props.theme.MTitle};
    margin: 0px 0px 30px;
    &.mb-50 {
      margin-bottom: 50px;
    }
    &.mb-0 {
      margin-bottom: 0px;
    }
    a {
      color: ${(props) => props.theme.FaqTLink};
    }
  }
`;

export default Footer;

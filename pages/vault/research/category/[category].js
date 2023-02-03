//import npm packages
import React, { useEffect, useState } from 'react';

//import next js packages
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import { useRouter } from 'next/router';

//import styles
import styled from 'styled-components';
import Gs from '../../../../styles/theme.config';
import Media from '../../../../styles/media-breackpoint';
import Masonry from 'react-masonry-css';

//import media
import ShadowBX from '../../../../public/images/banner-shadown.jpg';
import HowitwrkBG from '../../../../public/images/bxbg01.jpg';
import BTMBXico01 from '../../../../public/images/faq-ico.png';
import BTMBXico02 from '../../../../public/images/utube-ico.png';

//import components
import Card from '../../../../components/Card';

//import apis
import { getCategories, getBlogsByCategory } from '../../../../pages/api/blogs';

export const getServerSideProps = async (context) => {
  const { category } = context.query;

  //get all categories for header
  const allCategories = await getCategories();

  //find the current category from the slug or id
  const currentCategory = allCategories?.filter(
    (cat) =>
      cat.slug?.toString() === category?.toString() ||
      cat.cat_ID?.toString() === category?.toString()
  );
  const categoryName = currentCategory[0]?.cat_name;
  const blogs = await getBlogsByCategory(currentCategory[0]?.cat_ID);

  if (currentCategory.length > 0) {
    return {
      props: { blogs, allCategories, categoryName },
    };
  } else {
    return { notFound: true };
  }
};

const Category = (props) => {
  const { blogs, setAllCategories, allCategories, categoryName } = props;
  const router = useRouter();

  const breakpointColumnsObj = {
    default: 3,
    1100: 3,
    768: 2,
    600: 1,
  };
  const imagePerRow = 6;
;
  const [next, setNext] = useState(9);
  const handleMoreImage = () => {
    setNext(next + imagePerRow);
  };

  //sets the categories for header
  useEffect(() => {
    setAllCategories(allCategories);
  }, [allCategories, setAllCategories]);

  //get current url for canonical tag and og:url
  const [location, setLocation] = useState('');
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setLocation(window.location.href);
    }
  }, [location]);

  //Handle filter function
  const handleFilterChange = (e) => {
    router.push(`/vault/research/category/${e.target.value?.toLowerCase()}`);
  };

  return (
    <>
      <Head>
        <link rel="apple-touch-icon" href="./images/favicon.png" />
        <title>Category: {categoryName}</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, user-scalable=no"
        />
        <meta
          name="keywords"
          content="Liquid Loans. 0% Interest Free Borrowing built for PulseChain. #neverselling "
        />
        <meta
          property="og:title"
          content={`Liquid Loans. Category: ${categoryName}`}
        />
        <meta
          name="description"
          content="✓ 0% Interest-Free ✓ Algorithmic Stablecoin ✓ Immutable ✓ Governance-Free ✓ No Admin Keys"
        />
        <meta
          name="google-site-verification"
          content="tFM5T7kMGqGaqNMe8Cs6EvJ8PZrT45_9bncFeILmOKA"
        />
        <link rel="canonical" content={location} />
        <meta name="robots" content="index, follow" />
        <meta name="revisit-after" content="3 days" />

        <meta property="og:url" content={location} />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="✓ 0% Interest-Free ✓ Algorithmic Stablecoin ✓ Immutable ✓ Governance-Free ✓ No Admin Keys"
        />
        <meta
          property="og:image"
          content=" https://liquidloans.io/images/liquidloans.jpg"
        />
        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:title"
          content={`Liquid Loans. Category: ${categoryName}`}
        />
        <meta name="twitter:url" content={location} />
        <meta
          name="twitter:description"
          content="✓ 0% Interest-Free ✓ Algorithmic Stablecoin ✓ Immutable ✓ Governance-Free ✓ No Admin Keys"
        />
        <meta
          name="twitter:image"
          content="https://liquidloans.io/images/liquidloans.jpg"
        />
      </Head>
      <HomeBG>
        <Gs.BContainer>
          <Section1>
            {/* <Fade cascade bottom delay={300} duration={1600}> */}

            <MainHeadBX>
              <HeadSbx>
                <span>Category</span>
                <h4>{categoryName}</h4>
              </HeadSbx>
            </MainHeadBX>

            <BTitle01>
              <BSubbox01> </BSubbox01>
              <BSubbox02>
                <div className="CateBX">
                  <select
                    name="select"
                    id="select"
                    onChange={handleFilterChange}
                  >
                    {allCategories?.map((item, index) => {
                      return (
                        <option
                          value={item.slug}
                          key={index}
                          selected={
                            categoryName === item.cat_name ? 'selected' : ''
                          }
                        >
                          {item.name}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </BSubbox02>
            </BTitle01>

            <BodyContent>
              <Masonry
                breakpointCols={breakpointColumnsObj}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column"
              >
                {blogs?.slice(0, next)?.map((blog, index) => {
                  return (
                    <div className="postMbx" key={index}>
                      <Link
                        href={`/vault/research/${blog.category[0].slug}/${blog.slug}`}
                      >
                        <Card
                          key={index}
                          title={blog.post_title}
                          content={blog.descrption}
                          readingTime={blog.reading_time}
                          categories={blog.category}
                          author={blog.author}
                          bannerImage={blog.banner_img_url}
                        />
                      </Link>
                    </div>
                  );
                })}
              </Masonry>

              <ButtonBar01>
                {next < blogs?.length ? (
                  <button
                    onClick={handleMoreImage}
                    type="button"
                    className="btn01"
                  >
                    Load More +
                  </button>
                ) : blogs.length > 0 ? (
                  <h1>You have caught up with all the articles </h1>
                ) : (
                  <h1>Oops no articles found</h1>
                )}
              </ButtonBar01>

              <BottomMBX>
                <BtmSbx01>
                  <BtmSSubbx>
                    <div className="ssbxtitle01">
                      How It Works
                      <span>
                        Liquid Loans is the first truly decentralized lending
                        protocol built specifically for PulseChain.
                      </span>
                      <button
                        onClick={() =>
                          window.open('https://www.liquidloans.io/', '_blank')
                        }
                      >
                        LEARN MORE{' '}
                      </button>
                    </div>
                  </BtmSSubbx>
                </BtmSbx01>

                <BtmSbx02>
                  <button
                    className="BTMSbox01 firstChild"
                    onClick={() =>
                      window.open(
                        'https://www.youtube.com/c/LiquidLoans/videos',
                        '_blank'
                      )
                    }
                  >
                    <Image src={BTMBXico02} alt="Videos" />
                    Videos
                  </button>
                  <button
                    className="BTMSbox01 "
                    onClick={() =>
                      window.open(
                        'https://open.spotify.com/show/3HdzYPpRFGJJXuXql2LLyA',
                        '_blank'
                      )
                    }
                  >
                    <Image src={BTMBXico01} alt="FAQs" /> Podcasts
                  </button>
                </BtmSbx02>
              </BottomMBX>
            </BodyContent>

            {/* </Fade> */}
          </Section1>
        </Gs.BContainer>
      </HomeBG>
    </>
  );
};

const FlexDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;
const HomeBG = styled.div`
  background-image: url('${(props) => props.theme.ReserBG01}');
  background-repeat: no-repeat;
  background-position: top center;
`;
const Section1 = styled.div`
  padding: 160px 0px 105px;
  ${Media.sm} {
    padding: 110px 0px 60px;
  }
`;
const MainHeadBX = styled(FlexDiv)`
  width: 100%;
  background: ${(props) => props.theme.BHbxColor};
  padding: 30px;
  -webkit-box-shadow: 0 0 15px 1px ${(props) => props.theme.HeroboxShadow};
  box-shadow: 0 0 15px 1px ${(props) => props.theme.HeroboxShadow};
  border-radius: 30px;
  align-items: center;
  position: relative;
  margin-bottom: 40px;
  min-height: 176px;
  &:after {
    content: '';
    border: none;
    position: absolute;
    top: calc(100% - -2px);
    left: 0;
    right: 0;
    height: 100px;
    display: block;
    background: url(${ShadowBX.src}) center bottom no-repeat;
    background-size: 100%;
    mix-blend-mode: multiply;
  }

  ${Media.md2} {
    &:after {
      top: calc(100% - 27px);
    }
  }
  ${Media.xs} {
    padding: 15px;

    &:after {
      top: calc(100% - 67px);
    }
  }
`;

const HeadSbx = styled(FlexDiv)`
  width: 100%;
  flex-direction: column;
  padding: 0 20px;
  color: ${(props) => props.theme.TextWhite};

  span {
    font-size: 18px;
    color: ${(props) => props.theme.TextWhite02};
    text-transform: uppercase;
    margin-bottom: 8px;
  }

  h4 {
    font-size: 28px;
    color: ${(props) => props.theme.TextWhite};
    font-weight: 600;
  }
`;

const BodyContent = styled.div`
  width: 100%;
  padding: 0 15px;
  margin: 50px 0 0 0;
  .my-masonry-grid {
    display: -webkit-box; /* Not needed if autoprefixing */
    display: -ms-flexbox; /* Not needed if autoprefixing */
    display: flex;
    margin-left: -40px; /* gutter size offset */
    width: auto;
  }
  .my-masonry-grid_column {
    padding-left: 40px; /* gutter size */
    background-clip: padding-box;
  }
  /* Style your items */
  .my-masonry-grid_column > .postMbx {
    background: ${(props) => props.theme.BHbxColor};
    -webkit-box-shadow: 0 0 15px 1px ${(props) => props.theme.HeroboxShadow};
    box-shadow: 0 0 15px 1px ${(props) => props.theme.HeroboxShadow};
    margin-bottom: 40px;
    padding: 10px;
    border-radius: 20px;
    transition: all 400ms ease-in-out;
    transform: translateY(0);
    :hover {
      -webkit-box-shadow: 0 10px 15px 1px
        ${(props) => props.theme.HeroboxShadow};
      box-shadow: 0 10px 15px 1px ${(props) => props.theme.HeroboxShadow};
      transform: translateY(-3px);
      cursor: pointer;
    }
  }
  .BimgBX01 {
    width: 100%;
    height: 204px;
    overflow: hidden;
    border-radius: 20px;
    margin: 0 0 16px 0;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    &.v2 {
      height: 244px;
    }
  }
  .blogPostTitle01 {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 15px;
    color: #a7a7a7;
    padding: 0 12px;
    margin-bottom: 28px;
    .readingTime {
      color: #656565;
    }
  }
  .blogPostTitle02 {
    font-size: 21px;
    color: ${(props) => props.theme.TextWhite};
    line-height: 26px;
    font-weight: 600;
    padding: 0 12px;
    margin-bottom: 20px;
  }
  .blogPostText01 {
    padding: 0 12px;
    font-size: 16px;
    line-height: 24px;
    color: ${(props) => props.theme.TextWhite02};
    margin-bottom: 36px;
  }
`;

const ButtonBar01 = styled(FlexDiv)`
  width: 100%;
  margin: 35px 0 100px 0;
  color: ${(props) => props.theme.TextWhite02};
  .btn01 {
    font-size: 18px;
    font-weight: 400;
    line-height: 28px;
    color: ${(props) => props.theme.TextWhite};
    border: 1px solid ${(props) => props.theme.TransBorder};
    border-radius: 30px;
    background-color: ${(props) => props.theme.TransBg};
    padding: 8px 10px;
    width: 100%;
    max-width: 370px;
    :hover {
      filter: brightness(0.7);
    }
  }
`;
const BottomMBX = styled(FlexDiv)`
  width: 100%;
`;
const BtmSbx01 = styled(FlexDiv)`
  width: 55%;
  min-height: 340px;
  background: url('${(props) => props.theme.HIWBG}') 50% 50% no-repeat
    ${(props) => props.theme.BHbxColor};

  background-size: cover;
  padding: 15px;
  align-items: stretch;
  justify-content: stretch;

  ${Media.md2} {
    width: 100%;
    min-height: 280px;
  }

  ${Media.xs} {
    background-size: 200%;
    background-position: 0 0;
  }
`;

const BtmSSubbx = styled(FlexDiv)`
  width: 100%;
  border: 1px solid ${(props) => props.theme.TransBorder};
  justify-content: flex-start;
  padding: 0 0 0 26px;
  .ssbxtitle01 {
    color: ${(props) => props.theme.TextWhite};
    font-size: 32px;
    font-weight: 600;
    display: flex;
    flex-direction: column;
    span {
      font-size: 16px;
      color: ${(props) => props.theme.TextWhite02};
      font-weight: 400;
      max-width: 230px;
      margin: 15px 0;
    }
    button {
      font-size: 19px;
      line-height: 19px;
      padding: 14px 14px;
      border-radius: 30px;
      color: #fff;
      background: linear-gradient(
        90deg,
        ${(props) => props.theme.GColor1},
        ${(props) => props.theme.GColor2}
      );
      max-width: 160px;
      &:hover {
        opacity: 0.9;
      }
    }
  }
`;
const BtmSbx02 = styled(FlexDiv)`
  width: 45%;
  min-height: 340px;
  padding-left: 38px;

  .BTMSbox01 {
    width: 100%;
    background-color: ${(props) => props.theme.BHbxColor02};
    height: 158px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    color: ${(props) => props.theme.TextWhite};
    font-size: 32px;
    font-weight: 600;

    img {
      margin: 12px 20px 0 25px;
    }
    :hover {
      opacity: 0.8;
    }
    &.firstChild {
      margin-bottom: 25px;
    }
  }

  ${Media.md2} {
    width: 100%;
    min-height: auto;
    padding: 15px 0 0 0;
    .BTMSbox01 {
      width: 48%;
      &.firstChild {
        margin-bottom: 0;
        margin-right: 4%;
      }
    }
  }

  ${Media.sm} {
    .BTMSbox01 img {
      max-width: 60px;
    }
    .BTMSbox01 {
      font-size: 26px;
    }
  }
  ${Media.xs} {
    .BTMSbox01 {
      font-size: 20px;
      width: 100%;
      height: 100px;
      &.firstChild {
        margin-bottom: 8px;
        margin-right: 0;
      }
    }
  }
`;

const BTitle01 = styled(FlexDiv)`
  width: 100%;
  justify-content: space-between;
  padding: 10px 20px;
  font-size: 40px;
  font-weight: 600;
  color: ${(props) => props.theme.TextWhite};

  ${Media.xs} {
    width: 100%;
    justify-content: center;
  }
`;
const BSubbox01 = styled(FlexDiv)`
  letter-spacing: -1px;
`;
const BSubbox02 = styled(FlexDiv)`
  position: relative;

  .CateBX {
    width: 196px;
    overflow: hidden;
    border: 1px solid ${(props) => props.theme.InputBXBrdr};
    border-radius: 12px;
    height: 44px;
    display: block;
    background-color: ${(props) => props.theme.InputBXColor};
    position: relative;
    margin: 0 20px 0 0;
    select {
      font-size: 16px;
      font-weight: 600;
      height: 44px;
      background-color: transparent;
      border: none;
      color: ${(props) => props.theme.TextWhite};
      width: 110%;
      float: left;
      padding: 0 0 0 10px;

      option {
        color: #000 !important;
      }
    }
    &:after {
      content: '';
      border-width: 5px;
      border-style: solid;
      border-color: ${(props) => props.theme.TextWhite} transparent transparent
        transparent;
      position: absolute;
      right: 12px;
      top: 19px;
    }
  }

  ${Media.xs} {
    width: 100%;
    justify-content: center;
    margin-top: 15px;

    .searchInputBX.active {
      width: calc(100vw - 80px) !important;
    }
  }
`;

export default Category;

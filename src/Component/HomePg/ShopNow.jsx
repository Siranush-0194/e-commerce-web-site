
import styled from "styled-components";
import { Link } from "react-router-dom";



const Hero = styled.div`
min-height: calc(100vh - 60px);
display: flex;
background: ("images/hero-bcg.jpeg") center/cover no-repeat;
align-items: center;
justify-content: center;
`;

const Banner = styled.div`
text-align: center;
background: yellow-green;
display: inline-block;
padding: 2rem;
`;

const BannerTitle=styled.div`
font-size: 3.4rem;
text-transform: uppercase;
letter-spacing: var(--mainSpacing);
margin-bottom: 3rem;
`;

const BannerButton=styled.div`
padding: 1rem 3rem;
text-transform: uppercase;
letter-spacing: var(--mainSpacing);
font-size: 1rem;
background: Soft-orange;
color:black;
border: 1px solid Soft orange;
transition: var(--mainTransition);
cursor: pointer;
`;

const ShopNow = () => {
    return (
        <Hero>
            <Banner>
                <BannerTitle> Furniture Collection </BannerTitle>
          <Link to='/product'>
            <BannerButton>Shop Now</BannerButton>
            </Link>
            </Banner>        
        </Hero>
    );
};






export default ShopNow;
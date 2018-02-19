import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import img from '../../assets/duck.jpg'

const StyledProfileCard = styled.div`
  background-color: #fff;
  box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.2);
  /* margin: auto; */
  text-align: center;
  margin-bottom: 20px;
`

const StyledImgContainer = styled.div`
  height: 150px;
  padding-top: 30px;

  & img {
    width: 120px;
    height: 120px;
    padding: 2px;
    border: 1px solid #eee;
  }
`

const StyledName = styled.div`
  color: #333;
  font-weight: 600;
  font-size: 1.3rem;
  line-height: 2;
`

const StyledDescription = styled.div`
  font-size: 1.083rem;
  color: #999;
  padding: 0 2.8rem;
  line-height: 1.8;
  margin-bottom: 20px;
`

const StyledInfoContainer = styled.div`
  box-sizing: content-box;
  width: 200px;
  margin: 0 auto;
  margin-bottom: 20px;
`

const StyledInfo = styled.div`
  display: inline-block;
  padding: 0 10px;
  line-height: 1.4;
  font-size: 1.167rem;

  border-left: 1px solid #eee;
  &:first-child {
    border: none;
  }

  & a span:first-child {
    color: #000;
    display: block;
    font-weight: 900;
    font-size: 1.3rem;
  }

  & a span:last-child {
    display: block;
    font-weight: 400;
    font-size: 1.2rem;
    color: #999;
  }
`

const StyledSocialMedia = styled.div`
  padding-bottom: 15px;

  & a {
    display: inline-block;
    padding-right: 7px;
    font-size: 1.533rem;
    color: #555;
  }

  & a:hover {
    opacity: 0.6;
  }
`

const SocialMedia = () => (
  <StyledSocialMedia>
    <a href="https://github.com/zaleGZL">
      <i className="fab fa-github" />
    </a>
    <a href="https://weibo.com/5723678128/profile">
      <i className="fab fa-weibo" />
    </a>
    <a href="https://www.linkedin.com/in/%E6%B3%BD%E5%87%8C-%E9%83%AD-8776a913b/">
      <i className="fab fa-linkedin-in" />
    </a>
  </StyledSocialMedia>
)

const Info = () => (
  <StyledInfoContainer>
    <StyledInfo>
      <Link to="/">
        <span>1</span>
        <span>日志</span>
      </Link>
    </StyledInfo>
    <StyledInfo>
      <Link to="/categories">
        <span>23</span>
        <span>分类</span>
      </Link>
    </StyledInfo>
    <StyledInfo>
      <Link to="/tags">
        <span>456</span>
        <span>标签</span>
      </Link>
    </StyledInfo>
  </StyledInfoContainer>
)

const ProfileCard = () => (
  <StyledProfileCard>
    <StyledImgContainer>
      <img src={img} />
    </StyledImgContainer>
    <StyledName>ZALE</StyledName>
    <StyledDescription>Keep growing, fuck everything else.</StyledDescription>
    <Info />
    <SocialMedia />
  </StyledProfileCard>
)

export default ProfileCard

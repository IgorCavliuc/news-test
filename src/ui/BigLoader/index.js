import React from "react";
import styled, { keyframes } from "styled-components";

const spinAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const BigLoaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > .news-test__loader {
    animation: ${spinAnimation} 2s linear infinite;
  }

  & > p {
    width: 93px;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    text-align: center;
    color: rgba(55, 73, 87, 0.8);
    margin-top: 15px;
  }

  &.theme-blue > .news-test__loader {
    box-sizing: border-box;
    border: 3px solid #f3f3f3;
    border-radius: 50%;
    border-top: 3px solid #3498db;
    border-right: 3px solid #3498db;
    width: 69px;
    height: 69px;
    animation: ${spinAnimation} 2s linear infinite;
  }

  &.theme-green > .news-test__loader {
    box-sizing: border-box;
    border: 2px solid rgb(15, 23, 42);
    border-radius: 50%;
    border-top: 2px solid transparent;
    width: 100px;
    height: 100px;
    animation: ${spinAnimation} 1s linear infinite;
  }
`;

const BigLoader = ({ theme = "green", children }) => {
    return (
        <BigLoaderWrapper className={`news-test theme-${theme}`}>
            <div className="news-test__loader"></div>
            {children && <p>{children}</p>}
        </BigLoaderWrapper>
    );
};

export default BigLoader;

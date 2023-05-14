import styled from "styled-components";

export const Box = styled.div`
  margin: ${(props) => props.m};
  margin-top: ${(props) => props.mt || props.my};
  margin-bottom: ${(props) => props.mb || props.my};
  margin-left: ${(props) => props.ml || props.mx};
  margin-right: ${(props) => props.mr || props.mx};
  padding: ${(props) => props.p};
  padding-top: ${(props) => props.pt || props.py};
  padding-bottom: ${(props) => props.pb || props.py};
  padding-left: ${(props) => props.pl || props.px};
  padding-right: ${(props) => props.pr || props.px};
`;

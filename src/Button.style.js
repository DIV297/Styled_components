import styled from "styled-components";
import { keyframes } from "styled-components"
const rotate =keyframes `
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;
export const Button1 = styled.button `
&.${props=>props.className}:hover{
  padding :0.5em 2em;
  margin-right:10em;
  animation :${rotate} 2s linear infinite;
}
  animation :${rotate} .5s linear 1;
  background:white;
  color:palevioletred;
  font-size: 1em;
  margin-right: 12em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  float:center;
`;
export const Wrapper = styled.section `
  padding: 4vh 4vw;
  background:${props=>props.color} ;
`;
export const Input = styled.input.attrs(props => ({
  // we can define static props
  type: "text",

  // or we can define dynamic ones
  size: props.size || "1em",
}))`
  
  color: palevioletred;
  font-size: 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  display :block;
  width:80%;
  /* here we use the dynamically computed prop */
  margin: ${props => props.size};
  padding: ${props => props.size};
`;

  



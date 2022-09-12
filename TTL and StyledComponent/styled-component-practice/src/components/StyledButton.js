import React from 'react'
import styled from 'styled-components'

export const StyledButton = styled.button`
    font: inherit;
    cursor: pointer;
    border: 1px solid blue;
    background: ${(props)=>props.bg};
    color: white;
    padding: 0.5rem 2rem;

    :focus {
        outline: none;
    }
    :hover, :active {
        background: lightblue;
        color: blue;
        border-color: lightblue;
    }
`

export const FancyButton = styled(StyledButton)`
    background-image: linear-gradient(to right, #f6d365 0%, #fda085 100%);
    border: none;
    &:hover {
        color: red;
    }
`
export const SubmitButton = styled(StyledButton).attrs( (props)=> ({
    type: props.submit ? 'submit' : 'button',
}))`
  background-color: yellow;
`;

export const DarkButton = styled(StyledButton)`
border: 2px solid ${props => props.theme.dark.primary};
background-color: ${props => props.theme.dark.primary};
color: ${props => props.theme.dark.text};
` 
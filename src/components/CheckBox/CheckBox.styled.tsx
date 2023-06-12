import styled from 'styled-components'

export const CheckBoxLabelContainer = styled.label`
  position: relative;
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem;
  font-size: 1.1rem;
  color: var(--Midnight);
  font-weight: 600;
  cursor: pointer;
  text-transform: capitalize;
  flex-shrink: 0 !important;
  input {
    position: absolute;
    opacity: 0;
    width: 0;
    height: 0;
  }
  > span {
    flex-shrink: 0;
    width: 1.8rem;
    height: 1.8rem;
    position: relative;
    background-color: #e7e8e9;
    border-radius: 0.3rem;
    transition: 0.2s linear;
  }
  @media (hover: hover) {
    &:hover {
      > span {
        background-color: #d5d8f7;
      }
    }
  }
  > span:active,
  &:active {
    > span {
      transform: scale(0.8);
    }
  }
  input:checked ~ span {
    background-color: var(--Violet);
    border-radius: 0.3rem;
    &::after {
      content: '';
      display: block;
      width: 1.2rem;
      height: 0.6rem;
      border-left: 0.2rem solid var(--White);
      border-bottom: 0.2rem solid var(--White);
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -80%) rotate(-45deg);
    }
  }
`

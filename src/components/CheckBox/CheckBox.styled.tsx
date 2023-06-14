import styled from 'styled-components'

export interface ICheckBoxLabel {
  hideOnMobile: boolean
}

export const CheckBoxLabelContainer = styled.label<ICheckBoxLabel>`
  position: relative;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: var(--padding-search-bar-items);
  font-size: var(--font-size-body);
  color: var(--color-text);
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
    width: 2.4rem;
    height: 2.4rem;
    position: relative;
    background-color: var(--color-checkbox);
    border-radius: var(--border-radius-xxs);
    transition: 0.2s linear;
  }
  > span:active,
  &:active {
    > span {
      transform: scale(0.8);
    }
  }
  input:checked ~ span {
    background-color: var(--color-violet);
    border-radius: var(--border-radius-xxs);
    &::after {
      content: '';
      display: block;
      width: 1.2rem;
      height: 0.6rem;
      border-left: 0.2rem solid var(--color-white);
      border-bottom: 0.2rem solid var(--color-white);
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -80%) rotate(-45deg);
    }
  }

  @media (hover: hover) {
    &:hover {
      > span {
        background-color: #d5d8f7;
      }
    }
  }
  @media (max-width: 48.12em) {
    display: ${(props) => (props.hideOnMobile ? 'none' : 'flex')};
  }
`

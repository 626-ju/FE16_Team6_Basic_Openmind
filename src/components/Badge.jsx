import styled from 'styled-components';

function Badge({ variant, children }) {
  return <StyledBadge variant={variant}>{children}</StyledBadge>;
}

export default Badge;

const StyledBadge = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'variant',
})`
  width: fit-content;
  padding: 4px 12px;
  border-radius: 8px;
  font-size: 14px;

  ${(props) =>
    props.variant === 'notAnswered' &&
    `border: 1px solid ${props.theme.color.gray40};
    color: ${props.theme.color.gray40};
  `}

  ${(props) =>
    props.variant === 'answered' &&
    `border: 1px solid ${props.theme.color.brown40};
    color: ${props.theme.color.brown40};
  `}
`;

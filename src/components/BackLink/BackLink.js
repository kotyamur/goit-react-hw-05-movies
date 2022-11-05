import PropTypes from 'prop-types';
import { BsArrowLeftSquareFill } from 'react-icons/bs';
import { StyledLink } from './BackLink.styled';

export const BackLink = ({ to, children }) => {
  return (
    <StyledLink to={to}>
      <BsArrowLeftSquareFill size="24" />
      {children}
    </StyledLink>
  );
};

BackLink.propTypes = {
  to: PropTypes.object.isRequired,
};

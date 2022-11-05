import { Link } from 'react-router-dom';
import { Layout, InfoTitle, InfoList } from './NavToAdditionalInfo.styled';

export const NavToAdditionalInfo = () => {
  return (
    <Layout>
      <InfoTitle>Additional information</InfoTitle>
      <InfoList>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </InfoList>
    </Layout>
  );
};

import PropTypes from 'prop-types';
import { useState } from 'react';
import { Layout, FormInput, FormButton } from './SearchForm.styled';

export const SearchForm = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleChange = e => {
    setQuery(e.currentTarget.value);
  };

  const handleInputSubmit = e => {
    e.preventDefault();
    onSubmit(query.trim());
  };

  return (
    <Layout onSubmit={handleInputSubmit}>
      <FormInput
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
        value={query}
        onChange={handleChange}
      />
      <FormButton type="submit">Search</FormButton>
    </Layout>
  );
};

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { withRouter } from 'react-router-dom';
import Swal from 'sweetalert2';

function HeaderForm({ onUpdateQuery, history }) {
  const [query, setQuery] = useState('');

  const handleSubmit = evt => {
    evt.preventDefault();
    if (query.length > 0) {
      onUpdateQuery(query);
      history.push({
        pathname: '/plp',
        query,
      });
    } else {
      Swal.fire({
        title: 'Error!',
        text: 'El campo de búsqueda no debe estar vacío',
        icon: 'error',
        confirmButtonText: 'OK',
      });
    }
  };

  return (
    <div className="header__form" data-test="component-form-header">
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Buscar productos, marcas y más..."
          onChange={e => setQuery(e.target.value)}
          value={query}
          data-test="input-box"
        />
        <button className="button__transparent">
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </form>
    </div>
  );
}

HeaderForm.propTypes = {
  onUpdateQuery: PropTypes.func,
};
export default withRouter(HeaderForm);

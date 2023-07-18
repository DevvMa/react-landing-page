import React from 'react';
import PropTypes from 'prop-types';

const WorkItems = ({item}) => {
    const {id, image, title, link} = item;
  return (
    <div className="work__card" key={id}>
        <img src={image} alt="" className="work__img"/>
        <h3 className="work__title">{title}</h3>
        <a href={link} rel="noopener noreferrer" target="_blank" className="work__button">
            Demo <i className="bx bx-right-arrow-alt work__button-icon"></i>
        </a>
    </div>
  )
}

WorkItems.propTypes = {
    item:PropTypes.object.isRequired
}

export default WorkItems
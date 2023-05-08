import React from "react";
import PropTypes from 'prop-types';
import {Section,ButtonStyle} from './Section.styled'
export const Button = ({ options, onReview })=>{
 return(
    <Section >
  {options.map(btn => (
            <ButtonStyle value={btn} key={btn} type="button" onClick={onReview}>
              {btn}
            </ButtonStyle>
          ))}
</Section>
 )
}
Section.propTypes={
  value:PropTypes.string,
  onReview:PropTypes.func,
}
// onClick={onShow}
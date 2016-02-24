import React from 'react';
import { pure } from 'recompose';

const StoryAddForm = ({onAddStory}) => {

  let titleInputField, descriptionInputField;

  return (
    <div className='pure-form'>

      <fieldset className='pure-group'>
        <input type='text' className='pure-input-1'
               placeholder='Story title'
               ref={ref => titleInputField = ref}/>

        <textarea className='pure-input-1'
                  placeholder='Description / URL / etc.'
                  ref={ref => descriptionInputField = ref}/>
      </fieldset>

      <button type='button' className='pure-button pure-input-1 pure-button-primary'
              onClick={triggerAddAndClearForm}>Add Story
      </button>

    </div>
  );


  function triggerAddAndClearForm() {
    onAddStory(titleInputField.value, descriptionInputField.value);
    titleInputField.value = '';
    descriptionInputField.value = '';
  }

};

export default pure(StoryAddForm);
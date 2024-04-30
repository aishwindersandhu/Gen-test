/*
* Numeric Input Component
*   HTML (initial state): <input type="text" class="c-numeric-input" />
*   Requirement:
*   - should only accept numeric value only such as: 1, 1.2, -5, or 1000
*   - if user enters leading zero, or .  when user moves focus away from the input, it should
*     change to correct format:
*       .1 ==> 0.1 and 01 => 1
*   - if user enter invalid character/value, HTML should change to this
*       <input type="text" class="c-numeric-input c-numeric-input--error" />
*       <span class="c-numeric-input__error-msg">invalid input</span>
*   - if user enter valid value and move focus away from the input HTML should change to this:
*       <input type="text" class="c-numeric-input c-numeric-input--valid" />
*   - if user focus on the input or user clear value from the input,
*     HTML should return to initial stage
*
* Lastly, please add some css for c-numeric-input--error and c-numeric-input--valid to show
* red or green border to the input

* */
const checkInputData = function () {
  //check if data is alphabet or number
  const isAplhabet = isNaN(this.value);
  const inputTextBox = document.getElementById('input-text-box');
  const errorDiv = document.getElementById('error-span');
  if (isAplhabet) {
    //add class for error
    errorDiv.classList.add('error-text');
    errorDiv.innerText = 'Invalid input. Enter a number';
    inputTextBox.classList.add('c-numeric-input--error');

  }
  else {
    errorDiv.innerText = '';
    let value;
    //parse data as per value
    if (this.value > 1) {
      value = parseInt(this.value, 10);
    }
    else {
      value = parseFloat(this.value, 10);
    }
    this.value = value;
    inputTextBox.classList.add('c-numeric-input--valid');
  }
}
const NumericInput = {
  init: () => {
    const inputElement = document.getElementById('input-text-box');
    inputElement.addEventListener('change', checkInputData);

    document.querySelectorAll('.c-numeric-input').forEach(elem => {
      console.log('TODO: Please see the above requirement for numeric input');
    });
  }
};
document.addEventListener('DOMContentLoaded', NumericInput.init);

# jsCalculator
### This is a repository to showcase a calculator build in html, CSS and JavaScript. Following is the calculator design and it's algorithm.
## **Design**
![Calculator Design](https://github.com/adhilbathali/jsCalculator/main/media/jsCalculator.png)
## **Algorithm**
1. start.
2. if any key is clicked, go to step 3 else go to step 5.
3. if the key is 'AC',
    - clear operator and operands to default values.
    - clear every other necessary variables to default values.
   else if it's '%',
    - take the screen number, display it after dividing by 100.
   else if it's a number,
    - concatenate and display it infront of the screen value.
   else if it's an operator or '=',
    - store the screen number to var 'firstOperand' if firstOperand is undefined, else store the screen number to var 'secondOperand'.
    - if secondOperand is not undefined,
       - operate 'firstOperand operator secondOperand' and store it to firstOperand.
    - display firstOperand
    - overwrite the var 'operator' with the new operator.
    - if it's '=', set every necessary variables to it's default vaules.
4. go to step 2.
5. stop.



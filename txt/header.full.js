/***** Begin underscore.format 1.0.0 - MIT License ************************************

Copyright (c) 2009 - Michael J. Ryan (http://tracker1.info)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

===============================================================================
Thanks for the inspiration - http://blairmitchelmore.com/javascript/string.format

//inline arguments
_.format(
  "some string with {0} and {1} injected using argument {{number}}", 
  'first value', 
  'second value'
);
returns: 'some string with first value and second value injected argument {number}'

//single array
_.format(
  "some string with {0} and {1} injected using array {{number}}", 
  [ 'first value', 'second value' ]
);
returns: 'some string with first value and second value injected using array {number}'

//single object
_.format(
  "some string with {first} and {second} value injected using {{propertyName}}",
  {
    first:'first value',
    second:'second value'
  }
);
returns: 'some string with first value and second value injected using {propertyName}'

-------------------------------------------------------------------------------

You can add custom formatters via the exposed format.formatters array...

_.format.formatters.push({
  type: Date
  ,format: function(input, formatString) {
    //do something to format the input based on the formatString
    return formattedInput;
  }
});

_.format.formatters.push({
  type: 'number'
  ,format: function(input, formatString) { ... }
});

_format("test date: {0:yyyy-MM-dd}", new Date()); //use the formatter above

******************************************************************************/
# dalviroo
## Demo
<p>Display for kitchen<br>http://dalviroo.herokuapp.com/index.html</p>

<p>Submission form to post new orders, set predicted value, add new dish<br>http://dalviroo.herokuapp.com/submit.html</p>

<p>Report<br> http://dalviroo.herokuapp.com/api/report</p>

## Dependencies
Node.JS, Socket.io, Knockout.JS

## Requirements
<ol>
  <li>Api to place an order with quantity.
    <ol>
      <li>path: http://dalviroo.herokuapp.com/api/new-order</li>
      <li>method: post, fields: {dishId, quantity}</li>
    </ol>
  </li>
  <li>Api to set predicted value for a dish
   <ol>
      <li>path: http://dalviroo.herokuapp.com/api/set-predicted</li>
      <li>method: post, fields: {dishId, prediction}</li>
    </ol>
  </li>
  <li>Api to get report
    <ol>
      <li>path: http://dalviroo.herokuapp.com/api/report</li>
      <li>method: get</li>
    </ol>
  </li>
  <li>Html page to be displayed on Kitchen screen that is always in sync with server
    <ol>
      <li>path: http://dalviroo.herokuapp.com/index.html</li>
    </ol>
  </li>
</ol>

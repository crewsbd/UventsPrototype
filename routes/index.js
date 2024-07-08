const router = require('express').Router();

const consumerUserRouter = require('./consumer-user');
const paymentRouter = require('./payment');

router.get('/', (request, response) => {
    response.send(
        `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Payment Form</title>
</head>
<body>

  <h2>Payment Form</h2>

  <form id="paymentForm">
    <label for="amount">Amount:</label><br>
    <input type="text" id="amount" name="amount" required><br><br>

    <label for="currency">Currency:</label><br>
    <select id="currency" name="currency" required>
      <option value="USD">USD</option>
      <option value="EUR">EUR</option>
      <option value="GBP">GBP</option>
    </select><br><br>

    <button type="button" onclick="submitForm()">Submit</button>
  </form>

  <script>
    function submitForm() {
      const formData = {
        amount: document.getElementById('amount').value,
        currency: document.getElementById('currency').value
      };

      fetch('http://localhost:3000/payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log('Success:', data);
        // Handle success, such as showing a success message to the user
        alert('Payment successfully submitted!');
      })
      .catch(error => {
        console.error('Error:', error);
        // Handle error, such as showing an error message to the user
        alert('Error submitting payment. Please try again later.');
      });
    }
  </script>

</body>
</html>
`
    );
});
router.use('/consumer-user', consumerUserRouter);
router.use('/payment', paymentRouter);

module.exports = router;

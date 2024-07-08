const paypal = require('paypal-rest-sdk');

const createPayment = async (request, response) => {
    const amount = request.body.amount;
    const currency = request.body.currency || 'USD';

    console.log('PAYMENT PROCESSING BEGUN');
    // Make a payment to send to paypal
    const payment_json = {
        intent: 'sale',
        payer: {
            payment_method: 'paypal',
        },
        redirect_urls: {
            return_url: 'http://localhost:3000/payment/paypal-success',
            cancel_url: 'http://localhost:3000/payment/paypal-cancel',
        },
        transactions: [
            {
                amount: {
                    total: amount,
                    currency: currency,
                },
            },
        ],
    };

    // Create the payment, send it to paypal, handle callback
    try {
        paypal.payment.create(payment_json, function (error, payment) {
            if (error) {
                throw error;
            } else {
                // Capture the approval URL from the response and redirect client to it
                // Success or Cancel. Both?
                for (let i = 0; i < payment.links.length; i++) {
                    if (payment.links[i].rel === 'approval_url') {
                        console.log(`Redirecting to ${payment.links[i].href}`);
                        response.redirect(payment.links[i].href);
                    }
                }
            }
        });
    } catch (error) {
        console.error(error);
        response.status(500).json({ ERROR: 'Internal Server Error' });
    }
};

const getPayment = async (request, response) => {};

const updatePayment = async (request, response) => {};

const deletePayment = async (request, response) => {};

const searchPayment = async (request, response) => {};

/**
 *
 * @param {import('express').Request} request
 * @param {import('express').Response} response
 */
const paypalSuccessRedirect = async (request, response) => {
    // Paypal sends these
    const payerId = request.query.PayerID;
    const paymentId = request.query.paymentId;

    const execute_payment_json = {
        payer_id: payerId,
    };

    // Execute the payment...client confirms payment, then server pulls trigger?
    paypal.payment.execute(
        paymentId,
        execute_payment_json,
        function (error, payment) {
            if (error) {
                console.error(error);
                response.status(500).json({
                    ERROR: `Payment failed: ${error.response.message}`,
                });
            } else {
                console.log('Payment executed successfully');
                response.json({ MESSAGE: 'Payment executed successfully' });
            }
        }
    );
};

/**
 *
 * @param {import('express').Request} request
 * @param {import('express').Response} response
 */
const paypalCancelRedirect = async (request, response) => {
    response.json({ MESSAGE: 'Payment cancelled' });
};

module.exports = {
    createPayment,
    getPayment,
    updatePayment,
    deletePayment,
    searchPayment,
    paypalCancelRedirect,
    paypalSuccessRedirect,
};

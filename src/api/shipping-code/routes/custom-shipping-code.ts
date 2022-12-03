export default {
    routes: [
        { // Path defined with an URL parameter
            method: 'POST',
            path: '/shipping-codes/updateStatus',
            handler: 'shipping-code.updateStatus',
        },
    ]
}

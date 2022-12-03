export default {
    routes: [
        { // Path defined with an URL parameter
            method: 'GET',
            path: '/bills/my',
            handler: 'bill.findMy',
        },
    ]
}

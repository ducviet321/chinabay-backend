/**
 * bill service
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreService('api::bill.bill', ({ strapi }) => ({

    // async exampleService(...args) {

    // }
}))

    // async createShippingCodes(shippingCodeArrayString: Array<string>) {
    //     // Find exist shipping codes & retrieve Ids
    //     const shippingCodeEntries: Array<any> = await strapi.entityService.findMany('api::shipping-code.shipping-code', {
    //         filters: {
    //             code: {
    //                 $in: shippingCodeArrayString,
    //             },
    //         },
    //     })

    //     const shippingCodeIds: Array<number> = shippingCodeEntries.map(item => item.id)
    //     const shippingCodeExisted: Array<string> = shippingCodeEntries.map(item => item.code)

    //     // Create new for non-existing shipping codes
    //     const shippingCodeToBeCreated = shippingCodeArrayString.filter((code) => !shippingCodeExisted.includes(code))

    //     for (const code of shippingCodeToBeCreated) {
    //         const entry = await strapi.entityService.create('api::shipping-code.shipping-code', {
    //             data: {
    //                 code: code,
    //             },
    //         })

    //         shippingCodeIds.push(entry.id)
    //     }

    //     return shippingCodeIds
    // })
// });

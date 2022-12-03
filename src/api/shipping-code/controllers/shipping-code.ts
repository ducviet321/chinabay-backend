/**
 * shipping-code controller
 */

import { factories } from '@strapi/strapi'
import { createShippingCodes } from '../../bill/controllers/bill';

export default factories.createCoreController('api::shipping-code.shipping-code', ({ strapi }) => ({
    async updateStatus(ctx) {
        const body = ctx.request.body as any
        const shippingCodeArrayString = body.data.shipping_codes as Array<string>
        const { shippingCodeIds, shippingCodeEntries } = await createShippingCodes(strapi, shippingCodeArrayString)
        const currentTime = new Date()
        for (const shippingCodeEntry of shippingCodeEntries) {

            if (!shippingCodeEntry.status) {
                shippingCodeEntry.status = []
            }

            shippingCodeEntry.status.push({
                time: currentTime,
                status: body.data.status
            })

            // console.log("shippingCodeEntry", shippingCodeEntry.id, shippingCodeEntry.status)

            strapi.entityService.update('api::shipping-code.shipping-code', shippingCodeEntry.id, {
                data: {
                    status: shippingCodeEntry.status,
                },
            })
        }


        // Calling the default core action
        return { data: { shipping_codes: shippingCodeIds } };
    },
}));

/**
 * bill controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::bill.bill', ({ strapi }) => ({
    // async find(ctx) {
    //     const user = ctx.state.user;

    //     // @ts-nocheck
    //     ctx.query.filters = {
    //         customer: {
    //             id: user.id
    //         }
    //     }

    //     console.log(ctx.query.filters)

    //     // Calling the default core action
    //     const { data, meta } = await super.find(ctx);

    //     return { data, meta };
    // },

    async findMy(ctx) {
        const user = ctx.state.user;

        // TODO Filtering only this user is not working
        ctx.query = { ...ctx.query, created_by_id: user.id }

        console.log(ctx.query)

        // Calling the default core action
        const { data, meta } = await super.find(ctx);

        return { data, meta };
    },

    async create(ctx) {
        // Convert shippingCodeArrayString to shippingCode Ids
        const body = ctx.request.body as any
        const shippingCodeArrayString = body.data.shipping_codes as Array<string>
        const {shippingCodeIds, shippingCodeEntries} = await createShippingCodes(strapi, shippingCodeArrayString)
        body.data.shipping_codes = shippingCodeIds
        const response = await super.create(ctx);
        return response;
    },

    async update(ctx) {
        // Convert shippingCodeArrayString to shippingCode Ids
        const body = ctx.request.body as any
        const shippingCodeArrayString = body.data.shipping_codes as Array<string>
        const {shippingCodeIds, shippingCodeEntries} = await createShippingCodes(strapi, shippingCodeArrayString)
        body.data.shipping_codes = shippingCodeIds
        const response = await super.update(ctx);
        return response;
    },
}));

export async function createShippingCodes(strapi, shippingCodeArrayString: Array<string>) {
    // Find exist shipping codes & retrieve Ids
    const shippingCodeEntries: Array<any> = await strapi.entityService.findMany('api::shipping-code.shipping-code', {
        filters: {
            code: {
                $in: shippingCodeArrayString,
            },
        },
    })

    const shippingCodeIds: Array<number> = shippingCodeEntries.map(item => item.id)
    const shippingCodeExisted: Array<string> = shippingCodeEntries.map(item => item.code)

    // Create new for non-existing shipping codes
    const shippingCodeToBeCreated = shippingCodeArrayString.filter((code) => !shippingCodeExisted.includes(code))

    for (const code of shippingCodeToBeCreated) {
        const entry = await strapi.entityService.create('api::shipping-code.shipping-code', {
            data: {
                code: code,
            },
        })

        shippingCodeIds.push(entry.id)
        shippingCodeEntries.push(entry)
    }

    return {shippingCodeIds, shippingCodeEntries}
}

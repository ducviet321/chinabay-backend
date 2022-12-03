export default ({ env }) => ({
    'field-uuid': {
        // my-plugin is going to be the internal name used for this plugin
        enabled: true,
        resolve: './src/plugins/strapi-plugin-field-uuid',
        config: {
            // user plugin config goes here
        },
    },
});
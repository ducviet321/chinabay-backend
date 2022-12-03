'use strict';

import {
  winston,
  formats,
} from '@strapi/logger';

console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAA")

export default {
  transports: [
    new winston.transports.Console({
      level: 'debug',
      format: winston.format.combine(
        formats.prettyPrint({ timestamps: 'YYYY-MM-DD hh:mm:ss.SSS' })
      ),
    }),
  ],
};
'use strict';
const { sanitizeEntity } = require('strapi-utils');

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  find: async (ctx) => {
    const populate = []

    const entities = await strapi.services['categories'].find(ctx.query, populate)

    return entities.map(entity => (sanitizeEntity(entity, { model: strapi.models['categories'] })))
  }
};

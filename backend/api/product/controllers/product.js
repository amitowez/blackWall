'use strict';
const { sanitizeEntity } = require('strapi-utils');

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  async findByCategory (ctx) {
    const { categoryId } = ctx.params

    const entities = await strapi.services['product'].find({ category: categoryId })
    return entities.map(entity => (sanitizeEntity(entity, { model: strapi.models['product'] })))
  }
};

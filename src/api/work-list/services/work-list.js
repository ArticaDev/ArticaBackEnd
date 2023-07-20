'use strict';

/**
 * work-list service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::work-list.work-list');

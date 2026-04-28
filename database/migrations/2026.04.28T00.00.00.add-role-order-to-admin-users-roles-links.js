'use strict';

/**
 * Migration to add `role_order` column to `admin_users_roles_links` table.
 *
 * This column is required by Strapi >= 4.11.x but may be missing on databases
 * originally created with an older version of Strapi.
 */

async function up(knex) {
  const hasColumn = await knex.schema.hasColumn('admin_users_roles_links', 'role_order');
  if (!hasColumn) {
    await knex.schema.table('admin_users_roles_links', (table) => {
      table.double('role_order').defaultTo(null);
    });
  }
}

async function down(knex) {
  const hasColumn = await knex.schema.hasColumn('admin_users_roles_links', 'role_order');
  if (hasColumn) {
    await knex.schema.table('admin_users_roles_links', (table) => {
      table.dropColumn('role_order');
    });
  }
}

module.exports = { up, down };

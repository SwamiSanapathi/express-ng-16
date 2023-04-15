/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema
        .raw(`CREATE TABLE IF NOT EXISTS user_login (
                user_id int(11) NOT NULL,
                username varchar(20) NOT NULL,
                password varchar(20) NOT NULL,
                email varchar(50) NOT NULL,
                displayname varchar(50) DEFAULT NULL
            ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
        `)
        .raw(`ALTER TABLE user_login ADD PRIMARY KEY (user_id)`)
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.raw(`DROP TABLE IF EXISTS user_login`)
};

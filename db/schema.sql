CREATE DATABASE IF NOT EXISTS sandwhichs_db;
USE sandwhichs_db;

DROP TABLE IF EXISTS sandwhichs;

CREATE TABLE sandwhichs (
    id int NOT NULL AUTO_INCREMENT,
    sandwhich_name varchar(255) NOT NULL,
    devoured BOOL DEFAULT false,
    PRIMARY KEY (id)
);
DROP DATABASE IF EXISTS contactInfo_db;
CREATE DATABASE contactInfo_db;
USE contactInfo_db;

CREATE TABLE contact
(
	id int NOT NULL AUTO_INCREMENT,
	firstName varchar(50) NOT NULL,
	lastName VARCHAR (10) NOT NULL,
	phoneNumber VARCHAR (20) NOT NULL,
	email VARCHAR (255) NOT NULL,
    details VARCHAR(500) CHARACTER SET utf8,
	PRIMARY KEY (id)
);
/*
 * File: users.sql
 * Project: 1. Database Query
 * File Created: Thursday, 21st October 2021 11:07:05 am
 * Author: Ananda Yudhistira (anandabayu12@gmail.com)
 * -----
 * Last Modified: Thursday, 21st October 2021 11:43:10 am
 * Modified By: Ananda Yudhistira (anandabayu12@gmail.com>)
 * -----
 * Copyright 2021 Ananda Yudhistira
 */
create table users (
	id serial primary key,
	username varchar(50) not null,
	parent int default 0
);

insert into 
	users (username, parent) 
values 
	('Ali', 2),
	('Budi', 0),
	('Cecep', 1);
  
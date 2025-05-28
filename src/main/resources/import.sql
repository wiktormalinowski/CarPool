-- This file allow to write SQL commands that will be emitted in test and dev.
-- The commands are commented as their support depends of the database
insert into car (id, nazwa, kolor, przebieg) values(1, 'kia', 'biały', 10000);
insert into car (id, nazwa, kolor, przebieg) values(2, 'vw', 'czarny', 23500);
insert into car (id, nazwa, kolor, przebieg) values(3, 'bmw', 'czerwony', 200);

alter sequence car_seq restart with 4;
DROP DATABASE IF EXISTS update_feature;

CREATE DATABASE update_feature;

USE update_feature;

CREATE TABLE projects (
  id INT NOT NULL AUTO_INCREMENT,
  date_created DATE,
  ending_date DATE,
  backers INT,
  money_raised NUMERIC,
  goal NUMERIC,
  PRIMARY KEY (id)
);

CREATE TABLE updates (
  id INT NOT NULL auto_increment,
  title VARCHAR(100),
  description VARCHAR(1000),
  update_date DATE,
  comments INT,
  likes INT,
  project_id INT,
  backers_only BOOLEAN,
  PRIMARY KEY (id),
  FOREIGN KEY (project_id) REFERENCES projects(id)
);

INSERT INTO projects (date_created,ending_date,backers,money_raised,goal) VALUES ("11-03-10","17-04-07",2496,4138,2519),("10-07-03","18-06-25",891,8678,7998),("14-03-14","17-11-20",2960,8913,2263),("10-09-19","17-12-16",3686,3533,10576),("11-04-28","18-07-02",1603,7247,13974),("14-02-07","18-06-24",1840,7741,6739),("13-03-09","18-04-18",275,9776,11369),("10-10-04","17-08-25",4966,5580,6529),("13-05-18","18-08-15",1033,1745,5627),("13-01-04","17-05-01",4981,2837,3252);
INSERT INTO projects (date_created,ending_date,backers,money_raised,goal) VALUES ("12-02-19","17-07-18",589,6177,2604),("13-11-03","18-05-08",3933,9355,2944),("12-01-26","17-07-25",3107,1968,13070),("13-03-02","16-12-28",3869,9898,13463),("12-05-28","16-10-24",3871,9635,4289),("12-02-09","18-07-18",1487,3188,13405),("14-02-23","16-08-19",4209,5938,5216),("10-12-18","17-09-25",4496,101,2330),("13-11-12","17-07-08",4105,9686,7533),("11-11-04","18-08-21",2947,3724,706);
INSERT INTO projects (date_created,ending_date,backers,money_raised,goal) VALUES ("12-02-01","17-04-26",4206,4364,2579),("13-10-24","17-02-24",2711,3982,13899),("13-12-28","17-01-16",3828,1111,12378),("14-05-15","17-05-27",1779,5055,9678),("12-03-18","16-12-30",669,3795,13264),("13-11-03","18-06-28",518,7345,4696),("11-10-27","16-09-11",697,268,9018),("12-01-19","16-09-23",2711,7653,13247),("10-10-14","17-06-12",3355,1353,10320),("12-03-18","18-04-22",1622,1083,938);
INSERT INTO projects (date_created,ending_date,backers,money_raised,goal) VALUES ("10-10-17","18-05-01",1412,1282,6482),("12-12-22","17-05-02",4309,3719,6395),("14-05-01","17-09-17",2365,787,5177),("12-12-28","18-06-08",1316,3828,4447),("13-07-16","17-10-12",3839,9403,1685),("10-10-20","17-01-23",4099,4369,9695),("13-06-13","17-06-16",3102,1087,11095),("13-04-06","16-10-03",4331,1696,13970),("11-08-17","16-11-14",3982,9537,2343),("12-05-10","16-09-27",772,853,3405);
INSERT INTO projects (date_created,ending_date,backers,money_raised,goal) VALUES ("13-03-28","18-07-24",3057,7835,12823),("11-02-20","17-01-21",4166,9733,6215),("11-10-15","18-03-31",3524,7965,13027),("11-02-25","17-02-09",4930,8884,12186),("11-08-21","17-05-14",4928,3185,2151),("13-06-11","17-12-18",1560,7296,11890),("12-03-16","17-03-31",2570,7306,13153),("11-07-29","16-10-21",1300,3047,10077),("13-04-14","17-11-29",1862,9713,6247),("14-03-20","17-04-12",116,4121,14403);
INSERT INTO projects (date_created,ending_date,backers,money_raised,goal) VALUES ("13-04-01","17-09-02",4915,1129,6647),("14-06-20","16-07-29",1062,9915,14421),("11-07-09","17-07-31",1594,5282,3993),("10-07-20","17-11-01",3617,6984,8394),("13-07-13","17-04-06",2097,175,10198),("13-03-04","18-06-26",1692,6386,12966),("12-05-31","16-08-27",225,6533,10414),("13-02-18","18-01-12",4197,813,5415),("11-01-21","16-10-06",3540,2268,12791),("11-12-24","18-07-09",3917,7001,1251);
INSERT INTO projects (date_created,ending_date,backers,money_raised,goal) VALUES ("10-10-22","18-06-12",3529,6743,9273),("12-02-16","17-11-07",3658,1575,5868),("12-12-17","17-04-09",1206,2505,11195),("11-12-13","17-10-02",2849,4023,729),("14-06-25","18-04-18",4796,7794,971),("13-03-21","18-01-22",3814,1339,13479),("12-10-17","16-11-04",2349,2259,6568),("12-03-31","17-01-13",4826,7517,6371),("14-01-30","17-01-06",4815,5738,13201),("11-07-13","16-11-22",2430,8510,7824);
INSERT INTO projects (date_created,ending_date,backers,money_raised,goal) VALUES ("12-01-23","17-03-23",266,2194,8714),("14-03-08","16-07-17",2867,4966,8437),("13-08-14","17-06-30",2140,7492,9284),("11-09-18","18-03-09",4857,615,1567),("11-09-28","16-12-30",522,108,1745),("12-02-29","17-05-01",1130,2514,880),("11-03-26","17-10-14",4638,9071,14642),("13-12-25","17-07-07",4408,1006,5594),("13-06-05","18-06-18",889,7926,10822),("12-07-23","17-10-25",654,3526,9762);
INSERT INTO projects (date_created,ending_date,backers,money_raised,goal) VALUES ("11-01-25","18-07-08",598,1246,1598),("10-09-14","17-07-24",577,78,10387),("13-03-13","16-08-03",138,9489,12832),("13-03-06","16-09-20",4785,6252,10292),("13-02-12","17-12-28",1550,864,6471),("12-07-26","18-05-05",2331,2990,6903),("10-11-10","17-09-20",4845,2400,5663),("11-03-07","17-08-02",237,1769,2816),("10-08-01","18-06-20",288,1464,1513),("12-10-09","17-07-29",2966,4119,7893);
INSERT INTO projects (date_created,ending_date,backers,money_raised,goal) VALUES ("11-05-20","17-07-21",765,5817,4890),("11-05-04","17-07-15",2594,6138,12285),("10-09-07","17-11-02",2731,1182,11996),("13-06-08","18-03-08",1405,6617,11285),("12-03-16","16-10-02",1817,9951,2582),("14-04-18","16-07-21",198,9171,2471),("12-04-11","18-07-07",4913,2425,1984),("14-06-28","17-10-11",2614,750,2037),("10-11-13","17-05-03",3638,4233,10796),("13-03-10","18-04-28",4843,2296,11203);

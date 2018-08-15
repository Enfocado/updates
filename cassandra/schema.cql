DROP KEYSPACE IF EXISTS updates;

CREATE KEYSPACE updates WITH replication = {'class':'SimpleStrategy','replication_factor':1};

USE updates;

-- DROP TABLE IF EXISTS projects;
DROP TABLE IF EXISTS updatestable;

CREATE TABLE  projects (
  id int ,
  name text,
  PRIMARY KEY (id)
);

CREATE TABLE updatestable (
  id int,
  title text,
  description text,
  update_date timestamp,--check if correct
  comments text,
  likes int,
  project_id int,
  backers_only boolean,
  PRIMARY KEY (project_id, update_date)
);



-- copy projects (id, name) from '/Users/Dilsher/Desktop/SDC/projectsData/projects.csv' with HEADER=true and DELIMITER=',';
copy updatestable (id, title, description, update_date, comments, likes, project_id,backers_only) from '/Users/Dilsher/Desktop/SDC/updatesData/updates2.csv' with HEADER=true and DELIMITER=',';


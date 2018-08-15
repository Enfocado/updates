\set num random(5000000,10000000)
begin;
select * from updates where project_id = :num;
end;
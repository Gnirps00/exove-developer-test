SELECT first_name || ' ' || last_name AS name, group_concat(number) AS numbers
FROM people
FULL OUTER JOIN phones
ON people.id = phones.user_id
GROUP BY name;
CREATE OR REPLACE FUNCTION NthHighestSalary(N INT) RETURNS TABLE (Salary INT) AS $$
BEGIN
  IF N < 1 THEN
    RETURN;
  ELSE
    RETURN QUERY (
      SELECT DISTINCT e.salary
      FROM Employee e
      ORDER BY salary DESC
      LIMIT 1
      OFFSET N - 1
    );
  END IF;
END;
$$ LANGUAGE plpgsql;

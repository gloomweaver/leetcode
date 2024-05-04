struct Solution {}

impl Solution {
    pub fn num_rescue_boats(mut people: Vec<i32>, limit: i32) -> i32 {
        let mut count_boats = 0;
        people.sort_unstable();

        {
            let mut left = 0;
            let mut right = people.len() - 1;
            while left <= right {
                count_boats += 1;
                if people[left] + people[right] <= limit {
                    left = left.saturating_add(1);
                }

                right = match right.checked_sub(1) {
                    Some(val) => val,
                    None => break,
                }
            }
        }

        count_boats
    }
}

fn main() {
    let people = vec![1, 2];
    let limit = 3;
    let res = Solution::num_rescue_boats(people, limit);
    println!("{}", res);
}

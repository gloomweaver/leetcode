use std::{collections::HashSet, ops::Deref};

struct Solution {}

impl Solution {
    pub fn find_max_k(nums: Vec<i32>) -> i32 {
        let mut values = HashSet::<i32>::new();
        for num in nums.iter() {
            if *num < 0 {
                values.insert(num.abs());
            }
        }
        let mut max_num = -1;
        for num in nums.iter() {
            if *num > max_num && values.contains(num) {
                max_num = *num;
            }
        }
        max_num
    }
}

fn main() {}

struct Solution {}

impl Solution {
    pub fn is_ugly(mut n: i32) -> bool {
        if n < 1 {
            return false;
        }
        loop {
            match (n % 2, n % 3, n % 5) {
                (0, 0, 0) => n /= 30,
                (0, 0, _) => n /= 6,
                (0, _, 0) => n /= 10,
                (_, 0, 0) => n /= 15,
                (0, _, _) => n /= 2,
                (_, 0, _) => n /= 3,
                (_, _, 0) => n /= 5,
                (_, _, _) => return n == 1,
            }
        }
    }
}

fn main() {}

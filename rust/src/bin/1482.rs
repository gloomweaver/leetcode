struct Solution {}

impl Solution {
    fn count_bouquets(bloom_day: &Vec<i32>, bloom: i32, flowers_per_bouquet: i32) -> i32 {
        let mut count_adjacent = 0;
        let mut count_bouquets = 0;
        for i in 0..bloom_day.len() {
            if bloom_day[i] <= bloom {
                count_adjacent += 1;
            } else {
                count_adjacent = 0;
            }
            if count_adjacent == flowers_per_bouquet {
                count_adjacent = 0;
                count_bouquets += 1;
            }
        }

        count_bouquets
    }

    fn min_days_recurse(
        bloom_day: &Vec<i32>,
        left: i32,
        right: i32,
        target_bouquets: i32,
        flowers_per_bouquet: i32,
    ) -> i32 {
        let mid = (left + right) / 2;
        let count_bouquets = Self::count_bouquets(bloom_day, mid, flowers_per_bouquet);

        if left >= right {
            if count_bouquets < target_bouquets {
                return -1;
            } else {
                return mid;
            }
        } else if count_bouquets < target_bouquets {
            Self::min_days_recurse(
                bloom_day,
                mid + 1,
                right,
                target_bouquets,
                flowers_per_bouquet,
            )
        } else {
            Self::min_days_recurse(bloom_day, left, mid, target_bouquets, flowers_per_bouquet)
        }
    }

    pub fn min_days(bloom_day: Vec<i32>, target_bouquets: i32, flowers_per_bouquet: i32) -> i32 {
        let min_bloom = bloom_day.iter().min().unwrap();
        let max_bloom = bloom_day.iter().max().unwrap();

        Self::min_days_recurse(
            &bloom_day,
            *min_bloom,
            *max_bloom,
            target_bouquets,
            flowers_per_bouquet,
        )
    }
}

fn main() {}

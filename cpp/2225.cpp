#include <vector>
#include <map>

using namespace std;

class Solution
{
public:
  vector<vector<int>> findWinners(vector<vector<int>> &matches)
  {
    map<int, int> lost_matches;
    vector<int> zero, one;
    for (auto match : matches)
    {
      int winner = match[0];
      int loser = match[1];
      if (lost_matches.find(winner) == lost_matches.end())
      {
        lost_matches[winner] = 0;
      }

      lost_matches[loser]++;
    }

    for (auto [player, loses] : lost_matches)
    {
      if (loses == 0)
      {
        zero.push_back(player);
      }
      if (loses == 1)
      {
        one.push_back(player);
      }
    }
    return {zero, one};
  }
};

#include <string>
#include <algorithm>

class Solution
{
public:
  int lengthOfLastWord(std::string s)
  {

    auto wordStart = std::find_if_not(s.rbegin(),
                                      s.rend(),
                                      std::isspace<char>);
    auto wordEnd = std::find_if(wordStart,
                                s.rend(),
                                std::isspace<char>);
    return std::distance(wordStart, wordEnd);
  }
};

int main()
{
  Solution solution;
  std::string s = "Hello World";
  int result = solution.lengthOfLastWord(s);

  printf("%d\n", result);
  return 0;
}

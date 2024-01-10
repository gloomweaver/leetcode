#include <string>
#include <algorithm>

class Solution
{
public:
  int lengthOfLastWord(std::string s)
  {
    auto isspace = [](char c)
    { return std::isspace(c); };
    auto wordStart = std::find_if_not(std::make_reverse_iterator(s.end()),
                                      std::make_reverse_iterator(s.begin()),
                                      isspace);
    auto wordEnd = std::find_if(wordStart,
                                std::make_reverse_iterator(s.begin()),
                                isspace);
    return std::distance(wordEnd.base(), wordStart.base());
  }
};

#include <map>

using namespace std;

class RandomizedSet
{
private:
  map<int, bool> m;

public:
  RandomizedSet()
  {
  }

  bool insert(int val)
  {
    if (m.find(val) != m.end())
    {
      return false;
    }
    m[val] = true;
    return true;
  }

  bool remove(int val)
  {
    if (m.find(val) == m.end())
    {
      return false;
    }
    m.erase(val);
    return true;
  }

  int getRandom()
  {
    auto it = std::next(m.begin(), rand() % m.size());
    return it->first;
  }
};

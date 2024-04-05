#include <stdlib.h>


char* makeGood(char* s) {
  size_t top = -1;
  for (size_t i = 0; s[i]; ++i) {
    if (top != -1 && abs(s[i] - s[top]) == 32) {
      top--;
    } else {
      s[++top] = s[i];
    }
  }
  s[++top] = '\0';
  return s;
}


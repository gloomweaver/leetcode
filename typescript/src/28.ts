// Rabin Karb Algorithm

const PRIME = 101;

// it works, but should be optimized
// research rolling hash
function hash(str: string, start = 0, end = str.length): number {
  let hash = 0;
  for (let i = start; i < end; i++) {
    hash += str.charCodeAt(i) * Math.pow(PRIME, i - start);
  }
  return hash;
}

function recalculateHash(
  str: string,
  oldIdx: number,
  newIdx: number,
  oldHash: number,
  patternLength: number
): number {
  let newHash = oldHash - str.charCodeAt(oldIdx);
  newHash /= PRIME;
  newHash += str.charCodeAt(newIdx) * Math.pow(PRIME, patternLength - 1);
  return newHash;
}

function checkSubsting(
  str: string,
  target: string,
  start: number,
  end: number
): boolean {
  for (let i = start; i < end; i++) {
    if (str[i] !== target[i - start]) {
      return false;
    }
  }
  return true;
}

function strStr(haystack: string, needle: string): number {
  const needleHash = hash(needle);
  let textHash = hash(haystack, 0, needle.length);
  for (let i = 0; i < haystack.length - needle.length + 1; i++) {
    if (
      textHash === needleHash &&
      checkSubsting(haystack, needle, i, i + needle.length)
    ) {
      return i;
    }
    textHash = recalculateHash(
      haystack,
      i,
      i + needle.length,
      textHash,
      needle.length
    );
  }

  return -1;
}

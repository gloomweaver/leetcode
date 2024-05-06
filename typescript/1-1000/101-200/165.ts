function compareVersion(version1: string, version2: string): number {
  const version1arr = version1.split(".").map(Number);
  const version2arr = version2.split(".").map(Number);

  for (
    let index = 0;
    index < Math.max(version1arr.length, version2arr.length);
    index++
  ) {
    if ((version1arr[index] ?? 0) < (version2arr[index] ?? 0)) {
      return -1;
    } else if ((version1arr[index] ?? 0) > (version2arr[index] ?? 0)) {
      return 1;
    }
  }

  return 0;
}

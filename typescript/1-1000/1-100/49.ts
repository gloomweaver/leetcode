function groupAnagrams(strs: string[]): string[][] {
  return Object.values(
    strs.reduce((acc, str) => {
      const hash = str.split("").sort().join();
      if (!acc[hash]) {
        acc[hash] = [str];
        return acc;
      }
      acc[hash].push(str);
      return acc;
    }, {} as Record<string, string[]>)
  );
}

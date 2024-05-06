function reversePrefix(word: string, ch: string): string {
  const index = word.indexOf(ch);
  return (
    word
      .slice(0, index + 1)
      .split("")
      .reverse()
      .join("") + word.slice(index + 1)
  );
}

function isPalindrome(s: string): boolean {
  s = s.replace(/[^A-Za-z0-9]/g, "");
  let size: number = s.length - 1;
  for (let i = 0; i < s.length; i++) {
    if (s[i].toLocaleLowerCase() !== s[size - i].toLocaleLowerCase()) {
      return false;
    }
  }

  return true;
}

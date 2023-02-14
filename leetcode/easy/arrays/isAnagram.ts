function isAnagram(s: string, t: string): boolean {
  if (s.length === t.length) {
    let arrayS: string[] = Array.from(s);
    let arrayT: string[] = Array.from(t);

    arrayS.sort();
    arrayT.sort();

    console.log(arrayS, arrayT);

    let flag: boolean = true;

    for (let i = 0; i < s.length && flag; i++) {
      if (arrayS[i].toLocaleLowerCase() !== arrayT[i].toLocaleLowerCase()) {
        flag = false;
      }
    }

    return flag;
  }

  return false;
}

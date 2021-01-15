/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  const elMap = new Map();
  for (let key = 0; key < magazine.length; key++) {
    const char = magazine[key];
    if (!elMap.has(char)) elMap.set(char, 0);
    elMap.set(char, elMap.get(char) + 1);
  }
  for (let keyRNote = 0; keyRNote < ransomNote.length; keyRNote++) {
    const char = ransomNote[keyRNote];
    if (!elMap.has(char) || elMap.get(char) < 1) return false;
    elMap.set(char, elMap.get(char) - 1);
  }
  return true;
};

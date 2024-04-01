// Search allows for one level of object dot notation search
// Example key: ['hello.world']
export function searchDataByKeys (data: {}[] = [], searchTerm: string = '', keys: string[] = []):{}[] {
  if (keys.length === 0) {
    // eslint-disable-next-line no-console
    console.warn('Search is missing keys');
    return data;
  }

  if (searchTerm === '') return data;

  const filtered = data.filter(d => {
    let term = ``;
    for (let i = 0; i < keys.length; i++) {
      // Support for passing in a dot notation key
      // Currently only one level of object support
      if (keys[i].includes('.')) {
        const s = keys[i].split('.');
        if (s.length <= 2) {
          if (d[s[0]] && d[s[0]][s[1]]) {
            term = term.concat(d[s[0]][s[1]]);
          }
        } else {
          // eslint-disable-next-line no-console
          console.warn('Non-supported dot notation lookup');
        }
      } else {
        if (d[keys[i]]) {
          term = term.concat(d[keys[i]]);
        }
      }
    }
    if (term.toLowerCase().includes(searchTerm.toLowerCase())) return true;
    return false;
  });

  return filtered;
}
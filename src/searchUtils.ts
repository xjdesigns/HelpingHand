// Search allows for one level of object dot notation search
// Example key: ['hello.world']

/**
 * @category Search Utility
 */
export type Nested = {
  allowNested?: boolean
}

/**
 * Search data by term and keys, allowing for full nested checks
 *
 * @defaultValue Default searchs one notation level deep unless option is true
 *
 * ```ts
 * import { searchDataByKeys } from 'helping_hand'
 * const data = searchDataByKeys(...);
 * ```
 * @category Search Utility
 */
export function searchDataByKeys (
  data: {}[] = [],
  searchTerm: string = '',
  keys: string[] = [],
  {
    allowNested = false
  }: Nested = {}
):{}[] {
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

        // if allowed search nested objects for values
        if (allowNested) {
          let t: string = '';
          for (let ki = 0; ki < s.length; ki++) {
            if (t) {
              t = t[s[ki]]
            } else {
              t = d[s[ki]]
            }
          }
          term = t;
        } else {
          if (s.length <= 2) {
            if (d[s[0]] && d[s[0]][s[1]]) {
              term = term.concat(d[s[0]][s[1]]);
            } else {
              // eslint-disable-next-line no-console
              console.warn('No match on search term');
            }
          } else {
            // eslint-disable-next-line no-console
            console.warn('Non-supported dot notation lookup');
          }
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
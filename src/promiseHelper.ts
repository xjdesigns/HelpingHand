/**
 * @deprecated Use native promises instead
 */
export const reflect = p => p.then(res => {
  return { res, status: 'resolved' }
}, err => {
  return { err, status: "rejected" }
})

/**
 * @deprecated Use native promises instead
 */
export function allSettled (promises: any[]) {
  return Promise.all(promises.map(reflect)).then(results => results)
}

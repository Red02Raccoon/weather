export const actionTypes = {
  FAILURE: 'FAILURE'
}
  
export function failure (error) {
  return {
    type: actionTypes.FAILURE,
    error
  }
}
  


export const addNewFeatures = add => {
    return {
      type: 'ADD_FEATURE',
      payload: add
    }
  }

export const removeFeatures = remove => {
  return {
    type: 'REMOVE_FEATURE',
    payload: remove
    }
  }
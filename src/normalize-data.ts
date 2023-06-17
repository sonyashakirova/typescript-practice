type DataById<ID extends string, T extends { id: ID }> = { [key in ID]?: T }

const normalizeData = <ID extends string, T extends { id: ID }>(unnormalizedData: T[]): { byId: DataById<ID, T>, allIds: ID[] } => {
  const allIds = unnormalizedData.map(item => item.id)
  const byId: DataById<ID, T> = {}

  unnormalizedData.forEach(item => {
    byId[item.id] = item
  })

  return { byId, allIds }  
}

export default normalizeData

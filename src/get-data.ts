
const getData = <T>(url: string): Promise<T> => {
  return Promise.resolve(
    fetch(url).then(response => response.json())
  )
}

export default getData

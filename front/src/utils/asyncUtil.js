export const asyncUtil = (handler) => {
  return async (req, res) => {
    try {
      await handler(req, res)
    } catch (err) {
      console.log(err)
    }
  }
}

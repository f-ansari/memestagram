import Client from './'

export const __AddComment = async (formData) => {
  try {
    const res = await Client.post('/comments', formData)
    console.log(res.data)
    return res.data
  } catch (error) {
    throw error
  }
}

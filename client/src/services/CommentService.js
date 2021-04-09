import Client from './'

export const __AddComment = async (formData) => {
  try {
    const res = await Client.post('/comments', formData)
    return res.data
  } catch (error) {
    throw error
  }
}

export const __DeleteComment = async (id) => {
  try {
    const res = await Client.delete(`/comments/${id}`)
    return res
  } catch (error) {
    throw error
  }
}

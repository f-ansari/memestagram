import Client from './'

export const __GetMapPost = async () => {
  try {
    const res = await Client.get('/posts')
    return res.data
  } catch (error) {
    throw error
  }
}

export const __CreatePost = async (formData) => {
  try {
    const res = await Client.post('/posts', formData)
    return res.data
  } catch (error) {
    throw error
  }
}

export const __DeletePost = async (id) => {
  try {
    const res = await Client.delete(`/posts/${id}`)
    return res
  } catch (error) {
    throw error
  }
}

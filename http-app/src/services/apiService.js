import http from './httpService'
import config from '../config.json'

// common
const _calculateId = (arr) => {
  let max = 0
  arr.forEach(el => {
    if(el.id > max)
      max++
  })
  return max++
}

// get
const getUsers = async () => {
  return await http.get(`${config._apiUrl}/users/`)
}
const getTags = async userId => {
  return await http.get(`${config._apiUrl}/users/${userId}/tags`)
}
const getChunks = async userId => {
  return await http.get(`${config._apiUrl}/users/${userId}/chunks`)
}

// post
const createTag = async (tags, tag) => {
  tag.id = _calculateId(tags)
  let res = await http.post(`${config._apiUrl}/tags`, tag)
  res[0] === '+error' ? console.log('must generate Error in create res') : console.log('successfully create res', res)
} 
const createChunk = async (chunks, chunk) => {
  chunk.id = _calculateId(chunks)
  let res = await http.post(`${config._apiUrl}/chunks`, chunk)
  res[0] === '+error' ? console.log('must generate Error in create chunk') : console.log('successfully create chunk', res)
} 

// put
const updateTag = async (tagId, tag) => {
  let res = await http.put(`${config._apiUrl}/tags/${tagId}`, tag)
  res[0] === '+error' ? console.log('must generate Error in update tag') : console.log('successfully update tag', res)
}
const updateChunk = async (chunkId, chunk) => {
  let res = await http.put(`${config._apiUrl}/chunks/${chunkId}`, chunk)
  res[0] === '+error' ? console.log('must generate Error in update chunk') : console.log('successfully update chunk', res)
}

// delete
const deleteTag = async tagId => {
  return await http.delete(`${config._apiUrl}/tags/${tagId}`)
}
const deleteChunk = async chunkId => {
  return await http.delete(`${config._apiUrl}/chunks/${chunkId}`)
}

export default {
  getUsers,
  getTags,
  getChunks,
  createTag,
  createChunk,
  updateTag,
  updateChunk,
  deleteTag,
  deleteChunk

}
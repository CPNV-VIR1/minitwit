'use strict'

import { sequelize } from '../config/database.js'
import { Post } from '../models'

describe('Testing', () => {
  let mockedSequelize

  beforeEach(async () => {
    mockedSequelize = sequelize
    mockedSequelize.validateOnly = true
    await mockedSequelize.sync({ force: true })
  })

  test('create_post', async () => {

    const post = await Post.create({ content: 'post 1' })

    expect(1).toEqual(post.id)
    expect('post 1').toEqual(post.content)
  })

  test('get_all', async () => {
    await Post.create({ content: 'post1' })
    await Post.create({ content: 'post2' })
    const posts = await Post.findAll()

    expect(2).toEqual(posts.length)
  })
})
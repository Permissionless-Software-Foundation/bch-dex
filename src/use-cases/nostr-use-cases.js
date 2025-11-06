/*
  This library contains business-logic for dealing with deleted chats. Most of these
  functions are called by the /nostr REST API endpoints.
*/

import wlogger from '../adapters/wlogger.js'
import DeletedChatEntity from '../entities/deletedChat.js'
import DeletedPostEntity from '../entities/deletedPost.js'

class NostrUseCases {
  constructor (localConfig = {}) {
    this.adapters = localConfig.adapters
    if (!this.adapters) {
      throw new Error(
        'Instance of adapters must be passed in when instantiating Nostr Use Cases library.'
      )
    }
    // Encapsulate dependencies
    this.DeletedChatEntity = new DeletedChatEntity()
    this.DeletedPostEntity = new DeletedPostEntity()
    this.DeletedChatModel = this.adapters.localdb.DeletedChat
    this.DeletedPostModel = this.adapters.localdb.DeletedPost

    this.createDeletedChat = this.createDeletedChat.bind(this)
    this.getDeletedChats = this.getDeletedChats.bind(this)
    this.createDeletedPost = this.createDeletedPost.bind(this)
    this.getDeletedPosts = this.getDeletedPosts.bind(this)
    this.removeOlderDeletedChats = this.removeOlderDeletedChats.bind(this)
    this.removeOlderDeletedPosts = this.removeOlderDeletedPosts.bind(this)
  }

  // Create a new deleted chat model and add it to the Mongo database.
  async createDeletedChat (deletedChatObj) {
    try {
      // Input Validation

      const deletedChatEntity = this.DeletedChatEntity.validate(deletedChatObj)
      const deletedChat = new this.DeletedChatModel(deletedChatEntity)

      // Save the new model to the database.
      await deletedChat.save()
      return deletedChat
    } catch (err) {
      // console.log('createDeletedChat() error: ', err)
      wlogger.error('Error in lib/nostr.js/createDeletedChat()')
      throw err
    }
  }

  // Returns an array of all deleted chats models in the Mongo database.
  async getDeletedChats () {
    try {
      // Get deleted chats models.
      const deletedChats = await this.DeletedChatModel.find({})

      return deletedChats
    } catch (err) {
      wlogger.error('Error in lib/users.js/getAllDeletedChat()')
      throw err
    }
  }

  // Create a new deleted post model and add it to the Mongo database.
  async createDeletedPost (deletedPostObj) {
    try {
      // Input Validation

      const deletedPostEntity = this.DeletedPostEntity.validate(deletedPostObj)
      const deletedPost = new this.DeletedPostModel(deletedPostEntity)

      // Save the new model to the database.
      await deletedPost.save()
      return deletedPost
    } catch (err) {
      wlogger.error('Error in lib/users.js/createDeletedPost()')
      throw err
    }
  }

  // Returns an array of all deleted posts models in the Mongo database.
  async getDeletedPosts () {
    try {
      // Get deleted posts models.
      const deletedPosts = await this.DeletedPostModel.find({})

      return deletedPosts
    } catch (err) {
      wlogger.error('Error in lib/users.js/getDeletedPosts()')
      throw err
    }
  }

  // Remove deleted chats that are older than 3 months.
  async removeOlderDeletedChats () {
    try {
      const deletedChats = await this.DeletedChatModel.find({})
      const threeMonthsAgo = new Date()
      threeMonthsAgo.setMonth(threeMonthsAgo.getMonth() - 3)
      for (let i = 0; i < deletedChats.length; i++) {
        const deletedChat = deletedChats[i]
        if (deletedChat.createdAt.getTime() < threeMonthsAgo.getTime()) {
          await deletedChat.remove()
        }
      }
    } catch (err) {
      wlogger.error('Error in lib/users.js/removeOlderDeletedChats()')
      throw err
    }
  }

  // Remove deleted posts that are older than 3 months.
  async removeOlderDeletedPosts () {
    try {
      const deletedPosts = await this.DeletedPostModel.find({})
      const threeMonthsAgo = new Date()
      threeMonthsAgo.setMonth(threeMonthsAgo.getMonth() - 3)
      for (let i = 0; i < deletedPosts.length; i++) {
        const deletedPost = deletedPosts[i]
        if (deletedPost.createdAt.getTime() < threeMonthsAgo.getTime()) {
          await deletedPost.remove()
        }
      }
    } catch (err) {
      wlogger.error('Error in lib/users.js/removeOlderDeletedPosts()')
      throw err
    }
  }
}

export default NostrUseCases

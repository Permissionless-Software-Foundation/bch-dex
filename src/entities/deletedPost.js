/*
  DeletedPost Entity
*/

class DeletedPost {
  validate (data = {}) {
    const { eventId } = data
    // Input Validation
    if (!eventId || typeof eventId !== 'string') {
      throw new Error("Property 'eventId' must be a string!")
    }

    return data
  }
}

export default DeletedPost

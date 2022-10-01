/*
  Entry Entity
*/
class Entry {
  validate ({
    entry,
    description,
    slpAddress,
    signature,
    category
  } = {}) {
    // Input Validation
    if (!entry || typeof entry !== 'string') {
      throw new Error("Property 'entry' must be a string!")
    }
    if (!description || typeof description !== 'string') {
      throw new Error("Property 'description' must be a string!")
    }
    if (!slpAddress || typeof slpAddress !== 'string') {
      throw new Error("Property 'slpAddress' must be a string!")
    }
    if (!signature || typeof signature !== 'string') {
      throw new Error("Property 'signature' must be a string!")
    }
    if (!category || typeof category !== 'string') {
      throw new Error("Property 'category' must be a string!")
    }

    const entryData = {
      entry,
      description,
      slpAddress,
      signature,
      category
    }

    return entryData
  }
}

export default Entry;

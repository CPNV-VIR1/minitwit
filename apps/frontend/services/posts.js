export default class PostsServices {
  static #url = import.meta.env.VITE_API_URL

  static async getAll() {
    return await (await fetch(`${this.#url}/posts`)).json()
  }

  static async create(message) {
    return await (
      await fetch(`${this.#url}/posts`, {
        method: "POST",
        body: JSON.stringify(message),
      })
    ).json()
  }
}

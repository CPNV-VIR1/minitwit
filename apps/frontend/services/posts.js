export default class PostsServices {
  static #url = "http://localhost:8080/api/v1"

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

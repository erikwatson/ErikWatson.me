export default class Events {
  static onReady (callback) {
    document.addEventListener('DOMContentLoaded', () => {
      callback()
    })
  }
}


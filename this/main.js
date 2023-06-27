class Game {
  constructor(name) {
    this._name = name
    this.loadingStuff = this.loadingStuff.bind(this)
  }

  loadingStuff() {
    console.log('Memuat komponen permainan ...')
    console.log(`Permainan ${this._name} akan segera dimulai!`)
    console.log(this)
  }
}

const gamePlayer = (game) => ({
  play: game.loadingStuff,
})

const runner = () => {
  const game = new Game('Catur')
  gamePlayer(game).play()
}

runner()

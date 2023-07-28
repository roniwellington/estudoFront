import { Personagem } from "./modules/personagem.js"
import { PersonagemView } from "./components/personagem-view.js";
import { Mago } from "./modules/mago.js";

const magoAntonio = new Mago('Antonio', 4, 'fogo', 4, 3)
const magaJulia = new Mago('Julia', 8, 'fogo', 7, 10)

const personagens = [magoAntonio, magaJulia]

new PersonagemView(personagens).render()

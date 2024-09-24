import Filme from "../models/filme_model.js"
import {} from "../config/db.js";

const filmeSchema = db.Schema({
  nome: {
    type: String,
    required: true,
  },
  ano: {
    type: Date,
    required: true,
  },
  genero: {
    type: String,
    enum: ["terror", "romance", "comedia"],
    required: true,
    default: "comedia",
  },
});

const Filme = db.model("filme", filmeSchema);
export default Filme;

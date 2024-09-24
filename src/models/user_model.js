import db from "../config/db.js"

const userSchema = new db.Schema({
    email : {
        type: String,
        required: true,
        unique : true,
    },
    password: {
        type: String,
        required: true,
        minLength: 8,
    },
    type: {
        type: String,
    enum: ["administrador", "usuario"],
    required: true,
    default: "usuario"
    }
});

userSchema.pre("save", async function () {
    console.log(this.password)
    this.password = bcrypt.hash(this.password, 10);
    console.log(this.password)
})

const User = db.model("user", userSchema)

export default User;

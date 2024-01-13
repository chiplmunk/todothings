import { Schema, models, model, Document } from "mongoose";


export interface todoProps extends Document{
    todoname: string;
    tododescription: string;
}
const todoSchema = new Schema({
    todoname:{
        type: String,
        required: true,
    },

    tododescription: {
        type: String,
        required: true,
    }
})

const Todo = models.Todo || model("Todo", todoSchema);

export default Todo;
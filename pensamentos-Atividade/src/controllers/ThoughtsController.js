// Importando o model Thought
const Thought = require("../model/Thought");

module.exports = {
    // Função responsável por buscar todos os pensamentos cadastrados.
    async findAllThoughts(request, response) {
        const thoughts = await Thought.findAll({ raw: true });

        return response.json(thoughts);
    },

    async createThought(request, response) {
        const { title, description } = request.body
        const thoughts = await Thought.create({title, description});

        return response.json(thoughts);
    },

    async findThought(request, response) {
        const { id } = request.params

        const thoughts = await Thought.findOne({ where: { id: id } });

        return response.json(thoughts);
    },

    async updateThought(request, response) {
        const { id } = request.params
    
        const { title, description } = request.body
    
        const thoughts = await Thought.update(
            {
                title,
                description    
            },
            {
                where: { id: id }
            }
        );
    
        return response.json(thoughts);
    
    },

    async deleteThought(request, response) {
        const { id } = request.params
    
        const thoughts = await Thought.destroy({ where: { id: id } });
    
        return response.json({ message: "Usuário foi deletado com sucesso" });
    
    }
}

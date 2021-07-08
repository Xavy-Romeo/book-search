const { User, Book } = require('../models');

const resolvers = {
    Query: {
        users: async () => {
            return User.find()
                .select('-__v -password')
                .populate('savedBooks');
        },
        user: async (parent, { username }) => {
            return User.findOne({ username })
                .select('-__v -password')
                .populate('savedBooks');
        }

    } 
};

module.exports = resolvers;
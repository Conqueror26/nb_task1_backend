const { buildSchema } = require("graphql");

module.exports = buildSchema(`
        type Event{
            _id:ID!
            title:String!
            agenda:String!
            time:String!
            guest:String!
            creator:User!
        }
        type User{
            _id:ID!
            email:String!
            password:String
            createdEvents:[Event!]
        }
      

        type AuthData{
            userId:ID!
            email:String!
            
        }
        input EventInput{
            title:String!
            agenda:String!
            time:String!
            guest:String!
        }
        input UserInput{
            email:String!
            password:String!

        }
        type RootQuery{
            events:[Event!]!
            login(email:String!,password:String!):AuthData!

        }
        type RootMutation{
            createEvent(eventInput:EventInput):Event
            createUser(userInput:UserInput):User
            deleteEvent(_id:ID!):Event
            updateUser(_id:ID!,userInput:UserInput):User

        }
        schema{
            query:RootQuery
            mutation:RootMutation
        }
    `);

import express from "express"

const app = express();

const PORT = 3000;

const jokes = [
    {
        id: 1,
        setup: "Why don't scientists trust atoms?",
        punchline: "Because they make up everything!"
    },
    {
        id: 2,
        setup: "Why did the scarecrow win an award?",
        punchline: "Because he was outstanding in his field!"
    },
    {
        id: 3,
        setup: "What do you call fake spaghetti?",
        punchline: "An impasta!"
    },
    {
        id: 4,
        setup: "Why did the bicycle fall over?",
        punchline: "Because it was two-tired!"
    },
    {
        id: 5,
        setup: "What do you call cheese that isn't yours?",
        punchline: "Nacho cheese!"
    },
    {
        id: 6,
        setup: "Why couldn't the leopard play hide and seek?",
        punchline: "Because he was always spotted!"
    },
    {
        id: 7,
        setup: "What do you call a bear with no teeth?",
        punchline: "A gummy bear!"
    },
    {
        id: 8,
        setup: "Why did the math book look sad?",
        punchline: "Because it had too many problems."
    },
    {
        id: 9,
        setup: "What do you call a factory that makes good products?",
        punchline: "A satisfactory!"
    },
    {
        id: 10,
        setup: "Why did the golfer bring two pairs of pants?",
        punchline: "In case he got a hole in one!"
    }
];

const users = [
    {
        id: 1,
        firstName: "John",
        lastName: "Doe",
        email: "john.doe@example.com",
        phone: "123-456-7890"
    },
    {
        id: 2,
        firstName: "Jane",
        lastName: "Smith",
        email: "jane.smith@example.com",
        phone: "234-567-8901"
    },
    {
        id: 3,
        firstName: "Emily",
        lastName: "Johnson",
        email: "emily.johnson@example.com",
        phone: "345-678-9012"
    },
    {
        id: 4,
        firstName: "Michael",
        lastName: "Brown",
        email: "michael.brown@example.com",
        phone: "456-789-0123"
    },
    {
        id: 5,
        firstName: "Sarah",
        lastName: "Davis",
        email: "sarah.davis@example.com",
        phone: "567-890-1234"
    },
    {
        id: 6,
        firstName: "David",
        lastName: "Wilson",
        email: "david.wilson@example.com",
        phone: "678-901-2345"
    },
    {
        id: 7,
        firstName: "Laura",
        lastName: "Garcia",
        email: "laura.garcia@example.com",
        phone: "789-012-3456"
    },
    {
        id: 8,
        firstName: "James",
        lastName: "Martinez",
        email: "james.martinez@example.com",
        phone: "890-123-4567"
    },
    {
        id: 9,
        firstName: "Jennifer",
        lastName: "Lopez",
        email: "jennifer.lopez@example.com",
        phone: "901-234-5678"
    },
    {
        id: 10,
        firstName: "Daniel",
        lastName: "Hernandez",
        email: "daniel.hernandez@example.com",
        phone: "012-345-6789"
    }
];

app.get("/", (req, res) => {
    res.send("Hello World")
})

app.get("/api/status", (req, res) => {
    res.send({
        message: "Server is UP"
    })
})

app.get('/api/jokes/random', (req, res) => {
    const randomJoke = jokes[Math.floor(Math.random() * jokes.length)]
    res.send(randomJoke)
})

app.get('/api/users/random', (req, res) => {
    const randomUser = users[Math.floor(Math.random() * users.length)]
    res.send(randomUser)
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})
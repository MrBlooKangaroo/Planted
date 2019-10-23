const getRandomFutureDate = () => 
    new Date(new Date().getTime() + 100000 * Math.random())

module.exports = [
    {
        expectedAt: getRandomFutureDate()
    },
    {
        expectedAt: getRandomFutureDate()
    },
    {
        expectedAt: getRandomFutureDate()
    },
    {
        expectedAt: getRandomFutureDate()
    },
    {
        expectedAt: getRandomFutureDate()
    },
    {
        expectedAt: getRandomFutureDate()
    },
    {
        expectedAt: getRandomFutureDate()
    },
    {
        expectedAt: getRandomFutureDate()
    }
]
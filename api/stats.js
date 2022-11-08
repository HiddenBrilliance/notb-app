var url = 'https://www.balldontlie.io/api/v1/players';

const getStats = async () => {
    const response = await fetch(url)
    return response.json();

} //.json() objectifies the data within url for getStats () => {}

const displayData = (data) => {
    const container = document.querySelector('.display-data')
    container.innerHTML = data.map((item) => {
        return `<li>${(item.first_name + " " + item.last_name) + " - " + item.team.full_name + " " + "(" + item.position + ")"}</li>`
    }).join(' ')
}

const initializeApp = async () => {
    // fetch stats
    const stats = await getStats()

    // put stats on DOM
    displayData(stats.data)

    // get buttons
    const filterButtons = document.querySelectorAll('button');

    // set up event listeners
    filterButtons.forEach(function (filterButtons) {
        filterButtons.addEventListener("click", function (e) {
            const buttonData = e.currentTarget.dataset
            const position = buttonData.position

            // filter
            const dataFilteredByPosition = stats.data.filter((player) => {
                return player.position.includes(position)
            })
            console.log('filtered data', dataFilteredByPosition)

            // update DOM (document object modelo)
            displayData(dataFilteredByPosition)
        });
    })
}

initializeApp();








/*const position = document.querySelector(".btn");  

document.querySelector('.button').addEventListener(click, )*/

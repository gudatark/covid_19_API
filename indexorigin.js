const btn = document.querySelectorAll('.origin');

async function contriesgroup() {
    btn.forEach((button) => {
        button.addEventListener('click', async(e) => {
            let origin = await fetch(`https://nameless-citadel-58066.herokuapp.com/https://restcountries.herokuapp.com/api/v1/region/${e.target.innerText}`)
            let data = await origin.json();

            console.log(data);

            console.log(e.target.innerText);
        })
    })

}
contriesgroup();
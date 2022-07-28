function success_function(response){
box[`innerHTML`] += `<img src="${response[`request`][`responseURL`]}"/>`;
}
function failure_function(error){
box[`innerHTML`] += `<p>Error!! picksum one</p>`;
}

function start_axios(){
    axios.request({
        url: `https://picsum.photos/200/300`
    })
    .then(success_function).catch(failure_function);
}

function success_picksum(response){
box[`innerHTML`] += `<img src="${response[`request`][`responseURL`]}"/>`;
}
function failure_picksum(error){
box[`innerHTML`] += `<p>error picksum two</p>`;
}

function picksum_axios(){
    axios.request({
        url: `https://picsum.photos/200/300`,
        params: {
            grayscale: true,
            blur: 5
        }
    }).then(success_picksum).catch(failure_picksum);
}
let box = document.getElementById(`box`);
let button = document.getElementById(`axios_button`);
button.addEventListener(`click`,start_axios);

let picksum = document.getElementById(`picsum`);
picksum.addEventListener(`click`,picksum_axios);

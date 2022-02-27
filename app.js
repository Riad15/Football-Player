const footBall = () => {
    const searchBox = document.getElementById('search-Box').value;

    const url = `https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${searchBox}`;
    fetch(url)
        .then(res => res.json())
        .then(data => console.log(data));
}

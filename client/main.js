// Form validation
function validate() {
    if (document.searchForm.movieSearchKey.value == "") {
        alert("Please provide something to search!");
        document.searchForm.movieSearchKey.focus();
        return false;
    }
    loadResult();
}


function loadResult() {
    const url = `http://localhost:3000/api/movie-search?movieSearchKey=${document.searchForm.movieSearchKey.value}&movieSearchCategory=${document.searchForm.movieSearchCategory.value}`;
    fetch(url, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    }).then(async response => {
        document.getElementById("movie-grid").innerHTML = JSON.stringify(await response.json());
        return (true);
    });

    const data = `<table>
<tr>
    <th>Type</th>
    <th>Name</th>
    <th>Year</th>
    <th>Poster</th>
</tr>
<tr>
    <td>Movie</td>
    <td>Name</td>
    <td>2021</td>
    <td>
        <img src="./images/IMG-20210902-WA0004.jpg" alt="Girl in a jacket" width="100" height="120">
    </td>
</tr>
<tr>
    <td>Movie</td>
    <td>Name</td>
    <td>2021</td>
    <td>
        <img src="./images/IMG-20210902-WA0004.jpg" alt="Girl in a jacket" width="100" height="120">
    </td>
</tr>
<tr>
    <td>Movie</td>
    <td>Name</td>
    <td>2021</td>
    <td>
        <img src="./images/IMG-20210902-WA0004.jpg" alt="Girl in a jacket" width="100" height="120">
    </td>
</tr>
<tr>
    <td>Movie</td>
    <td>Name</td>
    <td>2021</td>
    <td>
        <img src="./images/IMG-20210902-WA0004.jpg" alt="Girl in a jacket" width="100" height="120">
    </td>
</tr>
<tr>
    <td>Movie</td>
    <td>Name</td>
    <td>2021</td>
    <td>
        <img src="./images/IMG-20210902-WA0004.jpg" alt="Girl in a jacket" width="100" height="120">
    </td>
</tr>
</table>`;
}
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
    const url = `http://localhost:3000/api/medialist/movie-search?movieSearchKey=${document.searchForm.movieSearchKey.value}&movieSearchCategory=${document.searchForm.movieSearchCategory.value}`;
    fetch(url, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    }).then(async response => {
        const data = await response.json();
        
        if (data instanceof Array && data.length) {
            let renderHtml = `<table><tr><th>Type</th><th>Name</th><th>Year</th><th>Poster</th></tr>`
            data.forEach(el => {
                renderHtml += `<tr>
                <td>${el.type}</td>
                <td>${el.title}</td>
                <td>${el.year}</td>
                <td>
                    <img src="${el.poster}" alt="${el.title}" width="100" height="120">
                </td></tr>`;
            })

            renderHtml += `</table>`
            

            document.getElementById("movie-grid").innerHTML = renderHtml;

        } else {
            document.getElementById("movie-grid").innerHTML = "No Records Found!"
        }
        
        return (true);
    });

    const data = `
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

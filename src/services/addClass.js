

export const addclassapi = async (fclass, items ) => {
    let bool = false;
    const fac_id = JSON.parse(localStorage.getItem('fac_id'));

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'fac_id': fac_id},
        body: JSON.stringify({ classDetail: fclass, students: items })
    };
    console.log(fclass);
    console.log(items);


    await fetch('http://localhost:4000/facl/addclass', requestOptions)
        .then(response => response.text())
        .then(data => {
            if (data === "success") {
                bool = true;
            } else {
                alert(data);
                // console.log(data);
            }
        })
        .catch(function (err) {
            console.log(err);
        });
    return bool;

}
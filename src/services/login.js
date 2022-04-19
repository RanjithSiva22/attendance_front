

export const loginapi=async({email,password})=>{
    let bool=false;
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email, password: password })
    };
    // console.log(email);

    await fetch('http://localhost:4000/login', requestOptions)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            if(data.status==="success"){
                bool=true;
                localStorage.setItem('fac_id', JSON.stringify(data.fac_id));
            }else{
                alert(data);
                // console.log(data);
            }
        })
        .catch(function (err) {
            console.log(err);
        });
    return bool;

}
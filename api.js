(()=> {
const $fetch = document.getElementById("fetchUsuarios"),
$fragmento = document.createDocumentFragment();


fetch("https://jsonplaceholder.typicode.com/users")
  .then((res)=>{
    console.log(res)
    return res.ok?res.json():Promise.reject(res);
  })
  .then((data)=>{
    console.log(data)
    data.forEach(element => {
        const $li=document.createElement("li");
        $li.innerHTML=`${element.name}--${element.email}--${element.phone}`
        $fragmento.appendChild($li);
    });
    $fetch.appendChild($fragmento);
  })
  
  .catch(err=>{
    console.log("manipulando el error", err);
    let mensaje = err.statusText || "Ocurrio un error";
    $fetch.innerHTML=`Error ${err.status}:${mensaje}`;
  })
})();

(()=> {
const $fetchAsync = document.getElementById("fetchUsuarios-Async"),
  $fragmento = document.createDocumentFragment();

async function getData(){
  try{
    let res= await fetch ("https://jsonplaceholder.typicode.com/users"),
    data = await res.json();

    if(!res.ok){
      throw new Error("Error al solicitar datos");
    }
    data.forEach(element => {
      const $li=document.createElement("li");
      $li.innerHTML=`${element.name}--${element.email}--${element.phone}`
      $fragmento.appendChild($li);
    });
    $fetchAsync.appendChild($fragmento);

  }catch(err){
    let mensaje = err.statusText || "Ocurrio un error";
    $fetchAsync.innerHTML = `Error ${err.status}:${mensaje}`;

  }finally{
    console.log("Este codigo se ejecuta de igual manera, independientemente del try catch");
  
  }
}
getData();
})();

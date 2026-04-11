
async function addtodo(){
    const input = document.getElementById('input_txt')
    // console.log(input);
    await fetch('/todos',{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({title:input.value})
    })
    input.value = ""
    loadTodos()
}
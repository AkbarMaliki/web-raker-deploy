
# Web Raker

```
// READ
db.collection('tamu').onSnapshot(res=>{
    let tamu = res.docs.map(e=>e.data()) // list tamu
})

// CREATE
db.collection(`tamu`).doc().set({nama:'',jabatan:''},{merge:true}).then(res=>{
    console.log('berhasil')
}).catch(err=>{
    console.log(err.message)
})

// UPDATE // tambahkan id di doc nya
db.collection(`tamu`).doc(id).set({nama:'',jabatan:''},{merge:true}).then(res=>{
    console.log('berhasil')
}).catch(err=>{
    console.log(err.message)
})

// delete  // tambahkan id di doc dan method na delete
db.collection(`tamu`).doc(id).delete().then(res=>{
    console.log('berhasil')
}).catch(err=>{
    console.log(err.message)
})

```

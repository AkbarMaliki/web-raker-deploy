// ===================================================================
// importScripts('https://unpkg.com/axios@0.21.3/dist/axios.min.js'); // apabila axios dalam dev nya 
// importScripts('https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.0.0/crypto-js.min.js');
// taruh axios dan crypto js min di index root
// ===================================================================

// let urlnya = "https://officialapp.my.id/";
// let urlnya = "http://localhost/web_harp/";
// let urlnya = "http://110.238.111.216/ebkm/";
let urlnya = "https://test.draesthetic.id/";
class autophp {
  route="";
  url = urlnya+this.route;
  table = null;
  id = null;
  popmsg = true;
  primary=null;
  path="api/auto";
  qry="";

  constructor(framework='php',url=this.url,popmsg=true) {
      if(framework=='ci'){
        this.path="api/auto"
      }else if(framework=='php'){
        this.path="api/Auto.php"
      }
      this.url=url;
      this.popmsg=popmsg;
  }

  collection(table,popmsg=true) {
    this.popmsg=popmsg;
    this.table = table;
    return this;
  }

  doc(id = -100, primary = null) {
    this.id = id;
    this.primary = primary;
    return this;
  }

  async set(vdata,validation=0) {
    if (!this.table) {
      this.alert('Error Table');
      return;
    }
    let data = {
      ...vdata,
      t_a: this.table, // table
      i_a: this.id, // id
      p_a: this.primary, // primary key
      q_a: '', // query
      f_a: 'set' // function , set,delete,select,remove,cek_trash,restore,pagination
    }
    return await axios.post(this.url +this.path+''+`?validation=${validation}`, data, this.get_option()).then(res => {
      if(res.data.status===false){
        popupMsg('User Authentikasi telah berakhir! Silahkan login kembali', 'bg-red-600')
        window.location.replace(this.url);
        return;
      }
      if (this.popmsg) {
        popupMsg('Set data berhasil !', 'bg-green-600')
      }
    }).catch(err => {
      if (this.popmsg) {
        popupMsg('Error Proses Gagal!', 'bg-red-600')
      }
    })
  }

  async delete() {
    if (!this.table) {
      this.alert('Error Table');
      return ;
    }
    if(!this.id){
      this.alert('Error ID Tidak ada');
      return ;
    }
    let data = {
      t_a: this.table, // table
      i_a: this.id, // id
      p_a: this.primary, // primary key
      q_a: '', // query
      f_a: 'delete' // function , set,delete,select,remove,cek_trash,restore,pagination
    }
    return await axios.post(this.url +this.path+'', data, this.get_option()).then(res => {
      if(res.data.status===false){
        popupMsg('User Authentikasi telah berakhir! Silahkan login kembali', 'bg-red-600')
        window.location.replace(this.url);
        return;
      }
      if (this.popmsg) {
        popupMsg('Proses delete berhasil!', 'bg-red-600')
      }
      return res.data;
    }).catch(err => {
      if (this.popmsg) {
        popupMsg('Error Proses Gagal!', 'bg-red-600')
      }
    })
  }

  async query(query,array=[]) {
    if(array.length>0){
      array.forEach((e,i)=>{
        query = query.replace(/\?/, this.scramble(array[i]));
      })
    }
    if(!query){
      this.alert('Error query');
      return;
    }
    let data = {
      t_a: this.table, // table
      i_a: '', // id
      p_a: this.primary, // primary key
      q_a: query, // query
      f_a: 'select' // function , set,delete,select,remove,cek_trash,restore,pagination
    }
    return await axios.post(this.url +this.path+'', data, this.get_option()).then(res => {
      if(res.data.status===false){
        popupMsg('User Authentikasi telah berakhir! Silahkan login kembali', 'bg-red-600')
        window.location.replace(this.url);
        return;
      }
      return res.data;
    }).catch(err => {
      if (this.popmsg) {
        // popupMsg('Error Proses Select Gagal!', 'bg-red-600')
      }
    })
  }

  async select(query) {
    function _0x36f4(_0x4718cb,_0x57eba2){const _0xaf74f5=_0xaf74();return _0x36f4=function(_0x36f49f,_0x18d9d1){_0x36f49f=_0x36f49f-0xf8;let _0x2a58dd=_0xaf74f5[_0x36f49f];return _0x2a58dd;},_0x36f4(_0x4718cb,_0x57eba2);}function _0xaf74(){const _0x35c6f6=['table','post','bg-red-600','then','replace','1352688hXiQRW','416444zhLZSL','10LulKxj','Error\x20query','scramble','primary','16362036OIHqYo','761552HUgHBj','select','146fVwPLc','status','url','8xybIqc','32532clWlwU','User\x20Authentikasi\x20telah\x20berakhir!\x20Silahkan\x20login\x20kembali','alert','7296105CbnXen','102rBRyRY','get_option','data','619195yJeLLr','path'];_0xaf74=function(){return _0x35c6f6;};return _0xaf74();}const _0x13f690=_0x36f4;(function(_0x374f9f,_0x37a090){const _0x43c048=_0x36f4,_0x54034f=_0x374f9f();while(!![]){try{const _0x531066=parseInt(_0x43c048(0x107))/0x1+-parseInt(_0x43c048(0xfc))/0x2*(parseInt(_0x43c048(0x100))/0x3)+-parseInt(_0x43c048(0x10e))/0x4+-parseInt(_0x43c048(0x103))/0x5+-parseInt(_0x43c048(0x104))/0x6*(-parseInt(_0x43c048(0x10f))/0x7)+-parseInt(_0x43c048(0xff))/0x8*(-parseInt(_0x43c048(0xf9))/0x9)+parseInt(_0x43c048(0x110))/0xa*(parseInt(_0x43c048(0xfa))/0xb);if(_0x531066===_0x37a090)break;else _0x54034f['push'](_0x54034f['shift']());}catch(_0x428f0b){_0x54034f['push'](_0x54034f['shift']());}}}(_0xaf74,0xe2c16));if(!query){this[_0x13f690(0x102)](_0x13f690(0x111));return;}let data={'t_a':this[_0x13f690(0x109)],'i_a':'','p_a':this[_0x13f690(0xf8)],'q_a':this[_0x13f690(0x112)](query),'f_a':_0x13f690(0xfb)};return await axios[_0x13f690(0x10a)](this[_0x13f690(0xfe)]+this[_0x13f690(0x108)]+'',data,this[_0x13f690(0x105)]())[_0x13f690(0x10c)](_0x29b3f1=>{const _0x4ca3f4=_0x13f690;if(_0x29b3f1[_0x4ca3f4(0x106)][_0x4ca3f4(0xfd)]===![]){popupMsg(_0x4ca3f4(0x101),_0x4ca3f4(0x10b)),window['location'][_0x4ca3f4(0x10d)](this['url']);return;}return _0x29b3f1[_0x4ca3f4(0x106)];})['catch'](_0x556715=>{const _0x35bffa=_0x13f690;this['popmsg']&&popupMsg('Error\x20Proses\x20Select\x20Gagal!',_0x35bffa(0x10b));});
  }

  async get($get='') {
    let data = {
      t_a: this.table, // table
      i_a: '', // id
      p_a: this.primary, // primary key
      q_a: '', // query
      f_a: 'get' // function , set,delete,select,remove,cek_trash,restore,pagination
    }
    return await axios.post(this.url +this.path+''+`?get=${$get}`, data, this.get_option()).then(res => {
      if(res.data.status===false){
        popupMsg('User Authentikasi telah berakhir! Silahkan login kembali', 'bg-red-600')
        window.location.replace(this.url);
        return;
    }
      return res.data;
    }).catch(err => {
      if (this.popmsg) {
        // popupMsg('Error Proses Select Gagal!', 'bg-red-600')
      }
    })
  }

  async pagination(pagination,urlstring) {
    if(!pagination){
      this.alert('Error query');
      return;
    }
    let data = {
      t_a: this.table, // table
      i_a: '', // id
      p_a: this.primary, // primary key
      q_a: '', // query
      f_a: 'pagination' // function , set,delete,select,remove,cek_trash,restore,pagination
    }
    return await axios.post(this.url +this.path+`?query=${pagination}&other=pagination&${urlstring}`, data, this.get_option()).then(res => {
      if(res.data.status===false){
          popupMsg('User Authentikasi telah berakhir! Silahkan login kembali', 'bg-red-600')
          window.location.replace(this.url);
          return;
      }
      return res.data;
    }).catch(err => {
      if (this.popmsg) {
        // popupMsg('Error Proses Select Gagal!', 'bg-red-600')
      }
    })
  }

  async login(vdata) {
    if(!vdata.username){
      this.alert('Error username tidak ada');
      return;
    }
    if(!vdata.password){
      this.alert('Error password tidak ada');
      return;
    }
    let data = {
      ...vdata
    }
    return await axios.post(this.url + this.path+'?other=login', data).then(res => {
      if (this.popmsg) {
        // popupMsg('Login Berhasil!', 'bg-green-600')
      }
      localStorage.setItem('xrf-token', res.data.token);
      localStorage.setItem('users', this.scramble(JSON.stringify(res.data.users[0])));
      return res;
    }).catch(err => {
      if (this.popmsg) {
        popupMsg(err.response.data.message, 'bg-red-600')
      }
    })
  }

  async register(vdata,update=false) {
    let data = {
      ...vdata
    }
    return await axios.post(this.url + this.path+`?other=register${update?'&update=true':''}`, data, this.get_option()).then(res => {
      if (this.popmsg) {
        popupMsg('Proses Register Berhasil!', 'bg-green-600')
      }
      return true;
    }).catch(err => {
      if (this.popmsg) {
        popupMsg(err.response.data.message, 'bg-red-600')
      }
    })
  }

  async ceklogin() {
    return await axios.post(this.url + this.path+'?other=ceklogin', {}, this.get_option()).then(res => {
      // route ke mana 
      if (this.popmsg) {
        // popupMsg("Login Ter authentikasi", 'bg-green-600')
      }
      return res.data;
    }).catch(err => {
      // route ke mana
        popupMsg("Login Tidak authentikasi", 'bg-red-600')
        return false;
    })
  }

  async logout() {
    localStorage.removeItem('xrf-token');
    return await axios.post(this.url + this.path+'?other=logout', {}, this.get_option()).then(res => {
      if (this.popmsg) {
        popupMsg('Proses logout Berhasil!', 'bg-green-600')
      }
      return true;
    }).catch(err => {
      if (this.popmsg) {
        popupMsg('Error Proses logout gagal!', 'bg-red-600')
      }
    })
  }

  async current_user(store) {
    if(!localStorage.getItem('users')){
        popupMsg('Error User tidak ada!', 'bg-red-600')
        return ;
    }
    let id_user=JSON.parse(this.scramble(localStorage.getItem('users'))).id_user;
    return await axios.post(this.url + this.path+`?other=current_user&id_user=${id_user}`, {}, this.get_option()).then(res => {
      return res.data;
    }).catch(err => {
      if (this.popmsg) {
        popupMsg('Error User tidak ada!', 'bg-red-600')
      }
    })
  }

  async remove() {
    if (!this.table) {
      this.alert('Error Table');
      return ;
    }
    if(!this.id){
      this.alert('Error ID Tidak ada');
      return ;
    }
    let data = {
      t_a: this.table, // table
      i_a: this.id, // id
      p_a: this.primary, // primary key
      q_a: '', // query
      f_a: 'remove' // function , set,delete,select,remove,cek_trash,restore,pagination
    }
    return await axios.post(this.url +this.path+'', data, this.get_option()).then(res => {
      if (this.popmsg) {
        popupMsg('Remove data berhasil!', 'bg-red-600')
      }
      return res.data;
    }).catch(err => {
      if (this.popmsg) {
        popupMsg('Error Proses Gagal!', 'bg-red-600')
      }
    })
  }

  async cektrash() {
    if (!this.table) {
      this.alert('Error Table');
      return ;
    }
    if(!this.id){
      this.alert('Error ID Tidak ada');
      return ;
    }
    let data = {
      t_a: this.table, // table
      i_a: this.id, // id
      p_a: this.primary, // primary key
      q_a: '', // query
      f_a: 'cek_trash' // function , set,delete,select,remove,cek_trash,restore,pagination
    }
    return await axios.post(this.url +this.path+'', data, this.get_option()).then(res => {
      if (this.popmsg) {
        popupMsg('get berhasil!', 'bg-green-600')
      }
      return res.data;
    }).catch(err => {
      if (this.popmsg) {
        popupMsg('Error Proses Gagal!', 'bg-red-600')
      }
    })
  }

  async restore() {
    if (!this.table) {
      this.alert('Error Table');
      return ;
    }
    if(!this.id){
      this.alert('Error ID Tidak ada');
      return ;
    }
    let data = {
      t_a: this.table, // table
      i_a: this.id, // id
      p_a: this.primary, // primary key
      q_a: '', // query
      f_a: 'restore' // function , set,delete,select,remove,cek_trash,restore,pagination
    }
    return await axios.post(this.url +this.path+'', data, this.get_option()).then(res => {
      if (this.popmsg) {
        popupMsg('Proses Restore Berhasil!', 'bg-green-600')
      }
      return "proses restore berhasil!";
    }).catch(err => {
      if (this.popmsg) {
        popupMsg('Error Proses Gagal!', 'bg-red-600')
      }
    })
  }
  

  async upload(file, compres = false, scrambles = true) {
    let that = this;
    let el = file; // berikan id pada input file
    const options = {
      maxSizeMB: 1,
      maxWidthOrHeight: 1920,
      useWebWorker: true
    }
    try {
      let file = el.files[0];
      let fd = new FormData();
      // if(compres){
      //   await importScripts2('https://cdn.jsdelivr.net/npm/browser-image-compression@1.0.14/dist/browser-image-compression.min.js');
      //   const compressedFile = await imageCompression(file, options);
      //   fd.append("file", compressedFile);
      // }else{
      fd.append("file", file);
      fd.append('secret',scramble('hit'));
      // }
      return await axios.post(urlnya+'/assets/upload.php',fd).then(res=>{
        return res.data;
      })
    } catch (error) {
      if (this.popmsg) {
        popupMsg('Error Proses Gagal!', 'bg-red-600')
      }
    }
  }

  get_option() {
    return {
      'headers': localStorage.getItem('xrf-token') ? {
        'Authorization': 'bearer ' + localStorage.getItem('xrf-token')+'xyz' 
      }: false
    }
  }





  // =========================================== FUNCTIONAL
  alert(text, color = 'bg-red-600') {
    popupMsg(text, color);
  }
  async confirm(text, color = 'bg-red-600') {
    await new Promise((resolve, reject) => {
      confirmAdd(text, resolve);
    });
    confirmRemove();
    return jawabanconfirm;
  }
  loadingOn() {
    loadingScreenAdd();
  }
  loadingOff() {
    loadingScreenRemove();
  }
  scramble(datas) {
    let data = scramble(datas);
    return data
  }

}


// = = = = = = GLOBAL FUNCTION

function popupMsg(txt, color) {
  let div = document.createElement('div')
  div.setAttribute('id', 'popup-msg')
  div.setAttribute('style', 'position:fixed;top:30px;right:30px;z-index:1000000;')
  div.setAttribute('class', `rounded-lg shadow ${color} text-white animated fadeInDown p-3`);
  div.addEventListener('click', (e) => {
    console.log(e.target.remove())
  })
  div.innerHTML = txt;
  document.querySelector('body').appendChild(div);
  setTimeout(() => {
    document.querySelector('#popup-msg').classList.remove('fadeInDown');
    document.querySelector('#popup-msg').classList.add('fadeOutUp');
    setTimeout(() => {
      document.querySelector('#popup-msg').remove();
    }, 1000);
  }, 2000);
}

function loadingScreenAdd(txt, color) {
  let div = document.createElement('div')
  let div2 = document.createElement('div')
  div.setAttribute('id', 'loadingScreen')
  div.setAttribute('style', 'position:fixed;top:0;left:0;z-index:10000;height:100vh;width:100vw;background:rgb(0,0,0,0.5)')
  div.setAttribute('class', ` animated fadeIn d-flex justify-content-center align-items-center`);
  div2.setAttribute('id', 'loadingScreen2')
  div2.setAttribute('class', `text-xl text-white font-bold text-center italic lds-ripple`);
  div2.innerHTML = '<div class=""></div><br><br><br><p class="text-center"> Loading </p>';
  div.appendChild(div2);
  document.querySelector('body').appendChild(div);

}

function loadingScreenRemove() {
  document.querySelector('#loadingScreen').classList.remove('fadeIn');
  document.querySelector('#loadingScreen').classList.add('fadeOut');
  setTimeout(() => {
    document.querySelector('#loadingScreen').remove();
  }, 500);
}

function jikayes() {
  alert('woke')
}

function jikano() {
  alert('no')
}

async function confirmAdd(txt, resolve, color) {
  let div = document.createElement('div')
  let div2 = document.createElement('div')
  let divrow1 = document.createElement('div')
  let divrow2 = document.createElement('div')
  let divcol6p1 = document.createElement('div')
  let divcol4p1 = document.createElement('div')
  let divcol4p2 = document.createElement('div')
  let divcol4p3 = document.createElement('div')
  let buttonx = document.createElement('button')
  let buttonyes = document.createElement('button')
  let buttonno = document.createElement('button')
  let ptext = document.createElement('p')
  let garis = document.createElement('hr')
  div.setAttribute('id', 'confirmScreen')
  div.setAttribute('style', 'position:fixed;top:0;left:0;z-index:10000;height:100vh;width:100vw;background:rgb(0,0,0,0.5)')
  div.setAttribute('class', ` animated fadeIn d-flex justify-content-center align-items-center`);
  div2.setAttribute('id', 'confirmScreen2')
  div2.setAttribute('class', ``);
  divrow1.setAttribute('class', 'row justify-content-center')
  divrow1.setAttribute('style', 'width:100vw;')
  divrow2.setAttribute('class', 'row justify-content-between')
  divcol6p1.setAttribute('class', 'animate__animated animate__backInDown bg-white rounded-lg p-3 shadow col-10 col-sm-6')
  divcol6p1.setAttribute('style', 'min-height:35h;')
  divcol4p1.setAttribute('class', 'offset-2 col-4')
  divcol4p2.setAttribute('class', 'col-4')
  divcol4p3.setAttribute('class', 'col-2')
  buttonx.setAttribute('class', 'btn btn-sm btn-dark  float-right')
  buttonx.innerHTML = 'x'
  buttonyes.setAttribute('class', 'btn btn-sm btn-success  btn-block')
  buttonyes.innerHTML = '<span class="typcn typcn-tick"></span> Yes'
  buttonno.setAttribute('class', 'btn btn-sm btn-danger  btn-block')
  buttonno.innerHTML = '<span class="typcn typcn-cancel"></span> No'
  ptext.setAttribute('class', 'font-semibold text-xl')
  ptext.innerHTML = `${txt}`;
  divcol4p2.appendChild(buttonno);
  divcol4p1.appendChild(buttonyes);
  divrow2.appendChild(divcol4p1);
  divrow2.appendChild(divcol4p2);
  divrow2.appendChild(divcol4p3);
  divcol6p1.appendChild(buttonx);
  divcol6p1.appendChild(ptext);
  divcol6p1.appendChild(garis);
  divcol6p1.appendChild(divrow2);
  divrow1.appendChild(divcol6p1);
  div2.appendChild(divrow1)
  div.appendChild(div2);
  buttonx.addEventListener('click', function () {
    jawabanconfirm = false;
    resolve('no');
  })
  buttonyes.addEventListener('click', function () {
    jawabanconfirm = true;
    resolve('yes');
  })
  buttonno.addEventListener('click', function () {
    jawabanconfirm = false;
    resolve('no');
  })
  document.querySelector('body').appendChild(div);
}

function confirmRemove() {
  document.querySelector('#confirmScreen').classList.remove('fadeIn');
  document.querySelector('#confirmScreen').classList.add('fadeOut');
  setTimeout(() => {
    document.querySelector('#confirmScreen').remove();
  }, 1000);
}

function _0x299f(_0x4ca3ee,_0xb356e4){const _0x2f9edd=_0x2f9e();return _0x299f=function(_0x299f6f,_0x5d3e40){_0x299f6f=_0x299f6f-0x18d;let _0x56ac44=_0x2f9edd[_0x299f6f];return _0x56ac44;},_0x299f(_0x4ca3ee,_0xb356e4);}(function(_0x1c8774,_0xb06795){const _0x5e7ca8=_0x299f,_0x529e88=_0x1c8774();while(!![]){try{const _0x15b2d1=-parseInt(_0x5e7ca8(0x18d))/0x1*(-parseInt(_0x5e7ca8(0x197))/0x2)+parseInt(_0x5e7ca8(0x191))/0x3*(-parseInt(_0x5e7ca8(0x190))/0x4)+parseInt(_0x5e7ca8(0x195))/0x5+parseInt(_0x5e7ca8(0x18f))/0x6+parseInt(_0x5e7ca8(0x194))/0x7+-parseInt(_0x5e7ca8(0x196))/0x8+-parseInt(_0x5e7ca8(0x193))/0x9;if(_0x15b2d1===_0xb06795)break;else _0x529e88['push'](_0x529e88['shift']());}catch(_0x53ea72){_0x529e88['push'](_0x529e88['shift']());}}}(_0x2f9e,0x32dd7));function _0x2f9e(){const _0x592d3d=['2202474EwbAxz','1403588TjXAWO','3ykbcQQ','length','780948jpENbJ','2865737UQwlae','232510vLhTJQ','3264704ZrREVd','2768TmRWdf','167XLevVH','replace'];_0x2f9e=function(){return _0x592d3d;};return _0x2f9e();}function scramble(_0xea06b6){const _0x4eb37b=_0x299f;let _0x7d1130='',_0x5491bb='';for(var _0x5d98e7=0x0;_0x5d98e7<_0xea06b6[_0x4eb37b(0x192)];_0x5d98e7++){_0x7d1130='',_0x7d1130=_0xea06b6['charAt'](_0x5d98e7);if(_0x7d1130=='a')_0x7d1130=_0x7d1130['replace']('a','x');else{if(_0x7d1130=='b')_0x7d1130=_0x7d1130[_0x4eb37b(0x18e)]('b','v');else{if(_0x7d1130=='c')_0x7d1130=_0x7d1130['replace']('c','u');else{if(_0x7d1130=='d')_0x7d1130=_0x7d1130[_0x4eb37b(0x18e)]('d','w');else{if(_0x7d1130=='e')_0x7d1130=_0x7d1130[_0x4eb37b(0x18e)]('e','y');else{if(_0x7d1130=='f')_0x7d1130=_0x7d1130[_0x4eb37b(0x18e)]('f','z');else{if(_0x7d1130=='g')_0x7d1130=_0x7d1130[_0x4eb37b(0x18e)]('g','t');else{if(_0x7d1130=='h')_0x7d1130=_0x7d1130[_0x4eb37b(0x18e)]('h','s');else{if(_0x7d1130=='i')_0x7d1130=_0x7d1130[_0x4eb37b(0x18e)]('i','r');else{if(_0x7d1130=='j')_0x7d1130=_0x7d1130['replace']('j','q');else{if(_0x7d1130=='k')_0x7d1130=_0x7d1130[_0x4eb37b(0x18e)]('k','p');else{if(_0x7d1130=='l')_0x7d1130=_0x7d1130[_0x4eb37b(0x18e)]('l','o');else{if(_0x7d1130=='m')_0x7d1130=_0x7d1130[_0x4eb37b(0x18e)]('m','n');else{if(_0x7d1130=='z')_0x7d1130=_0x7d1130[_0x4eb37b(0x18e)]('z','f');else{if(_0x7d1130=='y')_0x7d1130=_0x7d1130[_0x4eb37b(0x18e)]('y','e');else{if(_0x7d1130=='x')_0x7d1130=_0x7d1130[_0x4eb37b(0x18e)]('x','a');else{if(_0x7d1130=='w')_0x7d1130=_0x7d1130[_0x4eb37b(0x18e)]('w','d');else{if(_0x7d1130=='v')_0x7d1130=_0x7d1130[_0x4eb37b(0x18e)]('v','b');else{if(_0x7d1130=='u')_0x7d1130=_0x7d1130['replace']('u','c');else{if(_0x7d1130=='t')_0x7d1130=_0x7d1130[_0x4eb37b(0x18e)]('t','g');else{if(_0x7d1130=='s')_0x7d1130=_0x7d1130[_0x4eb37b(0x18e)]('s','h');else{if(_0x7d1130=='r')_0x7d1130=_0x7d1130['replace']('r','i');else{if(_0x7d1130=='q')_0x7d1130=_0x7d1130[_0x4eb37b(0x18e)]('q','j');else{if(_0x7d1130=='p')_0x7d1130=_0x7d1130[_0x4eb37b(0x18e)]('p','k');else{if(_0x7d1130=='o')_0x7d1130=_0x7d1130[_0x4eb37b(0x18e)]('o','l');else{if(_0x7d1130=='n')_0x7d1130=_0x7d1130[_0x4eb37b(0x18e)]('n','m');else{if(_0x7d1130=='1')_0x7d1130=_0x7d1130['replace']('1','0');else{if(_0x7d1130=='2')_0x7d1130=_0x7d1130['replace']('2','8');else{if(_0x7d1130=='3')_0x7d1130=_0x7d1130[_0x4eb37b(0x18e)]('3','9');else{if(_0x7d1130=='4')_0x7d1130=_0x7d1130[_0x4eb37b(0x18e)]('4','7');else{if(_0x7d1130=='5')_0x7d1130=_0x7d1130['replace']('5','6');else{if(_0x7d1130=='0')_0x7d1130=_0x7d1130[_0x4eb37b(0x18e)]('0','1');else{if(_0x7d1130=='8')_0x7d1130=_0x7d1130[_0x4eb37b(0x18e)]('8','2');else{if(_0x7d1130=='9')_0x7d1130=_0x7d1130[_0x4eb37b(0x18e)]('9','3');else{if(_0x7d1130=='7')_0x7d1130=_0x7d1130['replace']('7','4');else{if(_0x7d1130=='6')_0x7d1130=_0x7d1130[_0x4eb37b(0x18e)]('6','5');else{if(_0x7d1130=='\x20')_0x7d1130=_0x7d1130[_0x4eb37b(0x18e)]('\x20','_');else{if(_0x7d1130=='_')_0x7d1130=_0x7d1130[_0x4eb37b(0x18e)]('_','\x20');else{if(_0x7d1130=='*')_0x7d1130=_0x7d1130['replace']('*','/');else{if(_0x7d1130=='/')_0x7d1130=_0x7d1130['replace']('/','*');else{if(_0x7d1130==',')_0x7d1130=_0x7d1130[_0x4eb37b(0x18e)](',','^');else _0x7d1130=='^'&&(_0x7d1130=_0x7d1130['replace']('^',','));}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}_0x5491bb=_0x5491bb+_0x7d1130;}return _0x5491bb;}

function importScripts(scripts) {
  var script = document.createElement('script');
  script.src = scripts;
  document.body.appendChild(script);
}

async function importScripts2(scripts) {
  return new Promise((resolve, reject) => {
    var script = document.createElement('script');
    script.src = scripts;
    document.body.appendChild(script);
    setTimeout(() => {
      resolve();
    }, 1000);
  });

}

let style = document.createElement('style')
style.innerHTML = `
.lds-ripple {
display: inline-block;
position: relative;
width: 80px;
height: 80px;
}
.lds-ripple div {
position: absolute;
border: 4px solid #fff;
opacity: 1;
border-radius: 50%;
animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
}
.lds-ripple div:nth-child(2) {
animation-delay: -0.5s;
}
@keyframes lds-ripple {
0% {
  top: 36px;
  left: 36px;
  width: 0;
  height: 0;
  opacity: 1;
}
100% {
  top: 0px;
  left: 0px;
  width: 72px;
  height: 72px;
  opacity: 0;
}
}
`;
document.head.appendChild(style);

export default autophp
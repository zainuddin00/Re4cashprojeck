import { useState } from "react";
import "./style.css"
function App() {
  const [buka, setBuka]= useState(false)
    return (
   <>
 <div>
<button onClick={()=>setBuka(true)}>Buka</button>
{buka &&<div className="container">
<div className="formlogin">
  <div className="logincontainer">
    <div className="logincontent">
      <h3>Daftar Akun Re4Cash</h3>
      <input placeholder="Nama Lengkap"/>
      <input placeholder="Email"/>
      <input placeholder="Password"/>
      <input placeholder="Confirm Password"/>
      <p>Dengan mendaftar menjadi pengelola, Anda bertanggung jawab atas akun tersebut sesuai dengan <span>Ketentuan</span> & <span>Kebijakan Privasi.</span></p>
      <div className="gariscontent">
              <div className="garis"/>
              <p>atau masuk dengan</p>
              <div className="garis"/>
            </div>
            <div className="logingf">
              <button><iconify-icon icon="logos:google-icon"></iconify-icon>Login Google</button>
              <button><iconify-icon icon="logos:facebook"></iconify-icon>Login Facebook</button>
            </div>
            <h6>Sudah punya akun? <span>Masuk</span></h6>
    </div>
  </div>
</div>
</div>}
 </div>
   </>
  );
}

export default App;

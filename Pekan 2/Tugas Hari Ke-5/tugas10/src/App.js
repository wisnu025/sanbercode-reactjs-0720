import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <form className="formname">
        <center>
          <h1>Form Pembelian Buah</h1>
          <table>
            <tr>
              <td><b>Nama Pelanggan</b></td>
              <td><input  type="text" id="nama1" name="nama"></input></td>
            </tr>
            <tr>
              <td><b>Daftar Item</b> </td>
              <td>
              <input type="checkbox"  value="Semangka" id="" name=""></input> <label for="Semangka">semanggka</label><br></br>
              <input type="checkbox"  value="Jeruk" id="" name=""></input> <label for="Jeruk">jeruk</label><br></br>
              <input type="checkbox"  value="Nanas" id="" name=""></input> <label for="Nanas">nanas</label><br></br>
              <input type="checkbox"  value="Salak" id="" name=""></input> <label for="Salak">salak</label><br></br>
              <input type="checkbox"  value="Anggur" id="" name=""></input> <label for="Anggur">anggur</label>
              </td>
            </tr>
            <tr>
              <td><input  className="button1" type="submit" id="submit1" name="submit2"></input></td>
            </tr>
          </table>
        </center>
      </form>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

      
    </div>
  );
}

export default App;

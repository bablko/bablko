import React from 'react';

import './App.css';


function App() {

  let [open, setOpen] = React.useState(false);
  let [wrong, setWrong] = React.useState(false);
  let [kod, setKod] = React.useState('')

  console.log(";)")

  const checkCode = () => {
    if (kod.length !== 6){
      setOpen(false);
      setWrong(true);
      return;
    }

    for (var i = 0; i < kod.length; i++) {
      if (kod[i] < '0' || kod[i] > '9'){
        setOpen(false);
        setWrong(true);
        return;  
      }
    }
    setOpen(true);
    setWrong(false);
  }

  const updateKod = (event) => {
    setKod(event.target.value);
  }




  return (
    <div className="main-container">
      <div className="input-box-out">
        <div className="logo">
          Jabłka i gruszki
        </div>
        <div className="stripe">
          {!open && <div className="input-box">
          <div className="question" >Podaj 6 cyfrowy kod</div>
            
          <input type="text" value={kod} onChange={updateKod} />
          <div className="question" onClick={checkCode}>Dalej</div>
            {wrong && <div className="question" onClick={checkCode}>Błędny kod</div>}
          </div>}
          {open && <div className="input-box">
              <img src="https://i.pinimg.com/564x/65/b7/0b/65b70bd75ff88d9e7be5c9634f51e95a.jpg" label="49 3425 8527995" alt="jelenie i reszta" />
          
          </div>}

        </div>
      </div>
    </div>
  );
}

export default App;

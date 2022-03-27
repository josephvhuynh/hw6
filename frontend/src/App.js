import React, { useRef, useEffect, useState } from "react";
import TextField from '@mui/material/TextField';

export default function MyComponent() {
    const [toggleButton, setButton] = useState("User Not Found");
    const [value, setValue] = useState("");
    const prevCount = usePrevious(value);

  function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  },[value]); 
  return ref.current; 
}

    return(
        <div>
            <p>Your Input Request to Server</p>
            <TextField
                onChange={(e) => {
                        {
                          setValue(e.target.value); 
                          console.log(value)
                        }
                        fetch("/toggle_button/" + value + "_" + prevCount)
                        .then(response => 
                            response.json()
                        )
                        .then(data => {
                            setButton(data.button)
                            console.log(toggleButton)
                        }) 
                        .catch(error => {
                            console.log(error)
                        })
                }}
            >
                {toggleButton}
            </TextField>
            <p>Response from server</p>
            <TextField
               value={toggleButton}
            />
        </div>
    );
}

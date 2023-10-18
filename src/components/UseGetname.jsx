import { useState, useEffect } from "react";

export default function useGetname() {

    const [name, setname] = useState(localStorage.getItem('nameData'))

    useEffect(() => {
        // Retrieve the username from local storage
        const storedUsername = localStorage.getItem('nameData');
        if (storedUsername) {
          setname(storedUsername);   
        }
      }, []);

    return { name }
}



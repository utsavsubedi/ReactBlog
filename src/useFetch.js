import {useState, useEffect} from 'react';

const useFetch = (url) => {
   const [data, setData] = useState(null);
   const [isPending, setIsPending] = useState(true);
   const [error, setError] = useState(null);

   useEffect(() => {
       setTimeout(() => {
            fetch(url)
            .then(res => {
                if(!res.ok){
                    throw Error("couldnot fetch data from the server.");
                }
                return res.json();
            })
            .then( data => {
                setData(data);
                console.log(data);
                console.log(url);
                setIsPending(false);
                setError(null);
            })
            .catch(error => {
                setError(error.message);
                console.log(error);
                setIsPending(false);
            })
            ;
            
           }
       ,1000)
   }, [url] );

   return {data, isPending, error}
};

export default useFetch;


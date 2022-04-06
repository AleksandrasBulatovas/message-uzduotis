import React, { useContext, useState } from "react";

const AppContext = React.createContext()

const AppProvider = ({children}) =>{

    const [messages, setMessages]= useState([
        {
            title: 'Classic Cars',
            msg: 'A classic car is an older car, typically 25 years or older, though definitions vary. The common theme is of an older car of historical interest to be collectible and tend to be restored rather than scrapped.',
            photo: 'https://www.detailxperts.net/wp-content/uploads/2018/03/Classic-cars.png'
        }
    ]);

    const addMessage = (data) =>{
        setMessages((prevData)=>{
            return [data, ...prevData]
        })
    }

    const [open, setOpen] = useState(false)

        const openForm = ()=>{
            if(open){
                setOpen(false)
            }else{
                setOpen(true)
            }
        }

        const [counter, setCounter] = useState(0)
        const likeButton = ()=>{
            setCounter(count => count + 1)
        }


    return(
        <AppContext.Provider value={{
            messages,
            addMessage,
            open,
            openForm,
            counter,
            likeButton

        }}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = ()=>{
    return useContext(AppContext)
}

export {AppContext, AppProvider}
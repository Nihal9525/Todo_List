import React from 'react'

function Footer() {
    let myStyle= {
        position:"absolute",
        width:"100%"
    }
  
    return (

        <footer className='bg-dark text-light ' style={myStyle}>
            <p className="text-center py-2" >
                Copyright &copy; Todoslist.com
            </p>
        </footer>
    )
}

export default Footer

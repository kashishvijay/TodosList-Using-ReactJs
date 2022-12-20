import React from 'react'

export const Footer = () => {
    let footerStyleCss = {
      position :"relative",
      top:"70vh",
      width:"100%"
    }
  return (
    <footer  className =" bg-dark text-light py-3" style={footerStyleCss}>
      <p className="text-center">
        Copyright &copy; MyTodolist.com
      </p>
    </footer>
  )
}

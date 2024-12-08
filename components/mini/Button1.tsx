import React from 'react'

type  bt={
    text:string,
}


const Button1:React.FC<bt> = ({text}) => {
  return (
    <div className={`bg-button1 `}

    >

        {text}
    </div>
  )
}

export default Button1;
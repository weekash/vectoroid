import React from 'react'

export default function ListItem({item={}}) {
    let score = Math.floor(item.score * 100)
    let extra = score > 80 ? 'good' : (score > 70 ? 'average' :'bad')
  return (
   <div className="list-item">
        <div className='info'>
            <a target='_blank'>{item.url}</a>
            <p>{item.content}</p>
        </div>
        <div className={"score" +" " +extra}>
                {score}
        </div>
   </div>
  )
}

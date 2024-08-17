import react from 'react'

export default function Images(props){

    let ss = props.ss
    return(
        <>
        <div className="px-2 mb-8 flex flex-column justify-center bg-gradient-to-r from-customRed to-customBrown rounded-2xl mx-4">
  <div className="w-full"> 
    <img src={ss} className="w-full my-4" alt="Image description" />
  </div>
</div>

        </>
    )
}
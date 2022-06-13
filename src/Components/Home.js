import React from 'react';

const Home = (props) => {
  return (
    <div>

      <div className='p-2 m-2'>
{/* 
        {props.arrData.map((index, data) => {
          return (  */}
            <div className='d-flex row border border-gray rounded'>
              <div className='col-lg-1 pt-2'>
                <h4>{props.ser+1}</h4>
              </div>
              {/* <div className='col-lg-2 p-2'>
                <img className='w-100 rounded p-2' src='https://us.123rf.com/450wm/fizkes/fizkes2010/fizkes201001384/157765614-profile-picture-of-smiling-indian-female-isolated-on-grey-studio-background-show-optimism-and-positi.jpg?ver=6' alt='studentImage' />
              </div> */}
              <div className='col-lg-3 p-3'>
                <p>USN:-  {props.usn}</p>
                <p>Date: {props.date}</p>
              </div>
              <div className='col-lg-3 p-3'>
                <p>Enter at: {props.date} </p>
                <p>Attended</p>
              </div>

              <div className='col-lg-3 p-3'>
                <button className='btn btn-secondary rounded'>Details</button>
              </div>
            </div>

          {/* );
        })} */}
      </div>
    </div>

  )
}

export default Home;
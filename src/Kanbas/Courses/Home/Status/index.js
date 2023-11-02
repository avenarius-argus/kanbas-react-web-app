import { FaFileImport } from 'react-icons/fa';
import { FaUpload } from 'react-icons/fa';
import { FaCrosshairs } from 'react-icons/fa';
import { FaChartBar } from 'react-icons/fa';
import { FaBullhorn } from 'react-icons/fa';
import { FaChartLine } from 'react-icons/fa';
import { FaBell } from 'react-icons/fa';
import { FaBan } from 'react-icons/fa';
import { FaCheckCircle } from 'react-icons/fa';
import { FaCircle } from 'react-icons/fa';

const Status = () => {

    const options = [
        [<FaFileImport />, 'Import Existing Content'],
        [<FaUpload />, 'Import From Commons'],
        [<FaCrosshairs />, 'Choose Home Page'],
        [<FaChartBar />, 'View Course Stream'],
        [<FaBullhorn />, 'New Announcement'],
        [<FaChartLine />, 'New Analytics'],
        [<FaBell />, 'View Course Notifications'],
    ]



    return (
        <>
            <div className='row mb-2' style={{width:"250px"}}>
                <span>
                    <button type='button' className='btn btn-outline-secondary btn-sm me-2'>
                            <FaBan />Unpublish
                    </button>
                    <button type='button' className='btn btn-success btn-sm'>
                            <FaCheckCircle />Published
                    </button>
                </span>
            </div>

            <div className='list-group mb-3'>
            {options.map((option, index) => (
                    <button type='button' className='btn btn-outline-secondary btn-sm me-2'key={index}>
                    {option[0]} 
                    {option[1]} 
                    </button>
            ))}
            </div>

            <div className='row mb-2' >
                <h5 className='p-0'>Todo</h5>
                <hr />
            </div>
            <div>
                 <h5 class="red"> <FaCircle/>  Grade A1</h5>
                 100 points. Sep 18 at 11:59pm
            </div>

        </>
    );
}

export default Status;

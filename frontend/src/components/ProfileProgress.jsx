
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

export default function ProfileProgress({value}) {
  const percentage =(value/2)*100 ;

  return (
    <div style={{ position: 'relative', width: '130px', height: '130px', marginBottom:'3dvh', margin:"auto"}}>
      <CircularProgressbar
        value={percentage}
        styles={buildStyles({
          pathColor: '#312651',
          trailColor: '#d6d6d6',
        })}
      />
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '40px', 
          height: '40px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <FontAwesomeIcon icon={faUser} style={{ color: '#5A5E5F', fontSize: '40px' }} />
      </div>
    </div>
  );
}

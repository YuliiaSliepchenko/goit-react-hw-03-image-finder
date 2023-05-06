import { Dna } from  'react-loader-spinner'
import s from './Loader.module.css'

export default function Loader() {
    return (
        <div className={s.Loader}>
            <Dna
                visible={true}
                height="80"
                width="80"
                ariaLabel="dna-loading"
                wrapperStyle={{}}
                wrapperClass="dna-wrapper"
            />
        </div>
        
    );
};
